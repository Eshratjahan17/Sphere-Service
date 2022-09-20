import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loader from './Shared/Loader';

const Purchase = () => {
   let { id } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [thumbIndex, setThumbIndex] = useState(0);
const [productDetails,setProductDetails]=useState([]);
const [isLoading,setIsLoading]=useState(false);
const [shippingDetails, setshippingDetails] = useState([]);
 const {
   register,
   handleSubmit,
   reset,
   formState: { errors },
 } = useForm({});
 
    useEffect(() => {
      axios.get(`http://localhost:5000/products/${id}`).then((res) => {
        if (isLoading) {
          <Loader></Loader>;
        } else {
          setProductDetails(res.data);
        }
      });
    }, [productDetails]);
    const { picture, name, about, minimum, stock, madeIn, brand, price } =
      productDetails;
    // console.log(picture, name);
    const onSubmit = (data) => {
     console.log(data,errors);

     setshippingDetails(data);
      const order = {
        toolsId:data?._id,
        toolsName:data?.productName,
        address: data?.address,
        email: user?.email,
        quantity: data?.quantity,
        price: data?.price,
       
      };
      console.log(order);
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.acknowledged) {
            console.log("To checkOut Please go to Payment Page ");
           
          }
        });
    
    }

    
  return (
    <div className="bg-base-200  lg:flex lg:px-28 lg:py-28 ">
      <div className="  pl-10  ">
        <div className="card w-96 bg-white shadow-xl">
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p class="py-6">
              <p class="">{about}</p>
              <span className="font-bold text-lg">Price:</span>
              {price}
            </p>
            <p class="">
              <span className="font-bold text-lg">Available: </span>
              {stock}
            </p>
            <p class="">
              <span className="font-bold text-lg"> Minimum-Order: </span>
              {minimum}
            </p>
            <p class="">
              <span className="font-bold text-lg">Brand: </span>
              {brand}
            </p>
            <p class="">
              <span className="font-bold text-lg">Made In:</span>
              {madeIn}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:pl-20 ">
        <div className="flex justify-center pb-9 ">
          <div class="card grow  w-full max-w-sm shadow-2xl">
            <div class="card-body bg-accent ">
              <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto ">
                <div class="form-control mx-auto">
                  <label class="label">
                    <span class="label-text text-white text-lg">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your Name here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("productName")}
                  />
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text text-white text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("email")}
                  />
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text text-white text-lg">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("address")}
                  />
                </div>

                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text text-white text-lg">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price here"
                    defaultValue={price}
                    class="input input-bordered w-full max-w-xs"
                    {...register("price")}
                  />
                </div>
                {/* quantity */}
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text text-white text-lg">Quantity</span>
                  </label>
                  <input
                    name="quantity"
                    type="number"
                    class="input input-bordered w-full max-w-xs"
                    defaultValue={minimum}
                    placeholder={minimum}
                    {...register("quantity", {
                      max: { value: stock, message: "Stock Out" },
                      min: {
                        value: minimum,
                        message: `You Can not order less then ${minimum}`,
                      },
                    })}
                  />
                  <label class="label">
                    {errors.quantity?.type === "max" && (
                      <span class="label-text-alt text-red-500">
                        {errors.quantity.message}
                      </span>
                    )}
                    {errors.quantity?.type === "min" && (
                      <span class="label-text-alt text-red-500">
                        {errors.quantity.message}
                      </span>
                    )}
                  </label>
                </div>
                {errors.quantity?.type === "max" ||
                errors.quantity?.type === "min" ? (
                  <input
                    type="submit"
                    value="Go to Checkout"
                    disabled
                    className="btn w-1/2 flex justify-center ml-40 mt-7 rounded-full  hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white  "
                  />
                ) : (
                  <input
                    type="submit"
                    value="Go to Checkout"
                    className="btn w-1/2 flex justify-center ml-40 mt-7 rounded-full  border-none hover:bg-primary  bg-white text-accent  "
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;