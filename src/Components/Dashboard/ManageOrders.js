import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader';

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  if(isLoading){
    <Loader></Loader>
  }
   useEffect(() => {
     fetch("")
       .then((res) => res.json())
       .then((data) => {
         if (isLoading) {
           return <Loader></Loader>;
         } else {
           setAllOrders(data);
         }
       });
   }, [allOrders, orderStatus]);

   const handleShipping = (id) => {
     fetch(``, {
       method: "PUT",
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.modifiedCount > 0) {
           setOrderStatus(data);
         }
       });
   };

  return (
    <div className="lg:m-24">
      <h1 className="text-primary font-bold text-center text-2xl">
        Manage all orders
      </h1>
      <div class="overflow-x-auto">
        <table class="lg:table w-full sm:w-1/3 ">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Product name</th>
              <th>Payment Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order._id}</td>
                <td>{order.tools}</td>

                <td>
                  {order?.paid ? (
                    <button class="btn btn-xs btn-primary ">Paid</button>
                  ) : (
                    <button class="btn btn-xs btn-primary ">Unpaid</button>
                  )}
                </td>
                <td>
                  {order.status === "shipped" ? (
                    <button
                      onClick={() => handleShipping(order._id)}
                      class="btn btn-xs btn-primary "
                    >
                      Shipped
                    </button>
                  ) : (
                    <button
                      onClick={() => handleShipping(order._id)}
                      class="btn btn-xs btn-primary "
                    >
                      Pending
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;