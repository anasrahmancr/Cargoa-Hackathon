import React from "react";
import { Header } from "../../user/Header";
import "./pending.css";
import { Link } from "react-router-dom";

export const VendorPending = ({order}) => {
  // console.log("order in vendor pending", order.vendorOptions)
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
            {order.vendorOptions.length > 0 ? (
              order.vendorOptions.map((vendorDate, index) => (
                <p>{`Shipping Schedule ${index + 1}: ${vendorDate}`}</p>
              ))
            ) : (
              <div>No Schedule Dates Available</div>
            )}
          </div>
          <div className="text-yellow-500 font-bold mb-20 text-xl">
            Pending from user...
          </div>
        </div>
      </div>
    </div>
  );
};
