import React from 'react'

interface DemoButtonProps {
  url: string;
}

const DemoButton: React.FC<DemoButtonProps> = ({ url }) => {
  return (
    <a
      href={url}
      target='_blank'
      className='demo-button group overflow-hidden relative flex items-center justify-center font-semibold rounded-xl h-11 w-20 bg-textcolor/95 text-bgcolor transition-all hover:scale-105 duration-500 shadow-[0_0_10px_var(--color-textcolor)] hover:shadow-[0_0_15px_var(--color-textcolor)]'
    >
      <span className='font-semibold tracking-wide'>Demo</span>
    </a>
  )
}

export default DemoButton
