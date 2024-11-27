import "./product.css";
import React from "react";
import Breadcrumb from "../resuable/Breadcrumb";
import Container from "../resuable/Container";
import RightSidebar from "./RightSidebar";
import MainProductListing from "./MainProductListing";
import { GiCash } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHotelClass } from "react-icons/md";

const ProductAll = () => {
  return (
    <>
      <Breadcrumb
        url={
          "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI"
        }
        all={"All"}
        span={"Product's"}
      />

      <section className="info_wrapper mb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/6">
            <div className="flex items-center bg-gray-200 justify-center py-3 ">
              <MdOutlineHotelClass className="mr-4 text-5xl primary" />
              <p className="rob-cond text-xl lg:text-2xl font-bold text-black">
                PREMIUM PRODUCTS
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/6">
            <div className="flex items-center bg-white justify-center py-3 ">
              <GiCash className="mr-4 text-5xl primary" />
              <p className="rob-cond text-xl lg:text-2xl font-bold text-black">
                FAST SECURE PAYMENTS
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/6">
            <div className="flex items-center bg-gray-200 justify-center py-3 ">
              <TbTruckDelivery className="mr-4 text-5xl primary" />
              <p className="rob-cond text-xl lg:text-2xl font-bold text-black">
                FREE & FAST DELIVERY
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="all_products">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/6 xl:w-1/6">
              <RightSidebar />
            </div>
            <div className="w-full md:w-4/6 xl:w-5/6">
              <MainProductListing />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductAll;
