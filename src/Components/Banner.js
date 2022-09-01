import React from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-bg px-32 text-white  py-9">
      <div>
        <h1 className=" text-7xl ">
          Heigh Performance <br /> Services For Industries
        </h1>
        <div>
          <p className="py-6 google-font ">
            Computer parts and hardware predominantly come from Southeast Asia—{" "}
            <br />
            places like Malaysia, Indonesia, and Taiwan known for heavy industry
            and <br /> large scale mass production. Believe it or not, there are
            computers .
          </p>
        </div>
        <Link
          className='btn text-white google-font  btn-primary rounded-full ">Log In</a>'
          to="/"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
};

export default Banner;