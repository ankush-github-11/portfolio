import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import React from 'react';
const ButtonCTA2 = () => {
  return (
    <button className="flex items-center cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-lightgray border-2 border-bordercolor duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-2 hover:before:right-12 hover:before:-bottom-8 hover:before:blur-md hover:after:blur-md hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-cyan-500 relative bg-bgcolorless h-13 w-48 pb-4 text-left p-3 text-textcolorless text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-cyan-400 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-emerald-400 after:right-8 after:top-3 after:rounded-full after:blur-lg">
      Resume <ArrowUpRight strokeWidth={3} className='h-4 z-15' />
    </button>
  );
}
export default ButtonCTA2;