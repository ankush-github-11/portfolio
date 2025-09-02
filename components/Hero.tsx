import React from 'react';
import "@/styles/hero.css";
const Hero = () => {
  return (
    <div className='w-full h-fit min-h-screen flex flex-wrap md:flex-nowrap justify-evenly items-center gap-10 px-2'>
      <div className='z-1 flex flex-col gap-2 h-fit w-full md:w-[45%] md:mt-[-200px] mt-[50px]'>
        <h1 className='font-bold text-[28px]'>Hi, I’m
          <span className='text-emerald-400 text-4xl mx-2 wave-text'>
            <span>A</span>
            <span>n</span>
            <span>k</span>
            <span>u</span>
            <span>s</span>
            <span>h</span>
          </span>
          Bhattacharjee
        </h1>
        <h1 className='text-gray font-medium text-xl tracking-wide'>Web Developer | ML Expert | Problem Solver</h1>
        <h1 className='text-gray font-medium text-l mb-4 tracking-wide'>Based in Kolkata, India</h1>
        <h1 className="font-regular flex flex-col flex-wrap w-full text-textcolorless">
          Full Stack Developer at heart, AI/ML enthusiast by curiosity, and a problem-solver fueled by DSA. I create systems that are smart, seamless, and scalable.
        </h1>
      </div>
      <div className='z-1 h-fit w-full md:w-[30%]'>Hello World</div>
    </div>
  )
}

export default Hero