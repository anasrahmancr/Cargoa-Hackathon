import React from "react";
import { Header } from "../../../components/user/Header";
import "./viewOrder.css";
import { Link, useNavigate } from "react-router-dom";

export const ViewOrder = () => {
  return (
    <div>
      <Header />
      <div className="wrapper-main">
        <div className="view-order-h m-10">View Orders</div>
        <div className="main-content">
          <div className="content">
            <div className="w-full">
              <table className="w-full">
                <thead className="border-b-2">
                  <tr className="">
                    <th className="heading p-3">Product Name</th>
                    <th className="heading p-3">Quantity</th>
                    <th className="heading p-3">Date of Shipping</th>
                    <th className="heading p-3">Product Order</th>
                    <th className="heading p-3">Status</th>
                    <th className="heading p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <th className="content-body p-3">White Shirt</th>
                    <th className="content-body p-3">2</th>
                    <th className="content-body p-3">03-10-2023</th>
                    <th className="content-body p-3">white-shirt.pdf</th>
                    <th className="content-body p-3">
                      <div
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Action Required
                      </div>
                    </th>
                    <th className="content-body p-3">
                      <Link
                        to="/user-action"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        View
                      </Link>
                    </th>
                  </tr>
                  <tr className="border-b">
                    <th className="content-body p-3">White Shirt</th>
                    <th className="content-body p-3">2</th>
                    <th className="content-body p-3">03-10-2023</th>
                    <th className="content-body p-3">white-shirt.pdf</th>
                    <th className="content-body p-3">
                      <div
                        className="bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Pending
                      </div>
                    </th>
                    <th className="content-body p-3">
                      <Link
                        to="/user-pending"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        View
                      </Link>
                    </th>
                  </tr>
                  <tr className="border-b">
                    <th className="content-body p-3">White Shirt</th>
                    <th className="content-body p-3">2</th>
                    <th className="content-body p-3">03-10-2023</th>
                    <th className="content-body p-3">white-shirt.pdf</th>
                    <th className="content-body p-3">
                      <div
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled
                      >
                        Completed
                      </div>
                    </th>
                    <th className="content-body p-3">
                      <Link
                        to="/user-complete"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        View
                      </Link>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};