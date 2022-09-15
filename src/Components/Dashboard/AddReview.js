import React from 'react';

const AddReview = () => {
  return (
    <div className="lg:bg-white lg:m-24 p-9 lg:flex items-center justify-center">
      <div>
        <div className="rating rating-lg">
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="form-control">
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