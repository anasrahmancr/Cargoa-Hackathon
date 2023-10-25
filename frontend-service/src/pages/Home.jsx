import React from "react";
import "./home.css";
import { Header } from "../components/home/Header";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="homepage">
        <div className="container-wrapper flex justify-center items-center gap-28 pt-32">
          <div className="user">
            <div>Are you an User?</div>
            <Link to="/user-login" className="userLogin  mr-3 ml-3">Login</Link>
          </div>
          <div className="or">Or</div>
          <div className="vendor">
          <div>Are you a vendor?</div>
            <Link to="/vendor-login" className="vendorLogin mr-3 ml-3">Login</Link>
        </div>
          
        </div>
      </div>
    </div>
  );
};