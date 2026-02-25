import React from "react";
import "@/styles/about.css";
import { BeamCollision } from "@/components/ui/BeamCollision";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import CodeBlock from "./ui/CodeBlock";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray/15 dark:from-cyan-900 to-emerald-900 min-h-screen pt-0 lg:pt-20 h-fit max-w-full sm:px-[8vw] px-[7px]">
      <div className="w-full flex lg:flex-row flex-col gap-x-17">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex-1 pb-20">
          <div className="relative h-fit rounded-3xl p-0 border border-bordercolor/20 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="z-0 absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-950/10 to-emerald-950/10 blur-sm"></div>
            <div className="relative h-full w-full rounded-2xl bg-white/5 border border-white/80 dark:border-white/20 flex flex-col justify-center">
              <CodeBlock />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <BeamCollision className="pt-[50px] lg:pt-0 pb-[75px] lg:pb-[75px] order-1 lg:order-2 bg-inherit flex-1 w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="mt-4 text-lg text-textcolorless text-left">
            I’m a Full-Stack Developer passionate about building fast, scalable,
            and user-friendly web applications. I specialize in{" "}
            <span className="font-bold">React</span>,{" "}
            <span className="font-bold">Node.js</span>, and{" "}
            <span className="font-bold">TypeScript</span>, and I enjoy turning
            complex problems into simple, elegant solutions.
          </div>
          <div className="mt-4 text-lg text-textcolorless text-left">
            I’ve worked on projects ranging from interactive UI components to
            backend APIs and love contributing to open-source. Currently, I’m
            exploring <span className="font-bold">DSA</span>,{" "}
            <span className="font-bold">Machine Learning</span>,{" "}
            <span className="font-bold">System Design</span> and{" "}
            <span className="font-bold">Cloud Development</span>.
          </div>
          <div className="mt-4 text-lg text-textcolorless text-left">
            Outside of coding, you’ll find me exploring tech blogs, playing
            strategy games, or experimenting with UI design.
          </div>
          <div className="mt-4 text-lg text-textcolorless text-left">
            <TextGenerateEffect />
          </div>
        </BeamCollision>
      </div>
    </div>
  );
};

export default About;
