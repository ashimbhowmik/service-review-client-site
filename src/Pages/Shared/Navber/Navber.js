import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navber = () => {
  const [open, setOpen] = useState(false);

  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div>
      <div className="navbar bg-base-100 py-5 w-[95%] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>

              <li>
                <Link>About</Link>
              </li>
              <div className="items-center flex-shrink-0 lg:flex ml-3">
                <button className="self-center px-5 py-3 rounded font-semibold hover:bg-blue-600">
                  Login
                </button>
                <button className="self-center px-5 py-3 font-semibold rounded hover:bg-blue-600">
                  SignUp
                </button>
              </div>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>

            <div className="items-center flex-shrink-0 hidden lg:flex ml-3">
              <Link to="/login">
                <button className="self-center px-5 py-3 rounded font-semibold hover:bg-blue-600">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="self-center px-5 py-3 font-semibold rounded hover:bg-blue-600">
                  SignUp
                </button>
              </Link>
              <button className="self-center px-5 py-3 font-semibold rounded hover:bg-blue-600">
                LogOut
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
