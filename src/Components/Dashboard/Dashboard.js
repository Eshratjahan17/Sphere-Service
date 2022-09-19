import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Loader from '../Shared/Loader';

const Dashboard = () => {
 const [user,loading] = useAuthState(auth);
 const [admin] = useAdmin(user);
 if(loading){
  return<Loader></Loader>
 }
 
  
  
  console.log(admin);
    return (
      <div>
        <div class="drawer drawer-mobile">
          <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content  bg-base-200 ">
            <Outlet></Outlet>
            {/* <!-- Page content here --> */}
          </div>
          <div class="drawer-side">
            <label for="dashboard-drawer" class="drawer-overlay"></label>
            <ul class="menu p-3 overflow-y-auto w-52 bg-accent  text-white ">
              <li className="hover:bg-primary">
                <Link to="/dashboard/myprofile">My Profile</Link>
              </li>
              {admin && (
                <>
                  <li className="hover:bg-primary">
                    <Link to="/dashboard">DashBoard</Link>
                  </li>
                  <li className="hover:bg-primary">
                    <Link to="/dashboard/manageUsers">Manage Users</Link>
                  </li>
                  <li className="hover:bg-primary">
                    <Link to="/dashboard/addProduct">Add Product</Link>
                  </li>
                  <li className="hover:bg-primary">
                    <Link to="/dashboard/manageOrders">Manage All Orders</Link>
                  </li>
                  <li className="hover:bg-primary">
                    <Link to="/dashboard/manageProduct">Manage Product</Link>
                  </li>
                </>
              )}
              {!admin && (
                <>
                  <li className="hover:bg-primary">
                    <Link to="/dashboard/myorders">My Orders</Link>
                  </li>
                  <li className="hover:bg-primary">
                    <Link to="/dashboard/addReview">Add A Review</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;