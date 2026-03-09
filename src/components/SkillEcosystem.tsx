import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bot, Workflow, BarChart3, Link2, LineChart, Lightbulb, Layers, Cpu } from "lucide-react";

const nodes = [
  { id: "center", label: "AI Automation\nSystems", x: 50, y: 50, size: 140, description: "", icon: Cpu },
  { id: "agents", label: "AI Agents", x: 38, y: 14, size: 100, description: "Autonomous decision-making systems that analyze data and generate insights in real-time.", icon: Bot },
  { id: "pipelines", label: "Automation\nPipelines", x: 72, y: 12, size: 100, description: "Systems that fetch, process, and analyze marketing data automatically.", icon: Workflow },
  { id: "marketing", label: "Marketing\nIntelligence", x: 85, y: 45, size: 96, description: "AI-powered analytics for campaign performance and optimization.", icon: BarChart3 },
  { id: "api", label: "API\nIntegrations", x: 78, y: 80, size: 96, description: "Seamless connections between platforms, APIs, and data sources.", icon: Link2 },
  { id: "analytics", label: "Data\nAnalytics", x: 50, y: 88, size: 96, description: "Real-time data processing and visualization for actionable insights.", icon: LineChart },
  { id: "recommendations", label: "AI\nRecommendations", x: 18, y: 78, size: 96, description: "Machine learning models that generate optimization strategies.", icon: Lightbulb },
  { id: "orchestration", label: "Workflow\nOrchestration", x: 14, y: 42, size: 96, description: "Coordinating complex multi-step AI workflows end-to-end.", icon: Layers },
];

const connections = [
  ["center", "agents"], ["center", "pipelines"], ["center", "marketing"],
  ["center", "api"], ["center", "analytics"], ["center", "recommendations"],
  ["center", "orchestration"],
  ["agents", "pipelines"], ["marketing", "api"], ["api", "analytics"],
  ["analytics", "recommendations"], ["recommendations", "orchestration"],
  ["orchestration", "agents"],
];

const SkillEcosystem = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="ecosystem" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-primary/30 bg-primary/5 text-primary mb-6">
            Intelligence Architecture
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">
            AI <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            An interconnected system of AI capabilities working together to power intelligent automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto aspect-square"
        >
          {/* Orbital rings */}
          <div className="absolute inset-[15%] rounded-full border border-border/20" />
          <div className="absolute inset-[30%] rounded-full border border-border/10" />

          {/* SVG connections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="conn-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(220, 100%, 65%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(255, 60%, 68%)" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="conn-active" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(186, 100%, 50%)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(220, 100%, 65%)" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            {connections.map(([from, to], i) => {
              const a = nodes.find((n) => n.id === from)!;
              const b = nodes.find((n) => n.id === to)!;
              const isHighlighted = hoveredNode === from || hoveredNode === to;
              return (
                <line
                  key={i}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={isHighlighted ? "url(#conn-active)" : "url(#conn-gradient)"}
                  strokeWidth={isHighlighted ? 0.35 : 0.15}
                  opacity={hoveredNode ? (isHighlighted ? 1 : 0.15) : 0.4}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isCenter = node.id === "center";
            const isHovered = hoveredNode === node.id;
            const isConnected = hoveredNode && connections.some(
              ([a, b]) => (a === hoveredNode && b === node.id) || (b === hoveredNode && a === node.id)
            );
            const dimmed = hoveredNode && !isHovered && !isConnected && !isCenter;

            return (
              <div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => !isCenter && setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.div
                  whileHover={!isCenter ? { scale: 1.12 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`flex flex-col items-center justify-center rounded-full text-center cursor-pointer transition-all duration-500 ${
                    isCenter
                      ? "bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 border-2 border-primary/30 shadow-[0_0_60px_-10px_hsl(220,100%,65%,0.4),inset_0_0_30px_-10px_hsl(220,100%,65%,0.1)]"
                      : isHovered
                      ? "bg-card/80 border-2 border-accent/60 shadow-[0_0_30px_-5px_hsl(186,100%,50%,0.3)]"
                      : "bg-card/60 border border-border/60 hover:border-primary/40"
                  } ${dimmed ? "opacity-30" : "opacity-100"}`}
                  style={{ width: node.size, height: node.size }}
                >
                  <Icon className={`mb-1.5 transition-colors duration-300 ${
                    isCenter ? "w-8 h-8 text-primary" :
                    isHovered ? "w-5 h-5 text-accent" : "w-5 h-5 text-muted-foreground"
                  }`} />
                  <span className={`text-[9px] md:text-[11px] font-medium leading-tight whitespace-pre-line font-heading transition-colors duration-300 ${
                    isCenter ? "text-primary-foreground" : isHovered ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {node.label}
                  </span>
                </motion.div>

                {/* Hover pulse ring */}
                {isHovered && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.6 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border border-accent/40 pointer-events-none"
                  />
                )}

                {/* Tooltip */}
                <AnimatePresence>
                  {node.description && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-30 top-full mt-3 left-1/2 -translate-x-1/2 w-60 glass-card p-4 text-xs leading-relaxed border border-border/60"
                    >
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-card/40 backdrop-blur-xl border-l border-t border-border/60" />
                      <div className="font-semibold text-foreground mb-1.5 font-heading text-sm flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-accent" />
                        {node.label.replace('\n', ' ')}
                      </div>
                      <p className="text-muted-foreground">{node.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillEcosystem;
