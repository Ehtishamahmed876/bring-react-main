import React from 'react';

const PriceSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center gap-10 m-3">
            {/* Standard Package Card */}
            <div className="lg:w-[33%] h-full rounded-3xl shadow-2xl text-center relative">
                <div className='rounded-3xl'>
                    <img
                        src="/images/pro-table-top.png"
                        alt="Getwick Logo"
                        className="  absolute rounded-3xl"
                    />
                    <p className='text-3xl text-white font-[600] absolute p-5'>12$</p>
                </div>


                <div className='flex flex-col p-10 py-20 gap-10 justify-center items-center  h-full'>

                <div className="relative  " >
                    <h2 className="text-2xl text-black font-[700] mt-4">Standard Plan App</h2>
                </div>
                <div>
                <img
                        src="/images/pricing-table-01.png"
                        alt="Getwick Logo"
                        className=" w-40 "
                    />
                </div>
                <ul className="text-lg list-none space-y-5 mt-4">
                    <li className="text-pink-500">Lorem Ipsum Dolores</li>
                    <li className="text-pink-500">20 TB of Storage</li>
                    <li className="line-through text-gray-500">Life-time Support </li>
                    <li className="line-through text-gray-500">Premium Add-Ons</li>
                    <li className="line-through text-gray-500">Fastest Network</li>
                    <li className="line-through text-gray-500">More Options</li>

                </ul>
                <div className="mt-2 z-10 ">
                    <button className="border-pink-500 text-lg  text-pink-500 border px-2 py-1 lg:px-6 lg:py-4 rounded-xl   hover:bg-pink-500 hover:text-white">Purchase This Plan Now</button>
                </div>
                </div>
                <div className=''>
                    <img
                        src="/images/pro-table-bottom.png"
                        alt="Getwick Logo"
                        className="  absolute bottom-0 rounded-3xl z-0 right-0"
                    />
                 
                </div>
            </div>

            {/* Business Package Card (Center) */}
      
          
            <div className="lg:w-[33%] lg:h-[60rem] lg:bottom-16  rounded-3xl shadow-2xl text-center relative">
                <div>

                <div>
                    <img
                        src="/images/pro-table-top.png"
                        alt="Getwick Logo"
                        className="  absolute rounded-3xl"
                    />
                    <p className='text-3xl text-white font-[600]  absolute p-5'>25$</p>
                </div>


                <div className='flex flex-col p-10 py-20 gap-10 justify-center items-center  h-full'>

                <div className="relative  " >
                    <h2 className="text-2xl text-black font-[700] mt-4">Business Plan App</h2>
                </div>
                <div>
                <img
                        src="/images/pricing-table-01.png"
                        alt="Getwick Logo"
                        className=" w-40 "
                    />
                </div>
                <ul className="text-lg list-none space-y-5 mt-4">
                    <li className="text-pink-500">Lorem Ipsum Dolores</li>
                    <li className="text-pink-500">20 TB of Storage</li>
                    <li className="text-pink-500">Life-time Support </li>
                    <li className="text-pink-500">Premium Add-Ons</li>
                    <li className="line-through text-gray-500">Fastest Network</li>
                    <li className="line-through text-gray-500">More Options</li>

                </ul>
                <div className="mt-2 ">
                    <button className="border-pink-500 text-lg  text-pink-500 border px-2 py-1 lg:px-6 lg:py-4 rounded-xl   hover:bg-pink-500 hover:text-white">Purchase This Plan Now</button>
                </div>
                </div>
                <div>
                    <img
                        src="/images/pro-table-bottom.png"
                        alt="Getwick Logo"
                        className="  absolute rounded-3xl bottom-0 right-0"
                    />
                 
                </div>
                </div>

            </div>

            {/* Premier Package Card */}
        
         
            <div className="lg:w-[33%] h-full rounded-3xl shadow-2xl text-center relative">
                <div>
                    <img
                        src="/images/pro-table-top.png"
                        alt="Getwick Logo"
                        className="  absolute rounded-3xl"
                    />
                    <p className='text-3xl text-white  font-[600] absolute p-5'>66$</p>
                </div>


                <div className='flex flex-col p-10 py-20 gap-10 justify-center items-center  h-full'>

                <div className="relative  " >
                    <h2 className="text-2xl text-black font-[700] mt-4">Premium Plan App</h2>
                </div>
                <div>
                <img
                        src="/images/pricing-table-01.png"
                        alt="Getwick Logo"
                        className=" w-40 "
                    />
                </div>
                <ul className="text-lg list-none space-y-5 mt-4">
                    <li className="text-pink-500">Lorem Ipsum Dolores</li>
                    <li className="text-pink-500">20 TB of Storage</li>
                    <li className="text-pink-500">Life-time Support </li>
                    <li className="text-pink-500 ">Premium Add-Ons</li>
                    <li className="text-pink-500">Fastest Network</li>
                    <li className="text-pink-500">More Options</li>

                </ul>
                <div className="mt-2 z-10  cursor-pointer ">
                    <button className="border-pink-500   text-lg  text-pink-500 border px-2 py-1 lg:px-6 lg:py-4 rounded-xl    hover:bg-pink-500 hover:text-white">Purchase This Plan Now</button>
                </div>
                </div>
                <div>
                    <img
                        src="/images/pro-table-bottom.png"
                        alt="Getwick Logo"
                        className="  absolute rounded-3xl z-0 bottom-0 right-0"
                    />
                 
                </div>
            </div>
        </div>
    );
};

export default PriceSection;
