import React from 'react'
import final from './../final.jpg'

const Image = () => {
  return (
    <div className='flex space-x-2 flex-col mt-10' style={{
        // border:"2px solid green",
      }}>
    <div 
    style={{
        height:"40vh"
    }}>
        <div style={{width: "300px", height: "300px"}}>
            <img src={final} alt="Error in image" width="100%" height="100%" /> 
        </div>
      </div> 
      <div className='mt-2.5'>
        <h1 className="max-w-md text-2xl font-bold mt-2.5" style={{
          color:"black",
          marginTop:"10px"
        }}>Advanced Features</h1>
        <p className="max-w-sm text-darkGrayishBlue mt-2.5">
          Our landing page template works on all devices, so you only have
          to set it up once and get beautiful results forever
        </p>``
      </div>
      </div>
  )
}

export default Image
