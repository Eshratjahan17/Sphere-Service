import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content lg:p-24 bg-base-200 ">
          <Outlet></Outlet>
          {/* <!-- Page content here --> */}
        </div>
        <div class="drawer-side">
          <label for="dashboard-drawer" class="drawer-overlay"></label>
          <ul class="menu p-3 overflow-y-auto w-52 bg-accent  text-white ">
            {/* <!-- Sidebar content here --> */}
            <li className="hover:bg-primary">
              <Link to="/dashboard">My Profile</Link>
            </li>

            <>
              <li className="hover:bg-primary">
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
              <li className="hover:bg-primary">
                <Link to="/dashboard/addReview">Add A Review</Link>
              </li>
            </>

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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;