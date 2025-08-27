import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about-me";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Project from "@/components/project";
import CaseStudies from "@/components/casestudies";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <CaseStudies />
      <Services />
    </>
  );
}
