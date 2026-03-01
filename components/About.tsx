import React from "react";
import "@/styles/about.css";
import { BeamCollision } from "@/components/ui/BeamCollision";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/Terminal";

const About = () => {
  return (
    <div className="reveal reveal-up bg-gradient-to-br from-cyan-200 to-emerald-300 dark:from-cyan-900 dark:to-emerald-800 min-h-[110vh] h-fit max-w-full py-17 lg:py-0 sm:px-[8vw] px-[7px]">
      <div className="lg:min-h-[110vh] h-full w-full flex lg:flex-row flex-col gap-x-17">
        {/* Left Section */}
        <div className="lg:min-h-[110vh] reveal reveal-up-right delay-7 h-fit w-full lg:w-[40vw] flex order-2 lg:order-1 flex-1 items-center">
          <Terminal>
            <TypingAnimation>$ whoami</TypingAnimation>
            <AnimatedSpan>Ankush Bhattacharjee</AnimatedSpan>
            <AnimatedSpan>Full stack developer</AnimatedSpan>
            <TypingAnimation>$ npm install skills</TypingAnimation>
            <AnimatedSpan>
              Frontend : React, TypeScript, Next.js, Tailwind
            </AnimatedSpan>
            <AnimatedSpan>Backend : Node.js, Express, PHP</AnimatedSpan>
            <AnimatedSpan>Database : MongoDB, MySQL</AnimatedSpan>
            <AnimatedSpan>
              DevOps : Git, Docker(learning), AWS(learning)
            </AnimatedSpan>
            <AnimatedSpan>CS Core : DSA, System Design</AnimatedSpan>
            <AnimatedSpan>AI/ML : Python, Scikit-learn</AnimatedSpan>
            <AnimatedSpan className="text-green-600 dark:text-green-400">
              added 6 skill packages in 3years
            </AnimatedSpan>
            <TypingAnimation>$ projects</TypingAnimation>
            <AnimatedSpan>1. PollNow - Polling Application</AnimatedSpan>
            <AnimatedSpan>2. Library Dashboard</AnimatedSpan>
            <TypingAnimation>$ sudo hire-ankush</TypingAnimation>
            <AnimatedSpan>Permission granted.</AnimatedSpan>
            <AnimatedSpan>Let&apos;s build the future</AnimatedSpan>
          </Terminal>
        </div>

        {/* Right Section */}
        <BeamCollision className="lg:min-h-[110vh] reveal reveal-down-left delay-7 h-screen order-1 lg:order-2 bg-inherit flex-1 w-full flex flex-col items-center justify-center text-center pb-17 lg:pb-0">
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
