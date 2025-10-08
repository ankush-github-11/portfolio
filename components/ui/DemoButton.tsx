import React from 'react'
interface DemoButtonProps{
    url : string;
}
const DemoButton : React.FC<DemoButtonProps> = ({url}) => {
  return (
    <a href={url} target='_blank' className='flex items-center justify-center font-semibold rounded-xl border-2 border-gray h-11 w-20'>
      Demo
    </a>
  )
}

export default DemoButton
