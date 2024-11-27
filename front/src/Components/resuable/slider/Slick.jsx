import React from "react";
import Slider from "react-slick";
import BlogItems from "./BlogItems";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import "./slick.css";
import { Link } from "react-router-dom";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FiArrowLeftCircle />
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} , 'primary'`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FiArrowRightCircle />
    </div>
  );
}
const Slick = ({ heading }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1381,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto px-2 lg:py-3 lg:px-0 slider_wrapper py-16">
        <div className="flex items-center">
          <Link to={"/blogs"}>
            <h2 className="text-4xl font-bold rob-cond">
              All <span className="primary font-extrabold">{heading}</span>
            </h2>
          </Link>
        </div>
        <Slider {...settings} className="slider">
          <div style={{ background: "#F4CC67", textAlign: "center" }}>
            <div className="items">
              <BlogItems />
            </div>
          </div>
          <div style={{ background: "#F4CC67", textAlign: "center" }}>
            <div className="items">
              <BlogItems />
            </div>
          </div>
          <div style={{ background: "#F4CC67", textAlign: "center" }}>
            <div className="items">
              <BlogItems />
            </div>
          </div>
          <div style={{ background: "#F4CC67", textAlign: "center" }}>
            <div className="items">
              <BlogItems />
            </div>
          </div>
          <div style={{ background: "#F4CC67", textAlign: "center" }}>
            <div className="items">
              <BlogItems />
            </div>
          </div>
          <div style={{ background: "#F4CC67", textAlign: "center" }}>
            <div className="items">
              <BlogItems />
            </div>
          </div>
          <div style={{ background: "#F4CC67", textAlign: "center" }}>
            <div className="items">
              <BlogItems />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Slick;
