import React, { useState, useEffect } from "react";
import { Header } from "../Header";
import "./actionRequired.css";
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios'

export const ActionRequired =(props) => {
  const order = props.order;
  const vendor = props.vendor;
  const [selectedOption, setSelectedOption] = useState("");
// const [vendor, setVendor] = useState(null);


  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    console.log('selectedOption =',selectedOption)
    const response = await axios.post(`http://localhost:7000/api/user/setDate/${order._id}`,
      {selectedOption})
      console.log(response.data,"this is repsppsp ");
      if(response.data.success){
        navigate('/view-orders')
      }
    }catch{

    }
  };

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
          <form onSubmit={handleSubmit}>
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
                <p>{order.dateOfShipping.split("T")[0]}</p>
              </div>
              <div className="each-record flex gap-14">
              <p>Vendor : </p>
                {vendor ? (
                  <p>{vendor.vendorname}</p>
                )  : (
                  <p>Vendor</p>
                )}
                  
              </div>
              <div className="each-record flex gap-14">
                <p>Purchase Order : </p>
                {/* <a className="font-bold" href={order.pdfUrl} target="_blank" rel="noopener noreferrer">{order.documentUrl}</a> */}
                  <Link to={order.pdfUrl}>{order.documentUrl}</Link>
       
              </div>
              <div className="flex gap-14 items-center">
                <p>Shipping Schedule 1 :</p>
                <div className="flex items-center">
                  <label
                    for="default-radio-1"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p>{order.vendorOptions[0].schedule1.split("T")[0]}</p>
                  </label>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="schedule1"
                    name="shipping-schedule"
                    checked={selectedOption === "schedule1"}
                    onChange={() => setSelectedOption("schedule1")}
                    className="w-4 h-4 mx-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              <div className="flex gap-14 items-center">
                <p>Shipping Schedule 2 :</p>
                <div className="flex items-center">
                  <label
                    for="default-radio-1"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p>{order.vendorOptions[0].schedule2.split("T")[0]}</p>
                  </label>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="schedule2"
                    name="shipping-schedule"
                    checked={selectedOption === "schedule2"}
                    onChange={() => setSelectedOption("schedule2")}
                    className="w-4 h-4 mx-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              <div className="flex gap-14 items-center">
                <p>Shipping Schedule 3 :</p>
                <div className="flex items-center">
                  <label
                    for="default-radio-1"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p>{order.vendorOptions[0].schedule3.split("T")[0]}</p>
                  </label>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="schedule3"
                    name="shipping-schedule"
                    checked={selectedOption === "schedule3"}
                    onChange={() => setSelectedOption("schedule3")}
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
