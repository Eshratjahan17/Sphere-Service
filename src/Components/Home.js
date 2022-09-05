import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Reviews from './Reviews/Reviews';

const Home = () => {
   
  return (
    <div>
      <Banner></Banner>
      
      <Reviews></Reviews>
      <BusinessSummury></BusinessSummury>
    </div>
  );
};

export default Home;