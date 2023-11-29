import { Avatar, Card, Typography } from "@material-tailwind/react";
import Title from "../../../components/Shared/Title/Title";
import Swal from "sweetalert2";
import useAllPet from "../../../hooks/useAllPet";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";


const Users = () => {
    const axiosSecure = useAxiosSecure();
    // const allUsers = useLoaderData();
    // console.log(allUsers);
    const [users, refetch] = useUsers();



    // update adopted status
    const makeUserAdmin = (user) => {
        // console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const newPet = {
                    id: user._id,
                    adopted: user.adopted,
                }
                // console.log(newPet);
                const updateRes = await axiosSecure.patch(`/users/${user._id}`, newPet)
                // console.log(updateRes.data);
                if (updateRes.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Updated!",
                        text: `${user.displayName} is admin now.`,
                        icon: "success"
                    });
                }


            }
        });
    }
    return (
        <div>
            <div className="-mt-10 mb-4">
                <div><Title heading="All Pets"></Title></div>
            </div>
            <div>
                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>

                                {/* user name */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Name
                                    </Typography>
                                </th>

                                {/* user email */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Email
                                    </Typography>
                                </th>

                                {/* user profile picture */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Profile Picture
                                    </Typography>
                                </th>

                                {/* Action Btn */}
                                {/* Role */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Role
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
                            {users && users.map(user => <tr key={user._id} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {user.displayName}
                                    </Typography>
                                </td>

                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {user.email}
                                    </Typography>
                                </td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="h-14 w-20 rounded-md border border-blue-gray-50 p-1">
                                            <Avatar
                                                src={user.photoURL}
                                                size="sm"
                                                alt={user.displayName}
                                                variant="square"
                                                className="h-full w-full object-contain p-1"
                                            />
                                        </div>
                                    </div>
                                </td>

                                {/* <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                <img src={user.photoURL} alt={user.displayName} />
                                            </Typography>
                                        </td> */}



                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        {
                                            user.role === 'admin' ? <button className="flex items-center gap-2 bg-amber-700 px-3 py-2 rounded text-white">
                                                admin
                                            </button>
                                                : <button onClick={() => makeUserAdmin(user)} className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">
                                                    Make Admin
                                                </button>
                                        }
                                        {
                                            // <button onClick={() => handleAdoptedUser(user)} className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">{user?.role === "user" ? 'Make Admin' : 'Not Adopted'}
                                            // </button>

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

export default Users;