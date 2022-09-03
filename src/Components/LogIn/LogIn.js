import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import github from "../../images/icons/github.png";
import google from "../../images/icons/google.png";
import './Login.css';

const LogIn = () => {
  const [email, setEmail] = useState([]);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  if (loading || googleLoading || githubLoading) {
  }
  if (user || googleUser || githubUser) {
    console.log(user);
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
    setEmail(data.email);
  };
  return (
    <div className="  bg-login  ">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse   py-0 px-0 w-3/6 bg-gradient-to-r from-secondary to-primary justify-between rounded-lg">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-primary to-secondary   rounded-lg">
            <div class="card-body  ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control mx-auto ">
                  <label class="label">
                    <p class="label-text ">
                      Email <span className="text-red-600">*</span>
                    </p>
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
                <div class="form-control mx-auto">
                  <label class="label">
                    <p class="label-text ">
                      Password <span className="text-red-600">*</span>
                    </p>
                  </label>
                  <input
                    type="password"
                    placeholder="password here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is reqiured",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be more than 6 charecters",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.password?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                  <a
                    onClick={async () => {
                      await sendPasswordResetEmail(email);
                      alert("Sent email");
                    }}
                    href=""
                    class="label-text-alt  font-bold"
                  >
                    Forget Password?
                  </a>
                </div>

                <input
                  type="submit"
                  value="Log in"
                  className="btn bg-secondary  rounded-full 
                 hover:bg-base-100 hover:text-white hover:btn-accent mt-5 text-accent "
                />
              </form>
            </div>
          </div>
          <div class=" lg:text-left pl-11  ">
            {/* <img className="w-14 h-16 " src={logo} alt="" /> */}
            <div>
              <h1 class="  text-3xl font-bold  mb-5 ">Welcome To Sphere !!</h1>
              <p>
                Computer parts and hardware predominantly come from Southeast
                Asia— places like Malaysia, Indonesia, and Taiwan.
              </p>
              <div className="flex  mt-4 ">
                <button onClick={() => signInWithGoogle()}>
                  <img className="w-11 h-11 mr-4" src={google} alt="" />
                </button>
                <button onClick={() => signInWithGithub()}>
                  <img className="w-11 h-11 mr-4" src={github} alt="" />
                </button>
              </div>
              <p className=" font-light  ">
                Create new account
                <Link to="/signup" className="font-bold ">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
