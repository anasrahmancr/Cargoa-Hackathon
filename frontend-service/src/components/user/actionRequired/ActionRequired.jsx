import React from "react";
import { Header } from "../Header";
import "./actionRequired.css";
import { Link } from "react-router-dom";

export const ActionRequired = ({order}) => {
  return (
    <div>
      <Header />
      <div className="main p-8">
        <div className="back">
          <Link
            to="/view-orders"
            className=" text-black font-medium focus:outline-none focus:shadow-outline"
          >
            BACK
          </Link>
        </div>
        <div className="wrapper">
          <form>
            <div className="content flex flex-col gap-5">
              <p>Product Name : {order.productName}</p>
              <p>Quantity : {order.quantity}</p>
              <p>Date Of Shipping : {order.dateOfShipping}</p>
              <p>Vendor : {order.vendorId}</p>
              <p>Purchase Order : {order.documentUrl}</p>

              {order.vendorOptions.length > 0 ? (
                order.vendorOptions.map((vendorDate, index) => (
                  <div className="flex justify-center items-center">
                    <p>Shipping Schedule {index + 1} :</p>
                    <div className="flex items-center">
                      <label
                        for="default-radio-1"
                        className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                      >
                        <p>{vendorDate}</p>
                      </label>
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 mx-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div>No Schedule Dates Available </div>
              )}
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
