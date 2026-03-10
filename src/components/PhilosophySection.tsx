import { motion } from "framer-motion";
import { Zap, Brain, LineChart, Cog } from "lucide-react";

const points = [
  { text: "AI agents perform tasks autonomously", icon: Bot },
  { text: "Data flows through intelligent pipelines", icon: Zap },
  { text: "Systems reason, decide, and act", icon: Brain },
  { text: "Workflows run without human intervention", icon: Cog },
];

import { Bot } from "lucide-react";

const PhilosophySection = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-15" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
    
    <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-secondary/30 bg-secondary/5 text-secondary mb-8">
          Philosophy
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-2 leading-tight">
          I Don't Build Software.
        </h2>
        <h2 className="text-4xl md:text-6xl font-bold font-heading gradient-text mb-10 leading-tight">
          I Build Autonomous Systems.
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-14 max-w-2xl mx-auto">
          Modern businesses don't just need tools — they need intelligence layers. AI systems where agents reason, pipelines execute, and workflows run autonomously across every domain.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card p-5 text-left flex items-center gap-4 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(220,100%,65%,0.15)]"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/10 border border-border/40 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground/80 font-medium">{point.text}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg italic border-l-2 border-primary/30 pl-6 text-left max-w-xl mx-auto"
        >
          The result is AI that doesn't just assist — it performs, decides, and automates.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default PhilosophySection;
