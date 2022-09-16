import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);
  return (
    <div>
      <h1 className='text-5xl text-center font-bold text-primary'>Customer Reviews</h1>
      <div class="card w-96 bg-base-100 shadow-xl">
       {
        reviews.map((review)=><Review
        review={review}
        ></Review>)
       }
      </div>
    </div>
  );
};

export default Reviews;