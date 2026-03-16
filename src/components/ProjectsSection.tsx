import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Bot, Mic, MessageCircle, User, BookOpen, BarChart3, Workflow, Zap } from "lucide-react";

import imgLeadGen from "@/assets/project-lead-gen.jpg";
import imgVoiceAI from "@/assets/project-voice-ai.jpg";
import imgWhatsapp from "@/assets/project-whatsapp.jpg";
import imgAvatar from "@/assets/project-avatar.jpg";
import imgRag from "@/assets/project-rag.jpg";
import imgMetapulse from "@/assets/project-metapulse.jpg";
import imgAgentic from "@/assets/project-agentic.jpg";
import imgCreative from "@/assets/project-creative.jpg";

const projects = [
  {
    title: "AI Lead Generation System",
    description: "An automated AI system that identifies potential leads, qualifies them using AI agents, and sends automated outreach via email or WhatsApp. End-to-end lead pipeline automation.",
    features: ["AI lead discovery", "Automatic qualification", "Email & WhatsApp outreach", "Lead scoring engine"],
    stack: ["LLM Models", "Automation Workflows", "API Integrations", "Data Pipelines"],
    gradient: "from-primary to-secondary",
    accent: "primary",
    icon: Zap,
    image: imgLeadGen,
  },
  {
    title: "Voice AI Agent",
    description: "A conversational AI voice agent capable of interacting with users in real time, answering questions, reasoning through context, and executing automated tasks via voice commands.",
    features: ["Real-time speech recognition", "AI reasoning & context", "Voice synthesis responses", "Automation triggers"],
    stack: ["Speech-to-Text", "LLM Reasoning", "Voice Synthesis", "Workflow Automation"],
    gradient: "from-secondary to-accent",
    accent: "secondary",
    icon: Mic,
    image: imgVoiceAI,
  },
  {
    title: "WhatsApp Automation System",
    description: "An AI automation system integrated with WhatsApp to automate conversations, customer support, and lead management — handling thousands of interactions autonomously.",
    features: ["AI conversation handling", "Customer interaction automation", "Lead capture & routing", "Automated responses"],
    stack: ["WhatsApp APIs", "AI Chat Agents", "Automation Pipelines", "CRM Integration"],
    gradient: "from-accent to-primary",
    accent: "accent",
    icon: MessageCircle,
    image: imgWhatsapp,
  },
  {
    title: "Real-Time AI Avatar",
    description: "A real-time AI avatar capable of interacting with users using voice and visual responses. Human-like conversation with AI-generated speech and animated expressions.",
    features: ["Real-time conversation", "AI-generated speech", "Avatar animation", "Interactive responses"],
    stack: ["AI Models", "Speech Generation", "Real-time Rendering", "WebRTC"],
    gradient: "from-primary to-accent",
    accent: "primary",
    icon: User,
    image: imgAvatar,
  },
  {
    title: "RAG Knowledge Chatbot",
    description: "A retrieval-augmented generation chatbot that answers questions using custom knowledge sources. Context-aware, accurate, and connected to your documents and data.",
    features: ["Knowledge retrieval", "Context-aware responses", "Document search", "AI assistance"],
    stack: ["LLM Models", "Vector Databases", "Knowledge Indexing", "AI Reasoning"],
    gradient: "from-secondary to-primary",
    accent: "secondary",
    icon: BookOpen,
    image: imgRag,
  },
  {
    title: "MetaPulse AI",
    description: "AI-powered performance marketing analytics platform connecting to Meta Ads accounts. Automatically analyzes campaigns, detects inefficiencies, and generates optimization strategies.",
    features: ["Campaign-level AI analysis", "Adset performance insights", "Creative effectiveness detection", "AI optimization recommendations"],
    stack: ["Meta Marketing API", "AI Analysis Engine", "Data Pipeline", "Analytics Dashboard"],
    gradient: "from-accent to-secondary",
    accent: "accent",
    icon: BarChart3,
    image: imgMetapulse,
  },
  {
    title: "Meta Ads Agentic Workflow",
    description: "An autonomous AI workflow that fetches Meta Ads data, analyzes campaign performance, and generates actionable insights. A marketing intelligence agent handling the full pipeline.",
    features: ["Fetch ad account data", "Detect anomalies", "Identify bottlenecks", "Auto-generate reports"],
    stack: ["AI Agents", "API Automation", "Claude AI", "Workflow Orchestration"],
    gradient: "from-primary to-secondary",
    accent: "primary",
    icon: Workflow,
    image: imgAgentic,
  },
  {
    title: "AI Creative Intelligence",
    description: "A system that analyzes winning ad creatives and generates insights for future campaigns. Studies creative structure, hooks, messaging patterns, and visual composition.",
    features: ["Creative structure analysis", "Hook effectiveness scoring", "Pattern recognition", "Performance predictions"],
    stack: ["AI Models", "Vision Analysis", "Data Analytics", "Creative Engine"],
    gradient: "from-secondary to-accent",
    accent: "secondary",
    icon: Bot,
    image: imgCreative,
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

  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
    >
      <div
        className="glass-card gradient-border h-full transition-all duration-500 relative overflow-hidden"
        style={{
          transform: isHovered ? `perspective(800px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg) translateZ(10px)` : "none",
        }}
      >
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-500 z-10"
            style={{
              background: `radial-gradient(300px circle at ${50 + mousePos.x * 5}% ${50 + mousePos.y * 5}%, hsl(var(--${project.accent})), transparent 60%)`,
            }}
          />
        )}

        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
              <Icon className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-gradient-to-r ${project.gradient} text-primary-foreground shadow-lg`}>
              AI System
            </div>
          </div>
          <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-foreground/70 group-hover:text-accent transition-colors z-10" />
        </div>

        <div className="relative z-10 p-6 pt-2">
          <h3 className="text-xl font-bold font-heading mb-2 group-hover:gradient-text transition-all duration-300">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="mb-5">
            <div className="text-[10px] font-medium text-foreground/60 uppercase tracking-widest mb-2">Key Features</div>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] px-2.5 py-1 rounded-full bg-muted/40 text-muted-foreground border border-border/40 font-medium">
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
          AI Systems Portfolio
        </span>
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">
          Featured <span className="gradient-text">AI Systems</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          Autonomous agents, automation platforms, and intelligent workflows built for real-world impact.
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
