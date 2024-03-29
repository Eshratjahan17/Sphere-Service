import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email=user.email;
  const [myOrders, setMyOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(null);
  useEffect(() => {
    if (user) {
      fetch(`https://sphere-service-server.onrender.com/myorders?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyOrders(data);
          console.log(myOrders);
        });
    }
  }, [user,myOrders]);
  return (
    <div className="overflow-x-auto lg:m-24">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="bg-primary">SL</th>
            <th className="bg-primary">Product Name</th>
            <th className="bg-primary flex items-center">Payment</th>
            <th className="bg-primary ">Delete</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order, index) => (
            <>
              <tr>
                <th>{index + 1}</th>
                <td>{order?.toolsName}</td>
                <td>
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>
                  </Link>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;