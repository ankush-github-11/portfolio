import React from 'react'
type ButtonProps = {
    className?: string;
    href: string;
    children: React.ReactNode;
}
const HeroLanguageButton : React.FC<ButtonProps> = ({className, href, children}) => {
  return (
    <div className={`grid grid-cols-2 gap-6 max-w-md mx-auto ${className}`}>
        <a href={`${href}`} className="p-5 rounded-full backdrop-blur-lg border border-bordercolor bg-gradient-to-tr from-bgcolor/60 to-bgcolorless shadow-lg hover:shadow-2xl dark:hover:shadow-black/70 hover:shadow-black/40 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:bordercolor/30 hover:bg-gradient-to-tr hover:from-bgcolorless hover:to-bgcolorless group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-bgcolorless via-darkgray/10 to-bgcolorless -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <div className="relative z-10">
                {children}
            </div>
        </a>
    </div>
  )
}

export default HeroLanguageButton