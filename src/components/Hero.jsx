import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df90] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold '>Fast, flexible financing for</p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>
              Monitor your data analytics to increase revenue fro BTB,BTC,SASS platforms.
            </p> 
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero