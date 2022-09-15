import React from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
  return (
    <div className="lg:m-24">
      <h1 className="text-primary font-bold text-4xl mb-5">Products</h1>
      <div className="bg-white  p-8 grid lg:grid-cols-3 sm:grid-cols-1 gap-3  pr-2 pl-5 my-5 shadow-lg ">
        <ManageProduct></ManageProduct>
      </div>
    </div>
  );
};

export default ManageProducts;