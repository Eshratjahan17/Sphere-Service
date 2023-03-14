import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';
import Star from '../Star';



const AddReview = () => {
  const [ratings,setRatings]=useState(null);
  const [massage,setMassage]=useState("");
   const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
   if (loading) {
     return <Loader></Loader>;
   }
const handleSubmit = () => {
   const name = user.displayName;
;
   const email = user.email;
   
   const rating = ratings;
   const picture = user.photoURL;
   const review = massage;
   const userReview = { name, email, review, rating, picture };

  console.log(userReview);
   fetch("https://sphere-service-server.onrender.com/addreview", {
     method: "POST",
     body: JSON.stringify(userReview),
     headers: {
       "content-type": "application/json",
     },
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       window.alert("Review added");
         navigate("/");
     });
};
const handleMassage=(e)=>{
 setMassage(e.target.value);
 console.log(massage);

}
 
console.log(user);
console.log(ratings);
  

  return (
    <div className="lg:bg-white lg:m-24 p-9 lg:flex items-center justify-center">
      <div>
        <div className="form-control">
          <div className='flex '>
            {[...Array(5)].map((star,i) => {
              const ratingValue=i+1;


              return (
                <Star
                  star={star}
                  i={i}
                  ratingValue={ratingValue}
                  ratings={ratings}
                  setRatings={setRatings}
                
                 
                ></Star>
              );

            }
             
            )}
          </div>

          <label className="label">
            <span className="text-2xl font-bold ">Write a Review</span>
          </label>
          <textarea
          onBlur={handleMassage}
            className="textarea textarea-bordered h-24 w-96"
            placeholder="write here"
          ></textarea>
          <input 
          onClick={handleSubmit}
          type="submit"
          value="Post Review"
          className="btn btn-primary mt-6 text-white"/>
        </div>
      </div>
    </div>
  );
};

export default AddReview;