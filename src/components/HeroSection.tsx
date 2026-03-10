import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { Bot, Workflow, Mic, MessageSquare, Database, Zap, Brain, Globe, Cable } from "lucide-react";

const systemNodes = [
  { icon: Bot, label: "AI Agents", x: 15, y: 20, delay: 0.5 },
  { icon: Workflow, label: "Pipelines", x: 85, y: 15, delay: 0.7 },
  { icon: Mic, label: "Voice AI", x: 10, y: 65, delay: 0.9 },
  { icon: MessageSquare, label: "Chatbots", x: 90, y: 55, delay: 1.1 },
  { icon: Database, label: "Data Systems", x: 50, y: 10, delay: 0.6 },
  { icon: Zap, label: "Automation", x: 75, y: 80, delay: 1.0 },
  { icon: Brain, label: "LLM Models", x: 25, y: 80, delay: 0.8 },
  { icon: Globe, label: "Real-time AI", x: 50, y: 90, delay: 1.2 },
];

const connections = [
  [0, 4], [4, 1], [1, 3], [3, 5], [5, 7], [7, 6], [6, 2], [2, 0],
  [0, 5], [1, 6], [2, 3], [4, 7],
];

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
                AI Automation Engineer — Agentic Systems Builder
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] mb-6"
            >
              Building Intelligent{" "}
              <span className="gradient-text">AI Systems.</span>{" "}
              <span className="text-foreground/80">Agents, Automation & Autonomous Workflows.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              I design and build AI agents, automation pipelines, and intelligent systems that automate workflows across multiple industries — from Voice AI to RAG chatbots to real-time AI avatars.
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
                View AI Systems
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#ecosystem"
                className="px-8 py-4 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm text-foreground font-medium font-heading text-sm tracking-wide hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                Explore Projects
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
                { value: "15+", label: "AI Agents Built" },
                { value: "50+", label: "Automation Workflows" },
                { value: "8+", label: "Industries Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold font-heading gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — AI System Network Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[520px] mx-auto">
              {/* Orbital rings */}
              <div className="absolute inset-[10%] rounded-full border border-border/15 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-[25%] rounded-full border border-border/10 animate-[spin_45s_linear_infinite_reverse]" />
              <div className="absolute inset-[40%] rounded-full border border-primary/10" />

              {/* Central core */}
              <div className="absolute inset-[38%] rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 border border-primary/30 flex items-center justify-center shadow-[0_0_80px_-20px_hsl(220,100%,65%,0.4)]">
                <div className="text-center">
                  <Cable className="w-8 h-8 text-primary mx-auto mb-1" />
                  <span className="text-[10px] font-heading font-semibold text-primary-foreground">AI Core</span>
                </div>
              </div>

              {/* SVG connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="hero-conn" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(220, 100%, 65%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(186, 100%, 50%)" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                {connections.map(([a, b], i) => (
                  <motion.line
                    key={i}
                    x1={systemNodes[a].x}
                    y1={systemNodes[a].y}
                    x2={systemNodes[b].x}
                    y2={systemNodes[b].y}
                    stroke="url(#hero-conn)"
                    strokeWidth="0.2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 + i * 0.05 }}
                  />
                ))}
                {/* Connection to center (50,50) */}
                {systemNodes.map((node, i) => (
                  <motion.line
                    key={`center-${i}`}
                    x1={50} y1={50}
                    x2={node.x} y2={node.y}
                    stroke="url(#hero-conn)"
                    strokeWidth="0.15"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1, delay: node.delay }}
                  />
                ))}
              </svg>

              {/* System nodes */}
              {systemNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: node.delay, type: "spring", stiffness: 200 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm flex flex-col items-center justify-center gap-1 hover:border-accent/50 hover:shadow-[0_0_25px_-5px_hsl(186,100%,50%,0.3)] transition-all duration-300 cursor-default">
                      <Icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                      <span className="text-[8px] font-heading font-medium text-muted-foreground group-hover:text-foreground transition-colors">{node.label}</span>
                    </div>
                    {/* Pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-primary/20 pointer-events-none"
                      animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: node.delay + 1 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
