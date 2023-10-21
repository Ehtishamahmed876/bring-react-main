"use client"


import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';
import getSubcollectionData from '@/firebase/firestore/getReview';



const ClientReview = () => {
  const [data, setData] = useState([]);
  const [selectedClient, setSelectedClient] = useState(data[0]);


   useEffect(() => {
     const fetchSubcollectionData = async () => {
       const subcollectionName = 'reviewsdetails'; // Replace with your subcollection name
       const docId = 'reviews'; // Replace with the ID of the parent document
       const collectionName = 'website_setting'; // Replace with the name of the parent collection
 
       const subcollectionData = await getSubcollectionData(collectionName, docId, subcollectionName);
       console.log("sub",subcollectionData)
       setData(subcollectionData);
   };
 
   fetchSubcollectionData();
 
   }, []);
   useEffect(() => {
    if (data.length > 0) {
      setSelectedClient(data[0]);
    }
  }, [data]);
  // console.log("para",data[0])
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-4 mt-5">
      <div className="md:w-[65%] ">
          <div className='flex flex-col justify-center items-center gap-5'>
          {data.map((client) => (
              <div 
              key={client.id}
              className='flex flex-col lg:flex-row justify-around '
               >
                <div  onClick={() => setSelectedClient(client)} className='cursor-pointer lg:w-40'>
                       <h1   className={` lg:text-xl font-[600] ${client === selectedClient ? 'text-[#eb0c8e]' : 'text-black' }`}>{client.name}</h1>
                       <p className='text-sm text-gray-500'>{client.date}</p>
                </div>
                <div className='flex justify-start items-start w-40 '>
                    <p className='font-[600]  text-gray-500'>{client.comfield}</p>
                </div>
                <div className='gap-2 flex justify-start items-start w-40'>
                <StarRating stars={client.rating} /> {/* Use the StarRating component */}
                  {client.stars}
                </div>
            </div>
            
           
          ))}
               </div>

      </div>
      <div className="md:w-[50%] lg:px-16  p-4">
        <div
         className='bg-cover lg:h-80 rounded-3xl flex flex-col justify-end p-10'
        style={{  backgroundImage: `url(/images/client-bg.png)` } }
        >
        <p className='hidden 2xl:block   lg:text-[8rem]  leading-none text-gray-300'>“</p>
        <p className="mt-4 text-white lg:text-lg">{selectedClient?.para}</p>

        </div>
        <div className="mt-4 flex items-center gap-5">
          <img
            src={"/images/client-image.jpg"}
            alt={selectedClient?.name}
            className="lg:w-40 lg:h-40 w-16 h-16 object-cover rounded-full"
          />
          <div className='flex flex-col gap-5'>
          <p className="lg:text-xl text-black font-[600]">{selectedClient?.name}</p>
          <p>{selectedClient?.designation}</p>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default ClientReview;
