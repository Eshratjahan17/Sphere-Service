import React from 'react';
import useProducts from '../Hooks/useProducts';
import Loader from '../Shared/Loader';
import Product from './Product';

const Products = () => {
  const [tools, isLoading] = useProducts();
 
  
   if (isLoading) {
     return <Loader></Loader> ;
   }
  console.log(tools)
  return (
    <div className="my-9">
      <h1 className="text-center text-5xl text-primary font-bold mt-9">
        Our Products
      </h1>
      <div class="divider w-1/4 mx-auto "></div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 place-content-center pr-2 pl-5 my-5 ">
        {tools.map((tool) => (
          <>
            <Product tool={tool}></Product>
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;