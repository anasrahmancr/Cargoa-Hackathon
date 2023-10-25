import React from "react";
import { Header } from "../../../components/user/Header";
import "./complete.css";
import { Link } from "react-router-dom";

export const VendorComplete = ({order}) => {
  return (
    <div>
      <Header />
      <div className="main p-16">
        <div className="back">
          <Link
            to="/review-orders"
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
            <div className="flex">
              <p>Scheduled Date : </p>
              <p className="text-green-600">{"\u00a0"}{order.selectedSchedule}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
