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
          <span className="font-heading font-bold text-lg gradient-text">SP</span>
          <div className="text-xs text-muted-foreground">
            © 2026 Sujal Patel. Building intelligent systems.
          </div>
          <div className="flex gap-6">
            {["Email", "LinkedIn", "GitHub"].map((link) => (
              <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
