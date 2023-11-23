import {
    Card,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm()
    const {createUser} = useAuth();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(res => {
            reset();
            console.log(res.user);
            updateProfile(auth.currentUser, {
                displayName: data?.name,
                photoURL: data?.photo
            })
            .then(res => {
                console.log(res.user)
            })
        })
    }

    return (
        <div>

            {/* sign Up form */}
            <div className="flex justify-center items-center h-screen">
                <Card color="transparent" shadow={false} className="bg-blue-gray-900 text-white px-10 py-8">
                    <Typography variant="h4" className="text-white">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            {/* name field */}
                            <Typography variant="h6" color="white" className="-mb-3">
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
                            <Typography variant="h6" color="white" className="-mb-3">
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
                            <Typography variant="h6" color="white" className="-mb-3">
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
                            <Typography variant="h6" color="white" className="-mb-3">
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
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <br />
                        {/* <Input
                            type="submit" value="Sign In" 
                        /> */}
                        <input type="submit" value="Sign In" className="font-medium bg-black w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}

                            <a href="/login" className="font-medium text-gray-300">
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