import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {

  const handleLogout = () => {
    localStorage.removeItem('token')
    console.log('Logout Clicked!');
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