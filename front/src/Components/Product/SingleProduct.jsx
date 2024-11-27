import React, { useState } from "react";
import Breadcrumb from "../resuable/Breadcrumb";
import Container from "../resuable/Container";
import { AiFillStar } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import SingleSider from "../resuable/slider/SingleSider";
import Button from "../resuable/Button";
const SingleProduct = () => {
  const [qty, setqty] = useState(1);
  const minus = () => {
    if (qty > 1) {
      setqty(qty - 1);
    }
  };
  const plus = () => {
    // if (qty > 1) {
    setqty(qty + 1);
    // }
  };

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="single_product">
      <Breadcrumb
        url={
          "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/31121724/fashion-1024x682.jpeg"
        }
        all={"Single"}
        span={"Product Name"}
      />
      <Container>
        <div className="product_info py-16">
          <div className="flex">
            <div className="w-full md:w-2/4">
              <div className="img">
                <img
                  src="https://source.unsplash.com/random/600x600/?girl,jeans"
                  alt=""
                  className="w-full preview_image"
                />
                <div className="img_option_list mt-3">
                  <ul className="flex items-center justify-center">
                    <li className="mx-1 cursor-pointer">
                      <img
                        src="https://source.unsplash.com/random/100x100/?girl,jeans"
                        alt=""
                      />
                    </li>
                    <li className="mx-1 cursor-pointer">
                      <img
                        src="https://source.unsplash.com/random/100x100/?jeans"
                        alt=""
                      />
                    </li>
                    <li className="mx-1 cursor-pointer">
                      <img
                        src="https://source.unsplash.com/random/100x100/?girl,jean"
                        alt=""
                      />
                    </li>
                    <li className="mx-1 cursor-pointer">
                      <img
                        src="https://source.unsplash.com/random/100x100/?shirt"
                        alt=""
                      />
                    </li>
                    <li className="mx-1 cursor-pointer">
                      <img
                        src="https://source.unsplash.com/random/100x100/?girls"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 flex items-center">
              <div className="details p-3">
                <h2 className="font-black rob-cond text-4xl">
                  Black and White Stripes Dress
                </h2>
                <div className="price flex items-center my-3">
                  <div className="sales line-through mr-3 font-black text-2xl rob-cond">
                    $ 29.0
                  </div>
                  <div className="regular text-lg primary font-black text-2xl rob-cond">
                    $ 39.0
                  </div>
                </div>
                <div className="available font-bold text-xl">
                  Available:{" "}
                  <span className="font-black primary text-xl">In Stock</span>
                </div>
                <div className="qty font-bold text-xl flex items-center my-3">
                  Qunatity:{" "}
                  <span className="flex ml-2 qty_plus_minus card_bg px-3 py-1 b-radius-50 cusror-pointer">
                    <div
                      className="minus text-xl font-bold cursor-pointer p-1"
                      onClick={() => minus()}
                    >
                      -
                    </div>
                    <input
                      type="text"
                      className="text-xl w-16 bg-transparent text-center"
                      value={qty}
                      onChange={(e) => setqty(e.target.value)}
                    />
                    <div
                      className="plus text-xl font-bold cursor-pointer p-1"
                      onClick={() => plus()}
                    >
                      +
                    </div>
                  </span>
                </div>
                <div className="mini_desc font-bold text-xl">
                  Description :
                  <span className="text-lg ml-1 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra tempor so dales. Phasellus sagittis auctor
                    gravida. Integer bibendum sodales arcu id te mpus. Ut
                    consectetur lacus leo, non scelerisque nulla euismod nec.
                    <br />
                    Approx length 66cm/26" (Based on a UK size 8 sample)
                    <br />
                    Mixed fibres
                    <br />
                    The Model wears a UK size 8/ EU size 36/ US size 4 and her
                    height is 5'8"
                  </span>
                </div>
                <button className="bg-primary text-white font-bold px-4 py-2 text-xl my-3 flex items-center hover:bg-white border add_tocart transition">
                  <HiShoppingCart className="mr-3" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="comment_section card_bg py-16">
        <Container>
          <h2 className="font-black rob-cond capitalize text-5xl mb-5">
            <span className="primary font-bold rob-cond">Write a </span>
            Review
          </h2>

          <div className="flex flex-wrap">
            <div className="w-full md:w-2/4">
              <form className="text-left p-4 b-radius shadow-xl">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter UserName"
                  className="w-full mb-2 shadow p-3 capitalize"
                  id="name"
                />

                <label htmlFor="message" className="font-bold">
                  Review
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  placeholder="write a review"
                  className=" w-full p-3"
                ></textarea>

                <label htmlFor="rating" className="font-bold">
                  Rating
                </label>

                <div className="rating mt-2" id="rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "primary" : ""}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <AiFillStar className="text-lg" />
                      </button>
                    );
                  })}
                </div>
                <Button title={"Review"} />
              </form>
            </div>
            <div className="reviews p-3 w-full md:w-2/4">
              <div className="items flex items-start mb-2">
                <img
                  src="https://source.unsplash.com/random/70x70/?girl"
                  alt=""
                  className="b-radius-50 shadow mr-3"
                />
                <div className="user_deatils">
                  <h4 className="name text-lg font-bold">
                    Juila Ann
                    <span className="spacer mx-2 text-grat-200">|</span>
                    <span className="text-gray-600 text-sm font-bold ">
                      8 July , 2022
                    </span>
                  </h4>
                  <div className="rating">
                    {[...Array(4)].map((star, index) => {
                      index += 1;
                      return (
                        <button type="button" key={index} className={"primary"}>
                          <AiFillStar className="text-lg" />
                        </button>
                      );
                    })}
                  </div>
                  <div className="review w-full">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatibus quos iste, aliquam harum fuga dignissimos.
                      Dolor deleniti rem distinctio exercitationem!
                    </p>
                  </div>
                </div>
              </div>
              <div className="items flex items-start mb-2">
                <img
                  src="https://source.unsplash.com/random/70x70/?girls"
                  alt=""
                  className="b-radius-50 shadow mr-3"
                />
                <div className="user_deatils">
                  <h4 className="name text-lg font-bold">
                    Juila Ann
                    <span className="spacer mx-2 text-grat-200">|</span>
                    <span className="text-gray-600 text-sm font-bold ">
                      8 July , 2022
                    </span>
                  </h4>
                  <div className="rating">
                    {[...Array(4)].map((star, index) => {
                      index += 1;
                      return (
                        <button type="button" key={index} className={"primary"}>
                          <AiFillStar className="text-lg" />
                        </button>
                      );
                    })}
                  </div>
                  <div className="review w-full">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatibus quos iste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="my-16 releted_products">
        <Container>
          <h2 className="font-black rob-cond capitalize text-5xl mb-5">
            <span className="primary font-bold rob-cond">related</span>{" "}
            Product's
          </h2>
          <SingleSider type={"product"} />
        </Container>
      </div>
    </div>
  );
};

export default SingleProduct;
