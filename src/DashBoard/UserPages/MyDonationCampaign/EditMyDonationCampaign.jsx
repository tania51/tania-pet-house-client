import { useLoaderData } from "react-router-dom";
import Title from "../../../components/Shared/Title/Title";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";



const EditMyDonationCampaign = () => {
    const singleDonationCampaign = useLoaderData();
    console.log(singleDonationCampaign);
    const {pet_name, maximum_donation_amount, total_donation_amount} = singleDonationCampaign;

    return (
        <div className="-mt-20">
            <Title heading="Edit My Donation Campaign"></Title>

            {/* edit form */}
            <div>
                <Card color="transparent" shadow={false}>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Name
                            </Typography>
                            <Input
                                size="lg"
                                defaultValue={pet_name}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Maximum Donation Amount
                            </Typography>
                            <Input
                                type="number"
                                size="lg"
                                defaultValue={maximum_donation_amount}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Total Donation Amount
                            </Typography>
                            <Input
                                type="number"
                                defaultValue={total_donation_amount}
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <Button className="mt-6 bg-amber-700 text-white" fullWidth>
                            Edit
                        </Button>
                    </form>
                </Card>
            </div>


        </div>
    );
};

export default EditMyDonationCampaign;