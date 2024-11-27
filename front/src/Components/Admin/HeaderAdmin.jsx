import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../resuable/Container";

const HeaderAdmin = () => {
  return (
    <header className="admin_header shadow-xl card_bg z-50">
      <Container>
        <div className="flex items-center justify-between">
          <div className="site_logo logo">
            <Link to="/">Eccomerce</Link>
          </div>
          <ul className="list flex">
            <li className="mx-3 text-lg">
              <NavLink end to={"/dashboard"} className="font-bold capitalize">
                Home
              </NavLink>
            </li>
            <li className="mx-3 text-lg">
              <NavLink
                end
                to={"/dashboard/blog"}
                className="font-bold capitalize"
              >
                Blog
              </NavLink>
            </li>
            <li className="mx-3 text-lg">
              <NavLink
                end
                to={"/dashboard/product"}
                className="font-bold capitalize"
              >
                product
              </NavLink>
            </li>
            <li className="mx-3 text-lg">
              <NavLink
                end
                to={"/dashboard/track-order"}
                className="font-bold capitalize"
              >
                My Orders
              </NavLink>
            </li>
          </ul>
          <div className="info">
            <p className="font-bold text-lg">
              Hello ,<span className="primary rob-cond text-xl">User Name</span>
              <span className=""></span>
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderAdmin;
