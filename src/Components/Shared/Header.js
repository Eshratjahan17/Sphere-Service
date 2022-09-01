import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo/logo.png";

const Header = () => {
  return (
    <div 
    
    className="px-5    lg:px-32 ">
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="font-bold hover:border-b-4 hover:border-primary hover:bg-white "
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="font-bold hover:border-b-4 hover:border-primary hover:bg-white "
                  to="/portfolio"
                >
                  My Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold hover:border-b-4 hover:border-primary hover:bg-white "
                  to="/"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold hover:border-b-4 hover:border-primary hover:bg-white "
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" class="h-1/6 w-1/6 normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link
                className="font-bold hover:border-b-4 hover:border-primary hover:bg-white "
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="font-bold hover:border-b-4 hover:border-primary hover:bg-white "
                to="/portfolio"
              >
                My Portfolio
              </Link>
            </li>

            <li>
              <Link
                className="font-bold hover:border-b-4 hover:border-primary hover:bg-white "
                to="/"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                className="font-bold hover:border-b-4 hover:border-primary hover:bg-white "
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <Link
            className="pr-2 font-bold hover:border-b-4 hover:border-primary"
            to="/"
          >
            Dashboard
          </Link>
          <a class="btn btn-outline btn-primary rounded-full ">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Header;