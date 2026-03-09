import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/30"
  >
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-heading font-bold text-lg gradient-text">SP</span>
      <div className="hidden md:flex items-center gap-8">
        {["Projects", "Workflow", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="px-5 py-2 rounded-lg text-xs font-heading font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
      >
        Get in Touch
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
