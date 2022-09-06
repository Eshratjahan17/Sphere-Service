import React from 'react';

const Reviews = () => {
  return (
    <div>
      <h1 className='text-5xl text-center font-bold text-primary'>Customer Reviews</h1>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center mx-9">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;