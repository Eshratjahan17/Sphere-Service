import React from 'react';

const User = ({ user }) => {
  const {email,role}=user;
  console.log(user);
 const makeAdmin = () => {
   fetch(`http://localhost:5000/user/admin/${email}`, {
     method: "PUT",
     headers: {
       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
     },
   })
     .then((res) => {
       return res.json();
     })
     .then((data) => {
       if (data.modifiedCount > 0) {
      console.log(data);
       }
     });
 };
  return (
    <div className="bg-white">
      <tr className="flex justify-between ">
        <td className="">
          <div className="flex items-center space-x-5">
            <div className="avatar">
              <div className="">
                <div class=" rounded-full bg-primary p-3">
                  <div class="text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold">{user?.email}</div>
            </div>
          </div>
        </td>
        <td className="">
          {role !== "admin" ? (
            <button onClick={makeAdmin} className="btn btn-primary  btn-sm text-white">
              Make Admin
            </button>
          ) : (
            <button onClick={makeAdmin} className="btn btn-slate-100 btn-sm text-white">
              Make Admin
            </button>
          )}
        </td>
      </tr>
    </div>
  );
};

export default User;