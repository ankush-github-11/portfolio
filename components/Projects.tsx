import React from 'react'
import ProjectCard1 from './ui/ProjectCard1'

const Projects = () => {
  return (
    <div className='h-fit w-full'>
        <div className='w-[95%] mx-auto'>
          <h2 className="text-4xl font-extrabold text-textcolor mb-2">Projects</h2>
        </div>
        <ProjectCard1 />
    </div>
  )
}

export default Projects