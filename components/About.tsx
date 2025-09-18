import React from "react";
import "@/styles/about.css"
import { BeamCollision } from "@/components/ui/BeamCollision"
const About = () => {
  return (
<BeamCollision className="bg-bgcolorless h-screen">
  <div className="h-full w-full flex gap-10 p-6">
    <div className="flex-1 h-full">
      <div className="relative m-2 h-full rounded-3xl p-8 border border-bordercolor/20 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
        <div className="z-0 absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/50 to-emerald-500/50 opacity-70 blur-3xl"></div>
        <div className="relative h-full w-full rounded-2xl bg-white/5 p-6 border border-white/80 dark:border-white/20 flex flex-col justify-center">

        </div>
      </div>
    </div>
    <div className="flex-1 h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 bg-clip-text text-transparent">
        About Me
      </h1>
      <div className="mt-4 text-lg text-textcolorless text-left">
      I’m a Full-Stack Developer passionate about building fast, scalable, and user-friendly web applications. I specialize in React, Node.js, and TypeScript, and I enjoy turning complex problems into simple, elegant solutions.
      </div>
      <div className="mt-4 text-lg text-textcolorless text-left">
I’ve worked on projects ranging from interactive UI components to backend APIs and love contributing to open-source. Currently, I’m exploring DSA, system design and cloud development.
      </div>
      <div className="mt-4 text-lg text-textcolorless text-left">
Outside of coding, you’ll find me exploring tech blogs, playing strategy games, or experimenting with UI design.
      </div>
      <div className="mt-4 text-lg text-textcolorless text-left">
🚀 Always open to collaborating on exciting projects—let’s connect!
      </div>
    </div>
  </div>
</BeamCollision>


  )
}

export default About