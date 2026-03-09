import { motion } from "framer-motion";

const steps = [
  { label: "Data Source", sub: "Meta Ads API", icon: "📡" },
  { label: "AI Processing", sub: "Data Pipeline", icon: "⚙️" },
  { label: "Decision Engine", sub: "AI Analysis", icon: "🧠" },
  { label: "Insights", sub: "Pattern Detection", icon: "💡" },
  { label: "Automation", sub: "Action & Reports", icon: "🚀" },
];

const WorkflowSection = () => (
  <section id="workflow" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          How AI <span className="gradient-text">Systems Work</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          From raw data to automated decisions — end to end.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex items-center"
          >
            <div className="glass-card gradient-border p-6 text-center w-44 hover:glow-primary transition-shadow duration-300">
              <div className="text-3xl mb-3">{step.icon}</div>
              <div className="text-sm font-bold font-heading mb-1">{step.label}</div>
              <div className="text-[10px] text-muted-foreground">{step.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block w-8 h-px bg-gradient-to-r from-primary/50 to-secondary/50 mx-1" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkflowSection;
