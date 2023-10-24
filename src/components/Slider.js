"use client"

import getSubcollectionData from '@/firebase/firestore/getReview';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
  const [data, setData] = useState([]);

  const fetchSubcollectionData = async () => {
    const subcollectionName = 'screenshots'; // Replace with your subcollection name
    const docId = 'app-screenshot'; // Replace with the ID of the parent document
    const collectionName = 'website_setting'; // Replace with the name of the parent collection

    const subcollectionData = await getSubcollectionData(collectionName, docId, subcollectionName);
    console.log("sub",subcollectionData)
    setData(subcollectionData);
};

  useEffect(() => {
 
  fetchSubcollectionData();

  }, []);

    // const imageUrls = [
    //     '/images/screenshot1.png',
    //     '/images/screenshot2.png',
    //     '/images/screenshot3.png',
    //     '/images/screenshot4.png',
    //     '/images/screenshot5.png',
    //     '/images/screenshot6.png',

    //     // Add more image URLs as needed
    // ];

    return (
        <div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
             
                    {data.map((screenshot) => (
                        <div key={screenshot.id} className="p-10 m-10  flex justify-center">
                            <img src={screenshot.imageUrl} alt="image" className='h-[35rem] shadow-2xl' />
                        </div>
                    ))}
            
            </Carousel>;
        </div>
    )
}

export default Slider