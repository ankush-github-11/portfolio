import React, {forwardRef} from 'react'
import ProjectCard1 from './ui/ProjectCard1'
import ProjectCard2 from './ui/ProjectCard2'
import ProjectCard3 from './ui/ProjectCard3'
import ProjectCard4 from './ui/ProjectCard4';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className='bg-gradient-to-br from-gray/15 dark:from-lightgray/80 to-bgcolor h-fit w-full flex flex-col gap-10 pt-10 pb-25 sm:px-[8vw] px-[7px]'>
        <div>
          <h2 className="reveal reveal-left text-4xl font-extrabold text-textcolor mb-2">Projects</h2>
        </div>
        <ProjectCard1 />
        <ProjectCard4 />
        <ProjectCard2 />
        <ProjectCard3 />
    </div>
  );
});
Projects.displayName = 'Projects';
export default Projects