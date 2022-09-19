import React from 'react';

const User = ({ user }) => {
  const {email}=user;
 const makeAdmin = () => {
   fetch(`http://localhost:5000/user/admin/${email}`, {
     method: "PUT",
     headers: {
       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
     },
   })
     .then((res) => {
       if (res.status === 403) {
         window.error("You can not make admin");
       }
       return res.json();
     })
     .then((data) => {
       if (data.modifiedCount > 0) {
         window.success("Make Admin successful");
       }
     });
 };
  return (
    <div className="bg-white">
      <tr className="flex justify-between ">
        <td className="">
          <div className="flex items-center space-x-5">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{user?.email}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className="">
          <button onClick={makeAdmin} className="btn btn-primary btn-sm ">
            Make Admin
          </button>
        </td>
      </tr>
    </div>
  );
};

export default User;