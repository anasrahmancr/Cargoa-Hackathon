import React from "react";
import { Header } from "../Header";
import "./pending.css";
import { Link } from "react-router-dom";

export const Pending = ({order}) => {
  return (
    <div>
      <Header />
      <div className="main p-16">
        <div className="back">
          <Link
            to="/view-orders"
            className=" text-black font-medium focus:outline-none focus:shadow-outline"
          >
            BACK
          </Link>
        </div>
        <div className="wrapper p-8">
          <div className="content flex flex-col gap-5">
            <p>Product Name : {order.productName}</p>
            <p>Quantity : {order.quantity}</p>
            <p>Date Of Shipping : {order.dateOfShipping}</p>
            <p>Vendor : {order.vendorId}</p>
            <p>Purchase Order : {order.documentUrl}</p>
          </div>
          <div className="text-yellow-500 font-bold mb-20 text-xl">
            Pending from vendor...
          </div>
        </div>
      </div>
    </div>
  );
};