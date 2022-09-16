import React, { useState } from 'react';
import Star from '../Star';



const AddReview = () => {
  const [ratings,setRatings]=useState(null);
 
console.log(ratings);
  

  return (
    <div className="lg:bg-white lg:m-24 p-9 lg:flex items-center justify-center">
      <div>
        <div className="form-control">
          <div className='flex '>
            {[...Array(5)].map((star,i) => {
              const ratingValue=i+1;


              return (
                <Star
                  star={star}
                  i={i}
                  ratingValue={ratingValue}
                  ratings={ratings}
                  setRatings={setRatings}
                 
                ></Star>
              );

            }
             
            )}
          </div>

          <label className="label">
            <span className="text-2xl font-bold ">Write a Review</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 w-96"
            placeholder="write here"
          ></textarea>
          <button className="btn btn-primary mt-6 text-white">Post</button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;