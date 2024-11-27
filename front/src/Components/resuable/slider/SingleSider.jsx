import React from "react";
import Slider from "react-slick";
import "./slick.css";
import BlogSingleSlider from "./single/BlogSingleSlider";
import ProductSingleSlider from "./single/ProductSingleSlider";
import CommentSlider from "./single/CommentSlider";

const SingleSider = ({ heading, type }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container mx-auto single_slider">
        {type === "blog" ? (
          <Slider {...settings} className="single_slider">
            <BlogSingleSlider />
            <BlogSingleSlider />
            <BlogSingleSlider />
          </Slider>
        ) : type === "product" ? (
          <Slider {...settings} className="single_slider">
            <ProductSingleSlider />
            <ProductSingleSlider />
            <ProductSingleSlider />
          </Slider>
        ) : (
          <Slider {...settings} className="single_slider">
            <CommentSlider />
            <CommentSlider />
          </Slider>
        )}
      </div>
    </>
  );
};

export default SingleSider;
