import React,{useState, useEffect} from "react";
import { Header } from "../../../components/user/Header";
import "./viewOrder.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const VendorViewOrder = () => {

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("inside review order");
        const token = localStorage.getItem('vendorToken');
        const response = await axios.get(
          "http://localhost:7000/api/vendor/reviewOrder",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.orders, "respppppppppp");
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching Vendor details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="wrapper-main">
        <div className="view-order-h m-10">View Orders</div>
        <div className="main-content">
          <div className="content">
            <div className="w-full">
              {orders && orders.length > 0 ? ( // Check if userOrders exist and have at least one order
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
                    {orders.map((order, index) => (
                      <tr className="border-b" key={index}>
                        <th className="content-body p-3">
                          {order.productName}
                        </th>
                        <th className="content-body p-3">{order.quantity}</th>
                        <th className="content-body p-3">
                        {order.dateOfShipping.split('T')[0]}
                        </th>
                        <th className="content-body p-3">
                          {order.documentUrl}
                        </th>
                        <th className="content-body p-3">
                          {(() => {
                            if (order.vendorOptions.length === 0) {
                              return (
                                <div className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Action Required
                              </div>
                              );
                            } else if (order.vendorOptions.length > 0 && order.selectedSchedule) {
                              return (
                                <div className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                  Completed
                                </div>
                              );
                            } else {
                              return (
                               
                                <div className="bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Pending
                              </div>
                              );
                            }
                          })()}
                        </th>
                        <th className="content-body p-3">
                          <Link
                            to={`/review-order/${order._id}`}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                            View
                          </Link>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                // Render something when userOrders do not exist or are empty
                <div>No orders available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
