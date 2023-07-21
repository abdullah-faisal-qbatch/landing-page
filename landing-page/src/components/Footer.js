import React from 'react'

const Footer = () => {
  return (
    // Main Section
    <div className="flex flex-row items-center space-y-5"
    style={{
      height:'60vh',
      alignItems:'center',
    //   border:'5px solid red',    
      justifyContent:'center',
      backgroundColor:"white",
    }}      
    >
    {/* 1st element */}
    <div>
    <p className="text-base font-bold text-center" style={{
      fontFamily:"sans-serif",
      width:"700px",
    }}>
      The smarter way to start your next idea
    </p> 
    </div>
    {/* 2nd Element */}
    <div>
    <p className="text-base text-center" style={{
      fontFamily:"sans-serif",
      width:"700px",
    }}>
        {/* Division of 2nd element */}
        {/* Row # 01 */}
        <div className='flex flex-row items-center font-bold justify-between mr-10'
                style={{
                    fontSize:"14px"
                }}
        >
            {/* 1st element */}
            <div>
                How it Works
            </div>
            <div>
                Resources
            </div>
            <div>
                Products
            </div>

            <div>
                Company
            </div>
        </div>
        {/* Row # 02 */}
        <div className='flex flex-row items-center justify-between mr-10 text-color-darkGrayishBlue'
        style={{
            fontSize:"13px"
        }}
        >
            {/* 1st element */}
            <div>
                Overview
            </div>
            <div>
                Customer Stories
            </div>
            <div>
            Corporate Partners
            </div>

            <div>
            About Us
            </div>
        </div>
        {/* Row # 03 */}
        <div className='flex flex-row items-center justify-between mr-10'
                style={{
                    fontSize:"13px"
                }}
        >
            {/* 1st element */}
            <div>
                Pricing
            </div>
            <div>
                Knowledge Base
            </div>
            <div>
                Secure Identity
            </div>

            <div>
            Careers
            </div>
        </div>
        {/* Row # 04 */}
        <div className='flex flex-row items-center justify-between mr-10'         
        style={{
            fontSize:"13px"
        }}>
            {/* 1st element */}
            <div>
                Service Areas
            </div>
            <div>
                    Contact Us
            </div>
            <div>
                Legal Help
            </div>

            <div>
            Terms of Use
            </div>
        </div>
        <div className='flex flex-row items-center justify-between mr-10'         
        style={{
            fontSize:"13px"
        }}>
            {/* 1st element */}
            <div>
            </div>
            <div>
            </div>
            <div>
                First Capital
            </div>

            <div>
            </div>
        </div>

    </p> 
    </div>

  </div>
)
}

export default Footer
