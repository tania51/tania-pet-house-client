
import { useState } from "react";
import Title from "../../../components/Shared/Title/Title";
import useDonationCampaigns from "../../../hooks/useDonationCampaigns";
import { Card, Progress, Typography } from "@material-tailwind/react";
import { CiEdit } from "react-icons/ci";
import { FaPlay, FaPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { MdCalendarViewDay } from "react-icons/md";
import { Link } from "react-router-dom";
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";




const MyDonationCampaign = () => {
    const [donationCampaigns] = useDonationCampaigns();
    // console.log(donationCampaigns);
    const [pause, setPause] = useState(true)
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    // console.log(pause);

    return (
        <div>



            {/* donation campaigns table with information*/}


            <div className="mt-8 mr-8">
                {
                    donationCampaigns.length === 0 ? <p className="text-2xl text-red-900 h-[70vh] flex items-center justify-center w-full">There is No Donation CamPaigns for You. Please Create First!!</p>
                        :
                        <>
                        <div className="-mt-20">
                        <Title heading="My Donation Campaigns"></Title>
                        </div>
                            
                            <Card className="h-full w-full">
                                <table className="w-full table-auto text-left">
                                    <thead>
                                        <tr>
                                            {/* pet name */}
                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    Pet Name
                                                </Typography>
                                            </th>

                                            {/* Maximum Donation Amount */}
                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    Maximum Donation Amount
                                                </Typography>
                                            </th>

                                            {/* Donation Progress Bar */}
                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    Donation Progress Bar
                                                </Typography>
                                            </th>

                                            {/* Edit */}
                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    Edit
                                                </Typography>
                                            </th>

                                            {/* Pause Button */}
                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    Pause Button
                                                </Typography>
                                            </th>

                                            {/* View Donators button */}
                                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                    View Donators button
                                                </Typography>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            donationCampaigns && donationCampaigns.map((donationCamp, index) => {
                                                const isLast = index === donationCampaigns.length - 1;
                                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                                                const progress = parseInt((donationCamp.total_donation_amount * 100) / donationCamp.maximum_donation_amount)
                                                return (
                                                    <tr key={donationCamp._id}>

                                                        {/* pet name */}
                                                        <td className={classes}>
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {donationCamp.pet_name}
                                                            </Typography>
                                                        </td>

                                                        {/* maximum_donation_amount */}
                                                        <td className={classes}>
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {donationCamp.maximum_donation_amount}
                                                            </Typography>
                                                        </td>

                                                        {/* progress bar */}
                                                        <td className={classes}>
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                <div className="w-full">
                                                                    <div className="mb-2 flex items-center justify-between gap-4">
                                                                        <Typography className="text-sm" color="blue-gray">
                                                                            Completed
                                                                        </Typography>
                                                                        <Typography className="text-sm" color="blue-gray">
                                                                            {progress} %
                                                                        </Typography>
                                                                    </div>
                                                                    {
                                                                        progress === 100 ?
                                                                            <Progress size="sm" color="green" value={progress} />
                                                                            :
                                                                            <Progress size="sm" color="amber" value={progress} />
                                                                    }

                                                                </div>
                                                            </Typography>
                                                        </td>

                                                        {/* edit button */}
                                                        <td className={classes}>
                                                            <Typography color="blue-gray" className="font-normal text-xl text-teal-900">
                                                                <Link to={`/dashBoard/myDonationCampaign/edit/${donationCamp._id}`}>
                                                                    <CiEdit />
                                                                </Link>
                                                            </Typography>
                                                        </td>

                                                        {/* pause button */}
                                                        <td className={classes}>
                                                            <Typography  color="blue-gray" className="font-normal text-xl text-teal-900 cursor-pointer">
                                                                <button onClick={() => setPause(!pause)}>
                                                                {
                                                                    pause ? <FaRegPauseCircle />
                                                                    :
                                                                    <FaPlayCircle />
                                                                }
                                                                </button>
                                                                
                                                            </Typography>
                                                        </td>

                                                        {/* view details button */}
                                                        <td className={classes}>
                                                            <Typography color="blue-gray" className="font-normal text-xl text-teal-900 cursor-pointer">
                                                                <MdCalendarViewDay onClick={handleOpen} />

                                                                {/* view details modal */}
                                                                {/* <Button onClick={handleOpen} variant="gradient">
                                                        Open Dialog
                                                    </Button> */}
                                                                <Dialog open={open} handler={handleOpen}>
                                                                    <DialogHeader>User Name: { }</DialogHeader>
                                                                    <DialogBody>
                                                                        Donation Amount{ }
                                                                    </DialogBody>
                                                                    <DialogFooter>
                                                                        <Button
                                                                            variant="text"
                                                                            color="red"
                                                                            onClick={handleOpen}
                                                                            className="mr-1"
                                                                        >
                                                                            <span>Cancel</span>
                                                                        </Button>
                                                                        <Button variant="gradient" color="green" onClick={handleOpen}>
                                                                            <span>Confirm</span>
                                                                        </Button>
                                                                    </DialogFooter>
                                                                </Dialog>


                                                            </Typography>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Card>
                        </>
                }

            </div>

        </div>
    );
};

export default MyDonationCampaign;