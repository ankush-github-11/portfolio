"use client"
import React from 'react';
import "@/styles/skills.css"
type SkillsCardProps = {
  path: string;
  height: string;
  width: string;
  title: string;
  circle?: boolean;
};
const SkillsCard : React.FC<SkillsCardProps> = ({path, height, width, title, circle}) => {
  return (
      <div className="btn-donate relative overflow-hidden flex flex-col">
        <div className='absolute bg-white h-2 w-50 blur-2xl' />
        <div className='absolute top-17 bg-white h-3 w-25 blur-xl' />
        <div className='absolute top-17 bg-white h-2 w-15 blur-lg' />
        <div className='absolute top-17 bg-emerald h-2 w-15 blur-lg' />    
        <svg viewBox="0 0 128 128" height={height} width={width} className="text-textcolor relative">
          {circle && <circle cx="64" cy="64" r="11.4" fill='currentColor'></circle>}
        <path d={path} fill="currentColor"></path>
        </svg>
        <div className=' absolute bottom-0 text-textcolorless mb-2'>{title}</div>
      </div>
  );
}
export default SkillsCard;
