import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
 
  useEffect(() => {
    fetch("https://sphere-service-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);
  
    return (
      <div className="my-5 mx-5">
        <h1 className="text-5xl text-center font-bold text-primary my-7">
          Customer Reviews
        </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-4 
        mx-9 
         lg:gap-3 lg:mx-7  ">
          
            {reviews.map((rev) => (
              <Review rev={rev}></Review>
            ))}
          </div>
        </div>
      
    );
};

export default Reviews;