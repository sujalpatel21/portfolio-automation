import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, MessageCircle, PhoneCall, BookOpen, BarChart3, ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Prototype / Internal System",
    subtitle: "AI Ad Creative Engine — MindPal",
    title: "AI-Powered 3D Ad Creative System",
    problem: "Brands struggle to produce high-performing ad creatives consistently and fast.",
    description:
      "End-to-end AI pipeline that extracts brand identity from a website, generates conversion-focused ad copy, analyzes winning creatives, and produces multiple ad variations automatically.",
    features: [
      "Brand identity extraction from website",
      "Conversion-focused ad copy generation",
      "Winning creative analysis",
      "Auto-generated ad variations",
    ],
    outcomes: ["5–10x faster creative production", "Consistent on-brand outputs", "Scalable testing of ad variations"],
    stack: ["MindPal", "OpenAI", "Image Gen Models", "Workflow Automation"],
    gradient: "from-primary via-secondary to-accent",
    icon: Sparkles,
  },
  {
    tag: "Production System",
    subtitle: "WhatsApp Automation System",
    title: "Automated WhatsApp Lead Handling",
    problem: "Businesses lose leads due to delayed or manual responses.",
    description:
      "Automated WhatsApp workflow that instantly responds to new leads, qualifies users based on predefined logic, and routes hot leads directly to the sales team.",
    features: [
      "Instant response to new leads",
      "Logic-based qualification",
      "Hot lead routing to sales",
      "End-to-end conversation automation",
    ],
    outcomes: ["Instant response time", "Reduced manual workload", "Improved lead conversion consistency"],
    stack: ["Pabbly", "Webhooks", "APIs", "Automation Logic"],
    gradient: "from-secondary via-accent to-primary",
    icon: MessageCircle,
  },
  {
    tag: "AI Voice Agent",
    subtitle: "AI Voice Calling Agent",
    title: "AI Sales & Support Voice Agent",
    problem: "Handling calls manually is time-consuming and inconsistent.",
    description:
      "AI voice agent capable of handling inbound and outbound calls, answering FAQs, and qualifying leads through natural voice interaction.",
    features: [
      "Inbound & outbound call handling",
      "Real-time FAQ answering",
      "Voice-based lead qualification",
      "Natural conversational flow",
    ],
    outcomes: ["24/7 call handling", "Reduced support load", "Faster lead qualification"],
    stack: ["Vapi", "Retell AI", "Speech-to-Text", "Text-to-Speech"],
    gradient: "from-accent via-primary to-secondary",
    icon: PhoneCall,
  },
  {
    tag: "RAG Chatbot",
    subtitle: "AI Chatbot — RAG-Based",
    title: "Context-Aware Website Chatbot",
    problem: "Generic chatbots fail to give accurate answers.",
    description:
      "RAG-powered chatbot trained on website data, internal documents, and a custom knowledge base — delivering accurate, context-aware answers in real time.",
    features: [
      "Website data ingestion",
      "Document & knowledge base indexing",
      "Context-aware retrieval",
      "Accurate, grounded responses",
    ],
    outcomes: ["Accurate responses", "Better user experience", "Reduced support queries"],
    stack: ["LLMs", "Vector DB", "RAG Pipeline", "Knowledge Indexing"],
    gradient: "from-primary via-accent to-secondary",
    icon: BookOpen,
  },
  {
    tag: "Analytics Dashboard",
    subtitle: "Meta Ads Dashboard",
    title: "Real-Time Ads Performance Dashboard",
    problem: "Ad data is scattered and hard to analyze daily.",
    description:
      "Centralized real-time dashboard that unifies Meta Ads data, surfacing spend vs budget, CTR, CPM, CPC, and campaign-level insights for fast decision-making.",
    features: [
      "Spend vs budget tracking",
      "CTR, CPM, CPC monitoring",
      "Campaign-level insights",
      "Real-time data sync",
    ],
    outcomes: ["Faster decision-making", "Clear performance tracking", "Unified ads visibility"],
    stack: ["Meta Marketing API", "Data Pipeline", "Analytics Engine", "Dashboard UI"],
    gradient: "from-secondary via-primary to-accent",
    icon: BarChart3,
  },
];

type Project = (typeof projects)[number];

const ProjectVisual = ({ project }: { project: Project }) => {
  const Icon = project.icon;
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-card">
      {/* Layered gradient mesh */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-primary/40" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl bg-secondary/40" />
      <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full blur-3xl bg-accent/30 -translate-x-1/2" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Center icon mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className={`absolute inset-0 -m-8 rounded-full bg-gradient-to-br ${project.gradient} blur-2xl opacity-60`} />
          <div className={`relative w-28 h-28 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-2xl border border-white/10`}>
            <Icon className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Corner labels */}
      <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-foreground/70 font-medium">
        {project.subtitle}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-background/40 backdrop-blur-md border border-border/40 text-foreground/80">
          {project.tag}
        </span>
        <ArrowUpRight className="w-4 h-4 text-foreground/70" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-card/30 pointer-events-none" />
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <div className="shrink-0 w-[88vw] sm:w-[600px] md:w-[760px] lg:w-[880px] h-full px-4 md:px-6 flex items-center">
    <div className="glass-card gradient-border w-full grid md:grid-cols-2 overflow-hidden">
      {/* Visual */}
      <div className="h-56 md:h-[480px] p-4">
        <ProjectVisual project={project} />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / 05
          </span>
          <span className="text-[10px] uppercase tracking-widest text-accent">{project.subtitle}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3 leading-tight">
          <span className="gradient-text">{project.title}</span>
        </h3>

        <div className="mb-3">
          <div className="text-[10px] font-medium uppercase tracking-widest text-foreground/60 mb-1">Problem</div>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>

        <p className="text-sm text-foreground/80 leading-relaxed mb-4">{project.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-foreground/60 mb-2">System</div>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-foreground/60 mb-2">Outcome</div>
            <ul className="space-y-1.5">
              {project.outcomes.map((o) => (
                <li key={o} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2.5 py-1 rounded-full bg-muted/40 text-muted-foreground border border-border/40 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Translate horizontal track from 0 to -(N-1)/N * 100% (approx — fine-tuned with vw to prevent overscroll)
  // We move the track so the last card lands centered/visible.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Aurora background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[180px]" />
        </div>

        {/* Header */}
        <div className="absolute top-8 md:top-12 left-0 right-0 z-20 text-center px-6 pointer-events-none">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-accent/30 bg-accent/5 text-accent mb-3 backdrop-blur-md">
            AI Systems Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Featured <span className="gradient-text">AI Systems</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">Scroll to explore →</p>
        </div>

        {/* Horizontal track */}
        <div className="absolute inset-0 flex items-center pt-28 md:pt-36 pb-16">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-full will-change-transform"
          >
            {/* Left padding spacer */}
            <div className="shrink-0 w-[6vw]" />
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
            {/* Right padding spacer */}
            <div className="shrink-0 w-[6vw]" />
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full bg-muted/40 overflow-hidden z-20">
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;