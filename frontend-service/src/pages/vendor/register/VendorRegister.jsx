import React, { useState } from "react";
import "./register.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export const VendorRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("Registration data:", { username, email, password });
        const response = await axios.post(
          "http://localhost:8080/api/auth/register",
          {username, email, password}
        );
         console.log("Registered: ",response.data);
        if(response.data.success){
          navigate("/vendor-login");
        }else{
          navigate("/")
        }
    } catch (error) {
        console.error("Registration failed:", error);
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 register-page">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-7">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
              Register
            </button>
            <div className="new-user">Already Registered?</div>
            <Link
              to="/vendor-login"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
