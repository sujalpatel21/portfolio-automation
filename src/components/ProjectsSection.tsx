import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "MetaPulse AI",
    description: "AI-powered performance marketing analytics platform that connects to Meta Ads accounts and automatically analyzes campaign performance. Detects performance leaks, inefficient ad sets, weak creatives, and scaling opportunities.",
    features: ["Campaign-level AI analysis", "Adset performance insights", "Creative effectiveness detection", "AI optimization recommendations"],
    stack: ["Meta Marketing API", "AI Analysis Engine", "Data Pipeline", "Analytics Dashboard"],
    gradient: "from-primary to-secondary",
    accent: "primary",
  },
  {
    title: "Meta Ads Agentic Workflow",
    description: "An autonomous AI workflow that fetches Meta Ads data, analyzes campaign performance, and generates actionable insights. Acts as a marketing intelligence agent handling the full pipeline.",
    features: ["Fetch ad account data", "Detect anomalies", "Identify bottlenecks", "Auto-generate reports"],
    stack: ["AI Agents", "API Automation", "Claude AI", "Workflow Orchestration"],
    gradient: "from-secondary to-accent",
    accent: "secondary",
  },
  {
    title: "AI Creative Intelligence",
    description: "A system that analyzes winning ad creatives and generates insights for future campaigns. Studies creative structure, hooks, messaging patterns, and visual composition.",
    features: ["Creative structure analysis", "Hook effectiveness scoring", "Pattern recognition", "Performance predictions"],
    stack: ["AI Models", "Vision Analysis", "Data Analytics", "Creative Engine"],
    gradient: "from-accent to-primary",
    accent: "accent",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 12,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 12,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
    >
      <div
        className="glass-card gradient-border p-8 h-full transition-all duration-500 relative overflow-hidden"
        style={{
          transform: isHovered ? `perspective(800px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg) translateZ(10px)` : "none",
        }}
      >
        {/* Hover light */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-500"
            style={{
              background: `radial-gradient(300px circle at ${50 + mousePos.x * 5}% ${50 + mousePos.y * 5}%, hsl(var(--${project.accent})), transparent 60%)`,
            }}
          />
        )}

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-5">
            <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-gradient-to-r ${project.gradient} text-primary-foreground`}>
              Featured Project
            </div>
            <ArrowUpRight className={`w-4 h-4 text-muted-foreground group-hover:text-${project.accent} transition-colors`} />
          </div>

          <h3 className="text-2xl font-bold font-heading mb-3 group-hover:gradient-text transition-all duration-300">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

          <div className="mb-6">
            <div className="text-[10px] font-medium text-foreground/60 uppercase tracking-widest mb-3">Key Features</div>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-center gap-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] px-3 py-1.5 rounded-full bg-muted/40 text-muted-foreground border border-border/40 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-32 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-accent/30 bg-accent/5 text-accent mb-6">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          AI systems and automation platforms built for real-world performance.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
