import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "MetaPulse AI",
    description: "AI-powered performance marketing analytics platform that connects to Meta Ads accounts and automatically analyzes campaign performance. Detects performance leaks, inefficient ad sets, weak creatives, and scaling opportunities.",
    features: ["Campaign-level AI analysis", "Adset performance insights", "Creative effectiveness detection", "AI optimization recommendations"],
    stack: ["Meta Marketing API", "AI Analysis Engine", "Data Pipeline", "Analytics Dashboard"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Meta Ads Agentic Workflow",
    description: "An autonomous AI workflow that fetches Meta Ads data, analyzes campaign performance, and generates actionable insights. Acts as a marketing intelligence agent handling the full pipeline.",
    features: ["Fetch ad account data", "Detect anomalies", "Identify bottlenecks", "Auto-generate reports"],
    stack: ["AI Agents", "API Automation", "Claude AI", "Workflow Orchestration"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "AI Creative Intelligence",
    description: "A system that analyzes winning ad creatives and generates insights for future campaigns. Studies creative structure, hooks, messaging patterns, and visual composition.",
    features: ["Creative structure analysis", "Hook effectiveness scoring", "Pattern recognition", "Performance predictions"],
    stack: ["AI Models", "Vision Analysis", "Data Analytics", "Creative Engine"],
    gradient: "from-accent to-primary",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 10,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
    >
      <div
        className="glass-card gradient-border p-8 h-full transition-all duration-300"
        style={{
          transform: isHovered ? `perspective(800px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg)` : "none",
        }}
      >
        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-gradient-to-r ${project.gradient} text-primary-foreground mb-4`}>
          Featured Project
        </div>
        <h3 className="text-2xl font-bold font-heading mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="mb-6">
          <div className="text-xs font-medium text-foreground/70 uppercase tracking-wider mb-2">Key Features</div>
          <ul className="space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="text-[10px] px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground border border-border/50">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          AI systems and automation platforms built for real-world performance.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
