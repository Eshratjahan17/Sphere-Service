import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../images/logo/logo.png";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
   

  
  const handleSignOut = () => {
    signOut(auth);
     localStorage.removeItem("accessToken");
    
  };

  return (
    <div className="px-5    lg:px-32  ">
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
          {user ? (
            <div className="flex justify-center items-center">
              <Link
                className="pr-2 font-bold hover:border-b-4 hover:border-primary"
                to="/dashboard"
              >
                Dashboard
              </Link>
              <div class="dropdown dropdown-hover dropdown-left ">
                <label tabindex="0" class=" ">
                  <div class=" rounded-full bg-primary p-2">
                    <div class="text-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>My Profile</a>
                  </li>
                  <li>
                    <a onClick={handleSignOut}>Log out</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <a href="/login" class="btn btn-outline btn-primary rounded-full ">
              Log In
            </a>
          )}
        </div>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          for="dashboard-drawer"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;