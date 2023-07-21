import React from 'react'
import Image from './Image'

const ImageSection = () => {
  return (
    <div className='flex flex-col items-center' style={{
        color:"white",
        justifyContent:"center"
    }}>      
    <h1 className='text-center mt-10' style={{
        fontSize:"50px",
        fontWeight:"200px",
        width:"750px",
    }}>
    Simplify operating and manage 
    with transparency
    </h1>
    <div className='grid grid-cols-3 mt-10 mb-10 ml-40 mr-40'>
      <Image/>
      <Image/>
      <Image/>
      </div>
    </div>
  )
}

export default ImageSection
