import { Outlet } from "react-router-dom";
import StickyNavbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const LayOut = () => {
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <div className="text-blue-gray-700">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;