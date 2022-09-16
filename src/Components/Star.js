import React from 'react';
import './Star.css';

const Star = ({ i, ratingValue, setRatings, ratings }) => {
  
  

  return (
    <div className="rating">
      <label htmlFor="">
        <input
          type="radio"
          name="rating-1"
          value={ratingValue}
          onClick={() => setRatings(ratingValue)}
          className={`mask mask-star ${(ratingValue<=ratings) ? `bg-primary`: `bg-base-200`} `}
        />
      </label>
    </div>
  );
};

export default Star;