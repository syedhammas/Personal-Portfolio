import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about-me";
import Skills from "@/components/skills";
import Services from "@/components/services";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
    </>
  );
}
