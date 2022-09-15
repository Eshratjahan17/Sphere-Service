import React from 'react';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
   const onSubmit = (data) => {
    //  const email = data.email;
    //  const name = data.displayName;
    //  const phone = data.phone;
    //  const url = data.url;
    //  const address = data.address;
    //  const updateUser = { email, name, phone, url, address };
     console.log(data);
    //  fetch(`https://dry-beyond-73074.herokuapp.com/user/${currentEmail}`, {
    //    method: "PUT",
    //    headers: {
    //      "content-type": "application/json",
    //      authorization: `Bearer ${localStorage.getItem(`accessToken`)}`,
    //    },
    //    body: JSON.stringify(updateUser),
    //  })
    //    .then((res) => res.json())
    //    .then((data) => {
    //      toast.success("Data updated Succesfully");
    //      reset({
    //        displayName: " ",
    //        phone: " ",
    //        address: " ",
    //        email: " ",
    //        url: " ",
    //      });
    //    });
   };
  return (
    <div className="bg-white lg:m-24 p-10 lg:flex items-center  
    shadow-lg
    
    ">
      <div className=" ">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <h1 className="font-bold text-xl">Eshrat jahan</h1>
        <div></div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div>
        <form
          className="w-full  mx-auto lg:pl-8 "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
          <div className="lg:flex lg:gap-3 ">
            <div class="form-control  mx-auto">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name here"
                class="input input-bordered w-full max-w-xs"
                {...register("displayName")}
              />
            </div>
            <div class="form-control  mx-auto">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email here"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is reqiured",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="lg:flex lg:gap-3">
            <div class="form-control  mx-auto">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone here"
                class="input input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "This filed is reqiured",
                  },
                })}
              />
              <label class="label">
                {errors.phone?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control  mx-auto">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address here"
                class="input input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "This filed is reqiured",
                  },
                })}
              />
              <label class="label">
                {errors.address?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div class="form-control  mx-auto">
            <label class="label">
              <span class="label-text">Image URL</span>
            </label>
            <input
              type="url"
              placeholder="link here"
              class="input input-bordered w-full max-w-xs"
              {...register("url", {
                required: {
                  value: true,
                  message: "Field is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.url?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.url.message}
                </span>
              )}
            </label>
          </div>

          <input
            type="submit"
            value="Save"
            className="btn btn-primary rounded-lg "
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;