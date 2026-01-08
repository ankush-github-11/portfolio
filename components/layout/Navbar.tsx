import { ArrowUpRight, Wallpaper, WandSparkles } from 'lucide-react'
// import { BookOpenCheck } from 'lucide-react'
import React from 'react'
import Image from "next/image";
import { useScroll } from '@/context/ScrollContext';
import "@/styles/navbar.css";
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
      <div className='z-1000 overflow-hidden fixed bg-black/3.5 dark:bg-white/5 backdrop-blur-[4px] hidden w-fit h-fit rounded-full sm:flex flex-col items-center'>
          <div className='flex gap-7 h-full w-full px-10 py-2 rounded-full'>
              <div onClick={scrollToSkills} className='colorCSS cursor-pointer font-semibold flex items-center'>Skills</div>
              <div onClick={scrollToProjects} className='colorCSS cursor-pointer italic font-semibold flex items-center'>My Works</div>
              <a draggable="false" target='_blank' href='https://github.com/ankush-github-11' className='colorCSS cursor-pointer font-semibold flex items-center'>GitHub <ArrowUpRight strokeWidth={3} className="h-4 ml-[-2px]" /></a>
              <a draggable="false" target='_blank' href="https://www.linkedin.com/in/ankush-bhattacharjee-609972302/" className='colorCSS cursor-pointer font-semibold flex items-center'>LinkedIn <ArrowUpRight strokeWidth={3} className="h-4 ml-[-2px]" /></a>
              {/* <div className='cursor-pointer font-semibold flex items-center'>Services</div> */}
          </div>
          <div className='w-full h-[1.5px] bg-gradient-to-r from-cyan-500 to-emerald-400'></div>
      </div>


      <div className='z-1000 h-[55px] flex sm:hidden fixed bottom-4 w-[50%] justify-center'>
        <div className='h-[55px] w-[306px] bg-black/3.5 dark:bg-white/5 backdrop-blur-[2.5px] flex justify-evenly items-center rounded-full border-2 border-bordercolor'>

          <div className='colorCSS h-full w-[75px] flex justify-center flex-col items-center cursor-pointer'>
            <WandSparkles strokeWidth={1.5} className='h-5 w-5' />
            <div onClick={scrollToSkills} className='font-medium tracking-wide text-[11px]'>Skills</div>
          </div>

          <div className='rounded-full h-[80%] w-[2px] bg-gradient-to-b from-cyan-700 to-emerald-700' />

          <div onClick={scrollToProjects} className='colorCSS h-full w-[75px] flex justify-center flex-col items-center cursor-pointer'>
            <Wallpaper strokeWidth={1.5} className='h-5 w-5'/>
            <div className='font-semibold tracking-wide text-[11px] italic'>My Works</div>
          </div>

          <div className='rounded-full h-[80%] w-[2px] bg-gradient-to-b from-cyan-700 to-emerald-700' />

          <a draggable="false" target='_blank' href='https://github.com/ankush-github-11' className="colorCSS h-full w-[75px] flex flex-col items-center justify-center cursor-pointer group">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-4 h-5 fill-current transition-colors"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span className="ml-[3px] text-[11px] font-semibold tracking-wide flex">
              <div>GitHub</div>
              <ArrowUpRight strokeWidth={3} className="h-3 ml-[-1px] mt-[1px] w-fit" />
            </span>
          </a>

          <div className='rounded-full h-[80%] w-[2px] bg-gradient-to-b from-cyan-700 to-emerald-700' />

          <a draggable="false" target='_blank' href="https://www.linkedin.com/in/ankush-bhattacharjee-609972302/" className="colorCSS h-full w-[75px] flex flex-col items-center justify-center cursor-pointer group">
            <svg
              viewBox="0 0 382 382"
              className="w-4 h-5 fill-current transition-colors"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472V330.654z" />
            </svg>
            <span className="ml-[3px] text-[11px] font-semibold tracking-wide flex">
              <div>LinkedIn</div>
              <ArrowUpRight strokeWidth={3} className="h-3 ml-[-1px] mt-[1px] w-fit" />
            </span>
          </a>

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