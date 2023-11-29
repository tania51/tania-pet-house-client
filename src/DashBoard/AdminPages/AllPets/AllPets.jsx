
import { Card, Typography } from "@material-tailwind/react";
import Title from "../../../components/Shared/Title/Title";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAllPet from "../../../hooks/useAllPet";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllPets = () => {
    const [allPet, refetch] = useAllPet();
    console.log(allPet);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    // const { data: allPet = [], refetch } = useQuery({
    //     queryKey: ['adoptedPet'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/adoptedPet')
    //         return res.data;
    //     }
    // })


    // delete user
    const deleteHandeler = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/all-pets/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })



            }
        });
    }


    // update adopted status
    const handleAdoptedUser = (aPet) => {
        console.log(aPet);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Change the Status"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const newPet = {
                    id: aPet._id,
                    adopted: aPet.adopted,
                }
                console.log(newPet);
                const updateRes = await axiosSecure.patch(`/all-pets/${aPet._id}`, newPet)
                console.log(updateRes.data);
                    if(updateRes.data.modifiedCount > 0) {
                        refetch()
                        Swal.fire({
                            title: "Updated!",
                            text: `some is admin now.`,
                            icon: "success"
                          });
                    }

              
            }
          });
    }

    return (
        <div>
            <div className="-mt-10 mb-4">
                <div><Title heading="All Pets"></Title>({allPet.length})</div>
            </div>
            <div>
                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
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

                                {/* user name */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        User Name
                                    </Typography>
                                </th>

                                {/* user email */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        User Email
                                    </Typography>
                                </th>

                                {/* Action Btn */}
                                {/* Delete */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Delete
                                    </Typography>
                                </th>

                                {/* Update */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Update
                                    </Typography>
                                </th>
                                {/* Status */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Status
                                    </Typography>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* aPet */}
                            {/* {
                                allPet.map(aPet => {

                                })
                            } */}
                            {allPet && allPet.map(aPet => <tr key={aPet._id} className="even:bg-blue-gray-50/50">
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {aPet.name}
                                        </Typography>
                                    </td>

                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {aPet.user_name}
                                        </Typography>
                                    </td>

                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {aPet.email}
                                        </Typography>
                                    </td>

                                    {/* delete btn */}
                                    <td className="p-4">
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                            <button onClick={() => deleteHandeler(_id)} className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">Delete</button>
                                        </Typography>
                                    </td>

                                    {/* update btn */}
                                    <td className="p-4">
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">

                                            {
                                                aPet.adopted === true ? 'adopted'
                                                    : <button onClick={() => makeUpdateUser(aPet)} className="bg-teal-500 text-white px-3 py-2 rounded">Update
                                                    </button>
                                            }

                                            {/* <button className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">Update</button> */}
                                        </Typography>
                                    </td>

                                    <td className="p-4">
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        {
                                            <button onClick={() => handleAdoptedUser(aPet)} className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">{aPet?.adopted === true ? 'Adopted' : 'Not Adopted'}
                                            </button>
                                            
                                                // aPet.adopted === true ? <button className="flex items-center gap-2 bg-amber-700 px-3 py-2 rounded text-white">Adopt</button>
                                                //     : <button onClick={() => handleAdoptedUser(aPet)} className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">Reject
                                                //     </button>
                                            }
                                            {/* <button onClick={() => setAdoptedBtn(!adopted)}>Adopted</button>
                                            {() => handleAdoptedPet(setAdoptedBtn(!adopted))} */}
                                            {/* {aPet.adopted === true ? <button className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">Reject</button> : <button className="flex items-center gap-2 bg-amber-700 px-3 py-2 rounded text-white">Adopt</button>} */}
                                        </Typography>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};

export default AllPets;