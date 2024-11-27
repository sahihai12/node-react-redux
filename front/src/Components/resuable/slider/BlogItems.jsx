import React from "react";
import { Link } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
const BlogItems = () => {
  return (
    <div className="items ">
      <div className="wrapper m-3 p-3 shadow-lg b-radius card_bg">
        <div className="img overflow-hidden">
          <img
            src="https://picsum.photos/768/500?random=2"
            alt=""
            className="b-radius"
          />
        </div>
        <div className="content mt-3">
          <div className="blog_meta flex justify-between">
            <div className="meta flex items-center">
              <p className="author font-bold">User Name</p>
              <span className="mx-3 opacity-0">|</span>
              <p className="date font-bold">July 2, 2020</p>
            </div>
            <div className="likes flex items-center">
              <span className="mr-1">297</span>
              <BsSuitHeartFill className="text-red-600" />{" "}
            </div>
          </div>
          <h3 className="font-bold text-xl">
            Your most unhappy customers are your greatest source of learning.
          </h3>
          <p className="blog_excerpt ellipsis">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{" "}
          </p>
          <Link to="#" className="font-bold primary text-md ">
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
