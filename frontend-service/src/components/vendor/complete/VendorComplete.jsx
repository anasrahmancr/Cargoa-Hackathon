import React, {useEffect, useState} from "react";
import { Header } from "../../../components/user/Header";
import "./complete.css";
import { Link } from "react-router-dom";

export const VendorComplete = (props) => {
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
            <p>Product Name : {order.productName}</p>
            <p>Quantity : {order.quantity}</p>
            <p>Date Of Shipping : {order.dateOfShipping.split('T')[0]}</p>
            <p>User : </p>
                {user ? (
                  <p>{user.username}</p>
                )  : (
                  <p>User</p>
                )}
            <p>Purchase Order : </p>
              <a href={order.pdfUrl} target="_blank" rel="noopener noreferrer">{order.documentUrl}</a>
                
            <div className="flex">
              <p>Scheduled Date : </p>
              <p className="text-green-600">{"\u00a0"}{order.selectedSchedule.split('T')[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
