import "./blogs.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getALlBlogs } from "../../Redux/Actions/blog.action";
import Breadcrumb from "../resuable/Breadcrumb";
import Container from "../resuable/Container";
import SingleSider from "../resuable/slider/SingleSider";
import { GoCalendar } from "react-icons/go";
import { BsSuitHeartFill } from "react-icons/bs";
import { BiChevronDown, BiSearchAlt } from "react-icons/bi";
import Button from "../resuable/Button";
import { monthL } from "../../assets/constant/constant";

const AllBlogs = () => {
  const blog_store = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    dispatch(getALlBlogs());
    setblogs(blog_store.blogs);
  }, [dispatch, blogs]);

  const [showFilter, setshowFilter] = useState(false);

  console.log("all blogs value : ", blog_store.blogs.length);
  return (
    <>
      <Breadcrumb
        url={"https://picsum.photos/1920/900"}
        all={"All"}
        span={"Blog's"}
      />

      <section className="trending pt-5">
        <div className="container mx-auto px-2 lg:py-3 lg:px-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-black rob-cond capitalize text-5xl text-center">
              <span className="primary font-bold rob-cond">trending</span>{" "}
              Blog's
            </h2>
            <div className="search shadow-xl lg:w-2/4 bg-search b-radius">
              <div className="input flex items-center b-radius">
                <input
                  type="text"
                  className="w-full py-3 px-3 bg-transparent"
                  placeholder="Enter blog title"
                />
                <BiSearchAlt className="text-2xl text-gray-600 mr-2" />
              </div>
            </div>
          </div>
          <div className="slider_trending">
            <SingleSider type={"blog"} />
          </div>
        </div>
      </section>

      <section className="All_section py-16">
        <Container>
          <div className="filter_category flex justify-between">
            <ul className="flex tabs">
              <li className="hover:shadow-md active">ALl</li>
              <li className="hover:shadow-md">Food's</li>
              <li className="hover:shadow-md">Travel's</li>
              <li className="hover:shadow-md">Book's</li>
              <li className="hover:shadow-md">destination</li>
            </ul>

            <div
              className="select_warpper relative w-32"
              onClick={() => setshowFilter(!showFilter)}
            >
              <div className="select flex items-center justify-between shadow-md">
                Sort By <BiChevronDown />
              </div>
              <ul className={`list ${showFilter ? "inline-block" : "hidden"}`}>
                <li value="">Most Liked</li>
                <li value="">Oldest</li>
                <li value="">Newest</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center all_blogs_section">
            {blog_store.blogs.length > 0
              ? blogs.map((item) => {
                  let onlyDate = new Date(item.createdAt);
                  return (
                    <div
                      className="items w-full md:w-6/12 lg:w-6/12"
                      key={item._id}
                    >
                      <div className="wrapper m-3 p-4 shadow-lg flex-nowrap md:flex-wrap lg:flex-nowrap b-radius card_bg flex items-center relative">
                        <div className="img overflow-hidden">
                          <img
                            src={`http://localhost:9090/assets/blogImage/${item.featured_image}`}
                            alt=""
                            className="b-radius"
                          />
                        </div>
                        <div className="content ml-3">
                          <div className="blog_meta flex justify-between">
                            <div className="meta flex items-center">
                              <GoCalendar className="primary mr-2" />
                              <p className="date font-bold">{`${onlyDate.getDate()} 
                              ${monthL[onlyDate.getMonth()]} ,
                              ${onlyDate.getFullYear()}`}</p>
                            </div>
                          </div>
                          <h3 className="font-bold text-xl lg:text-2xl my-2">
                            <Link to={`/blogs/singleid/${item._id}`}>
                              {item.title}
                            </Link>
                          </h3>
                          <p className="blog_excerpt ellipsis">
                            {item.excerpt}
                          </p>
                          <div className="flex justify-between">
                            <Link to="#" className="font-bold primary text-md ">
                              Know More
                            </Link>
                            <div className="likes flex items-center">
                              <span className="mr-1">{item.likes.length}</span>
                              <BsSuitHeartFill className="text-red-600" />{" "}
                            </div>
                          </div>
                        </div>
                        <h2 className="abs_content rob-cond lg:text-2xl xl:text-5xl capitalize">
                          {item.author}
                        </h2>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="view_more text-center mt-7">
            <Button title={"View More"} />
          </div>
        </Container>
      </section>

      <Container className="blogs">
        <div className="flex flex-wrap"></div>
      </Container>
    </>
  );
};

export default AllBlogs;
