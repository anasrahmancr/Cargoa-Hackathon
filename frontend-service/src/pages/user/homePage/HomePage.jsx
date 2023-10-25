import React from "react";
import "./homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../../components/user/Header";

export const HomePage = () => {
  return (
    <div>
        <Header/>
      <div className="main flex flex-col justify-center items-center p-56 gap-14">
        <div className="create-order mb-4">
          <Link
            to="/create-order"
            className=" text-black font-bold focus:outline-none focus:shadow-outline"
          >
            CREATE ORDER
          </Link>
        </div>
        <div className="view-order">
          <Link
            to="/view-orders"
            className="text-black font-bold focus:outline-none focus:shadow-outline"
          >
            VIEW ORDER
          </Link>
        </div>
      </div>
    </div>
  );
};