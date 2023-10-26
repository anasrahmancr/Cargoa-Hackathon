import React, { useState, useEffect } from "react";
import { Header } from "../../../components/user/Header";
import "./createOrder.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateOrder = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [dateOfShipping, setDateOfShipping] = useState("");
  const [vendorId, setVendorId] = useState("");
  const [purchaseOrder, setPurchaseOrder] = useState("");
  const [vendor, setVendor] = useState([]);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('hio');
        const response = await axios.get("http://localhost:8080/api/vendor/getVendors");
        console.log(response.data.vendors, "respppppppppp");
        setVendor(response.data.vendors);
      } catch (error) {
        console.error("Error fetching Vendor details:", error);
      }
    };

    fetchData();
  }, []);

  const fileSubmitHandler = async () => {
    try {
      console.log(purchaseOrder, "this is purchase order");
      const data = new FormData();
      data.append("file", purchaseOrder);
      data.append("upload_preset", "cdnwewg9");
      data.append("cloud_name", "ddv27ggoy");
      data.append("resource_type", "raw");
      console.log(data, "data");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/ddv27ggoy/raw/upload",
        {
          method: "post",
          body: data,
        }
      );
      const data1 = await response.json();
      console.log(data1, "data1");
      setPdfUrl(data1.secure_url)
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(
        pdfUrl,
        productName,
        quantity,
        dateOfShipping,
        vendorId,
        purchaseOrder.name
      );
      const purchaseOrders = purchaseOrder.name;
      const token = localStorage.getItem("token");
      console.log(token,"tokenn");
      const response = await axios.post(
        "http://localhost:7000/api/user/userUpload",
        {
          productName,
          quantity,
          dateOfShipping,
          vendorId,
          purchaseOrders,
          pdfUrl
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/home");
      } else {
        alert("Error");
        navigate("/create-order");
      }
    } catch (error) {
      console.error("Error submitting the order:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center m-10">
        <div className="inner-container p-6 rounded-lg shadow-lg w-96">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="product-name" className="text-sm font-medium">
                Product Name
              </label>
              <input
                type="text"
                id="product-name"
                value={productName}
                className="w-full p-2 border rounded mt-1"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="text-sm font-medium">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                className="w-full p-2 border rounded mt-1"
                min="0"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date-of-shipping" className="text-sm font-medium">
                Date of Shipping
              </label>
              <input
                type="date"
                id="date-of-shipping"
                value={dateOfShipping}
                className="w-full p-2 border rounded mt-1"
                min={currentDate}
                onChange={(e) => setDateOfShipping(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="select-vendor" className="text-sm font-medium">
                Select a Vendor
              </label>
              <select
                id="select-vendor"
                className="w-full p-2 border rounded mt-1"
                value={vendorId}
                onChange={(e) => setVendorId(e.target.value)}
              >
                <option value="">Select a Vendor</option>
                {vendor.length > 0 ? (
                  vendor.map((vendorItem) => (
                    <option key={vendorItem._id} value={vendorItem._id}>
                      {vendorItem.vendorname}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No vendors available
                  </option>
                )}
              </select>
            </div>
            <div className="mb-4">
              <div>
                <label>Purchase Order:</label>
                <input
                  type="file"
                  id="upload-purchase-order"
                  className="w-full p-2 border rounded mt-1"
                  onChange={(e) => setPurchaseOrder(e.target.files[0])}
                  accept=".pdf"
                />
                <button
                  className="upload-pdf text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={fileSubmitHandler}
                >
                  Upload
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="text-white rounded p-2 pl-6 pr-6 flex justify-center items-center mx-auto"
              style={{ backgroundColor: "#393636" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
