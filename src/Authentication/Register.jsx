import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const notify = () => toast("Wow so easy!");
  const { createUser, updateData, handleGoogle, handleGithub } = useContext(AuthContext);
  // console.log({createUser});
  // const[error, serError] = useState('')
  const handelRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirmPassword = from.confirmPassword.value;
    console.log(password);
    // serError('')

    if (!password === confirmPassword) {
      toast("password don't match");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      toast("please add one uppercase letter");
      return;
    } else if (!/^(?=.*[a-z])/.test(password)) {
      toast("Password must have at least one Lowercase Character");
      return;
    } else if (
      !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
    ) {
      toast("Password must contain at least one Special Symbol");
      return;
    } else if (password.length < 8) {
      toast("password must be be 8 character");
    }

    // console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        from.reset();
        updateData(result.user, name, photo)
          .then()
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });

    };
    const handleGoogleLogin = () =>{
      handleGoogle()
      .then(result =>{
        const log = result.user;
        console.log(log);
      })
      .catch(error => console.log(error))
    }
    const handleGithubLogin = () =>{
      handleGithub()
      .then(result =>{
        const log = result.user;
        console.log(log);
      })
      .catch(error => console.log(error))
    }


  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer position="top-center" autoClose={6000} />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl   font-bold">Please Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm-password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <Link to="/login">
                  <button className="btn btn-link -ml-3">
                    Already have an account
                  </button>
                </Link>
              </div>
              {/* <p className="text-red-700">{error}</p> */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-black ">
                    or
                  </span>
                </div>
                <button className="btn btn-primary mb-3 w-full" onClick={handleGoogleLogin}>Login in with Google</button>
                <button className="btn btn-primary w-full" onClick={handleGithubLogin}>Login in with Github</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
