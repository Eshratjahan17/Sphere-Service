import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ tool }) => {
   const navigate = useNavigate();
   const { _id, name, about, price, picture, minimum, stock } = tool;
   const handletools = (id) => {
     navigate(`/purchase/${id}`);
   };
  return (
    <div>
      <div class="card w-96 h-full  bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-primary">{name}</h2>
          <p className="">{about}</p>
          <p className=" font-semibold">
            Price:<span className="text-lg">{price}</span>
          </p>
          <div class="card-actions justify-between my-3">
            <div class="badge badge-outline  p-3 font-semibold">
              Minimum Order:<span className="text-lg">{minimum}</span>
            </div>
            <div class="badge badge-outline p-3 font-semibold">
              Available:<span className="text-lg">{stock}</span>
            </div>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => handletools(_id)}
              to="/purchase"
              class="btn bg-primary text-white border-none hover:text-white hover:bg-orange-400 rounded-full mt-5  "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;