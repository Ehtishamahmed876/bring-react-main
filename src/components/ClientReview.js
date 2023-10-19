"use client"


import React, { useState } from 'react';
import StarRating from './StarRating';

const clients = [
  {
    name: 'David Martino Co',
    date: '30 November 2021',
    comwork: 'Financial Apps',
    position: 'CEO of David Company',
    stars: 4.8,
    message: '“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”    ',
    image: '/images/client-image.jpg',
  },
  {
    name: 'Jake Harris Nyo',
    date: '29 November 2021',
    comwork: 'Digital Business',
    position: 'CTO of Digital Company',
    stars: 4.5,
    message: '“Nyo,Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”    ',
    image: '/images/client-image.jpg',
  },
  {
    name: 'May Catherina',
    date: '27 November 2021',
    comwork: 'Business & Economics',
    position: 'CEO of David Company',
    stars: 4.7,
    message: '“May,Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”    ',
    image: '/images/client-image.jpg',
  },
  {
    name: 'Random User',
    date: '24 November 2021    ',
    comwork: 'New App Ecosystem',
    position: ' Manager, Digital Company',
    stars: 3.9,
    message: '“May,Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”    ',
    image: '/images/client-image.jpg',
  },
  {
    name: 'Mark Amber Do',
    date: '21 November 2021',
    comwork: 'Web Development',
    position: 'CTO, Amber Do Company',
    stars: 4.3,
    message: '“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”    ',
    image: '/images/client-image.jpg',
  },
  // Add more client data as needed
];

const ClientReview = () => {
  const [selectedClient, setSelectedClient] = useState(clients[0]);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-4 mt-5">
      <div className="md:w-[65%] ">
          <div className='flex flex-col justify-center items-center gap-5'>
          {clients.map((client, index) => (
              <div 
              key={index}
              className='flex flex-col lg:flex-row justify-around '
               >
                <div  onClick={() => setSelectedClient(client)} className='cursor-pointer lg:w-40'>
                       <h1   className={` lg:text-xl font-[600] ${client === selectedClient ? 'text-[#eb0c8e]' : 'text-black' }`}>{client.name}</h1>
                       <p className='text-sm text-gray-500'>{client.date}</p>
                </div>
                <div className='flex justify-start items-start w-40 '>
                    <p className='font-[600]  text-gray-500'>{client.comwork}</p>
                </div>
                <div className='gap-2 flex justify-start items-start w-40'>
                <StarRating stars={client.stars} /> {/* Use the StarRating component */}
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
        <p className="mt-4 text-white lg:text-lg">{selectedClient.message}</p>

        </div>
        <div className="mt-4 flex items-center gap-5">
          <img
            src={selectedClient.image}
            alt={selectedClient.name}
            className="lg:w-40 lg:h-40 w-16 h-16 object-cover rounded-full"
          />
          <div className='flex flex-col gap-5'>
          <p className="lg:text-xl text-black font-[600]">{selectedClient.name}</p>
          <p>{selectedClient.position}</p>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default ClientReview;
