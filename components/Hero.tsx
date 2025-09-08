import React from 'react';
import "@/styles/hero.css";
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import ButtonCTA1 from './ui/ButtonCTA1';
import ButtonCTA2 from './ui/ButtonCTA2';
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
        <h1 className='text-gray font-medium text-l mb-4 tracking-wide flex gap-2'><MapPin className='text-cyan-400 dark:text-cyan-500' strokeWidth={1.5} />Based in Kolkata, India</h1>
        <h1 className="font-regular flex flex-col flex-wrap w-full text-textcolorless">
          Full Stack Developer at heart, AI/ML enthusiast by curiosity, and a problem-solver fueled by DSA. I create systems that are smart, seamless, and scalable.
        </h1>
        <div className='flex flex-wrap gap-5 mt-5 h-min'>
          <ButtonCTA1 />
          <ButtonCTA2 />
        </div>
      </div>
      <div className="z-1 h-fit w-full md:w-[30%] md:mt-[-200px] mt-[50px] flex flex-col items-center gap-2">
        <div className='relative bg-gradient-to-r dark:from-cyan-800 dark:to-emerald-800 from-cyan-200 to-emerald-200 rounded-full'>
          <div className="rounded-full hidden dark:flex absolute -inset-10 bg-gradient-to-r from-cyan-500 to-emerald-500 blur-3xl opacity-35"/>
          <div className='rounded-full z-1 m-[15px] bg-bgcolor'>
            <Image
              src="/images/hero.png"
              alt="Logo"
              width={300}
              height={300}
              className="relative top-[23px] z-1"
              />
          </div>
        </div>
        <h1 className='bg-bgcolorless p-2 rounded-lg text-textcolorless font-medium text-xl tracking-wide flex gap-2'>Web Developer <div className='rounded-full w-[2px] min-h-[30px] bg-cyan' /> ML Expert <div className='rounded-2xl w-[2px] min-h-[30px] bg-emerald' /> Problem Solver</h1>
      </div>
    </div>
  )
}

export default Hero