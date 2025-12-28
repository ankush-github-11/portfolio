"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ModeToggleButton } from "@/components/ui/ModeToggleButton";
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
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const skillsRef = useRef<HTMLDivElement>(null);
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <ScrollProvider value={{ scrollToContact, scrollToProjects, scrollToSkills }}>
      <main className="relative h-fit bg-black-100 flex justify-center items-center flex-col overflow-hidden pt-3 pb-15 bg-bgcolor">
        <Navbar />
        <ModeToggleButton />
        <Hero />
        <About />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef}/>
      </main>
    </ScrollProvider>
  );
}