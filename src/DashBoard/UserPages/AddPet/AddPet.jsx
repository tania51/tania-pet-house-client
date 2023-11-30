import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Title from "../../../components/Shared/Title/Title";


const initialValues = {
    name: '',
    image: '',
    age: '',
    category: '',
    location: '',
    short_des: '',
    long_des: ''
}

const AddPet = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [formikImage, setFormikImage] = useState('')
    // console.log('formik image', formikImage);

    // const { values, handleBlur, handleChange, handleSubmit, handleReset } = useFormik({
    //     initialValues: initialValues,
    //     onSubmit: async (values) => {


    //         // cloudinary api using for live image
    //         const { name, age, location, short_des, long_des, category } = values;
    //         const date = new Date().toUTCString();
    //         console.log(category);
    //         // console.log('new date', new Date());



    //         const addPet = {
    //             name: name,
    //             // image: image,
    //             age: age,
    //             location: location,
    //             short_des: short_des,
    //             long_des: long_des,
    //             date: date,
    //             category: category,
    //             adopted: false,
    //             email: user?.email,
    //             user_name: user?.displayName
    //         }
    //         console.log(addPet);

    //         axiosSecure.post('/all-pets', addPet)
    //             .then(res => {
    //                 console.log(res.data);
    //                 if (res.data.insertedId) {
    //                     Swal.fire({
    //                         icon: "success",
    //                         title: "Donation Campaign Created Successfully !!",
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     });
    //                 }
    //                 handleReset();
    //             })


    //     }
    // })
   
    
    


    
    const { values, errors, handleBlur, handleChange, handleSubmit, handleReset } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            // console.log(values.image);
            

            // cloudinary api using for live image
            const { name, age, location, short_des, long_des, category, image } = values;
            // console.log(image);
            // console.log(name, age, location, short_des, long_des, category, image);
            const date = new Date().toUTCString();
            // console.log('new date', new Date());


            const formData = new FormData();
            // console.log(formData);
            // const image = values.image[0]
            // console.log('data', formData);
            // console.log('pet image', image);
            formData.append('file', formikImage)
            // console.log('values.image', typeof (values.image));
            formData.append('upload_preset', 'xf9cbrah')

            await axiosPublic.post('https://api.cloudinary.com/v1_1/drlltyyts/image/upload', formData)
                .then(res => {
                    // setLiveImage(res.data.secure_url)

                    // console.log(res.data.secure_url);
                    const addPet = {
                        name: name,
                        image: res.data.secure_url,
                        age: age,
                        location: location,
                        short_des: short_des,
                        long_des: long_des,
                        date: date,
                        category: category,
                        adopted: false,
                        email: user?.email,
                        user_name: user?.displayName
                    }
                    // console.log(addPet);

                    axiosSecure.post('/all-pets', addPet)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Pet Added Successfully !!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            handleReset();
                        })
                    axiosSecure.post('/all-added-pets', addPet)
                        .then(res => {
                            console.log(res.data);
                        })
                })



        }
    })
    // console.log('Formik data', Formik);

    return (
        <div>
            <div className="w-full flex justify-center -mt-8">
            <Title heading="Add A Pet"></Title>
            </div>

            <div>
                <Card color="transparent" shadow={false} className="text-blue-gray-900 px-10 py-8">
                    <form onSubmit={handleSubmit} className="mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">

                            {/* 1. pet name */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Name
                            </Typography>
                            <Input
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* 2. pet picture */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Picture
                            </Typography>
                            {/* <input id="file" name="file" type="file" onChange={handleChange} /> */}
                            <input type="file"
                                name="image"
                                // value={values.image}
                                onChange={(e) => setFormikImage(e.target.files[0])}
                                onBlur={handleBlur}
                                id="file" />

                            {/* 3. Pet age */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Age
                            </Typography>
                            <Input
                                name="age"
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="number"
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* To Do */}
                            {/*4. Pet Category */}

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Category
                            </Typography>
                            <div className="w-full">
                                <select
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Select Version" className="w-full py-2 px-2 border border-blue-gray-200 rounded-lg"
                                >
                                    <option>Select One</option>
                                    <option value="Cat">Cat</option>
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

                            {/* 5. pet location */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pet Location
                            </Typography>
                            <Input
                                name="location"
                                value={values.location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />


                            {/* 6. short description */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Short Description
                            </Typography>
                            <Textarea

                                name="short_des"
                                value={values.short_des}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size="sm" cols="30" rows="5" label="Short Description" />

                            {/* long description */}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Long Description
                            </Typography>
                            <Textarea

                                name="long_des"
                                value={values.long_des}
                                onChange={handleChange}
                                onBlur={handleBlur}
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

export default AddPet;