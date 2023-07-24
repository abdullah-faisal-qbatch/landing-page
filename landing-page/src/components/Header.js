import React from "react";
import "./../styles/Header.css";
import home from "./../assets/home.jpg";

const Header = () => {
  return (
    <section id="#header" className="ml-64 header-main-section">
      <div className="flex flex-row mt-10">
        <div className="flex flex-col mb-32 space-y-5">
          <p className="max-w-md text-4xl font-bold header-heading">
            Create stunning web experiences
          </p>
          <p className="max-w-sm text-darkGrayishBlue">
            Our landing page template works on all devices, so you only have to
            set it up once and get beautiful results forever
          </p>
          <div className="space-x-1">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Request Demo
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Explore Products
            </button>
          </div>
        </div>
        <div>
          <img src={home} className="header-image" alt="Error in image"></img>
        </div>
      </div>
    </section>
  );
};

export default Header;
