import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
     toast("Please Go to payment page to Confirm order!");
    //  const order = {
    //    toolsId: _id,
    //    name: data.name,
    //    address: data.address,
    //    email: user?.email,
    //    phone: data.phone,
    //    quantity: data.quantity,
    //    tools: data.tools,
    //    price:data.price
    //  };
    }

    const handlethumb = (ind) => {
      setThumbIndex(ind);
      console.log(ind);
    };
  return (
    <div className="bg-base-200">
      <div className="">
        <div class="avatar placeholder ml-32  mt-8">
          <div class="bg-primary text-neutral-content rounded-full w-24 ">
            <span class="text-xl text-center text-white">
              {user?.displayName}
            </span>
          </div>
        </div>
        <p className="ml-32"> {user.email}</p>
      </div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <div className="flex flex-col">
            <div>
              <img src={picture} class="max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div className="flex  justify-center my-2 gap-2"></div>
          </div>

          <div>
            <h1 class="text-5xl font-bold ">{name}!</h1>
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
      <h1 class="text-5xl font-bold text-center py-6 ">Place Order here</h1>

      <div className="flex justify-center pb-9">
        <div class="card grow  w-full max-w-sm shadow-2xl">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto ">
              <div class="form-control mx-auto">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your Name here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("name")}
                />
              </div>
              <div class="form-control  mx-auto">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Your phone here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("phone")}
                />
              </div>
              <div class="form-control  mx-auto">
                <label class="label">
                  <span class="label-text">email</span>
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
                  <span class="label-text">Address</span>
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
                  <span class="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("productName")}
                />
              </div>
              <div class="form-control  mx-auto">
                <label class="label">
                  <span class="label-text">Price</span>
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
                  <span class="label-text">Quantity</span>
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
  );
};

export default Purchase;