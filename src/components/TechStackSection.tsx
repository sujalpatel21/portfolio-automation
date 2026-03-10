import { motion } from "framer-motion";

const techs = [
  { name: "LLM Models", tier: 1 },
  { name: "Claude AI", tier: 1 },
  { name: "OpenAI", tier: 1 },
  { name: "AI Agents", tier: 1 },
  { name: "RAG Systems", tier: 1 },
  { name: "Vector Databases", tier: 2 },
  { name: "Automation Pipelines", tier: 1 },
  { name: "Workflow Orchestration", tier: 2 },
  { name: "Voice AI", tier: 1 },
  { name: "API Integrations", tier: 2 },
  { name: "Data Pipelines", tier: 2 },
  { name: "JavaScript", tier: 3 },
  { name: "Node.js", tier: 2 },
  { name: "React", tier: 3 },
  { name: "Next.js", tier: 3 },
  { name: "Python", tier: 3 },
  { name: "Supabase", tier: 3 },
];

const TechStackSection = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[150px]" />
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-accent/30 bg-accent/5 text-accent mb-6">
          Tools & Technologies
        </span>
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">
          Technology <span className="gradient-text">Stack</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="floating"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <div className={`glass-card px-6 py-3.5 text-sm font-medium font-heading hover:border-primary/40 transition-all duration-300 cursor-default ${
              tech.tier === 1
                ? "border-primary/20 hover:shadow-[0_0_30px_-10px_hsl(220,100%,65%,0.2)]"
                : tech.tier === 2
                ? "border-secondary/15 hover:shadow-[0_0_30px_-10px_hsl(255,60%,68%,0.2)]"
                : ""
            }`}>
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
