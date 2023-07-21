import React from 'react'
import home from "./../home.jpg";


const Header = () => {
  return (
    <section id="#header" className="ml-64" style={{
      color:"white"
    }}>
    {/* Container */}
    <div className="flex flex-row mt-10">
      {/* left */}
      <div className="flex flex-col mb-32 items-center space-y-5">
        <h1 className="max-w-md text-4xl font-bold text-center">
          Create Stunning web experiences
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue">
          Our landing page template works on all devices, so you only have
          to set it up once and get beautiful results forever
        </p>
        <div className="flex ml-0 space-x-1">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Request Demo
          </button>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Explore Products
          </button>
        </div>
      </div>
      {/* right */}
      <div className="">
        <img
          src={home}
          style={{ width: 400, height: 325 }}
          alt="Error in image"
        ></img>
      </div>
    </div>
  </section>
)
}

export default Header
