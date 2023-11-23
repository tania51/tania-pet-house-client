import {
    Card,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        // console.log(data)
        signIn(data.email, data.password)
        .then(res => {
            reset();
            console.log(res.user);
            navigate(fromPage, { replace: true });
        })
    }

    return (
        <div>

            {/* sign Up form */}
            <div className="flex justify-center items-center h-screen">
                <Card color="transparent" shadow={false} className="bg-blue-gray-900 text-white px-10 py-8">
                    <Typography variant="h4" className="text-white">
                        Login
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to login.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
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
                        <input type="submit" value="Login" className="font-medium bg-black w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            New to this site?{" "}

                            <a href="/signUp" className="font-medium text-gray-300">
                                Sign Up
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Login;