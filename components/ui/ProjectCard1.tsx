import React from 'react'

const ProjectCard1 = () => {
  return (
    <div className='h-screen w-[95%] sm:w-[85%] mx-auto p-[5px] rounded-2xl bg-bgcolorless relative'>
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-70">
        <div className="absolute inset-0 bg-textcolor blur-2xl opacity-70"></div>
        <div className="absolute inset-0 bg-textcolor blur-xl opacity-50"></div>
        <div className="absolute inset-0 bg-textcolor blur-md opacity-40"></div>
      </div>
      <div className='border-3 border-bordercolor rounded-xl h-[100%] overflow-hidden relative p-3 sm:p-7'>
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald to-transparent opacity-70">
          <div className="absolute inset-0 bg-textcolor blur-2xl opacity-70"></div>
          <div className="absolute inset-0 bg-textcolor blur-xl opacity-50"></div>
          <div className="absolute inset-0 bg-textcolor blur-md opacity-40"></div>
        </div>
        <div>
          <h1 className='font-bold text-2xl'>Poll Now</h1>
          <h1 className='font-semibold text-md text-textcolorless'>A poll system where you can create, participate and view polls</h1>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard1
