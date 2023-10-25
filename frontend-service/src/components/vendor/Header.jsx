import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("vendorToken");
    console.log("Logout clicked!");
  };

  return (
    <div className="navbar flex justify-between">
      <div className="left">Cargoa</div>
      <div className="right" onClick={handleLogout}>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
};