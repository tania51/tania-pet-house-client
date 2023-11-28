import { Avatar, Card, Spinner, Typography } from "@material-tailwind/react";
import Title from "../../../components/Shared/Title/Title";
import { HiReceiptRefund } from "react-icons/hi";

import useDonationCampaigns from "../../../hooks/useDonationCampaigns";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";


const MyDonations = () => {
    const [donationCampaigns, , isLoading] = useDonationCampaigns()
    console.log(donationCampaigns);
    const [campaignDonation, setCampaignDonation] = useState(donationCampaigns)
    console.log(campaignDonation);
    const axiosPublic = useAxiosPublic();
    if(isLoading) {
        return <div  className="w-full h-[70vh] flex items-center justify-center">
            <Spinner className="w-10 h-10" color="teal" />
        </div>
        
    }

    // const { total_donation_amount, new_donated_amount } = donationCampaigns;

    // if (total && newDonation) {
    //     const refund = total - newDonation
    //     console.log(refund);
    // }

    const handleRefund = async (id) => {
        // console.log(id);
        const single = donationCampaigns.find(aDonation => aDonation._id === id)
        console.log(single);
        const total = parseInt(single.total_donation_amount);
        const newDonation = parseInt(single.new_donated_amount);
        console.log(total, newDonation);
        const refund = total - newDonation
        console.log('refund', refund);

        await axiosPublic.post('/my-donation', { price: refund, pet_obj_id: single.pet_obj_id })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    const newDonationCampaigns = donationCampaigns.filter(aCampaign => aCampaign._id !== id)
                    console.log(newDonationCampaigns);
                    setCampaignDonation(newDonationCampaigns)
                }
            })

            // const {date, email, maximum_donation_amount, name, new_donated_amount, pet_name, pet_obj_id, total_donation_amount, trasaction_id, _id } = campaignDonation

            // const campInfo = {
            //     date: date,
            //     email: email,
            //     maximum_donation_amount: maximum_donation_amount,
            //     name: name,
            //     new_donated_amount: new_donated_amount,
            //     pet_name: pet_name,
            //     pet_obj_id: pet_obj_id,
            //     total_donation_amount: total_donation_amount,
            //     trasaction_id: trasaction_id,
            //     donate_id: _id
            // }


        // await axiosPublic.post('/my-donation2', campInfo)
        //     .then(res => {
        //         console.log(res.data);

        //     })
    }


    console.log(campaignDonation);

    return (
        <div className="-mt-8">
            <Title heading="My Donations"></Title>

            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {/* pet image */}
                            <th
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    Pet Image
                                </Typography>
                            </th>

                            {/* pet name */}
                            <th
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    Pet Name
                                </Typography>
                            </th>

                            {/* donated amount */}
                            <th
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    Donated Amount
                                </Typography>
                            </th>

                            {/* refund button */}
                            <th
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    Refund
                                </Typography>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaignDonation && campaignDonation.map(({ _id, image, pet_name, new_donated_amount }, index) => {
                            const isLast = index === campaignDonation.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={_id}>

                                    {/* pet image */}
                                    <td className={classes}>
                                        <Avatar src={image} alt={pet_name} size="md" />
                                    </td>

                                    {/* pet name */}
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {pet_name}
                                        </Typography>
                                    </td>

                                    {/* donated amount */}
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {new_donated_amount}
                                        </Typography>
                                    </td>

                                    {/* refund btn */}
                                    <td className={classes}>
                                        <Typography onClick={() => handleRefund(_id)}
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium"
                                        >
                                            <HiReceiptRefund className="text-2xl text-teal-700" />
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

export default MyDonations;