import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SingleDonationPet = ({ aPet }) => {
    const { _id, image, name, maximum_donation_amount, donated_amount } = aPet;

    return (
        <div>
            <Card className="border border-teal-900">
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <div className="space-y-2">
                            <Typography color="blue-gray" className="font-bold text-xl">
                                Pet Name: <span className="text-amber-700">{name}</span>
                            </Typography>
                            <Typography color="blue-gray" className="font-semibold">
                                Maximum Donation Amount: {maximum_donation_amount}
                            </Typography>
                        </div>
                    </div>
                    <Typography
                        variant=""
                        color="gray"
                        className="font-medium opacity-75"
                    >
                        Donated Amount: {donated_amount}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">

                    <Link to={`/donationDetails/${_id}`}>
                        <Button

                            ripple={false}
                            fullWidth={true}
                            className="bg-amber-700 text-teal-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 hover:text-white"
                        >
                            View Details
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleDonationPet;