
import { useForm } from "react-hook-form";
import Title from "../../../components/Shared/Title/Title";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";


const CreateDonationCampaign = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
       

        reset();
    }

    return (
        <div className="-mt-20">
            <Title heading="Create Donation Campaign"></Title>

            {/* edit form */}
            <div>
                <Card color="transparent" shadow={false}>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">

                            {/* pet name */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Name
                            </Typography>
                            <Input
                                {...register("pet_name")} name="pet_name"
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* pet picture */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Picture
                            </Typography>
                            <input type="file" name="" id="" />

                            {/* maximum donation amount */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Maximum Donation Amount
                            </Typography>
                            <Input
                            {...register("maximum_donation_amount")} name="maximum_donation_amount"
                                type="number"
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* last date of donation */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Total Donation Amount
                            </Typography>
                            <Input
                                {...register("donation_last_date")} name="donation_last_date"
                                type="date"
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* short description */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Short Description
                            </Typography>
                            <Textarea
                            {...register("short_des")} name="short_des"
                             size="sm" cols="30" rows="5" label="Short Description" />

                            {/* long description */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Long Description
                            </Typography>
                            <Textarea
                            {...register("long_des")} name="long_des"
                             size="lg" label="Long Description" />

                        </div>
                        <Button className="mt-6 bg-amber-700 text-white" fullWidth>
                            Submit
                        </Button>
                    </form>
                </Card>
            </div>


        </div>
    );
};

export default CreateDonationCampaign;