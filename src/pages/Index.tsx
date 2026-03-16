import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillEcosystem from "@/components/SkillEcosystem";
import ProjectsSection from "@/components/ProjectsSection";
import WorkflowSection from "@/components/WorkflowSection";
import TechStackSection from "@/components/TechStackSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background cursor-glow">
      <Navbar />
      <HeroSection />
      <SkillEcosystem />
      <ProjectsSection />
      <WorkflowSection />
      <TechStackSection />
      <PhilosophySection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border/20 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={spLogo} alt="Sujal Patel" className="h-7 w-auto" />
          <div className="text-xs text-muted-foreground">
            © 2026 Sujal Patel. Building autonomous AI systems.
          </div>
          <div className="flex gap-6">
            <a href="mailto:sujalpatel6172@gmail.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/sujalpatel6172" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/sujalpatel21" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
