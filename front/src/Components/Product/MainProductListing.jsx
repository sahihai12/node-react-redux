import { BiChevronDown } from "react-icons/bi";
import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const MainProductListing = () => {
  const [showFilter, setshowFilter] = useState(false);
  return (
    <>
      <main className="show_products m-3">
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
              <ul className={`list ${showFilter ? "inline-block" : "hidden"}`}>
                <li value="">Most Liked</li>
                <li value="">Oldest</li>
                <li value="">Newest</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/6 xl:w-2/6">
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
                  <Link to="/products/singleid"> Flamboyant Pink Top </Link>
                </div>
                <div className="price flex items-center">
                  <div className="sales line-through mr-3">29.0</div>
                  <div className="regular text-lg primary">39.0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6 xl:w-2/6">
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
                  <Link to="/products/singleid"> Flamboyant Pink Top </Link>
                </div>
                <div className="price flex items-center">
                  <div className="sales line-through mr-3">29.0</div>
                  <div className="regular text-lg primary">39.0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6 xl:w-2/6">
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
                  <Link to="/products/singleid"> Flamboyant Pink Top </Link>
                </div>
                <div className="price flex items-center">
                  <div className="sales line-through mr-3">29.0</div>
                  <div className="regular text-lg primary">39.0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6 xl:w-2/6">
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
                  <Link to="/products/singleid"> Flamboyant Pink Top </Link>
                </div>
                <div className="price flex items-center">
                  <div className="sales line-through mr-3">29.0</div>
                  <div className="regular text-lg primary">39.0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6 xl:w-2/6">
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
                  <Link to="/products/singleid"> Flamboyant Pink Top </Link>
                </div>
                <div className="price flex items-center">
                  <div className="sales line-through mr-3">29.0</div>
                  <div className="regular text-lg primary">39.0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6 xl:w-2/6">
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
                  <Link to="/products/singleid"> Flamboyant Pink Top </Link>
                </div>
                <div className="price flex items-center">
                  <div className="sales line-through mr-3">29.0</div>
                  <div className="regular text-lg primary">39.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainProductListing;
