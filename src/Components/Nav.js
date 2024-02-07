import React from "react";

export const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav-cont">
        <div className="nav-left-text">Yusuf.dev</div>
        <div className="nav-right">
          <div className="navbar-item">
            <a href="#home-container">Home</a>
          </div>
          <div className="navbar-item">
            <a href="#about">About</a>
          </div>
          <div className="navbar-item">
            <a href="#projects">Currently</a>
          </div>
          <div className="navbar-item">
            <a href="#contacts">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};
