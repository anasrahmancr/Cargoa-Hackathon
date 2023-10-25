import React from "react";
import { Header } from "../../../components/user/Header";
import "./actionRequired.css";
import { Link } from "react-router-dom";

export const VendorActionRequired = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  return (
    <div>
      <Header />
      <div className="main p-8">
        <div className="back">
          <Link
            to="/review-order"
            className=" text-black font-medium focus:outline-none focus:shadow-outline"
          >
            BACK
          </Link>
        </div>
        <div className="wrapper">
          <form>
            <div className="content flex flex-col gap-3">
              <p>Product Name : White Shirt</p>
              <p>Quantity : 2</p>
              <p>Date Of Shipping : 03-10-2023</p>
              <p>Vendor : Anas</p>
              <p>Purchase Order : white-shirt.pdf</p>
              <div className="flex justify-center items-center">
                <p>Shipping Schedule 1 :</p>
                
                  <input
                    type="date"
                    id="shipping-schedule-1"
                    className="w-full p-2 border rounded mt-1 ml-3"
                    min={currentDate}
                  />
             
              </div>
              <div className="flex justify-center items-center">
                <p>Shipping Schedule 2 :</p>
                
                <input
                    type="date"
                    id="shipping-schedule-2"
                    className="w-full p-2 border rounded mt-1 ml-3"
                    min={currentDate}
                  />
               
              </div>
              <div className="flex justify-center items-center">
                <p>Shipping Schedule 3 :</p>
                
                <input
                    type="date"
                    id="shipping-schedule-3"
                    className="w-full p-2 border rounded mt-1 ml-3"
                    min={currentDate}
                  />
                </div>
              
              <button
                type="submit"
                className="text-white rounded p-2 pl-6 pr-6 flex justify-center items-center mx-auto"
                style={{ backgroundColor: "#393636" }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
