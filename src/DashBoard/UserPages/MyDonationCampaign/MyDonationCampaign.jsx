
import Title from "../../../components/Shared/Title/Title";
import useDonationCampaigns from "../../../hooks/useDonationCampaigns";
import { Card, Progress, Typography } from "@material-tailwind/react";
import { CiEdit } from "react-icons/ci";
import { FaRegPauseCircle } from "react-icons/fa";
import { MdCalendarViewDay } from "react-icons/md";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];



const MyDonationCampaign = () => {
    const [donationCampaigns] = useDonationCampaigns();
    console.log(donationCampaigns);

    return (
        <div className="-mt-20">

            <Title heading="My Donation Campaigns"></Title>

            {/* donation campaigns table with information*/}

            <div className="mt-8 mr-8">
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
                                    console.log(progress);
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
                                                    <CiEdit />
                                                </Typography>
                                            </td>

                                            {/* pause button */}
                                            <td className={classes}>
                                                <Typography color="blue-gray" className="font-normal text-xl text-teal-900">
                                                    <FaRegPauseCircle />
                                                </Typography>
                                            </td>

                                            {/* view details button */}
                                            <td className={classes}>
                                                <Typography color="blue-gray" className="font-normal text-xl text-teal-900">
                                                    <MdCalendarViewDay />
                                                </Typography>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Card>
            </div>

        </div>
    );
};

export default MyDonationCampaign;