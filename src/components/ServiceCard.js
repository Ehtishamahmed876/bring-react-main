"use client"


import { findAll } from '@/firebase/firestore/getServices';
import React, { useEffect, useState } from 'react'

const ServiceCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [data, setdata] = useState([])

  async function fetchData() {
    try {
      const serdata = await findAll();
      setdata(serdata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <>
       

      {

        data.map((service) => (


          <div
            key={service.id}
            className={`flex flex-col items-center gap-4 shadow-2xl  rounded-tr-[3rem] p-8 w-[100%]`}
            style={ isHovered ?{  backgroundImage: `url(/images/service-bg.jpg)` } : { backgroundColor: 'white'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={service.icon} alt="Getwick Logo" className=" h-40" />
            <h1 className={` text-2xl font-[500] ${isHovered ? "text-white" : "text-black"}`}>{service.name}</h1>
            <p className={`lg:w-72 text-center ${isHovered ? "text-white" : "text-black"} `}>
              {service.description}
            </p>
            <div className="flex gap-2">
              <p className={isHovered ? 'text-white' : `text-blue-500`}>Price start from {service.base_price} NZD</p>

            </div>
          </div>
        ))
        }
      


    </>

  );
}

export default ServiceCard