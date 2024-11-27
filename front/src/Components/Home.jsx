import React from "react";
import Button from "./resuable/Button";
import { BsCartPlus } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Slick from "./resuable/slider/Slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./resuable/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="banner">
          <div className="container mx-auto px-2 lg:py-3 lg:px-0" id="homepage">
            <div className="py-16 lg:py-28 flex flex-wrap items-center justify-center text-center ">
              <div className="content max-w-screen-lg">
                <h1 className="font-bold text-3xl md:text-5xl rob-cond mx-0 lg:mx-28">
                  Over{" "}
                  <span className="primary rob-cond font-black">6,500</span>{" "}
                  Curated Design Resources,{" "}
                  <span className="primary rob-cond font-black">
                    Graphic & Website{" "}
                  </span>{" "}
                  Templates
                </h1>
                <p className="banner_description text-lg my-4">
                  High-quality Design Themes for personal or commercial use
                  contains 6k+ items in 100 categories.
                </p>
                <div className="relative search_here flex b-radius-50 bg-gray-200 shadow-lg drop-shadow-sm py-2 px-4">
                  <select
                    name="categoires"
                    className="w-16 md:w-32 search_Input"
                  >
                    <option value="All">All</option>
                    <option value="blog">Blog</option>
                    <option value="product">Product</option>
                  </select>
                  <input
                    type="text"
                    className="search_Input w-full px-3"
                    placeholder="Search Blogs or Products"
                  />
                  <BiSearchAlt className="text-3xl primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products_section card_bg">
        <section className="All section py-16">
          <Container>
            <div className="filter_category flex items-center justify-between">
              <h2 className="font-bold text-4xl rob-cond">
                Recent <span className="primary font-bold">Products</span>
              </h2>
              <ul className="flex tabs">
                <li className="hover:shadow-md active">ALl</li>
                <li className="hover:shadow-md">Men's</li>
                <li className="hover:shadow-md">Women's</li>
                <li className="hover:shadow-md">Kid's</li>
              </ul>
            </div>
            <div className="card_products show_products">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                  <div className="product_item m-2 p-3 card_bg shadow-lg cursor-pointer hover:drop-shadow-xl">
                    <div className="img relative">
                      <img
                        src="https://source.unsplash.com/random/300x300/?girl,jeans"
                        alt=""
                        className="w-full"
                      />
                      <div className="img_warpper absolute">
                        <div className="flex">
                          <div className="cart drop-shadow shadow-lg">
                            <BsCartPlus className="primary" />
                          </div>
                          <div className="wishlist drop-shadow shadow-lg">
                            <AiOutlineHeart className="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details mt-2">
                      <div className="imageoptions">
                        <ul className="flex items-center">
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jean"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?shirt"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girls"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="brand primary mt-3">Highlander</div>
                      <div className="title text-xl">
                        <Link to="/products/singleid">
                          {" "}
                          Flamboyant Pink Top{" "}
                        </Link>
                      </div>
                      <div className="price flex items-center">
                        <div className="sales line-through mr-3">29.0</div>
                        <div className="regular text-lg primary">39.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                  <div className="product_item m-2 p-3 card_bg shadow-lg cursor-pointer hover:drop-shadow-xl">
                    <div className="img relative">
                      <img
                        src="https://source.unsplash.com/random/300x300/?jeans"
                        alt=""
                        className="w-full"
                      />
                      <div className="img_warpper absolute">
                        <div className="flex">
                          <div className="cart drop-shadow shadow-lg">
                            <BsCartPlus className="primary" />
                          </div>
                          <div className="wishlist drop-shadow shadow-lg">
                            <AiOutlineHeart className="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details mt-2">
                      <div className="imageoptions">
                        <ul className="flex items-center">
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jean"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?shirt"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girls"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="brand primary mt-3">Highlander</div>
                      <div className="title text-xl">
                        <Link to="/products/singleid">
                          {" "}
                          Flamboyant Pink Top{" "}
                        </Link>
                      </div>
                      <div className="price flex items-center">
                        <div className="sales line-through mr-3">29.0</div>
                        <div className="regular text-lg primary">39.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                  <div className="product_item m-2 p-3 card_bg shadow-lg cursor-pointer hover:drop-shadow-xl">
                    <div className="img relative">
                      <img
                        src="https://source.unsplash.com/random/300x300/?girl"
                        alt=""
                        className="w-full"
                      />
                      <div className="img_warpper absolute">
                        <div className="flex">
                          <div className="cart drop-shadow shadow-lg">
                            <BsCartPlus className="primary" />
                          </div>
                          <div className="wishlist drop-shadow shadow-lg">
                            <AiOutlineHeart className="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details mt-2">
                      <div className="imageoptions">
                        <ul className="flex items-center">
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jean"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?shirt"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girls"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="brand primary mt-3">Highlander</div>
                      <div className="title text-xl">
                        <Link to="/products/singleid">
                          {" "}
                          Flamboyant Pink Top{" "}
                        </Link>
                      </div>
                      <div className="price flex items-center">
                        <div className="sales line-through mr-3">29.0</div>
                        <div className="regular text-lg primary">39.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                  <div className="product_item m-2 p-3 card_bg shadow-lg cursor-pointer hover:drop-shadow-xl">
                    <div className="img relative">
                      <img
                        src="https://source.unsplash.com/random/300x300/?girls"
                        className="w-full"
                        alt=""
                      />
                      <div className="img_warpper absolute">
                        <div className="flex">
                          <div className="cart drop-shadow shadow-lg">
                            <BsCartPlus className="primary" />
                          </div>
                          <div className="wishlist drop-shadow shadow-lg">
                            <AiOutlineHeart className="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details mt-2">
                      <div className="imageoptions">
                        <ul className="flex items-center">
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jean"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?shirt"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girls"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="brand primary mt-3">Highlander</div>
                      <div className="title text-xl">
                        <Link to="/products/singleid">
                          {" "}
                          Flamboyant Pink Top{" "}
                        </Link>
                      </div>
                      <div className="price flex items-center">
                        <div className="sales line-through mr-3">29.0</div>
                        <div className="regular text-lg primary">39.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                  <div className="product_item m-2 p-3 card_bg shadow-lg cursor-pointer hover:drop-shadow-xl">
                    <div className="img relative">
                      <img
                        src="https://source.unsplash.com/random/300x300/?skirt"
                        className="w-full"
                        alt=""
                      />
                      <div className="img_warpper absolute">
                        <div className="flex">
                          <div className="cart drop-shadow shadow-lg">
                            <BsCartPlus className="primary" />
                          </div>
                          <div className="wishlist drop-shadow shadow-lg">
                            <AiOutlineHeart className="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details mt-2">
                      <div className="imageoptions">
                        <ul className="flex items-center">
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jean"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?shirt"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girls"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="brand primary mt-3">Highlander</div>
                      <div className="title text-xl">
                        <Link to="/products/singleid">
                          {" "}
                          Flamboyant Pink Top{" "}
                        </Link>
                      </div>
                      <div className="price flex items-center">
                        <div className="sales line-through mr-3">29.0</div>
                        <div className="regular text-lg primary">39.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                  <div className="product_item m-2 p-3 card_bg shadow-lg cursor-pointer hover:drop-shadow-xl">
                    <div className="img relative">
                      <img
                        src="https://source.unsplash.com/random/300x300/?top,shirt"
                        className="w-full"
                        alt=""
                      />
                      <div className="img_warpper absolute">
                        <div className="flex">
                          <div className="cart drop-shadow shadow-lg">
                            <BsCartPlus className="primary" />
                          </div>
                          <div className="wishlist drop-shadow shadow-lg">
                            <AiOutlineHeart className="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details mt-2">
                      <div className="imageoptions">
                        <ul className="flex items-center">
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jean"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?shirt"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girls"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="brand primary mt-3">Highlander</div>
                      <div className="title text-xl">
                        <Link to="/products/singleid">
                          {" "}
                          Flamboyant Pink Top{" "}
                        </Link>
                      </div>
                      <div className="price flex items-center">
                        <div className="sales line-through mr-3">29.0</div>
                        <div className="regular text-lg primary">39.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                  <div className="product_item m-2 p-3 card_bg shadow-lg cursor-pointer hover:drop-shadow-xl">
                    <div className="img relative">
                      <img
                        src="https://source.unsplash.com/random/300x300/?skirts"
                        className="w-full"
                        alt=""
                      />
                      <div className="img_warpper absolute">
                        <div className="flex">
                          <div className="cart drop-shadow shadow-lg">
                            <BsCartPlus className="primary" />
                          </div>
                          <div className="wishlist drop-shadow shadow-lg">
                            <AiOutlineHeart className="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details mt-2">
                      <div className="imageoptions">
                        <ul className="flex items-center">
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jean"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?shirt"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?skirt"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="brand primary mt-3">Highlander</div>
                      <div className="title text-xl">
                        <Link to="/products/singleid">
                          {" "}
                          Flamboyant Pink Top{" "}
                        </Link>
                      </div>
                      <div className="price flex items-center">
                        <div className="sales line-through mr-3">29.0</div>
                        <div className="regular text-lg primary">39.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
                  <div className="product_item m-2 p-3 card_bg shadow-lg cursor-pointer hover:drop-shadow-xl">
                    <div className="img relative">
                      <img
                        src="https://source.unsplash.com/random/300x300/?tops,skirt"
                        className="w-full"
                        alt=""
                      />
                      <div className="img_warpper absolute">
                        <div className="flex">
                          <div className="cart drop-shadow shadow-lg">
                            <BsCartPlus className="primary" />
                          </div>
                          <div className="wishlist drop-shadow shadow-lg">
                            <AiOutlineHeart className="primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details mt-2">
                      <div className="imageoptions">
                        <ul className="flex items-center">
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?jeans"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girl,jean"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?shirt"
                              alt=""
                            />
                          </li>
                          <li className="mx-1">
                            <img
                              src="https://source.unsplash.com/random/50x50/?girls"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="brand primary mt-3">Highlander</div>
                      <div className="title text-xl">
                        <Link to="/products/singleid">
                          {" "}
                          Flamboyant Pink Top{" "}
                        </Link>
                      </div>
                      <div className="price flex items-center">
                        <div className="sales line-through mr-3">29.0</div>
                        <div className="regular text-lg primary">39.0</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <div className="featured_blog hidden">
        <div className="content">
          <h1 className="font-bold text-3xl md:text-6xl rob-cond">
            Buy <span className="primary rob-cond font-bold">Online</span>
          </h1>
          <p className="banner_description text-lg my-4 left-border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            quasi sed modi iusto natus iste dicta totam voluptates accusantium,
            amet corporis ex. Voluptas ea, voluptatem ut id nemo error?
            Molestias.
          </p>
          <Button title={"Buy Now"} />
        </div>
      </div>

      <Slick heading={"Blog's"} />
    </>
  );
};

export default Home;
