import React from 'react'
import logo from "./../logo-final.png";

const Navbar = () => {
  return (    
    <nav className="mx-auto ps-6 pt-4" style={
      {
        color:"white"
      }
    }>
    <div className="flex flex-row-start items-center justify-between">
      <div className="flex space-x-10 ml-56" style={{
      }}>
        <img
          src={logo}
          style={{ width: 30, height: 30 }}
          alt="Error in image"
        ></img>
        <a href="/" className="hover:text-darkGrayishBlue">
          Pricing
        </a>
        <a href="/" className="hover:text-darkGrayishBlue">
          Product
        </a>
        <a href="/" className="hover:text-darkGrayishBlue">
          About
        </a>
        <a href="/" className="hover:text-darkGrayishBlue">
          Blog
        </a>
        <a href="/" className="hover:text-darkGrayishBlue">
          Wall of Love
        </a>
        <a href="/" className="hover:text-darkGrayishBlue">
          Resources
        </a>
      </div>
      <div className="flex space-x-10 pb-6 mr-32">
        <a href="/" className="hover:text-darkGrayishBlue">
          Sign in
        </a>
        <a href="/" className="hover:text-darkGrayishBlue">
          Request Demo
        </a>
      </div>
    </div>
  </nav>
)
}

export default Navbar
