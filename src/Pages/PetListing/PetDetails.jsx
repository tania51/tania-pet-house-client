import { useLoaderData } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import Container from "../../components/Shared/Container/Container";

// for adoption button
import React, { useState } from "react";
import {
    Dialog,
    CardFooter,
    Input,
} from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SinglePet from "./SinglePet";
import useAllPet from "../../hooks/useAllPet";
import Title from "../../components/Shared/Title/Title";



const PetDetails = () => {
    const petDetail = useLoaderData();
    const { register, handleSubmit, reset } = useForm()
    const [error, setError] = useState('')
    const { _id, image, name, age, category, location, adopted } = petDetail;
    const axiosPublic = useAxiosPublic();
    const [allPet] = useAllPet();
    const filterdPet = allPet.filter(aPet => aPet._id !== _id)
    // console.log(allPet);

    // logged in users info
    const { user } = useAuth();
    const { email, displayName } = user;

    const onSubmit = (data) => {
        if(adopted === true) {
            return setError(`${name} is Already Adopted.`)
        }

        console.log(data)
        if(user && user.email) {
            const number = data.number;
            const address = data.address;

            const adoptedUserInfo = {
                pet_id: _id,
                email: email,
                name: displayName,
                phn_Number: number,
                address: address,
                adopted: true
            }
            console.log(adoptedUserInfo);
            axiosPublic.post('/adoptedPet', adoptedUserInfo)
            .then(res => {
                console.log(res.data);
                reset()
                
            })
        }
        else {
            console.log('some');
        }



    }


    // for adoption button
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
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
                            <p>Age: {age}</p>
                            <p>Location: {location}</p>
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
                                    text: "Your Pet has been deleted.",
                                    icon: "success"
                                  });
                                }
                              })
                        }
                        <span className="inline-block">
                            <Button onClick={handleOpen} variant="text" className="flex items-center gap-2">
                                Adopt
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Card className="mx-auto w-full max-w-[24rem]">
                                    <CardBody className="flex flex-col gap-4">
                                        <Typography variant="h4" color="blue-gray">
                                            Happy Adoption!!
                                        </Typography>
                                        <p className="text-red-700 text-lg">{error}</p>

                                        {/* users email */}
                                        <Typography className="-mb-2" variant="h6">
                                            Your Email
                                        </Typography>
                                        <Input  {...register("email")} defaultValue={email} disabled label="Email" size="lg" />

                                        {/* users name */}
                                        <Typography className="-mb-2" variant="h6">
                                            Your Name
                                        </Typography>
                                        <Input  {...register("name")} defaultValue={displayName} disabled label="Name" size="lg" />

                                        {/* users Phone Number */}
                                        <Typography className="-mb-2" variant="h6">
                                            Phone Number
                                        </Typography>
                                        <Input   {...register("number")} label="Number" size="lg" />

                                        {/* users name */}
                                        <Typography className="-mb-2" variant="h6">
                                            Your Address
                                        </Typography>
                                        <Input  {...register("address")} label="Address" size="lg" />

                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        {/* <Button variant="gradient" onClick={handleOpen} fullWidth>
                                        
                                        Submit
                                    </Button> */}
                                        <input type="submit" value="Adopt" className="font-medium bg-amber-800 w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />
                                    </CardFooter>
                                </Card>
                            </form>
                        </Dialog>

                        {/* addoption details with modal end */}



                    </CardBody>
                </Card>

                {/* for adoption more pet */}
                <Title heading="some more pet for addoption!!"></Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-10">
                {
                    filterdPet && filterdPet.map(aPet => <SinglePet key={aPet._id} aPet={aPet}></SinglePet>)
                }
            </div>
            </Container>
        </div>
    );
};

export default PetDetails;