"use client"

import ClientReview from '@/components/ClientReview'
import Navbar from '@/components/Navbar'
import PriceSection from '@/components/PriceSection'
import ServiceCard from '@/components/ServiceCard'
import getDoument from '@/firebase/firestore/getData'
import getSubcollectionData from '@/firebase/firestore/getReview'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {

  const [heading, setHeading] = useState("")
  const [para, setPara] = useState('')
  const [appstore, setAppstore] = useState('')
  const [playstore, setPlaystore] = useState('')

  const fetchdata = async () => {
  
      try {
        const data = await getDoument('website_setting',"header");
        console.log(data)
        setHeading(data.result._document.data.value.mapValue.fields.heading.stringValue);
        setPara(data.result._document.data.value.mapValue.fields.para.stringValue);
        setAppstore(data.result._document.data.value.mapValue.fields.appstore.stringValue);
        setPlaystore(data.result._document.data.value.mapValue.fields.playstore.stringValue);


        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  
  };

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchSubcollectionData = async () => {
      const subcollectionName = 'reviewsdetails'; // Replace with your subcollection name
      const docId = 'reviews'; // Replace with the ID of the parent document
      const collectionName = 'website_setting'; // Replace with the name of the parent collection

      const subcollectionData = await getSubcollectionData(collectionName, docId, subcollectionName);
      setData(subcollectionData);
  };

  fetchSubcollectionData();
      fetchdata();
  }, []);
  return (
    <>
      <div className=' bg-white z-10 font-serif overflow-hidden'>
        

        {/* Intero */}

        <div id='home' className='z-10 relative flex flex-col  lg:flex-row overflow-hidden lg:h-[60rem] 2xl:h-[80rem]'>
          <div className=' lg:w-full    bg-white lg:absolute'>
            
            <Navbar />

          

          </div>

          <div className='relative   opacity-80 z-20   '>
            <img
              src="/images/slider-left-dec.png"
              alt="Getwick Logo"
              className="hidden lg:block w-[100%]  relative bg-opacity-30    "
            />
            <div className=' relative mt-20 md:mt-28 lg:mt-0  z-30 lg:bottom-[35rem] 2xl:bottom-[45rem] lg:w-[80%] p-5 md:px-20 lg:pl-40 '>
              <h1 className='text-black text-3xl leading-8 md:leading-none md:text-[55px] font-[600] '>{heading}</h1>
              <p className='mt-8 text-lg'>{para}</p>
               
              <div className='flex gap-4 mt-10'>
             
              <Link href={appstore} target="_blank" >
                <div className='bg-[#eb0c8e] flex justify-center items-center gap-1 w-40 p-3 rounded-lg'>
                  <button className='text-[13px] text-white font-[500]'>App Store </button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                </div>
                </Link>
                <Link href={playstore} target="_blank"  >
                <div className='bg-[#eb0c8e] flex justify-center items-center gap-1 w-40 p-3 rounded-lg'>
                  <button className='text-[13px] text-white font-[500]'>Play Store </button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                </div>
                </Link>
              </div>
            </div>
          </div>

          <div className='relative mt-10 lg:top-72 lg:right-40 lg:w-[40%] '>
            <img
              src="/images/slider-dec.png"
              alt="Getwick Logo"
              className="w-[45rem]    "
            />
          </div>
        </div>





        {/* Services */}

        <div className=' px-4 md:px-16 mt-20 lg:mt-0' id='service'>
          <div className='flex flex-col justify-center gap-4 md:gap-10 items-center'>
            <h1 className='md:text-3xl text-xl text-center text-black font-[600]' >Amazing <span className='text-[#eb0c8e]'>Services & Features</span> For You</h1>
            <p className='text-lg text-center md:w-[40rem]'>If you need the greatest collection of HTML templates for your business, please visit TooCSS Blog. If you need to have a contact form PHP script, go to our contact page for more information.</p>
          </div>

          <div className='mt-20 p-3 grid md:grid-cols-2 2xl:grid-cols-4 gap-5'>
            <ServiceCard imgsrc={"/images/service-icon-01.png"} hoverimg={"/images/service-icon-hover-01.png"} heading={"App Maintenance"} des={"You are not allowed to redistribute this template ZIP file on any other website"} />
            <ServiceCard imgsrc={"/images/service-icon-02.png"} hoverimg={"/images/service-icon-hover-02.png"} heading={"Rocket Speed of App"} des={"You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout."} />
            <ServiceCard imgsrc={"/images/service-icon-03.png"} hoverimg={"/images/service-icon-hover-03.png"} heading={"Multi Workflow Idea"} des={"If this template is beneficial for your work, please support us a little via PayPal. Thank you"} />
            <ServiceCard imgsrc={"/images/service-icon-04.png"} hoverimg={"/images/service-icon-hover-04.png"} heading={"24/7 Help & Support"} des={"Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe."} />

          </div>
        </div>



        {/* About Section */}

        <div id='about' className='px-4  lg:mt-40 lg:px-20'>
          <div className='flex flex-col gap-10 xl:flex-row'>
            <div className='flex flex-col py-8 gap-8 xl:w-[50%]'>
              <h1 className='text-black text-3xl font-[700] '>About <span className='text-[#eb0c8e]'>What We DO</span>  & Who We Are</h1>
              <div className='flex justify-center gap-2'>
                <div className='p-[1px] w-5 bg-blue-500'></div>
                <div className='p-[1px] w-5 bg-blue-500'></div>
              </div>
              <p className='text-lg text-gray-500 font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
              <div className='flex flex-col md:flex-row gap-8 mt-5'>
                <div className='p-5 px-6 rounded-[3rem]  md:w-[22rem] shadow-2xl'>
                  <h1 className='text-black font-[700]  text-2xl hover:text-[#eb0c8e]'>Maintance Problems</h1>
                  <p className='text-gray-500 font-[400]'>Lorem Ipsum Text</p>
                </div>
                <div className='p-5 px-6 rounded-[3rem] md:w-[22rem] shadow-2xl'>
                  <h1 className='text-black font-[700]  text-2xl hover:text-[#eb0c8e]'>24/7 Support & Help</h1>
                  <p className='text-gray-500 font-[400]'>Lorem Ipsum Text</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='p-5 px-6 rounded-[3rem] md:w-[22rem] shadow-2xl'>
                  <h1 className='text-black font-[700]  text-2xl hover:text-[#eb0c8e]'>Fixing Issues About</h1>
                  <p className='text-gray-500 font-[400]'>Lorem Ipsum Text</p>
                </div>
                <div className='p-5 px-6 rounded-[3rem] md:w-[22rem] shadow-2xl'>
                  <h1 className='text-black font-[700]  text-2xl hover:text-[#eb0c8e]'>Co. Development</h1>
                  <p className='text-gray-500 font-[400]'>Lorem Ipsum Text</p>
                </div>
              </div>
              <p className='text-lg text-gray-500 font-[400] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
              <div>
                <button className='bg-blue-500 p-3 px-8 text-white rounded-xl'>Start 14-Day Free Trial</button>
                <p className='mt-5 text-gray-500'>*No Credit Card Required</p>
              </div>
            </div>

            <div className='relative xl:w-[45%]  bg-black'>
              <div className='bg-black  overflow-hidden'>
                <img
                  src="/images/about-bg.jpg"
                  alt="Getwick Logo"
                  className="  absolute md:bottom-0 h-full md:h-[50rem] w-full "
                />
              </div>
              <div>
                <img
                  src="/images/about-right-dec.png"
                  alt="Getwick Logo"
                  className="   relative "
                />
              </div>
            </div>
          </div>
        </div>


        {/* Clients Section */}

        <div className='mt-40 py-5'>

          <div className='flex flex-col px-4 justify-center items-center gap-8'>
            <h1 className='text-black text-xl lg:text-4xl font-[700]'>Check What <span className='text-[#eb0c8e]'>The Clients Say</span>  About Our App Dev</h1>
            <div className='flex gap-2'>
              <div className='p-[1px] w-5 bg-blue-500'></div>
              <div className='p-[1px] w-5 bg-blue-500'></div>
            </div>
            <p className='text-gray-500 md:w-[30rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div>

          <div className=' xl:px-20'>
            <ClientReview data={data} />
          </div>
        </div>



        {/* Prices Section */}
        <div className='lg:mt-40 mt-20' id='price'>

          <div className='flex flex-col px-4 justify-center items-center gap-8'>
            <h1 className='text-black text-xl lg:text-4xl font-[700]'>We Have The Best Pre-Order <span className='text-[#eb0c8e]'>Prices</span>  You Can Get</h1>
            <div className='flex gap-2'>
              <div className='p-[1px] w-5 bg-blue-500'></div>
              <div className='p-[1px] w-5 bg-blue-500'></div>
            </div>
            <p className='text-gray-500 lg:w-[30rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div>

          <div className='lg:px-20 px-4 lg:mt-40 mt-10'>
            <PriceSection />
          </div>


        </div>





        {/* Footer Section */}

        <div className='lg:mt-20 mt-10' id='news'>
          <div
            className='bg-cover lg:h-[55rem] flex flex-col justify-center items-center'
            style={{ backgroundImage: `url(/images/footer-bg.png)` }}
          >
            <div className='flex flex-col justify-center  items-center gap-10 mt-10 px-4 lg:mt-60'>
              <h1 className='lg:text-white text-3xl font-[600] text-center  md:w-[35rem]'>Join Our Mailing List To Receive The News & Latest Trends</h1>
              <div className='flex flex-col lg:flex-row  lg:w-[35rem] gap-5'>
                <input placeholder='Email Address...' className='placeholder-white  text-white p-2 bg-gray-400 lg:bg-transparent lg:w-[45%]  border-b-2 outline-none '></input>
                <button className='lg:w-[45%] bg-gray-400 lg:bg-transparent text-white hover:bg-white hover:text-pink-500 border p-2'>Subscribe Now</button>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5  mt-10  lg:gap-20 p-3 lg:mt-20'>

              <div className='flex flex-col gap-6'>
                <h1 className='lg:text-white text-2xl font-[600]'>Contact Us</h1>
                <p className='lg:text-white font-[500] mt-3'>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                <p className='lg:text-white font-[500]'>010-020-0340</p>
                <p className='lg:text-white font-[500]'>info@company.co</p>
              </div>

              <div className='flex flex-col gap-6'>
                <h1 className='lg:text-white text-2xl font-[600]'>About Us</h1>
                <div className='flex gap-4'>
                  <div className='space-y-3'>
                    <p className='text-white'>Home</p>
                    <p className='text-white'>Services</p>
                    <p className='text-white'>About</p>
                    <p className='text-white'>Testimonials</p>
                    <p className='text-white'>Pricing</p>
                  </div>
                  <div className='space-y-3 text-white'>
                    <p>About</p>
                    <p>Testimonials</p>
                    <p>Pricing</p>
                  </div>
                </div>
              </div>


              <div className='flex flex-col gap-6'>
                <h1 className='text-white text-2xl font-[600]'>Useful Links</h1>
                <div className='flex gap-4 text-white'>
                  <div className='space-y-3'>
                    <p>Free Apps</p>
                    <p>App Engine</p>
                    <p>Programming</p>
                    <p>Development</p>
                    <p>App News</p>
                  </div>
                  <div className='space-y-3'>
                    <p>App Dev Team</p>
                    <p>Digital Web</p>
                    <p>Normal Apps</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-6'>
                <h1 className='text-white text-2xl font-[600]'>About Our Company</h1>
                <p className='text-white w-72'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center text-white mt-14 gap-2'>
              <h1>Copyright © 2022 Chain App Dev Company. All Rights Reserved.</h1>
              <p>Design: TemplateMo</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
