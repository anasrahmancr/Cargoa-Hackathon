import React, { useState, useEffect } from "react";
import { Header } from "../../../components/user/Header";
import "./actionRequired.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const VendorActionRequired = (props) => {
  const order = props.order;
  const user = props.user;
const navigate = useNavigate();
const [date1, setDate1] = useState('');  
const [date2, setDate2] = useState('');  
const [date3, setDate3] = useState(''); 

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      // const token = localStorage.getItem('vendorToken');
      const response = await axios.post(`http://localhost:7000/api/vendor/vendorUpload/${order._id}`,
      {date1, date2, date3}
      )
      console.log(response.data,"this is repsppsp ");
      if(response.data.success){
        navigate('/review-orders')
      }
    } catch{

    }
  }
  const currentDate = new Date().toISOString().split('T')[0];
  return (
    <div>
      <Header />
      <div className="main p-8">
        <div className="back">
          <Link
            to="/review-orders"
            className=" text-black font-medium focus:outline-none focus:shadow-outline"
          >
            BACK
          </Link>
        </div>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="content flex flex-col gap-3">
              <p>Product Name : {order.productName}</p>
              <p>Quantity : {order.quantity}</p>
              <p>Date Of Shipping : {order.dateOfShipping.split('T')[0]}</p>
              <p>User : </p>
                {user ? (
                  <p>{user.username}</p>
                )  : (
                  <p>Loading...</p>
                )}
              <p>Purchase Order :</p>
              <a href={order.pdfUrl} target="_blank" rel="noopener noreferrer">{order.documentUrl}</a>


              <div className="flex justify-center items-center">
                <p>Shipping Schedule 1 :</p>
                
                  <input
                    type="date"
                    value={date1}
                    onChange={(e)=>{setDate1(e.target.value)}}
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
                    value={date2}
                    onChange={(e)=>{setDate2(e.target.value)}}
                    className="w-full p-2 border rounded mt-1 ml-3"
                    min={currentDate}
                  />
               
              </div>
              <div className="flex justify-center items-center">
                <p>Shipping Schedule 3 :</p>
                
                <input
                    type="date"
                    id="shipping-schedule-3"
                    value={date3}
                    onChange={(e)=>{setDate3(e.target.value)}}
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
