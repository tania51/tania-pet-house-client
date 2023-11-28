import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Optional/Secret";
import LayOut from "../LayOut/LayOut";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import PetDetails from "../Pages/PetListing/PetDetails";
import DashBoard from "../DashBoard/DashBoard/DashBoard";
import AddPet from "../DashBoard/UserPages/AddPet/AddPet";
import MyAddedPets from "../DashBoard/UserPages/MyAddedPets/MyAddedPets";
import AdoptionRequest from "../DashBoard/UserPages/AdoptionRequest/AdoptionRequest";
import CreateDonationCampaign from "../DashBoard/UserPages/CreateDonationCampaign/CreateDonationCampaign";
import MyDonationCampaign from "../DashBoard/UserPages/MyDonationCampaign/MyDonationCampaign";
import MyDonations from "../DashBoard/UserPages/MyDonations/MyDonations";
import DashBoardContent from "../DashBoard/DashBoard/DashBoardContent/DashBoardContent";
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import DonationDetails from "../Pages/DonationCampaigns/DonationDetails/DonationDetails";
import EditMyDonationCampaign from "../DashBoard/UserPages/MyDonationCampaign/EditMyDonationCampaign";


const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "petListing",
          element: <PetListing></PetListing>
        },
        {
          path: "petDetails/:id",
          element: <PrivateRoute><PetDetails></PetDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5008/all-pets/petDetails/${params.id}`)
        },
        {
          path: "donationCampaigns",
          element: <DonationCampaigns></DonationCampaigns>
        },
        {
          path: "donationDetails/:id",
          element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5008/all-pets/petDetails/${params.id}`)
        },
        {
          path: "secret",
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "signUp",
        element: <SignUp></SignUp>
    },
    {
      path: "/dashBoard",
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: "/dashBoard",
          element: <DashBoardContent></DashBoardContent>
        },
        {
          path: "addPet",
          element: <PrivateRoute><AddPet></AddPet></PrivateRoute>
        },
        {
          path: "myAddedPets",
          element: <PrivateRoute><MyAddedPets></MyAddedPets></PrivateRoute>
        },
        {
          path: "adoptionRequest",
          element: <PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>,
          loader: () => fetch(`http://localhost:5008/adoptedPet`)
        },
        {
          path: "createDonationCampaign",
          element: <PrivateRoute><CreateDonationCampaign></CreateDonationCampaign></PrivateRoute>
        },
        {
          path: "myDonationCampaign",
          element: <PrivateRoute><MyDonationCampaign></MyDonationCampaign></PrivateRoute>,
          // loader: ({params}) => fetch(`http://localhost:5008/donation-campaigns/${params.email}`)
        },
        {
          path: "myDonationCampaign/edit/:id",
          element: <EditMyDonationCampaign></EditMyDonationCampaign>,
          loader: ({params}) => fetch(`http://localhost:5008/my-donation-campaigns/${params.id}`)
        },
        {
          path: "myDonations",
          element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>
        },
      ]
    }
  ]);

export default router;