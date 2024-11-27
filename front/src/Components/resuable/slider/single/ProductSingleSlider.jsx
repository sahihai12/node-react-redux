import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const ProductSingleSlider = () => {
  return (
    <div>
      <div className="items">
        <div className="wrapper flex flex-wrap lg:flex-nowrap">
          <div className="img w-full md:w-2/4">
            <img
              src="https://picsum.photos/1200/900?random=89"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="w-full lg:w-2/4 content mt-5 lg:ml-5 lg:mt-0 flex items-start justify-center flex-col">
            <div className="details p-3">
              <div className="meta flex">
                <p className="author font-bold">Categories</p>
                <span className="mx-3">|</span>
                <p className="date font-bold">July 2, 2020</p>
              </div>
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
              <div className="mini_desc font-bold text-xl">
                Description :
                <span className="text-lg ml-1 text-gray-700 ellipsis">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pharetra tempor so dales. Phasellus sagittis auctor gravida.
                  Integer bibendum sodales arcu id te mpus. Ut consectetur lacus
                  leo, non scelerisque nulla euismod nec.
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
    </div>
  );
};

export default ProductSingleSlider;
