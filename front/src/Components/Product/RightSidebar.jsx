import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const RightSidebar = () => {
  const [price, setprice] = useState([20, 37]);
  const handlePrice = (newValue) => {
    setprice(newValue);
  };
  return (
    <>
      <aside className="right_sidebar mr-3">
        <div className="wrapper">
          <div className="filter py-2">
            <div className="heading text-xl font-extrabold">Categories</div>
            <ul className="lists">
              <li>
                Men's <span className="primary">(101)</span>
              </li>
              <li>
                Women's <span className="primary">(101)</span>
              </li>
              <li>
                Children's <span className="primary">(101)</span>
              </li>
            </ul>
          </div>

          <div className="filter py-2 mt-3">
            <div className="heading text-xl font-extrabold">Color</div>
            <ul className="flex flex-wrap colors">
              <li>
                <div
                  className="w-7 h-7 m-1"
                  style={{ backgroundColor: "red" }}
                ></div>
              </li>
              <li>
                <div
                  className="w-7 h-7 m-1"
                  style={{ backgroundColor: "blue" }}
                ></div>
              </li>
              <li>
                <div
                  className="w-7 h-7 m-1"
                  style={{ backgroundColor: "pink" }}
                ></div>
              </li>
              <li>
                <div
                  className="w-7 h-7 m-1"
                  style={{ backgroundColor: "yellow" }}
                ></div>
              </li>
              <li>
                <div
                  className="w-7 h-7 m-1"
                  style={{ backgroundColor: "orange" }}
                ></div>
              </li>
              <li>
                <div
                  className="w-7 h-7 m-1"
                  style={{ backgroundColor: "green" }}
                ></div>
              </li>
              <li>
                <div
                  className="w-7 h-7 m-1"
                  style={{ backgroundColor: "brown" }}
                ></div>
              </li>
              <li>
                <div
                  className="w-7 h-7 m-1"
                  style={{ backgroundColor: "gray" }}
                ></div>
              </li>
            </ul>
          </div>

          <div className="filter py-2 mt-3">
            <div className="heading text-xl font-extrabold">Price</div>
            <Slider
              getAriaLabel={() => "Temperature range"}
              valueLabelDisplay="auto"
              value={price}
              onChange={handlePrice}
            />
          </div>

          <div className="filter py-2 mt-3">
            <div className="heading text-xl font-extrabold">Brand</div>
            <ul className="lists">
              <li>
                Highlander <span className="primary">(101)</span>
              </li>
              <li>
                Ajio <span className="primary">(101)</span>
              </li>
              <li>
                Zara <span className="primary">(101)</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RightSidebar;
