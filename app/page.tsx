import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import { navItems } from "@/data";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <AboutMe />
        <Technologies />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
