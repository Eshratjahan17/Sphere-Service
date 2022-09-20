import React from 'react';
import img1 from '../images/portfolio/page1.jpg';
import img2 from '../images/portfolio/page2.jpg';

const Portfolio = () => {
  return (
    <div className="lg:flex justify-center m-10 gap-3">
      <img
        className=" w-full lg:w-2/5 border-2 border-primary"
        src={img1}
        alt=""
      />
      <img
        className="w-full  lg:w-2/5 border-2  border-primary"
        src={img2}
        alt=""
      />
    </div>
  );
};

export default Portfolio;