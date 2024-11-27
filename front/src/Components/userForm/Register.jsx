import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../Redux/Actions/user.action";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const { user } = useSelector((state) => state);
  const [userimage, setuserimage] = useState(null);
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({});
  const handleChange = (name, value) => {
    if (name === "contact") {
      setformdata({
        ...formdata,
        [name]: +value,
      });
    } else {
      setformdata({
        ...formdata,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    let fd = new FormData();
    e.preventDefault();
    fd.append("userimage", userimage);
    for (const [key, value] of Object.entries(formdata)) {
      console.log(`${key}: ${value}`);
      fd.append(key, value);
    }
    dispatch(userRegister(fd));
  };
  if (user.login) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="login">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="wrapper">
        <h3 className="font-black">Register</h3>
        <form
          className="loginForm registerform"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="flex">
            <div className="input">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="full_name"
                id="full_name"
                autoComplete="off"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                autoComplete="off"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
          </div>

          <div className="flex">
            <div className="input">
              <label htmlFor="email">email</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                autoComplete="off"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="contact">contact</label>
              <input
                type="contact"
                placeholder="contact"
                name="contact"
                id="contact"
                autoComplete="off"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
          </div>

          <div className="flex">
            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                placeholder="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
          </div>

          <div className="flex">
            <div className="input w-full">
              <label htmlFor="image">profile image</label>
              <input
                type="file"
                name="userimage"
                id="image"
                autoComplete="off"
                onChange={(e) => setuserimage(e.target.files[0])}
                className="w-full"
              />
            </div>
          </div>
          <p className={user.error.length === 0 ? "hidden" : "font-bold"}>
            <span className="text-red-600 font-bold">Error : </span>
            {user.error["email"] ||
              user.error["password"] ||
              user.error["username"]}
          </p>
          <div className="block text-center my-5">
            <button
              className="mainBtnCol"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="border-t border-b py-5 mb-5 border-gray-200 social flex items-center justify-between">
          <div className="flex justify-center items-center text-lg shadow-lg">
            <FcGoogle className="mr-2" /> Google
          </div>
          <div className="flex justify-center items-center text-lg shadow-lg">
            <FaFacebook className="mr-2 text-blue-700" /> Facebook
          </div>
        </div>
        <p className="text-center">
          <Link to={"/login"} className="font-bold text-lg">
            Already have an<span className="primary"> Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
