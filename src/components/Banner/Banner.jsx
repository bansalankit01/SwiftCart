// import React from 'react';
// import BannerImg from '../../assets/4547829.jpg';
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='conatiner'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            <div data-aos="zoom-in">
                <img className='md:max-w-[400px] max-w-[250px] md:h-[400px] w-full mx-auto object-cover' src="https://img.freepik.com/free-vector/hand-drawn-winter-sale_23-2148724388.jpg?t=st=1739012389~exp=1739015989~hmac=26c294fdb4a95e36a1e5745ff0e71cf8b36482d856ed03222827adfc145e89f5&w=740" alt="Banner image" />
            </div>
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 data-aos="fade-up" className='text-2xl mx-5 sm:text-4xl font-bold'>𝑾𝒉𝒚 𝑺𝒉𝒐𝒑 𝒘𝒊𝒕𝒉 𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕 ?</h1>
                <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5 mx-5 '>𝑨𝒕 𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕, 𝒘𝒆 𝒃𝒓𝒊𝒏𝒈 𝒚𝒐𝒖 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒔𝒉𝒐𝒑𝒑𝒊𝒏𝒈 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆 𝒘𝒊𝒕𝒉 𝒉𝒊𝒈𝒉-𝒒𝒖𝒂𝒍𝒊𝒕𝒚 𝒑𝒓𝒐𝒅𝒖𝒄𝒕𝒔, 𝒍𝒊𝒈𝒉𝒕𝒏𝒊𝒏𝒈-𝒇𝒂𝒔𝒕 𝒅𝒆𝒍𝒊𝒗𝒆𝒓𝒚, 𝒔𝒆𝒄𝒖𝒓𝒆 𝒑𝒂𝒚𝒎𝒆𝒏𝒕 𝒎𝒆𝒕𝒉𝒐𝒅𝒔, 𝒂𝒏𝒅 𝒆𝒙𝒄𝒍𝒖𝒔𝒊𝒗𝒆 𝒅𝒆𝒂𝒍𝒔. 𝑯𝒆𝒓𝒆’𝒔 𝒘𝒉𝒚 𝒚𝒐𝒖 𝒔𝒉𝒐𝒖𝒍𝒅 𝒔𝒉𝒐𝒑 𝒘𝒊𝒕𝒉 𝒖𝒔:</p>
                <div className='flex flex-col gap-4 mx-4'>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'  />
                        <p>Premium Quality Products</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                        <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100 dark:bg-red-400' />
                        <p>Fast & Reliable Delivery</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                        <p>Easy & Secure Payment Methods</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                        <p>Exclusive Deals & Offers</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
