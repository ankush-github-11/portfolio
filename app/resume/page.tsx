import React from "react";
import { Download } from "lucide-react";
const page = () => {
  return (
    <div className="relative h-screen w-full">
      <a
        href="/Ankush_Bhattacharjee_Resume.pdf"
        download
        className="
          fixed bottom-6 right-6 z-50
          p-3
          rounded-full
          backdrop-blur-md
          bg-gradient-to-br from-cyan-500 to-emerald-500 
          hover:bg-white/40 dark:hover:bg-black/40 flex gap-2 items-center
        "
      >
        <Download strokeWidth={3} size={24} className="text-white"/>
      </a>
      <iframe
        src="/Ankush_Bhattacharjee_Resume.pdf"
        className="w-full h-full"
        title="Ankush Bhattacharjee Resume"
      />
    </div>
  );
};

export default page;
