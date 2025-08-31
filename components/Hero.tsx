import React from 'react';
const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-evenly items-center flex-wrap'>
      <div className='z-1 p-3 flex flex-col gap-2 h-fit w-fit mt-[-200px]'>
        <h1 className='font-bold text-[28px]'>Hi, I’m <span className='text-emerald-400 text-4xl'>Ankush</span> <span>Bhattacharjee</span></h1>
        <h1 className='text-gray font-medium text-xl mb-4'>Web Developer | ML Expert | Problem Solver</h1>
        <h1 className="font-regular flex flex-col">
          <span>From code to intelligence: I craft full stack systems,</span>
          <span>train AI/ML models, and unlock efficiency with DSA.</span>
        </h1>
      </div>
      <div className='z-1 w-[200px]'>Hello World</div>
    </div>
  )
}

export default Hero