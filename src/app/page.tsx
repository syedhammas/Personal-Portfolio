import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about-me";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Project from "@/components/project";
import WorkflowTimeline from "@/components/workflow-timeline";
import Contact from "@/components/contact";
import Footer from "@/app/footer/footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <WorkflowTimeline />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
