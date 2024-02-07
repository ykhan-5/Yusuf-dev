import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
