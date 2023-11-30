import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const {signIn, googleSignIn} = useAuth();
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
        .catch(err => {
            Swal.fire({
                text: err,
                color: 'red',
                fontSize: '14px',
                paddingTop: '10px',
                paddingBottom: '10px'
              })
        })
    }

    const googleSignUpHandeler = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user);
           
        })
    }


    return (
        <div className="bg-teal-50">

            {/* sign Up form */}
            <div className="flex justify-center items-center h-screen">
                <Card color="transparent" shadow={false} className="bg-amber-100 text-blue-gray-900 px-10 py-8 border-b-[3px] border-b-amber-800">
                    <Typography variant="h4" className="">
                        Login
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to login.
                    </Typography>

                    {/* google sign up */}
                    <div className="form-control">
                        <div className="form-control pt-4">
                            <button onClick={googleSignUpHandeler} className="font-medium bg-teal-50 w-full py-2 rounded-lg cursor-pointer block text-center text-white"><FcGoogle className="w-full mx-auto text-xl" /></button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input {...register("email")} name="email"
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
                        <input type="submit" value="Login" className="font-medium bg-amber-800 w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            New to this site?{" "}

                            <a href="/signUp" className="text-blue-700 font-semibold hover:underline">
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