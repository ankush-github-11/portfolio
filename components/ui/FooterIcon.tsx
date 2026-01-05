"use client";
import React from "react";

type FooterIconProps = {
  children: React.ReactNode;
  href: string;
  label: string;
};

const FooterIcon: React.FC<FooterIconProps> = ({ children, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative
        flex items-center justify-center
        cursor-pointer
      "
      aria-label={label}
    >
      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute -top-8
          scale-95 opacity-0
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200
          rounded-md tracking-wide
          bg-gray/20 text-textcolor
          px-2 py-1
          text-[13px] font-medium
          whitespace-nowrap
        "
      >
        {label}
      </span>

      {/* Icon */}
      <svg
        viewBox="0 0 23 28"
        className="
          w-5 h-6
          text-darkgray
          transition-colors duration-200
          group-hover:text-black
          dark:text-darkgray/70
          dark:group-hover:text-white
          [&_*]:fill-current
          [&_*]:stroke-current
        "
      >
        {children}
      </svg>
    </a>
  );
};

export default FooterIcon;
