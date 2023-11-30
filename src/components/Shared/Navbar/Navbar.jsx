import React from "react";
import { MdOutlineSpaceDashboard, } from "react-icons/md";
import {
  Navbar,
  MobileNav,
  // Typography,
  Button,
  IconButton,
  // Avatar,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import "./Navbar.css"





function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  // const [mood, setMood] = useState(true);
  const { user, logOut } = useAuth();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const logoutHandeler = () => {
    logOut();
  }

  // dark mood functionality


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 space-x-4 flex items-center text-teal-700 font-semibold capitalize"
      >
        <NavLink className="mr-3" to="/">Home</NavLink>
        <NavLink className="mr-3" to="/petListing">Pet Listing</NavLink>
        <NavLink className="mr-3" to="/donationCampaigns">Donation Campaigns</NavLink>
        <NavLink className="mr-3" to="/secret">Secret</NavLink>
        {/* <button onClick={() => setMood(!mood)} className="text-xl ml-3">
          {
            mood ? <MdNightlight />
              :
              <MdOutlineWbSunny />
          }
        </button> */}
        <div className="mr-4 text-teal-900">
          {
            user ? <>

              {/* profile image with menu starts */}
              <span className="ml-8">{user?.displayName}</span>
              <Menu>
                <MenuHandler>

                  <Avatar
                    size="sm"
                    alt="avatar"
                    src={user?.photoURL}
                    className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30 ml-4 mr-1"
                  />
                </MenuHandler>
                <MenuList>
                  <MenuItem className="flex items-center gap-2">
                    <MdOutlineSpaceDashboard className="text-lg" />

                    <Typography variant="small" className="font-medium">
                      <Link to="/dashboard">Dash Board</Link>
                    </Typography>
                  </MenuItem>
                  <hr className="my-2 border-blue-gray-50" />
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                        fill="#90A4AE"
                      />
                    </svg>
                    <Typography onClick={logoutHandeler} variant="small" className="font-medium">
                      Log Out
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>

            </>
              :
              <>
                <span className="ml-8">
                </span>
                <Link to="/login">
                  <Button
                    variant="text"
                    size="sm"
                    className="flex items-center gap-x-1 lg:inline-block text-lg capitalize"
                  >
                    <span>Login</span>
                  </Button>
                </Link>
              </>
          }
        </div>
        {/* <Button onClick={logoutHandeler}
          variant="text"
          size="sm"
          className="hidden lg:inline-block text-lg"
        >
          <span>LogIn</span>
        </Button> */}
      </Typography>
    </ul>
  );

  return (
    <div className="-mt-6 -mb-6 pet-navbar max-h-[768px] bg-white lg:pt-4">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-around text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img className="h-16" src="https://i.ibb.co/TRRy90v/pet-house.png" alt="PET HOUSE" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {/* <Link to="/login">
              </Link> */}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        {/* mobile device */}
        <MobileNav open={openNav}>
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Link to="/login">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
            </Link>
          </div> */}
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;