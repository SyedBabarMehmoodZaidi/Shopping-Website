"use client"; 

import Hero from '@/components/Hero'
import NewProducts from '@/components/NewProducts'
import Testmonial from '@/components/Testmonial'

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Shoppingpage = () => {

  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, [])

  return (
    <main>
      <Hero />
      <NewProducts />
      <Testmonial />
    </main>
  )
}

export default Shoppingpage
