import React from "react";
import { Header } from "../Header";
import "./complete.css";
import { Link } from "react-router-dom";

export const Complete = () => {
  return (
    <div>
      <Header />
      <div className="main p-16">
        <div className="back">
          <Link
            to="/view-order"
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
            <div className="flex">
              <p>Scheduled Date : </p>
              <p className="text-green-600">{"\u00a0"}13-10-2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};