import React from 'react'
import final from './../final.jpg'

const Image = () => {
  return (
    <div className='flex space-x-2 flex-col' style={{
        border:"2px solid green",
        padding: "15px 15px 15px 15px"
      }}>
    <div 
    style={{
        height:"50vh"
    }}>
        <div style={{width: "300px", height: "300px"}}>
            <img src={final} alt="Error in image" width="100%" height="100%" /> 
        </div>
        <div className='grid grid-cols-3 mt-10 mb-10 ml-40 mr-40 gap-x-[-14px]'    
    >
      <Image/>
      <Image/>
      <Image/>
      </div>       
      </div> 
      <div>
        <h1 className="max-w-md text-2xl font-bold mt-2.5" style={{
          color:"black",
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
