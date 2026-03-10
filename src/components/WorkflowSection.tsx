import { motion } from "framer-motion";
import { Radio, Cog, Brain, Lightbulb, Rocket, MessageSquare } from "lucide-react";

const steps = [
  { label: "Data Input", sub: "APIs & Sources", icon: Radio },
  { label: "AI Processing", sub: "LLM Pipeline", icon: Cog },
  { label: "Agent Reasoning", sub: "Decision Engine", icon: Brain },
  { label: "Insight Generation", sub: "Pattern Detection", icon: Lightbulb },
  { label: "Action & Response", sub: "Voice / Chat / API", icon: MessageSquare },
  { label: "Automation", sub: "Continuous Execution", icon: Rocket },
];

const WorkflowSection = () => (
  <section id="workflow" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-15" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-secondary/30 bg-secondary/5 text-secondary mb-6">
          System Architecture
        </span>
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">
          How AI <span className="gradient-text">Agents Work</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          From raw data to autonomous action — an end-to-end agentic pipeline.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 flex-wrap">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-center"
            >
              <div className="group glass-card gradient-border p-6 text-center w-44 hover:shadow-[0_0_40px_-10px_hsl(220,100%,65%,0.3)] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-border/40 flex items-center justify-center mx-auto mb-4 group-hover:border-primary/40 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm font-bold font-heading mb-1">{step.label}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{step.sub}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center mx-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                    className="w-8 h-px bg-gradient-to-r from-primary/50 to-secondary/50 origin-left"
                  />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 -ml-0.5" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WorkflowSection;
