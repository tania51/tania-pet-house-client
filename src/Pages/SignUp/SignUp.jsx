import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm()
    const { createUser, googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data.password);
        if(! /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{6,}$/.test(data.password)) {
            Swal.fire({
                icon: 'error',
                title: 'Password Should be atleast 6 charecters, one capital letter and one special charecter',
                color: 'red',
                padding: '4px'
              })
        }
        else {
            createUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                updateProfile(auth.currentUser, {
                    displayName: data?.name,
                    photoURL: data?.photo
                })
                
                reset();
                    // .then(res => {
                    //     console.log(res.user)
                    // })
                // user information saved using post method on db
                const userInfo = {
                    displayName: data?.name,
                    photoURL: data?.photo,
                    email: data?.email,
                    role: 'user'
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate('/')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User Created Successfully!!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })




            })
        }
            

        
    }

    const googleSignUpHandeler = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                navigate('/')
                const userInfo = {
                    email: res.user?.email,
                    displayName: res.user?.displayName,
                    photoURL: res.user?.photo,
                    role: 'user'
                }

                axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId) {
                        navigate('/')
                    }
                })
            })
    }

    return (
        <div className="bg-teal-50 py-20">

            {/* sign Up form */}

            <div className="flex justify-center items-center h-screen">



                <Card color="transparent" shadow={false} className="bg-amber-100 text-blue-gray-900 px-10 py-8 border-b-[3px] border-b-amber-800">
                    <Typography variant="h4" className="">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>

                    {/* google sign up */}
                    <div className="form-control">
                        <div className="form-control pt-4">
                            <button onClick={googleSignUpHandeler} className="font-medium bg-teal-50 w-full py-2 rounded-lg cursor-pointer block text-center text-white"><FcGoogle className="w-full mx-auto text-xl" /></button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            {/* name field */}
                            <Typography variant="h6" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input  {...register("name")} name="name"
                                size="lg"
                                placeholder="Your Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* photo upload field */}
                            <Typography variant="h6" className="-mb-3">
                                Your Photo
                            </Typography>
                            <Input  {...register("photo")} type="url" name="photo"
                                size="lg"
                                placeholder="Your Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* email field */}
                            <Typography variant="h6" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input  {...register("email")} name="email"
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" className="-mb-3">
                                Password
                            </Typography>
                            <Input  {...register("password")} name="password"
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <br />
                        {/* <Input
                            type="submit" value="Sign In" 
                        /> */}
                        <input type="submit" value="Sign In" className="font-medium bg-amber-800 w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}

                            <a href="/login" className="text-blue-700 font-semibold hover:underline">
                                Sign In
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default SignUp;