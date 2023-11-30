import {
    Card,
    Input,
    Option,
    Select,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Title from "../../../components/Shared/Title/Title";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
// import { useState } from "react";



const CreateDonationCampaign = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    // const [liveImage, setLiveImage] = useState(null)

    const onSubmit = async (data) => {
        const { pet_name, maximum_donation_amount, donation_last_date, short_des, long_des, category } = data;
        console.log(data);
        console.log(pet_name, maximum_donation_amount, donation_last_date, short_des, long_des, category);
        const donation_pause = false;
        const date = new Date().toUTCString();
        // console.log('new date', new Date());

        const formData = new FormData();
        // console.log(formData);
        const image = data.pet_image[0]
        console.log('data', formData);
        // console.log(image);
        formData.append('file', image)
        formData.append('upload_preset', 'xf9cbrah')
        const defaultDonatedAmount = parseInt(0)

        await axiosPublic.post('https://api.cloudinary.com/v1_1/drlltyyts/image/upload', formData)
            .then(res => {
                // setLiveImage(res.data.secure_url)

                console.log(res.data.secure_url);
                const createDonationCampaignInfo = {
                    name: pet_name,
                    image: res.data.secure_url,
                    maximum_donation_amount: maximum_donation_amount,
                    donation_last_date: donation_last_date,
                    short_des: short_des,
                    long_des: long_des,
                    donation_pause: donation_pause,
                    date: date,
                    donated_amount: defaultDonatedAmount,
                    category: category
                }
                // console.log(createDonationCampaignInfo);

                axiosSecure.post('/donation-campaign', createDonationCampaignInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Donation Campaign Created Successfully !!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        reset();
                    })
            })




    }

    return (
        <div className="-mt-4">
            <Title heading="Create Donation Campaign"></Title>

            {/* sign Up form */}
            <div className="w-full">
                <Card color="transparent" shadow={false} className="text-blue-gray-900 px-10 py-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-2 w-80 max-w-screen-lg sm:w-96">
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
                            <input type="file"
                                {...register("pet_image")} name="pet_image"
                                id="" />

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
                                Last Date of Donation
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

                            {/* To Do */}
                            {/* Pet Category */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Category
                            </Typography>
                            <div className="w-full">
                                <select {...register("category")}
                                label="Select Version" className="w-full py-2 px-2 border border-blue-gray-200 rounded-lg"
                                >
                                    <option value="Cat" >Cat</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Rabbit">Rabbit</option>
                                </select>
                                {/* <Select
                                    {...register("category")}
                                    label="Select Version"
                                >
                                    <Option value="Cat">Cat</Option>
                                    <Option value="Dog">Dog</Option>
                                    <Option value="Rabbit">Rabbit</Option>
                                </Select> */}
                            </div>

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
                        <br />


                        <input type="submit" value="Submit" className="font-medium bg-amber-800 w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />


                    </form>
                </Card>
            </div>
        </div>
    );
};

export default CreateDonationCampaign;