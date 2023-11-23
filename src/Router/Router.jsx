import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Optional/Secret";
import LayOut from "../LayOut/LayOut";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home/Home";


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
          path: "secret",
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    }
  ]);

export default router;