"use client";
import React from 'react'
import Image from 'next/image';
import{TypeAnimation} from 'react-type-animation'

const HeroSection = () => {
  return (

    <section>
      <div className='grid grid-cols-1  sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
        Hello, I'm {" "}
        </span>
        <br/>        
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Keerthana Devi K',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Game Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /></h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
      <div>
        <button className='bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 px-6 py-3 mr-4 sm:w-fit w-full text-white rounded-full  hover:bg-slate-200 '>Hire Me</button>
        <button className=' px-1 py-1 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white  mt-3'>
          <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
          Download CV
          </span>
          </button>
      </div>
      </div>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div  className=' bg-[#18181818] w-[250px] h-[250px]  lg:h-[400px] lg:w-[400px] relative'>
        <Image
          src="/images/image.png"
          style={{borderRadius: '1000px'}}
          className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={300}
          height={300}
          alt='image'
        />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection
