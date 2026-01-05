import { ArrowUpRight, Wallpaper, WandSparkles } from 'lucide-react'
// import { BookOpenCheck } from 'lucide-react'
import React from 'react'
import Image from "next/image";
import { useScroll } from '@/context/ScrollContext';
const Navbar = () => {
  const { scrollToProjects } = useScroll();
  const { scrollToSkills } = useScroll();
  return (
    <div draggable="false" className='select-none flex justify-center w-full'>
      <Image 
        draggable="false"
        src="/images/logo.png" 
        alt="Logo" 
        width={70} 
        height={70} 
        className='select-none z-1 absolute left-0 top-0'
      />
      <div className='z-1000 overflow-hidden fixed bg-white/10 backdrop-blur-sm hidden w-fit h-fit rounded-full sm:flex flex-col items-center'>
          <div className='flex gap-7 h-full w-full px-10 py-2 rounded-full'>
              <div onClick={scrollToSkills} className='cursor-pointer font-semibold flex items-center'>Skills</div>
              <div onClick={scrollToProjects} className='cursor-pointer italic font-bold flex items-center'>My Works</div>
              <a className='cursor-pointer font-bold flex items-center'>GitHub <ArrowUpRight strokeWidth={3} className="h-4 ml-[-2px]" /></a>
              <a className='cursor-pointer font-bold flex items-center'>LinkedIn <ArrowUpRight strokeWidth={3} className="h-4 ml-[-2px]" /></a>
              {/* <div className='cursor-pointer font-semibold flex items-center'>Services</div> */}
          </div>
          <div className='w-full h-[1.5px] bg-gradient-to-r from-cyan-500 to-emerald-400'></div>
      </div>
      <div className='z-1000 h-[55px] flex sm:hidden fixed bottom-4 w-[50%] justify-center'>
        <div className='h-[55px] w-[300px] bg-bgcolorless/80 flex justify-evenly items-center rounded-full border-2 border-bordercolor'>
          <div className='h-full w-[100px] flex justify-center flex-col items-center cursor-pointer'>
            <WandSparkles strokeWidth={1.5} className='h-5 w-5' />
            <div onClick={scrollToSkills} className='font-medium tracking-wide text-[11px]'>Skills</div>
          </div>
          <div className='rounded-full h-[70%] w-[2px] bg-cyan-700' />
          <div onClick={scrollToProjects} className='h-full w-[100px] flex justify-center flex-col items-center cursor-pointer'>
            <Wallpaper strokeWidth={1.5} className='h-5 w-5'/>
            <div className='font-semibold tracking-wide text-[11px] italic'>My Works</div>
          </div>
          {/* <div className='rounded-full h-[70%] w-[2px] bg-cyan-700' />
          <div className='h-full w-[100px] flex justify-center flex-col items-center cursor-pointer'>
            <BookOpenCheck strokeWidth={1.5} className='h-5 w-5'/>
            <div className='font-medium tracking-wide text-[11px]'>Services</div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar