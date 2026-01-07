"use client";
import React from "react";
import "@/styles/skills.css";

type SkillsCardProps = {
  children: React.ReactNode;
  title: string;
};

const SkillsCard: React.FC<SkillsCardProps> = ({ children, title }) => {
  return (
    <div
      className="skillsCardCSS 
        relative
        aspect-square
        flex flex-col items-center justify-center
        rounded-2xl
        border border-white/20 dark:border-white/15
        bg-white/10 dark:bg-white/5
        backdrop-blur-md
        shadow-lg
        transition-all duration-300 overflow-hidden
      "
    >
      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-x-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 bg-white/30 blur-2xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-24 bg-white/20 blur-xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-16 bg-emerald-400/60 blur-lg" />

      {/* Icon */}
      <div className="relative flex items-center justify-center w-[55%] h-[55%]">
        <svg
          viewBox="0 0 128 128"
          className="
            w-full h-full
            text-cyan-950 dark:text-cyan-50
            [&_*]:fill-current
            [&_*]:stroke-current
          "
        >
          {children}
        </svg>
      </div>

      {/* Title */}
<div
  className="
    absolute bottom-2
    px-2.5 py-1
    text-xs sm:text-sm
    font-semibold tracking-wide
    text-emerald-950 dark:text-cyan-50

    bg-white/30 dark:bg-black/20
    backdrop-blur-md backdrop-saturate-150

    border border-white/40 dark:border-white/10
    shadow-lg shadow-black/5 dark:shadow-black/30

    rounded-md
    cursor-default
  "
>
  {title}
</div>

    </div>
  );
};

export default SkillsCard;
