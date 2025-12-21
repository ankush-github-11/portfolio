"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ModeToggleButton } from "@/components/ui/ModeToggleButton";
import { cn } from "@/lib/utils";
import { ScrollProvider } from '@/context/ScrollContext';
import { useRef } from 'react';

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <ScrollProvider value={{ scrollToContact }}>
      <main className="relative h-fit bg-black-100 flex justify-center items-center flex-col overflow-hidden pt-3 pb-15 bg-bgcolor">
        <div className="flex h-fit w-full items-center justify-center bg-bgcolor">
          <div
          className={cn(
            "absolute top-0 inset-0 h-screen",
            "[background-size:90px_90px]",
            "[background-image:linear-gradient(to_right,#f5f5f6_2px,transparent_2px),linear-gradient(to_bottom,#f5f5f6_2px,transparent_2px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_2px,transparent_2px),linear-gradient(to_bottom,#262626_2px,transparent_2px)]",
            "[mask-image:linear-gradient(to_right,transparent,black_30px,black_calc(100%-30px),transparent),linear-gradient(to_bottom,transparent,black_30px,black_calc(100%-30px),transparent)]",
            "[mask-composite:intersect]",
            "[-webkit-mask-image:linear-gradient(to_right,transparent,black_30px,black_calc(100%-30px),transparent),linear-gradient(to_bottom,transparent,black_30px,black_calc(100%-30px),transparent)]",
            "[-webkit-mask-composite:destination-in]"
          )}
          />
        </div>
        <Navbar />
        <ModeToggleButton />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact ref={contactRef}/>
      </main>
    </ScrollProvider>
  );
}