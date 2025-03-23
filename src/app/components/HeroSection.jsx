import Image from 'next/image'
import React from 'react'
import HeroImage from '../../../public/heroImage.png'
import TickImage from '../../../public/tick.svg'
import Link from "next/link";

const HeroSection = () => {
  return (
    <main className='flex w-full flex-col md:flex-row bg-white'>


        {/* left part */}
        <div className='md:w-1/2 w-full flex flex-row md:justify-end justify-center md:py-15 py-10 px-5 md:px-0 '>

            <div className='flex flex-col text-left md:w-1/2 w-full space-y-5 md:space-y-0'>
                <p className='text-blue-500 text-md uppercase md:text-left text-center font-bold'>ai Resume builder</p>
                <p className='md:w-[450px] w-full leading-[1.2] text-[#353E44] tracking-tight mx-auto md:mx-0 md:text-left text-center text-3xl md:text-6xl font-extrabold px-15 md:px-0'>Build a Job Ready Resume <span className='text-blue-500'>Instantly with AI.</span></p>
                <p className='md:w-[450px] text-md md:text-xl w-full mx-auto md:mx-0 text-center md:text-left mt-5 font-semibold text-[#353E44]'>Create an interview-ready resume tailored to any job description in seconds</p>
                
                <div className='mx-auto md:mx-0 mt-5 md:mt-10 flex flex-col md:flex-row flex-wrap space-x-3 space-y-3'>

                  <div className='flex flex-row items-center space-x-2'>
                    <Image src={TickImage}
                    alt="tick image"
                    width={25}
                    height={25}/>
                    <span className='text-[#353E44] font-semibold'>ATS Resume Templates</span>
                  </div>

                  <div className='flex flex-row items-center space-x-2'>
                    <Image src={TickImage}
                    alt="tick image"
                    width={25}
                    height={25}/>
                    <span className='text-[#353E44] font-semibold'>Resume Score</span>
                  </div>

                  <div className='flex flex-row items-center space-x-2 '>
                    <Image src={TickImage}
                    alt="tick image"
                    width={25}
                    height={25}/>
                    <span className='text-[#353E44] font-semibold'>One Click Optimizer</span>
                  </div>


                </div>
                <Link href="/form">
                  <button className='w-fit mx-auto md:mx-0 md:px-8 md:py-4 md:text-xl px-5 py-4 text-xs rounded-xl md:mt-10 mt-5 bg-blue-500 text-white font-bold hover:bg-blue-600 hover:scale-105 cursor-pointer transition-transform duration-200'>BUILD MY RESUME</button>
                </Link>

            </div>  

        </div>


        {/* right part */}
        <div className='md:w-1/2 w-full md:bg-gradient-to-b from-blue-100  to-white rounded-none md:rounded-tl-4xl flex justify-center md:justify-start items-center md:py-5 h-full p-15'>
        <Image 
            className='object-cover w-[700] ml-10'
            src={HeroImage}
            alt="hero image"
          
            
            />
        </div>


    </main>
  )
}

export default HeroSection