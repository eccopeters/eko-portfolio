'use client'
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-4 text-4xl sm: text-5xl lg:text-6xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
                Hi, I'm{" "} 
                </span>  <br />
               


    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Oghenemudia',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Java Developer',
        1000,
        'Golang Developer',
        1000,
        'React Developer',
        1000,
        'Node Developer',
        1000,
        'Product Manager',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>
  

            <p className='text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur
                               adipisicing elit. Velit, facilis ut </p>
                <div>
          <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black'>Hire Me</button>
          <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border '>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV </span></button>

        </div>
        </div>
        
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className=' bg-[181818] w-[250px] lg:w-[400px] lg:h-[400px] h-[250px] relative'>
             <Image
                src='/avatar.jpg'
                alt='Hero image'
                width={300}
                height={300}
                className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            />
            </div>
    </div>
      
    </div>
    </section>    
  )
}

export default HeroSection

