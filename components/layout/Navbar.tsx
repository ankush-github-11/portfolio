import { BookOpenCheck, Wallpaper, WandSparkles } from 'lucide-react'
import React from 'react'
import Image from "next/image";
const Navbar = () => {
  return (
    <div className='flex justify-center w-full'>
      <Image 
        src="/images/logo.png" 
        alt="Logo" 
        width={70} 
        height={70} 
        className='z-1 absolute left-0 top-0'
      />
      <div className='hidden z-1 w-fit h-fit rounded-full sm:flex flex-col items-center'>
          <div className='flex gap-7 h-full w-full px-5 py-2 rounded-full'>
              <div className='cursor-pointer font-semibold flex items-center'>Skills</div>
              <div className='cursor-pointer italic font-bold flex items-center'>My Works</div>
              <div className='cursor-pointer font-semibold flex items-center'>Services</div>
          </div>
          <div className='w-[110%] h-[1.5px] bg-gradient-to-r from-cyan-500 to-emerald-400'></div>
      </div>
      <div className=' z-10 h-[50px] flex sm:hidden fixed bottom-4 w-screen justify-center'>
        <div className='h-[50px] w-[270px] bg-bgcolorless flex justify-evenly items-center rounded-full border-2 border-bordercolor'>
          <div className='flex justify-center flex-col items-center cursor-pointer'>
            <WandSparkles strokeWidth={1.5} className='h-4 w-4' />
            <div className='font-medium tracking-wide text-[11px]'>Skills</div>
          </div>
          <div className='rounded-full h-[70%] w-[2px] bg-cyan-700' />
          <div className='flex justify-center flex-col items-center cursor-pointer'>
            <Wallpaper strokeWidth={1.5} className='h-4 w-4'/>
            <div className='font-semibold tracking-wide text-[11px] italic'>My Works</div>
          </div>
          <div className='rounded-full h-[70%] w-[2px] bg-cyan-700' />
          <div className='flex justify-center flex-col items-center cursor-pointer'>
            <BookOpenCheck strokeWidth={1.5} className='h-4 w-4'/>
            <div className='font-medium tracking-wide text-[11px]'>Services</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar