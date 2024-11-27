import React from "react";
import { Link } from "react-router-dom";

const BlogSingleSlider = () => {
  return (
    <>
      <div className="items">
        <div className="wrapper flex flex-wrap lg:flex-nowrap">
          <div className="img">
            <img
              src="https://picsum.photos/1200/900?random=12"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="content mt-5 lg:ml-5 lg:mt-0 flex items-start justify-center flex-col">
            <div className="meta flex">
              <p className="author font-bold">User Name</p>
              <span className="mx-3">|</span>
              <p className="date font-bold">July 2, 2020</p>
            </div>
            <h2 className=" font-bold text-3xl">
              Your most unhappy customers are your greatest source of learning.
            </h2>
            <p className="description text-lg font-semibold">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <Link to="#" className="font-bold primary">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleSlider;
