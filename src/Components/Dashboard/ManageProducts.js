import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
  const [products,setProducts]=useState([]);
  const [deleteModal, setDeleteModal] = useState(null);
  useEffect(() => {
fetch("http://localhost:5000/products")
  .then((res) => res.json())
  .then((data) => {
    setProducts(data);
    console.log(products);
  });


  }, [products]);

  return (
    <div className="lg:m-24">
      <h1 className="text-primary font-bold text-4xl mb-5">Products</h1>
      <div className="bg-white  p-8 grid lg:grid-cols-3 sm:grid-cols-1 gap-3  lg:pr-2 lg:pl-5 my-5 shadow-lg rounded-2xl  ">
        {products.map((product) => (
          <ManageProduct
            product={product}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          ></ManageProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;