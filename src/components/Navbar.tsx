import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import spLogo from "@/assets/sp-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-background/80 border-b border-border/30 shadow-[0_4px_30px_-10px_hsl(0,0%,0%,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-1">
          {["Ecosystem", "Projects", "Workflow", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/30 transition-all duration-300 font-body"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg text-xs font-heading font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity flex items-center">
            <img src={spLogo} alt="Sujal Patel" className="h-8 w-auto" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
