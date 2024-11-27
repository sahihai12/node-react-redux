import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Container from "../resuable/Container";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoCalendar } from "react-icons/go";
import { BsSuitHeartFill, BsPlusCircle } from "react-icons/bs";

const AdminBlog = () => {
  const [showFilter, setshowFilter] = useState(false);
  return (
    <div className="blog_container_admin">
      <Container>
        <div className="search_bar mb-2">
          <div className="input_warpper flex card_bg p-3 b-radius w-full items-center">
            <input
              placeholder="search here"
              className="w-full bg-transparent"
            />
            <BiSearchAlt className="text-xl text-gray-600" />
            <Link
              className="add_new shadow-xl b-radius-50 bg-white p-2 ml-3"
              to={"/dashboard/blog/create"}
            >
              <BsPlusCircle className="text-2xl " />
            </Link>
          </div>
        </div>

        <div className="results p-3">
          <div className="product_header">
            <div className="flex justify-between">
              <div className="total">
                <p className="text-md rob-cond text-gray-500">
                  Total : <span className="primary font-semibold">96</span>{" "}
                  product's found
                </p>
              </div>
              <div
                className="select_warpper relative w-32"
                onClick={() => setshowFilter(!showFilter)}
              >
                <div className="select flex items-center justify-between shadow-md">
                  Sort By <BiChevronDown />
                </div>
                <ul
                  className={`list ${showFilter ? "inline-block" : "hidden"}`}
                >
                  <li value="">Most Liked</li>
                  <li value="">Oldest</li>
                  <li value="">Newest</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="items w-full md:w-6/12 lg:w-6/12 ">
              <div className="wrapper m-3 p-4 shadow-lg flex-nowrap md:flex-wrap lg:flex-nowrap b-radius card_bg flex items-center relative">
                <div className="img overflow-hidden">
                  <img
                    src="https://picsum.photos/768/900?random=7"
                    alt=""
                    className="b-radius"
                  />
                </div>
                <div className="content ml-3">
                  <div className="blog_meta flex justify-between">
                    <div className="meta flex items-center">
                      <GoCalendar className="primary mr-2" />
                      <p className="date font-bold">July 2, 2020</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl my-2">
                    <Link to={"/blogs/singleid"}>
                      Your most unhappy customers are your greatest source of
                      learning.
                    </Link>
                  </h3>
                  <p className="blog_excerpt ellipsis">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                  <div className="flex justify-between">
                    <Link to="#" className="font-bold primary text-md ">
                      Know More
                    </Link>
                    <div className="likes flex items-center">
                      <span className="mr-1">297</span>
                      <BsSuitHeartFill className="text-red-600" />{" "}
                    </div>
                  </div>
                </div>
                <h2 className="abs_content rob-cond lg:text-2xl xl:text-5xl">
                  Julia Axe
                </h2>
              </div>
            </div>
            <div className="items w-full md:w-6/12 lg:w-6/12 ">
              <div className="wrapper m-3 p-4 shadow-lg flex-nowrap md:flex-wrap lg:flex-nowrap b-radius card_bg flex items-center relative">
                <div className="img overflow-hidden">
                  <img
                    src="https://picsum.photos/768/900?random=4"
                    alt=""
                    className="b-radius"
                  />
                </div>
                <div className="content ml-3">
                  <div className="blog_meta flex justify-between">
                    <div className="meta flex items-center">
                      <GoCalendar className="primary mr-2" />
                      <p className="date font-bold">July 2, 2020</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl my-2">
                    <Link to={"/blogs/singleid"}>
                      Your most unhappy customers are your greatest source of
                      learning.
                    </Link>
                  </h3>
                  <p className="blog_excerpt ellipsis">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                  <div className="flex justify-between">
                    <Link to="#" className="font-bold primary text-md ">
                      Know More
                    </Link>
                    <div className="likes flex items-center">
                      <span className="mr-1">297</span>
                      <BsSuitHeartFill className="text-red-600" />{" "}
                    </div>
                  </div>
                </div>
                <h2 className="abs_content rob-cond lg:text-2xl xl:text-5xl">
                  Julia Axe
                </h2>
              </div>
            </div>
            <div className="items w-full md:w-6/12 lg:w-6/12 ">
              <div className="wrapper m-3 p-4 shadow-lg flex-nowrap md:flex-wrap lg:flex-nowrap b-radius card_bg flex items-center relative">
                <div className="img overflow-hidden">
                  <img
                    src="https://picsum.photos/768/900?random=8"
                    alt=""
                    className="b-radius"
                  />
                </div>
                <div className="content ml-3">
                  <div className="blog_meta flex justify-between">
                    <div className="meta flex items-center">
                      <GoCalendar className="primary mr-2" />
                      <p className="date font-bold">July 2, 2020</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl my-2">
                    <Link to={"/blogs/singleid"}>
                      Your most unhappy customers are your greatest source of
                      learning.
                    </Link>
                  </h3>
                  <p className="blog_excerpt ellipsis">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                  <div className="flex justify-between">
                    <Link to="#" className="font-bold primary text-md ">
                      Know More
                    </Link>
                    <div className="likes flex items-center">
                      <span className="mr-1">297</span>
                      <BsSuitHeartFill className="text-red-600" />{" "}
                    </div>
                  </div>
                </div>
                <h2 className="abs_content rob-cond lg:text-2xl xl:text-5xl">
                  Julia Axe
                </h2>
              </div>
            </div>
            <div className="items w-full md:w-6/12 lg:w-6/12 ">
              <div className="wrapper m-3 p-4 shadow-lg flex-nowrap md:flex-wrap lg:flex-nowrap b-radius card_bg flex items-center relative">
                <div className="img overflow-hidden">
                  <img
                    src="https://picsum.photos/768/900?random=5"
                    alt=""
                    className="b-radius"
                  />
                </div>
                <div className="content ml-3">
                  <div className="blog_meta flex justify-between">
                    <div className="meta flex items-center">
                      <GoCalendar className="primary mr-2" />
                      <p className="date font-bold">July 2, 2020</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl my-2">
                    <Link to={"/blogs/singleid"}>
                      Your most unhappy customers are your greatest source of
                      learning.
                    </Link>
                  </h3>
                  <p className="blog_excerpt ellipsis">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                  <div className="flex justify-between">
                    <Link to="#" className="font-bold primary text-md ">
                      Know More
                    </Link>
                    <div className="likes flex items-center">
                      <span className="mr-1">297</span>
                      <BsSuitHeartFill className="text-red-600" />{" "}
                    </div>
                  </div>
                </div>
                <h2 className="abs_content rob-cond lg:text-2xl xl:text-5xl">
                  Julia Axe
                </h2>
              </div>
            </div>
            <div className="items w-full md:w-6/12 lg:w-6/12 ">
              <div className="wrapper m-3 p-4 shadow-lg flex-nowrap md:flex-wrap lg:flex-nowrap b-radius card_bg flex items-center relative">
                <div className="img overflow-hidden">
                  <img
                    src="https://picsum.photos/768/900?random=3"
                    alt=""
                    className="b-radius"
                  />
                </div>
                <div className="content ml-3">
                  <div className="blog_meta flex justify-between">
                    <div className="meta flex items-center">
                      <GoCalendar className="primary mr-2" />
                      <p className="date font-bold">July 2, 2020</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl my-2">
                    <Link to={"/blogs/singleid"}>
                      Your most unhappy customers are your greatest source of
                      learning.
                    </Link>
                  </h3>
                  <p className="blog_excerpt ellipsis">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                  <div className="flex justify-between">
                    <Link to="#" className="font-bold primary text-md ">
                      Know More
                    </Link>
                    <div className="likes flex items-center">
                      <span className="mr-1">297</span>
                      <BsSuitHeartFill className="text-red-600" />{" "}
                    </div>
                  </div>
                </div>
                <h2 className="abs_content rob-cond lg:text-2xl xl:text-5xl">
                  Julia Axe
                </h2>
              </div>
            </div>
            <div className="items w-full md:w-6/12 lg:w-6/12 ">
              <div className="wrapper m-3 p-4 shadow-lg flex-nowrap md:flex-wrap lg:flex-nowrap b-radius card_bg flex items-center relative">
                <div className="img overflow-hidden">
                  <img
                    src="https://picsum.photos/768/900?random=6"
                    alt=""
                    className="b-radius"
                  />
                </div>
                <div className="content ml-3">
                  <div className="blog_meta flex justify-between">
                    <div className="meta flex items-center">
                      <GoCalendar className="primary mr-2" />
                      <p className="date font-bold">July 2, 2020</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl my-2">
                    <Link to={"/blogs/singleid"}>
                      Your most unhappy customers are your greatest source of
                      learning.
                    </Link>
                  </h3>
                  <p className="blog_excerpt ellipsis">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                  <div className="flex justify-between">
                    <Link to="#" className="font-bold primary text-md ">
                      Know More
                    </Link>
                    <div className="likes flex items-center">
                      <span className="mr-1">297</span>
                      <BsSuitHeartFill className="text-red-600" />{" "}
                    </div>
                  </div>
                </div>
                <h2 className="abs_content rob-cond lg:text-2xl xl:text-5xl">
                  Julia Axe
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminBlog;
