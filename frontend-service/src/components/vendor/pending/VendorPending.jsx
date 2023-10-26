import React, {useEffect, useState} from "react";
import { Header } from "../../user/Header";
import "./pending.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const VendorPending = (props) => {
  const order = props.order;
  const user = props.user;
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
          <div className="each-record flex gap-14">
                <p>Product Name :</p>
                <p> {order.productName}</p>
              </div>
              <div className="each-record flex gap-14">
                <p>Quantity : </p>
                <p>{order.quantity}</p>
              </div>
              <div className="each-record flex gap-14">
                <p>Date Of Shipping : </p>
                <p>{order.dateOfShipping.split('T')[0]}</p>
              </div>
              <div className="each-record flex gap-14">
              <p>User : </p>
                {user ? (
                  <p>{user.username}</p>
                )  : (
                  <p>User</p>
                )}
              </div>
              <div className="each-record flex gap-14">
              <p>Purchase Order : </p>
              <a href={order.pdfUrl} target="_blank" rel="noopener noreferrer">{order.documentUrl}</a>

              </div>
            {order.vendorOptions.length > 0 ? (
              <div className="flex flex-col gap-5">
                {order.vendorOptions[0].schedule1 && (
                  <p>Shipping Schedule 1: {'\u00A0'}{'\u00A0'} {order.vendorOptions[0].schedule1.split('T')[0]}</p>
                )}
                {order.vendorOptions[0].schedule2 && (
                  <p>Shipping Schedule 2: {'\u00A0'}{'\u00A0'} {order.vendorOptions[0].schedule2.split('T')[0]}</p>
                )}
                {order.vendorOptions[0].schedule3 && (
                  <p>Shipping Schedule 3: {'\u00A0'}{'\u00A0'} {order.vendorOptions[0].schedule3.split('T')[0]}</p>
                )}
              </div>
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
