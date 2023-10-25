import React from "react";
import "./homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../../components/user/Header";

export const VendorHomePage = () => {
  return (
    <div>
        <Header/>
      <div className="main flex flex-col justify-center items-center p-56 gap-14">
        <div className="create-order mb-4">
          <Link
            to="/review-orders"
            className=" text-black font-bold focus:outline-none focus:shadow-outline"
          >
            REVIEW ORDERS
          </Link>
        </div>
        
      </div>
    </div>
  );
};
