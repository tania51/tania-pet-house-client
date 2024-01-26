import StickyNavbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "./DashBoardContent/Sidebar";


const DashBoard = () => {
    // const isAdmin = true;
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <div className="bg-teal-50 max-h-[100vh]">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default DashBoard;