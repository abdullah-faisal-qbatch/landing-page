import React from "react";
import logo from "./../assets/logo.png";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="mx-auto ps-6 pt-4 navbar-main-section">
      <div className="flex flex-row-start items-center justify-between">
        <div className="flex space-x-10 ml-56 navbar-img-section">
          <img src={logo} className="navbar-image" alt="Error in image"></img>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Pricing
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Product
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            About
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Blog
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Wall of Love
          </a>
          <a href="/" className="text-darkGrayishBlue hover:text-white">
            Resources
          </a>
        </div>
        <div className="flex space-x-10 pb-6 mr-32">
          <a href="/" className="hover:text-darkGrayishBlue">
            Sign in
          </a>
          <a href="/" className="hover:text-darkGrayishBlue resources">
            Request Demo <span className="arrow">&#8594;</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
