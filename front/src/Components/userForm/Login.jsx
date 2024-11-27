import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/Actions/user.action";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const { userDeatils, login } = useSelector((state) => state.user);
  const [showerr, setshowerr] = useState(false);
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({});
  const handleChange = (name, value) => {
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(formdata));
  };
  if (login) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="wrapper">
        <h3 className="font-black">Login</h3>

        <form className="loginForm">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            id="username"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            placeholder="password"
            name="cpassword"
            id="cpassword"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          {/* {userDeatils ? (
            <p
              className={
                userDeatils.error.length === 0 ? "hidden" : "font-bold"
              }
            >
              <span className="text-red-600 font-bold">Error : </span>
              {userDeatils.error["email"] || userDeatils.error["password"]}
            </p>
          ) : null} */}
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
          <Link to={"/register"} className="font-bold text-lg">
            Create a <span className="primary">New Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
