import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:sujalpatel6172@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sujalpatel6172", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/sujalpatel21", icon: Github },
];

const ContactSection = () => (
  <section id="contact" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px]" />
    
    <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-primary/30 bg-primary/5 text-primary mb-8">
          Get in Touch
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">
          Let's Build Something{" "}
          <span className="gradient-text">Intelligent</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Ready to automate your workflows with AI? Let's talk.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group glass-card px-6 py-4 flex items-center gap-3 text-sm font-heading hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(220,100%,65%,0.2)]"
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                {link.label}
                <ArrowUpRight className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
              </a>
            );
          })}
        </div>

        <a
          href="mailto:sujalpatel6172@gmail.com"
          className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium font-heading tracking-wide transition-all duration-300 glow-primary hover:shadow-[0_0_60px_-10px_hsl(220,100%,65%,0.5)]"
        >
          Start a Conversation
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
