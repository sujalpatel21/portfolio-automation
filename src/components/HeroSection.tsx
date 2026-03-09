import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] floating" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[128px] floating-slow" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-[100px] floating" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-primary/30 bg-primary/5 text-primary mb-8">
                AI Automation Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6"
            >
              Build AI Systems.{" "}
              <span className="gradient-text">Automate Everything.</span>{" "}
              Scale Intelligence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              I design and build Agentic AI systems, automation workflows, and performance marketing intelligence tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium font-heading text-sm tracking-wide hover:opacity-90 transition-opacity glow-primary"
              >
                View My Projects
              </a>
              <a
                href="#workflow"
                className="px-8 py-3.5 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium font-heading text-sm tracking-wide hover:border-primary/50 transition-colors"
              >
                Explore AI Systems
              </a>
            </motion.div>
          </div>

          {/* Right — 3D-like dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative" style={{ perspective: "1000px" }}>
              <div
                className="glass-card p-6 gradient-border"
                style={{ transform: "rotateY(-5deg) rotateX(2deg)" }}
              >
                {/* Mock dashboard */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <span className="ml-3 text-xs text-muted-foreground font-body">MetaPulse AI — Dashboard</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Active Agents", value: "12", color: "primary" },
                    { label: "Workflows", value: "47", color: "secondary" },
                    { label: "Insights", value: "2.4K", color: "accent" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-muted/50 rounded-lg p-3">
                      <div className={`text-xs text-muted-foreground mb-1`}>{stat.label}</div>
                      <div className={`text-xl font-bold font-heading text-${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Chart mockup */}
                <div className="bg-muted/30 rounded-lg p-4 mb-3">
                  <div className="text-xs text-muted-foreground mb-3">Campaign Performance</div>
                  <div className="flex items-end gap-1.5 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.6 + i * 0.05 }}
                        className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary/20"
                      />
                    ))}
                  </div>
                </div>

                {/* AI Agent status */}
                <div className="flex gap-2">
                  {["Analyzing...", "Optimizing", "Reporting"].map((status) => (
                    <span key={status} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {status}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
