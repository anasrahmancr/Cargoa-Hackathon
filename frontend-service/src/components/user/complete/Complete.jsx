import React, {useEffect, useState} from "react";
import { Header } from "../Header";
import "./complete.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const Complete = (props) => {
  const order = props.order;
  const vendor = props.vendor;

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
            <p>Date Of Shipping : {order.dateOfShipping.split('T')[0]}</p>
            <div className="flex gap-5">
            <p>Vendor : </p>
                {vendor ? (
                  <p>{vendor.vendorname}</p>
                )  : (
                  <p>Vendor</p>
                )}
                </div>
            <p>Purchase Order : </p>
            <a className="font-bold" href={order.pdfUrl} target="_blank" rel="noopener noreferrer">{order.documentUrl}</a>


            <div className="flex">
              <p>Scheduled Date :  </p>
              <p className="text-green-600">{"\u00a0"}{order.selectedSchedule.split('T')[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};