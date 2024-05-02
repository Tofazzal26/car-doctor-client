import { NavLink } from "react-router-dom";
import logo from "../../../public/assets/logo.svg";
import { AiOutlineShopping } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#ff3811]" : "text-black"
        }
        to={`/`}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#ff3811]" : "text-black"
        }
        to={`/about`}
      >
        <li>About</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#ff3811]" : "text-black"
        }
        to={`/services`}
      >
        <li>Services</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#ff3811]" : "text-black"
        }
        to={`/blog`}
      >
        <li>Blog</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#ff3811]" : "text-black"
        }
        to={`/contact`}
      >
        <li>Contact</li>
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#ff3811]" : "text-black"
          }
          to={`/myService`}
        >
          <li>My Service</li>
        </NavLink>
      )}
    </>
  );

  return (
    <div className="my-6">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost  text-xl">
            <img className="lg:h-[60px] h-[40px]" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 text-lg font-semibold px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <AiOutlineShopping color="#444444" size={25} />
          <IoSearchOutline color="#444444" size={25} />
          {user ? (
            <button
              onClick={handleLogOut}
              className="border rounded-[5px] lg:px-3 bg-[#FF3811] lg:py-2 text-sm lg:text-base px-4 py-2 font-semibold text-white"
            >
              Log Out
            </button>
          ) : (
            <NavLink to={`/login`}>
              <button className="border rounded-[5px] lg:px-3 bg-[#FF3811] lg:py-2 text-sm lg:text-base px-4 py-2 font-semibold text-white">
                Log In
              </button>
            </NavLink>
          )}
          <button className="border rounded-[5px] lg:px-6 border-[#FF3811] lg:py-3 text-sm lg:text-lg px-4 py-2 font-semibold text-[#FF3811]">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
