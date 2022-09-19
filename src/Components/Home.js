import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Loader from './Shared/Loader';
import WorkFlow from './WorkFlow';

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader></Loader>;
  }
   
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