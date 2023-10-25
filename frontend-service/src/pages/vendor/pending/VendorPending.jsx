import React from "react";
import { Header } from "../../../components/user/Header";
import "./pending.css";
import { Link } from "react-router-dom";

export const VendorPending = () => {
  return (
    <div>
      <Header />
      <div className="main p-16">
        <div className="back">
          <Link
            to="/review-order"
            className=" text-black font-medium focus:outline-none focus:shadow-outline"
          >
            BACK
          </Link>
        </div>
        <div className="wrapper p-8">
          <div className="content flex flex-col gap-5">
            <p>Product Name : White Shirt</p>
            <p>Quantity : 2</p>
            <p>Date Of Shipping : 03-10-2023</p>
            <p>Vendor : Anas</p>
            <p>Purchase Order : white-shirt.pdf</p>
            <p>Shipping Schedule 1 : 03-10-2023</p>
            <p>Shipping Schedule 2 : 13-10-2023</p>
            <p>Shipping Schedule 3 : 23-10-2023</p>
          </div>
          <div className="text-yellow-500 font-bold mb-20 text-xl">
            Pending from user...
          </div>
        </div>
      </div>
    </div>
  );
};
