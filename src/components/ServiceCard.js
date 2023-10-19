"use client"


import React, { useState } from 'react'

const ServiceCard = ({imgsrc,hoverimg,heading,des}) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`flex flex-col justify-around gap-4 shadow-2xl rounded-tr-[3rem] p-8 w-[100%]`}
        style={ isHovered ?{  backgroundImage: `url(/images/service-bg.jpg)` } : { backgroundColor: 'white'}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src= {isHovered ? hoverimg:imgsrc} alt="Getwick Logo" className="w-14" />
        <h1 className={` text-2xl font-[500] ${isHovered ? "text-white":"text-black"}`}>{heading}</h1>
        <p className={`lg:w-72 ${isHovered ? "text-white":"text-black"} `}>
         {des}
        </p>
        <div className="flex gap-2">
          <p className={isHovered ? 'text-white' : `text-blue-500`}>Read More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${ isHovered ? 'text-white' : 'text-blue-500' } `}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </div>
      </div>
    );
}

export default ServiceCard