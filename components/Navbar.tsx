import React from 'react'

const Navbar = () => {
  return (
    <div className='w-fit h-fit rounded-full flex flex-col items-center'>
        <div className='flex gap-5 h-full w-full px-5 py-2 rounded-full'>
            <div className='cursor-pointer font-semibold'>About</div>
            <div className='cursor-pointer italic font-bold text-slate-700'>My Works</div>
            <div className='cursor-pointer font-semibold'>Services</div>
        </div>
        <div className='w-[110%] h-[2px] bg-gray-500'></div>
    </div>
  )
}

export default Navbar