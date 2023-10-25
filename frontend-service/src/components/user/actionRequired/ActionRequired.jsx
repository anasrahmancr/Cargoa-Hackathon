import React from "react";
import { Header } from "../Header";
import "./actionRequired.css";
import { Link } from "react-router-dom";

export const ActionRequired = () => {
  return (
    <div>
      <Header />
      <div className="main p-8">
        <div className="back">
          <Link
            to="/view-order"
            className=" text-black font-medium focus:outline-none focus:shadow-outline"
          >
            BACK
          </Link>
        </div>
        <div className="wrapper">
          <form>
            <div className="content flex flex-col gap-5">
              <p>Product Name : White Shirt</p>
              <p>Quantity : 2</p>
              <p>Date Of Shipping : 03-10-2023</p>
              <p>Vendor : Anas</p>
              <p>Purchase Order : white-shirt.pdf</p>
              <div className="flex justify-center items-center">
                <p>Shipping Schedule 1 :</p>
                <div className="flex items-center">
                  <label
                    for="default-radio-1"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p>13-10-2023</p>
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
              <div className="flex justify-center items-center">
                <p>Shipping Schedule 2 :</p>
                <div className="flex items-center">
                  <label
                    for="default-radio-1"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p>03-10-2023</p>
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
              <div className="flex justify-center items-center">
                <p>Shipping Schedule 3 :</p>
                <div className="flex items-center">
                  <label
                    for="default-radio-1"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p>23-10-2023</p>
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