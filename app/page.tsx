import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto pt-3 sm:px-2 px-1 bg-slate-100">
      <Navbar />
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}