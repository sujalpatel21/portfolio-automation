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
      <footer className="border-t border-border/30 py-8">
        <div className="container mx-auto px-6 text-center text-xs text-muted-foreground">
          © 2026 Sujal Patel. Building intelligent systems.
        </div>
      </footer>
    </div>
  );
};

export default Index;
