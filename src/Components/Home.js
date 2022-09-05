import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import WorkFlow from './WorkFlow';

const Home = () => {
   
  return (
    <div>
      <Banner></Banner>

      <Products></Products>
      <WorkFlow></WorkFlow>
      <Reviews></Reviews>

      <BusinessSummury></BusinessSummury>
    </div>
  );
};

export default Home;