import React from 'react';
import "@/styles/hero.css";
const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-evenly items-center flex-wrap'>
      <div className='z-1 p-3 flex flex-col gap-2 h-fit w-[40%] mt-[-200px]'>
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
        <h1 className='text-gray font-medium text-xl mb-4 tracking-wide'>Web Developer | ML Expert | Problem Solver</h1>
        <h1 className="font-regular flex flex-col flex-wrap w-full text-textcolorless">
          Full Stack Developer at heart, AI/ML enthusiast by curiosity, and a problem-solver fueled by DSA. I create systems that are smart, seamless, and scalable.
        </h1>
      </div>
      <div className='z-1 w-[200px]'>Hello World</div>
    </div>
  )
}

export default Hero