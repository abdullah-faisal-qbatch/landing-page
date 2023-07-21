import React from 'react'

const Footer = () => {
  return (
      <div className="flex flex-col mb-32 items-center space-y-5 bg-slate-300"
      style={{
        height:'60vh',
        alignItems:'center',
        justifyContent:'center'
      }}      
      >
      <h1 className="max-w-md text-4xl font-bold text-center " style={{
        fontFamily:"sans-serif"
      }}>
        Say goodbye to long queues, big          
        updates, and <p className='text-brightRed'>confusion</p>
      </h1> 
      <p className="max-w-sm text-center text-darkGrayishBlue">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.      </p>
      <div className="flex ml-0 space-x-1">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          Request Demo
        </button>
      </div>
    </div>
)
}

export default Footer
