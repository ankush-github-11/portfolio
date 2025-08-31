import React from 'react'
const Navbar = () => {
  return (
    <div className='z-1 w-fit h-fit rounded-full flex flex-col items-center'>
        <div className='flex gap-7 h-full w-full px-5 py-2 rounded-full'>
            <div className='cursor-pointer font-semibold flex items-center'>Skills</div>
            <div className='cursor-pointer italic font-bold flex items-center'>My Works</div>
            <div className='cursor-pointer font-semibold flex items-center'>Services</div>
        </div>
        <div className='w-[110%] h-[1.5px] bg-gradient-to-r from-cyan-500 to-emerald-400'></div>
    </div>
  )
}

export default Navbar