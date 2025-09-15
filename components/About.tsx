import React from "react";
import "@/styles/about.css"
import { BeamCollision } from "@/components/ui/BeamCollision"
const About = () => {
  return (
    <BeamCollision className="bg-bgcolorless h-fit min-h-screen">
        <div className='h-[100%] flex flex-col'>
            <div className="font-semibold tracking-wide text-5xl text-outline text-textcolor">ABOUT ME</div>
        </div>
    </BeamCollision>
  )
}

export default About