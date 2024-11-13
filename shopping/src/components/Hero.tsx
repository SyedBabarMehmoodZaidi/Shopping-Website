"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

    const settings ={
        dots: true,
        infinite: true,
        SlidesToShow: 1,
        SlidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
        id: 0,
        img: "/banner1.png.jpg",
        title: "Trending Item",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "$20",
    },
    {
        id: 1,
        img: "/Banner2.png.avif",
        title: "Trending Accessories",
        mainTitle: "MODERN SUNGLASSES",
        price: "$15",
    },
    {
        id: 2,
        img: "/Banner3.png.webp",
        title: "Sale Offer",
        mainTitle: "NEW FASHION SUMMER SALE",
        price: "$30",
    }
];

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) => (
                <Slide key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
                />
                ))}
                </Slider> 
        </div>
    </div>
  )
};

export default Hero
