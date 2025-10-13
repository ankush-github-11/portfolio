import React from 'react'
import Image from 'next/image'
import GithubButton from './GithubButton'
import DemoButton from './DemoButton'

const ProjectCard1 = () => {
  return (
    <div className='group/main h-fit w-[95%] sm:w-[85%] md:w-[78%] mx-auto p-[5px] rounded-2xl bg-bgcolorless relative overflow-hidden pt-2'>
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-textcolor to-transparent opacity-70" />
      <div className='border-b-3 border-l-3 border-r-3 border-gray/40 rounded-xl h-[100%] overflow-hidden relative p-3 sm:p-7 sm:pb-0 flex flex-col items-center'>
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-textcolor to-transparent opacity-50 z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-project-2 to-transparent opacity-0 group-hover/main:opacity-80 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none z-0 motion-safe:transition-opacity motion-reduce:transition-none" />
        <div className='w-full z-20 flex md:flex-row md:items-center md:justify-between flex-col items-between justify-center gap-y-3'>
          <div className='w-fit'>
            <h1 className='font-bold text-2xl'>EtherType</h1>
            <h1 className='font-semibold text-md text-textcolorless'>
              A typing test system where you can check your typing speed in WPM.
            </h1>
            <div className='mt-2 flex justify-center items-center dark:text-emerald-500 text-emerald-700 font-semibold text-sm px-3 py-1 border-2 dark:border-emerald-500 border-emerald-700 rounded-lg w-fit'>Under Construction</div>
          </div>
          <div className='group/button flex flex-nowrap w-fit ml-3 gap-5'>
            <GithubButton url="https://github.com/ankush-github-11/typing-test-system" />
            <DemoButton url="https://typing-test-system.vercel.app/" />
          </div>
        </div>
        <div className="relative w-full mt-7 sm:w-[90%] aspect-[16/9] flex justify-center z-10">
          <div className="relative w-full h-full transform translate-y-3 group-hover/main:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-safe:duration-500 motion-reduce:transition-none">
            <div className="relative w-full h-full">
              <Image
                src="/images/project-2-image-light.png"
                alt="Project 2 Screenshot"
                fill
                className="object-contain rounded-tl-2xl rounded-tr-2xl z-10 block dark:hidden opacity-90 group-hover/main:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none"
                priority
              />
              <Image
                src="/images/project-2-image-dark.png"
                alt="Project 2 Screenshot"
                fill
                className="object-contain rounded-tl-2xl rounded-tr-2xl z-10 hidden dark:block opacity-90 group-hover/main:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard1
