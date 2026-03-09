import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { id: "center", label: "AI Automation\nSystems", x: 50, y: 50, size: 80, description: "" },
  { id: "agents", label: "AI Agents", x: 25, y: 20, size: 56, description: "Autonomous decision-making systems that analyze data and generate insights." },
  { id: "pipelines", label: "Automation\nPipelines", x: 75, y: 18, size: 56, description: "Systems that fetch, process, and analyze marketing data automatically." },
  { id: "marketing", label: "Marketing\nIntelligence", x: 15, y: 55, size: 52, description: "AI-powered analytics for campaign performance and optimization." },
  { id: "api", label: "API\nIntegrations", x: 82, y: 50, size: 52, description: "Seamless connections between platforms, APIs, and data sources." },
  { id: "analytics", label: "Data\nAnalytics", x: 25, y: 82, size: 52, description: "Real-time data processing and visualization for actionable insights." },
  { id: "recommendations", label: "AI\nRecommendations", x: 75, y: 82, size: 52, description: "Machine learning models that generate optimization strategies." },
  { id: "orchestration", label: "Workflow\nOrchestration", x: 50, y: 90, size: 52, description: "Coordinating complex multi-step AI workflows end-to-end." },
];

const connections = [
  ["center", "agents"], ["center", "pipelines"], ["center", "marketing"],
  ["center", "api"], ["center", "analytics"], ["center", "recommendations"],
  ["center", "orchestration"],
  ["agents", "pipelines"], ["marketing", "analytics"], ["api", "recommendations"],
  ["analytics", "orchestration"], ["recommendations", "orchestration"],
];

const SkillEcosystem = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            AI <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            An interconnected system of AI capabilities working together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto aspect-square"
        >
          {/* SVG connections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {connections.map(([from, to], i) => {
              const a = nodes.find((n) => n.id === from)!;
              const b = nodes.find((n) => n.id === to)!;
              const isHighlighted = hoveredNode === from || hoveredNode === to;
              return (
                <line
                  key={i}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={isHighlighted ? "hsl(220, 100%, 65%)" : "hsl(240, 6%, 20%)"}
                  strokeWidth={isHighlighted ? 0.4 : 0.2}
                  opacity={isHighlighted ? 0.8 : 0.4}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => node.id !== "center" && setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className={`flex items-center justify-center rounded-full text-center cursor-pointer transition-all duration-300 ${
                  node.id === "center"
                    ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 glow-primary"
                    : hoveredNode === node.id
                    ? "bg-primary/15 border border-primary/50 glow-primary"
                    : "bg-muted/40 border border-border/50 hover:border-primary/30"
                }`}
                style={{ width: node.size, height: node.size }}
              >
                <span className={`text-[9px] md:text-[10px] font-medium leading-tight whitespace-pre-line ${
                  node.id === "center" ? "text-primary" : "text-foreground/80"
                }`}>
                  {node.label}
                </span>
              </div>

              {/* Tooltip */}
              {node.description && hoveredNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-20 top-full mt-2 left-1/2 -translate-x-1/2 w-52 glass-card p-3 text-xs text-muted-foreground leading-relaxed"
                >
                  <div className="font-medium text-foreground mb-1 font-heading">{node.label.replace('\n', ' ')}</div>
                  {node.description}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillEcosystem;
