import React from "react";
import "./header.css";

export const Header = () => {
  return (
      <div className="container-wrapper flex justify-between m-16 mt-8">
        <div className="text-5xl logo text-white">Cargoa</div>
        <div className="wrapper flex gap-9">
          <div className="text-xl wrapper-text text-white">About</div>
          <div className="text-xl wrapper-text text-white">Let's talk</div>
        </div>
      </div>
  );
};