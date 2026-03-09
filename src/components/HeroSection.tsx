import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[160px] floating" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[160px] floating-slow" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/4 rounded-full blur-[120px] floating" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-primary/30 bg-primary/5 text-primary mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                AI Automation Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] mb-6"
            >
              Build AI Systems.{" "}
              <span className="gradient-text">Automate Everything.</span>{" "}
              <span className="text-foreground/80">Scale Intelligence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
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
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium font-heading text-sm tracking-wide transition-all duration-300 glow-primary hover:shadow-[0_0_50px_-10px_hsl(220,100%,65%,0.5)]"
              >
                View My Projects
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#ecosystem"
                className="px-8 py-4 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm text-foreground font-medium font-heading text-sm tracking-wide hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                Explore AI Systems
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-8 mt-14 pt-8 border-t border-border/30"
            >
              {[
                { value: "12+", label: "AI Agents Built" },
                { value: "47", label: "Workflows" },
                { value: "2.4K", label: "Insights Generated" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold font-heading gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D-like dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative" style={{ perspective: "1200px" }}>
              <div
                className="glass-card p-6 gradient-border relative overflow-hidden"
                style={{ transform: "rotateY(-5deg) rotateX(3deg)" }}
              >
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent animate-pulse pointer-events-none" />
                
                {/* Mock dashboard header */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <span className="ml-3 text-xs text-muted-foreground font-body tracking-wide">MetaPulse AI — Dashboard</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Active Agents", value: "12", color: "text-primary" },
                    { label: "Workflows", value: "47", color: "text-secondary" },
                    { label: "Insights", value: "2.4K", color: "text-accent" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-muted/40 rounded-lg p-3 border border-border/30">
                      <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">{stat.label}</div>
                      <div className={`text-xl font-bold font-heading ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-muted/20 rounded-lg p-4 mb-4 border border-border/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-muted-foreground">Campaign Performance</div>
                    <div className="text-[10px] text-accent font-medium">+23.5%</div>
                  </div>
                  <div className="flex items-end gap-1.5 h-28">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.06, ease: "easeOut" }}
                        className="flex-1 rounded-sm bg-gradient-to-t from-primary/70 via-primary/40 to-primary/10"
                      />
                    ))}
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex gap-2">
                  {[
                    { status: "Analyzing...", pulse: true },
                    { status: "Optimizing", pulse: false },
                    { status: "Reporting", pulse: false },
                  ].map(({ status, pulse }) => (
                    <span key={status} className="text-[10px] px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                      {status}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -right-4 top-1/4 glass-card px-4 py-3 text-xs border border-accent/20 max-w-[180px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-heading font-medium text-foreground">AI Insight</span>
                </div>
                <p className="text-muted-foreground text-[10px]">Budget reallocation can improve ROAS by 34%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
