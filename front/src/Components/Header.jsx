import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSignOutAlt, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Container from "./resuable/Container";
import { AiFillHeart } from "react-icons/ai";
import { logout } from "../Redux/Actions/user.action";

const Header = () => {
  const userDeatils = useSelector((state) => state.user.userDeatils);
  const dispatch = useDispatch();

  return (
    <>
      <header className="mx-auto shadow-md z-50">
        <Container>
          <div className="flex flex-wrap items-center justify-between">
            <div className="logo">
              <NavLink to={"/"}> Ecommerce</NavLink>
            </div>
            <ul className="flex items-center nav">
              <li className="navLink">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="navLink">
                <NavLink to={"/blogs"}>Blog</NavLink>
              </li>
              <li className="navLink">
                <NavLink to={"/products"}>Product</NavLink>
              </li>
              <li className="navLink">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              {userDeatils.length !== 0 && (
                <li className="navLink">
                  <NavLink to={"/dashboard"}>Dasboard</NavLink>
                </li>
              )}
            </ul>
            <ul className="flex items-center">
              <li className="mr-4">
                <button className="flex items-center">
                  <AiFillHeart />
                  <span className="ml-1 hidden">Wishlist</span>{" "}
                </button>
              </li>
              <li className="mr-4">
                <button className="flex items-center">
                  <FaShoppingCart />
                  <span className="ml-1 hidden">Cart</span>{" "}
                </button>
              </li>
              {userDeatils.length !== 0 ? (
                <>
                  {" "}
                  <li className="mr-4 cursor-pointer">
                    <Link to={"/dashboard"}>
                      <FaUserAlt />
                    </Link>
                  </li>
                  <li>
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={(e) => dispatch(logout())}
                    >
                      <FaSignOutAlt />
                      <span className="ml-1">Logout</span>
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    className="flex items-center cursor-pointer"
                    to={"/login"}
                  >
                    <FaSignOutAlt />
                    <span className="ml-1">LogIn</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
