import { motion } from "framer-motion";

const techs = [
  "AI Models", "Claude AI", "OpenAI APIs", "Meta Marketing API",
  "Supabase", "JavaScript", "Node.js", "React",
  "API Integrations", "Data Analytics", "Automation Pipelines", "Python",
];

const TechStackSection = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          Technology <span className="gradient-text">Stack</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {techs.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="floating"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <div className="glass-card px-5 py-3 text-sm font-medium font-heading hover:border-primary/40 transition-colors cursor-default">
              {tech}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
