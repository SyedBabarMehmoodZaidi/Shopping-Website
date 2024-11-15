import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
    { 
        img: "/jacket.png.jfif",
        title: "Jacket",
        desc: "Men Full Zip Jacket",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/necklace.png",
        title: "Necklace",
        desc: "Heavy Gold Jewlery",
        rating: 5,
        price: "55.00",
    },
    {
        img: "/slipper.png",
        title: "Slipper",
        desc: "Women Formal Slipper Heels",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/shoe.png",
        title: "Shoe",
        desc: "Sports Shoes",
        rating: 3,
        price: "25.00",
    },
    {
        img: "/watch.png",
        title: "Watch",
        desc: "Luxury Rado Watch ",
        rating: 4,
        price: "20.00",
    },
    {
        img: "/tshirt.png.jfif",
        title: "T-Shirt",
        desc: "Premium Quality Polo T-Shirt",
        rating: 5,
        price: "30.00",
    },
    {
        img: "/tshirt1.png.jpg",
        title: "T-Shirt",
        desc: "Pure Cotton Polo T-Shirt.",
        rating: 3,
        price: "25.00",
    },
    {
        img: "/hoodie.png.png",
        title: "Hoodie",
        desc: "Men's Ultimate Cotton Full-Zip Hoodie.",
        rating: 4,
        price: "35.00",
    },

];


const NewProducts = () => {
  return (
    <div>
      <div className='container pt-16' data-aos="zoom-out-left" data-aos-duration="1000">
        <h2 className='font-medium text-2xl pb-4 data-aos="zoom-out-left" data-aos-duration="1000"'>New Products</h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-col-4
        gap-10 xl:gap-x-20 xl:gap-y-10' data-aos="zoom-out-left" data-aos-duration="1000">

{productsData.map((item, index) =>(<ProductCard key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                />))}

        </div>
    </div>
    </div>
  )
}

export default NewProducts
