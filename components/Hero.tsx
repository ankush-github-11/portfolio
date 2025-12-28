import React from 'react';
import "@/styles/hero.css";
import { MapPin } from 'lucide-react';
import ButtonCTA1 from './ui/ButtonCTA1';
import ButtonCTA2 from './ui/ButtonCTA2';
import HeroLanguageButton from './ui/HeroLanguageButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full h-fit min-h-screen flex flex-wrap md:flex-nowrap justify-evenly items-center gap-10 px-2 sm:pb-0 pb-10'>
      <div className='z-1 flex flex-col gap-2 h-fit w-full md:w-[45%] md:mt-[-180px] mt-[130px]'>
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
      <div className="z-1 h-[500px] w-full md:w-[30%] md:mt-[-200px] mt-[50px] flex flex-col items-center gap-2">
        <div className="relative top-25 bg-gradient-to-r dark:from-cyan-800 dark:to-emerald-800 from-cyan-200 to-emerald-200 rounded-full p-10 blur-2xl">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 blur-[100px] opacity-70" />
          <div className="relative bg-gradient-to-r dark:from-cyan-800 dark:to-emerald-800 from-cyan-200 to-emerald-200 rounded-full p-2 blur-md">
            <div className="h-60 w-60 bg-bgcolor rounded-full blur-xl"></div>
          </div>
        </div>   
        <Image
          src="/images/hero.png"
          alt="Logo"
          width={300}
          height={300}
          className="z-1 relative -top-55"
        />
        <div className="italic relative -top-57 bg-bgcolor border-2 border-bordercolor p-2 rounded-lg text-textcolorless font-medium text-xl opacity-60 tracking-wide flex gap-2 text-center">
          <span>Web Developer</span>
          <div className="rounded-full w-[2px] min-h-[30px] bg-cyan" />
          <span>ML Expert</span>
          <div className="rounded-2xl w-[2px] min-h-[30px] bg-emerald" />
          <span>Problem Solver</span>
        </div>
        <HeroLanguageButton className="my-bounce z-10 relative top-[-400px] right-[90px]" href="https://react.dev" >
          <Image
            alt="React Logo"
            src="/images/react-logo.svg"
            width={30}
            height={30}
          />
        </HeroLanguageButton>
        <HeroLanguageButton className="my-bounce z-10 relative top-[-670px] right-[40px]" href="https://www.mongodb.com" >
          <Image
            alt="MongoDB Logo"
            src="/images/mongodb-logo.svg"
            width={30}
            height={30}
          />
        </HeroLanguageButton>
        <HeroLanguageButton className="my-bounce z-10 relative top-[-650px] left-[170px]" href="https://aws.amazon.com" >
          <Image
            alt="AWS Logo"
            src="/images/aws-logo-light.svg"
            width={30}
            height={30}
            className="block dark:hidden"
          />
          <Image
            alt="AWS Logo"
            src="/images/aws-logo-dark.svg"
            width={30}
            height={30}
            className="hidden dark:block"
          />
        </HeroLanguageButton>
      </div>
    </div>
  )
}

export default Hero