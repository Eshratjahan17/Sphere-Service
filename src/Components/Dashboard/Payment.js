import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(
  "pk_test_51LjwqjJGxR1uvNyoogB1IuOf6srKsTUPIoIWc5vNIQvi3BjgMivjquqtVf4VFNvlIt6ApfZvXP60v9sd2JPnkmeI00uLLvV4Mm"
);


const Payment = () => {
  
  console.log(stripePromise);
  
  const [orderProduct,setOrderProduct]=useState([]);
   const { id } = useParams();
   const url = `https://sphere-service-server.onrender.com/order/${id}`;
   useEffect(() => {
     fetch(url, {
       method: "GET",
       headers: {
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
       },
     })
       .then((res) => res.json())
       .then((data) => setOrderProduct(data));
   }, []);
  
   console.log(orderProduct);
   
   
  return (
    <div>
      <h1 className="text-center text-primary text-2xl font-bold pt-6">
        Order Id:{id}
      </h1>
      <div class="card w-50 max-w-md bg-accent shadow-xl my-12 mx-auto text-white">
        <div class="card-body">
          <p className="text-success font-bold">Hello, </p>
          <h2 class="card-title">
            <span className="text-sm">Please Pay for:</span>
            {orderProduct?.toolsName}
          </h2>

          <p>
            <span className="text-sm">Please pay: $</span>
            {orderProduct?.price}
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 ml-12">
        <div class="card-body ">
          <Elements stripe={stripePromise}>
            <CheckoutForm pric={orderProduct.price} stripe={stripePromise} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;