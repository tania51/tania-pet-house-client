import { Input } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useAllPet from "../../../hooks/useAllPet";


const CheckoutForm = ({ petDetail }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [newAmount, setAmount] = useState(0)
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [doantionError, setDonationError] = useState('')
    const [, refetch] = useAllPet();
    // console.log('transaction id: ', transactionId);
    const amount = parseInt(newAmount)
    console.log('amount', amount);

    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { _id, pet_id, name, donated_amount, maximum_donation_amount } = petDetail;
    // console.log(petDetail);

    useEffect(() => {
        if (amount > 0) {
            axiosPublic.post('/create-payment-intent', { price: amount })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [amount, axiosPublic])

    // 150 > 100+40 = 140

    const handleSubmit = async (event) => {

        event.preventDefault();
        // setDonationError('')
        
        const donationAmount = event.target.donationAmount.value;
        const totalDonationAmount = parseInt(donated_amount) + parseInt(donationAmount);
        const newDonationAmount = maximum_donation_amount - donated_amount;
        console.log(newDonationAmount);
        if (maximum_donation_amount >= totalDonationAmount) {

            console.log('totalDonationAmount: ', totalDonationAmount);
            // setAmount(totalDonationAmount)
        }
        else {
            return setDonationError(`Donation Amount is Already Equal or Higher to Maximum Donation Amount. Please Donate between 1 to ${newDonationAmount}`)
        }


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        if(doantionError) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message)
            setSuccess('')
        }
        else {
            if (doantionError) {
                return;
            }
            else {
                console.log('payment method', paymentMethod);
                setSuccess('Congratualations!! You are successfully donated.')
                setError('')
            }

        }
        // confirm card payment
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmationError) {
            console.log('confirm error');
            // setTransactionId('')
        }
        else {
            console.log('payment Intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log(paymentIntent.id);
                const transactionPaymentId = paymentIntent.id
                setTransactionId(transactionPaymentId);

                // save payment information to db
                console.log('new transaction', transactionPaymentId);
                const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    pet_name: name,
                    maximum_donation_amount: maximum_donation_amount,
                    total_donation_amount: totalDonationAmount,
                    trasaction_id: transactionPaymentId,
                    new_donated_amount: donationAmount,
                    date: new Date(),
                    pet_obj_id: _id,
                    pet_id: pet_id,
                }
                console.log(payment);

                const res = axiosPublic.post('/payments', payment)
                console.log('payment result data: ', res.data);
                refetch()

            }
        }

    }



    return (
        <div>
            <form className="bg-white px-6 py-20 rounded" onSubmit={handleSubmit}>
                {/* phon number input field */}

                <div className="mb-4">
                    <label>Amount</label>
                    <Input
                        onChange={(e) => setAmount(e.target.value)}
                        type="tel"
                        name="donationAmount"
                        placeholder="Donation Amount"
                        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                </div>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-amber-700 px-3 py-1 mt-7 text-blue-gray-900 rounded" type="submit" disabled={!stripe}>
                    Donate
                </button>
                <div className="mt-4">
                    <p className="text-red-700">{error}</p>
                    <p className="text-red-700">{doantionError}</p>
                    {
                        transactionId &&
                        <>
                            <p className="text-green-900">{success}</p>
                            <p className="text-green-900 mt-1">Your Transaction Id is: {transactionId}</p>
                        </>
                    }
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;