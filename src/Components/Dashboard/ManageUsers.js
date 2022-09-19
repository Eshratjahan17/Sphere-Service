import React, { useEffect, useState } from 'react';
import User from './User';

const ManageUsers = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
fetch("http://localhost:5000/user", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem(`accessToken`)}`,
  },
})
  .then((res) => res.json())
  .then((data) =>{
setUsers(data);
console.log(users);

  } );

  },[users])



  
  return (
    <div className="lg:m-24">
      <div className="overflow-x-auto ">
        <table className="table ">
          {/* <!-- head --> */}
          <thead >
            <tr>
              <th className="bg-primary text-xl  text-white">Users</th>

             
            </tr>
          </thead>
          <tbody  className='w-full'>
            {users?.map((user, index) => (
              <User index={index} user={user}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;