import Image from 'next/image'
import React from 'react'

const Testmonial = () => {
  return (
    <div>
      <div className='container pt-16 pb-16 grid-cols-2' >
        <h2 className='font-medium text-2xl pb-4 '>Testmonials</h2>
        <div className='grid lg:grid-cols-[300px,1fr] gap-4' data-aos="zoom-in" data-aos-duration="1000">
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0' data-aos="zoom-in" data-aos-duration="1000">    
        <div className='text-center flex flex-col items-center gap-1' data-aos="zoom-in" data-aos-duration="1000">   

        <Image className="rounded-full inline-block" src="/dp.png" width={80} height={80} alt="dp"/>
        <h2 className='text-gray-500 font-black text-[20px]'>Babar Bamsi</h2>
        <p>CEO & Founder Invision</p>

        <Image className="inline-block py-2" src="/quotes.png" width={30} height={30} alt="quotes"/>
        <p>NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT.</p>
        </div>
        </div>

        <div className='bg-red-600 bg-[url(/cta-banner.avif)] bg-cover h-[400px] rounded-2xl grid place-items-center'>
    <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3 border-4 border-white'>
        <button className='bg-blackish text-white p-2 rounded-md' data-aos="zoom-out-left" data-aos-duration="1000">25% DISCOUNT</button>        
        <h2 className='font-extrabold text-2xl text-[#272727]' data-aos="zoom-out-left" data-aos-duration="1000">SUMMER COLLECTION</h2>
        <p className='text-gray-500 text-lg'>
            Starting @ $20 <b>Shop Now</b>
        </p>
    </div>
</div>


        </div>
      </div>
    </div>
  )
}

export default Testmonial
