"use client"

import Link from 'next/link';
import React, { useState } from 'react'




const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNav = () => {
    setShowNavLinks(!showNavLinks);
  };
  return (
    <nav className=" lg:px-6 lg:p-4 xl:space-x-80 fixed z-30 w-full bg-white  font-inter flex justify-between p-4 lg:justify-around border-b-2 items-center ">
      {/* Left side */}
      <div className="flex gap-2   items-center">
        <img
          src="/images/logo.png"
          alt="Getwick Logo"
          className="md:w-36 md:h-20 w-16"
        />

      </div>

      {/* Links */}
      <div className='hidden lg:block z-30'>
        <div className='flex items-center gap-6 xl:gap-12'>

          <ul className="flex text-2xl  lg:text-4xl space-x-3 lg:space-x-10 mb-3">
            <li>
            <Link href={"#home"}  legacyBehavior >

              <a href="#" className={`text-black font-[400] text-[16px]  `}>
                Home
              </a>
              </Link>
            </li>
            <li className='cursor-pointer  z-50'>
              <Link href={"#service"}  legacyBehavior >

              <a href="" className={`text-black font-[400] text-[16px]   cursor-pointer`}>
                Services
              </a>
              </Link>

            </li>
            <li>
            <Link href={"#about"}  legacyBehavior >

              <a href="#" className={`text-black font-[400] text-[16px]   `}>
                About
              </a>
              </Link>
            </li>
            <li>
            <Link href={"#price"}  legacyBehavior >

              <a href="#" className={`text-black font-[400] text-[16px]   `}>
                Screenshot
              </a>
              </Link>
            </li>
            <li>
            <Link href={"#news"}  legacyBehavior >

              <a href="#" className={`text-black font-[400] text-[16px]   `}>
                Newsletter
              </a>
              </Link>
            </li>
          </ul>

          <div className=" flex items-center gap-6">
            <div className='bg-[#eb0c8e] flex items-center gap-1 w-24 p-3 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>

              <button className='text-[13px] text-white font-[500]'>Send </button>
            </div>
            <button className='text-[13px] text-white bg-blue-500 w-20 rounded-lg p-3 font-[500]'>Drive </button>
          </div>
        </div>

      </div>

      {/* Right side */}
      <div className="lg:hidden">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

 {/* hell */}


      {showNavLinks && (

        <div className="px-2 flex items-center justify-around pt-2 pb-4 space-y-2 z-10 h-48  w-[93%] absolute bg-pink-500 md:top-28 top-16 left-3  lg:hidden">
          <div className=' p-5 list-none '>

          <li>
            <Link href={"#home"}  legacyBehavior >

              <a href="#" className={`text-white font-[400] text-[16px]  `}>
                Home
              </a>
              </Link>
            </li>
            <li className='cursor-pointer  z-50'>
              <Link href={"#service"}  legacyBehavior >

              <a href="" className={`text-white font-[400] text-[16px]   cursor-pointer`}>
                Services
              </a>
              </Link>

            </li>
            <li>
            <Link href={"#about"}  legacyBehavior >

              <a href="#" className={`text-white font-[400] text-[16px]   `}>
                About
              </a>
              </Link>
            </li>
            <li>
            <Link href={"#price"}  legacyBehavior >

              <a href="#" className={`text-white font-[400] text-[16px]   `}>
                Screenshot
              </a>
              </Link>
            </li>
            <li>
            <Link href={"#news"}  legacyBehavior >

              <a href="#" className={`text-white font-[400] text-[16px]   `}>
                Newsletter
              </a>
              </Link>
            </li>
          </div>
          <div className=" flex flex-col gap-2 items-start ">
          <div className=" flex items-center gap-6">
            <div className='bg-[#eb0c8e] flex items-center gap-1 lg:w-24 p-3 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>

              <button className='text-[13px] text-white font-[500]'>Send </button>
            </div>
            <button className='text-[13px] text-white bg-blue-500 w-20 rounded-lg p-3 font-[500]'>Drive </button>
          </div>
          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar