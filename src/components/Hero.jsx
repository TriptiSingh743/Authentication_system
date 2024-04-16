import React from 'react'

const Hero = () => {
  return (
    <div className='mt-20 p-5 w-[100%] md:flex items-center '>
        <div className='md:w-[60%]'>
        <p className='font-medium text-5xl  md:px-20 px-10'>Add Trust And Authenticate with Authenticata</p>
        <p className='md:px-20 py-5 text-gray-600 justify px-10'>Step into the digital stronghold where encryption shields your data like a guardian, while authentication acts as the exclusive gateway, ensuring only trusted individuals unlock its secrets. Trust in our safeguards, for your peace of mind is our greatest treasure.</p>
        <button className='bg-purple-800 font-medium text-white px-5 py-2 rounded-xl md:mx-20 text-lg mx-10'>Authenticate</button>
        </div>
        <div className='md:w-[40%] py-20 md:py-0'>
            <img src="img1.png" ></img>
        </div>
    </div>
  )
}

export default Hero