import React, { useState } from 'react';
import './login.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("check");
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {email, password}
          // , {withCredentials: true}
        );
         console.log("Logged in:",response.data);
        if(response.data.success){
          navigate("/home");
        }else{
          navigate("/")
        }
    } catch (error) {
        console.error("Login failed:", error);
      }
    // Add your login logic here (e.g., API calls, authentication).
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-page">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700  font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-7">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <div className='new-user'>New User?</div>
            <Link to="/user-register" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}