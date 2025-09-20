import React from "react";
import "@/styles/about.css"
import { BeamCollision } from "@/components/ui/BeamCollision"
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import CodeBlockReact from "./ui/CodeBlockReact";
const About = () => {
  return (
<div className="bg-bgcolorless min-h-screen mb-20 h-fit max-w-full">
  <div className="h-full w-full flex md:flex-row flex-col gap-10">
    <div className="order-2 md:order-1 flex-1 h-full m-3">
      <div className="relative h-full rounded-3xl p-8 border border-bordercolor/20 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
        <div className="z-0 absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 opacity-70 blur-3xl"></div>
        <div className="relative h-full w-full rounded-2xl bg-white/5 border border-white/80 dark:border-white/20 flex flex-col justify-center">
          <div className="h-10 bg-textcolor/5 rounded-tl-2xl rounded-tr-2xl flex items-center gap-2">
          <div className="bg-red-500 h-4 w-4 rounded-full ml-2" />
          <div className="bg-yellow-500 h-4 w-4 rounded-full" />
          <div className="bg-green-500 h-4 w-4 rounded-full" />
            <div className="w-fit h-10 bg-inherit flex items-center justify-center px-5 rounded-tl-lg rounded-tr-lg">
              React.tsx
            </div>
          </div>
          <div className="p-2">
            <CodeBlockReact />
          </div>
        </div>
      </div>
    </div>
    <BeamCollision className="order-1 md:order-2 bg-bgcolorless flex-1 h-full min-h-screen w-full flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 bg-clip-text text-transparent">
        About Me
      </h1>
      <div className="mt-4 text-lg text-textcolorless text-left">
      I’m a Full-Stack Developer passionate about building fast, scalable, and user-friendly web applications. I specialize in <span className="font-bold">React</span>, <span className="font-bold">Node.js</span>, and <span className="font-bold">TypeScript</span>, and I enjoy turning complex problems into simple, elegant solutions.
      </div>
      <div className="mt-4 text-lg text-textcolorless text-left">
        I’ve worked on projects ranging from interactive UI components to backend APIs and love contributing to open-source. Currently, I’m exploring <span className="font-bold">DSA</span>, <span className="font-bold">Machine Learning</span>, <span className="font-bold">System Design</span> and <span className="font-bold">Cloud Development</span>.
      </div>
      <div className="mt-4 text-lg text-textcolorless text-left">
        Outside of coding, you’ll find me exploring tech blogs, playing strategy games, or experimenting with UI design.
      </div>
      <div className="text-lg text-textcolorless text-left">
        <TextGenerateEffect />
      </div>
    </BeamCollision>
  </div>
</div>


  )
}

export default About