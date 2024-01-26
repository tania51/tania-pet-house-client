import { useLoaderData } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

// for adoption button
import React from "react";
import {
    Dialog,
    CardFooter,
    Input,
} from "@material-tailwind/react";
import Container from "../../../components/Shared/Container/Container";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SinglePet from "../../PetListing/SinglePet";
import Swal from "sweetalert2";
import useAllPet from "../../../hooks/useAllPet";
import Title from "../../../components/Shared/Title/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Stripe/CheckoutForm";



const DonationDetails = () => {

    const petDetail = useLoaderData();
    const { register, handleSubmit } = useForm()
    const { _id, image, name, category, maximum_donation_amount, donated_amount } = petDetail;
    // console.log(petDetail.image);
    const axiosPublic = useAxiosPublic();
    const [allPet, refetch] = useAllPet();
    const filterdPet = allPet.filter(aPet => aPet._id !== _id)

    // logged in users info
    const { user } = useAuth();
    const { email, displayName } = user;

    const onSubmit = (data) => {

        // console.log(data)
        if(user && user.email) {
            const number = data.number;
            const address = data.address;

            const adoptedUserInfo = {
                pet_id: _id,
                email: email,
                name: displayName,
                phn_Number: number,
                address: address
            }
            axiosPublic.post('http://localhost:5008/adoptedPet', adoptedUserInfo)
            .then(res => {
                console.log(res.data);
            })
        }
        else {
            console.log('some');
        }



    }

    refetch();

    // for adoption button
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);



    // stripe payment
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_KEY);


    return (
        <div className="mb-20">
            <div className="py-0 lg:py-20 lg:px-20">
            <Container>
                <Card className="w-full flex-row">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-2/5 shrink-0 rounded-r-none"
                    >
                        <img
                            src={image}
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody className="w-full border-b-[3px] border-b-amber-700 rounded-r-lg">
                        <Typography variant="h6" color="gray" className="mb-4 uppercase">
                            Category: {category}
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Name: {name}
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal space-y-2">
                            <p>Maximum Donation Amount: {maximum_donation_amount}</p>
                            <p>Donated Amount: {donated_amount}</p>
                        </Typography>


                        {/* addoption details with modal start */}
                        {
                            !user && Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!"
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                  });
                                }
                              })
                        }
                        <span className="inline-block">
                            <Button onClick={handleOpen} variant="text" className="flex items-center gap-2">
                                Donate Now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </span>

                        {/* <Button onClick={handleOpen}>Sign In</Button> */}
                        <Dialog
                            size="xs"
                            open={open}
                            handler={handleOpen}
                            className="bg-transparent shadow-none"
                        >
                            {/* stripe setUp */}
                            <Elements stripe={stripePromise}>
                                <CheckoutForm petDetail={petDetail}></CheckoutForm>
                            </Elements>
                            
                        </Dialog>

                        {/* addoption details with modal end */}



                    </CardBody>
                </Card>

                
            </Container>
        </div>
        <Container>
            {/* for adoption more pet */}
            <div className="lg:-mt-14">
            <Title heading="3 More Active Donation Campaign!!"></Title>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-10">
                {
                    filterdPet && filterdPet.slice(0, 3).map(aPet => <SinglePet key={aPet._id} aPet={aPet}></SinglePet>)
                }
            </div>
        </Container>
        </div>
    );
};

export default DonationDetails;







// dialog form
{/* <form onSubmit={handleSubmit(onSubmit)}>
                                <Card className="mx-auto w-full max-w-[24rem]">
                                    <CardBody className="flex flex-col gap-4">
                                        <Typography variant="h4" color="blue-gray">
                                            {`Make ${name} Happy!!`}
                                        </Typography>


                                        {/* users Phone Number */}
                            //             <Typography className="-mb-2" variant="h6">
                            //                 Donation Amount
                            //             </Typography>
                            //             <Input   {...register("donationAmount")} label="Enter Doantion Amount" size="lg" />

                            //             {/* users name */}
                            //             <Typography className="-mb-2" variant="h6">
                            //                 Your Address
                            //             </Typography>
                            //             <Input  {...register("address")} label="Address" size="lg" />

                            //         </CardBody>
                            //         <CardFooter className="pt-0">
                            //             {/* <Button variant="gradient" onClick={handleOpen} fullWidth>
                                        
                            //             Submit
                            //         </Button> */}
                            //             <input type="submit" value="Donate" className="font-medium bg-amber-800 w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />
                            //         </CardFooter>
                            //     </Card>
                            // </form> 