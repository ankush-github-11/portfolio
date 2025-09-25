"use client"
import React from "react";
import "@/styles/skills.css";

type SkillsCardProps = {
  children: React.ReactNode;
  title: string;
  height?: string;
  width?: string; 
};

const SkillsCard: React.FC<SkillsCardProps> = ({ children, title }) => {
  return (
    <div
      className="
        skillsCardCSS
        relative 
        flex flex-col items-center justify-center
        aspect-square w-full
        rounded-2xl shadow-md
        bg-white/5
      "
    >
      {/* Glow Effects */}
      <div className="absolute bg-white h-2 w-50 blur-2xl" />
      <div className="absolute top-17 bg-white h-5 w-20 blur-xl" />
      <div className="absolute top-17 bg-emerald h-2 w-12 blur-lg" />

      {/* Centered Logo */}
      <div className="relative flex items-center justify-center w-1/2 h-1/2">
        <svg
          viewBox="0 0 128 128"
          className="dark:text-cyan-50 text-cyan-950 w-full h-full [&_*]:fill-current [&_*]:stroke-current"
        >
          {children}
        </svg>
      </div>

      {/* Title at bottom */}
      <div className="absolute bottom-[4px] dark:text-cyan-50 text-cyan-950 text-sm">
        {title}
      </div>
    </div>
  );
};

export default SkillsCard;
