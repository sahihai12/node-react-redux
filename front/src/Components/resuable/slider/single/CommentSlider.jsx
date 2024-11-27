import React from "react";
import { AiFillStar } from "react-icons/ai";

const CommentSlider = () => {
  return (
    <div>
      <div className="items flex items-center justify-center mb-2 flex-col">
        <img
          src="https://source.unsplash.com/random/110x110/?girl"
          alt=""
          className="b-radius-50 shadow mr-3"
        />
        <div className="user_deatils text-center">
          <div className="review w-full mt-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus quos iste, aliquam harum fuga dignissimos. Dolor
              deleniti rem distinctio exercitationem!
            </p>
          </div>
          <h4 className="name text-lg font-bold">
            Juila Ann
            <span className="spacer mx-2 text-grat-200">|</span>
            <span className="text-gray-600 text-sm font-bold ">
              8 July , 2022
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CommentSlider;
