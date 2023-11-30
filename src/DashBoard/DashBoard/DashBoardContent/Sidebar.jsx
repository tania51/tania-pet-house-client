
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
} from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin"
import "../../DashBoard/DashBoardContent/Sidebar.css"
import { IoCreateSharp } from "react-icons/io5";
import { FcDonate } from "react-icons/fc";
import { MdCampaign } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { MdPets } from "react-icons/md";
import { FaDonate } from "react-icons/fa";


const Sidebar = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);

    // const isAdmin = 'admin'


    return (
        <>
            <div className="flex gap-10 h-full custom">
                <div className="w-3/12 h-auto flex-1 bg-amber-100">
                    <div className="mb-2 flex items-center justify-between p-4">
                        <Typography variant="h5" color="blue-gray">

                        </Typography>
                    </div>

                    {/* dashboard sidebar */}
                    {
                        isAdmin ?
                            <List>


                                {/* users and admin navlinks */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </ListItemPrefix>
                                    <Link to="/dashBoard">Dashboard</Link>
                                </ListItem>

                                {/* add a pet */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/addPet">Add a pet</Link>
                                    <ListItemSuffix>
                                    </ListItemSuffix>
                                </ListItem>

                                {/* my added pets */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/myAddedPets">My added pets</Link>
                                </ListItem>

                                {/* adoption request */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/adoptionRequest">Adoption Request</Link>
                                </ListItem>

                                {/* Create Donation Campaign */}
                                <ListItem>
                                    <ListItemPrefix>
                                    <IoCreateSharp className="text-xl" />
                                        
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/createDonationCampaign">Create Donation Campaign</Link>
                                </ListItem>

                                {/* My Donation Campaigns */}
                                <ListItem>
                                    <ListItemPrefix>
                                    <MdCampaign className="text-xl" />
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/myDonationCampaign">My Donation Campaigns</Link>
                                </ListItem>

                                {/* My Donations */}
                                <ListItem>
                                    <ListItemPrefix>
                                    <FcDonate className="text-xl" />
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/myDonations">My Donations</Link>
                                </ListItem>


                                {/* only admin navlinks */}
                                {/* My Donations */}
                                <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        ></svg>
                                            <p>------ Admin ------</p>
                                        </ListItemPrefix>
                                <ListItem>
                                    <ListItemPrefix>
                                    <HiMiniUsers className="text-xl" />
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/users">Users</Link>
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                    <MdPets className="text-xl" />
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/admin/allPets">All Pets</Link>
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                    <FaDonate className="text-xl" />
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/admin/allDonation">All Donations</Link>
                                </ListItem>

                            </List>
                            :
                            // only for users
                            <List>
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </ListItemPrefix>
                                    <Link to="/dashBoard">Dashboard</Link>
                                </ListItem>

                                {/* add a pet */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            
                                            <path
                                                fillRule="evenodd"
                                                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/addPet">Add a pet</Link>
                                    <ListItemSuffix>
                                    </ListItemSuffix>
                                </ListItem>

                                {/* my added pets */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/myAddedPets">My added pets</Link>
                                </ListItem>

                                {/* adoption request */}
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/adoptionRequest">Adoption Request</Link>
                                </ListItem>

                                {/* Create Donation Campaign */}
                                <ListItem>
                                    <ListItemPrefix>
                                    <IoCreateSharp className="text-xl" />
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/createDonationCampaign">Create Donation Campaign</Link>
                                </ListItem>

                                {/* My Donation Campaigns */}
                                <ListItem>
                                    <ListItemPrefix>
                                    <MdCampaign className="text-xl" />
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/myDonationCampaign">My Donation Campaigns</Link>
                                </ListItem>

                                {/* My Donations */}
                                <ListItem>
                                    <ListItemPrefix>
                                    <FcDonate className="text-xl" />
                                    </ListItemPrefix>
                                    <Link to="/dashBoard/myDonations">My Donations</Link>
                                </ListItem>
                            </List>
                    }

                </div>
                <div className="w-9/12">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Sidebar;