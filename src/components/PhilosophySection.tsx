import { motion } from "framer-motion";

const points = [
  "Data flows automatically",
  "AI analyzes performance",
  "Insights are generated instantly",
  "Decisions are automated",
];

const PhilosophySection = () => (
  <section className="py-32 relative">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-2">
          I Don't Build Websites.
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text mb-8">
          I Build Intelligent Systems.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Modern businesses don't just need software — they need intelligence layers. My work focuses on building systems where:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {points.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4 text-sm text-foreground/80 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent shrink-0" />
              {point}
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground italic">
          The result is software that doesn't just show data — it thinks and acts.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PhilosophySection;
