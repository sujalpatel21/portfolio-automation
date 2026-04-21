import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles, MessageCircle, PhoneCall, BookOpen, BarChart3 } from "lucide-react";

import imgMindpal from "@/assets/proj-mindpal.jpg";
import imgWhatsapp from "@/assets/proj-whatsapp-new.jpg";
import imgVoice from "@/assets/proj-voice.jpg";
import imgRag from "@/assets/proj-rag-new.jpg";
import imgMetaDash from "@/assets/proj-meta-dash.jpg";

const projects = [
  {
    tag: "Prototype / Internal System",
    title: "AI-Powered 3D Ad Creative System",
    subtitle: "AI Ad Creative Engine — MindPal",
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
    gradient: "from-primary to-secondary",
    accent: "primary",
    icon: Sparkles,
    image: imgMindpal,
  },
  {
    tag: "Production System",
    title: "Automated WhatsApp Lead Handling",
    subtitle: "WhatsApp Automation System",
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
    gradient: "from-secondary to-accent",
    accent: "secondary",
    icon: MessageCircle,
    image: imgWhatsapp,
  },
  {
    tag: "AI Voice Agent",
    title: "AI Sales & Support Voice Agent",
    subtitle: "AI Voice Calling Agent",
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
    gradient: "from-accent to-primary",
    accent: "accent",
    icon: PhoneCall,
    image: imgVoice,
  },
  {
    tag: "RAG Chatbot",
    title: "Context-Aware Website Chatbot",
    subtitle: "AI Chatbot — RAG-Based",
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
    gradient: "from-primary to-accent",
    accent: "primary",
    icon: BookOpen,
    image: imgRag,
  },
  {
    tag: "Analytics Dashboard",
    title: "Real-Time Ads Performance Dashboard",
    subtitle: "Meta Ads Dashboard",
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
    gradient: "from-secondary to-primary",
    accent: "secondary",
    icon: BarChart3,
    image: imgMetaDash,
  },
];

type Project = (typeof projects)[number];

const ProjectChapter = ({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  // Each chapter occupies a slice of the scroll progress.
  // Offsets MUST be monotonically increasing AND within [0, 1].
  const slice = 1 / total;
  const rawStart = index * slice;
  const rawEnd = rawStart + slice;
  const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
  const enter = clamp01(rawStart - slice * 0.5);
  const start = clamp01(rawStart);
  const end = clamp01(rawEnd);
  const exit = clamp01(rawEnd + slice * 0.5);

  // Build a strictly non-decreasing stops array, deduping equal neighbors
  const buildStops = (a: number, b: number, c: number, d: number) => {
    const stops = [a, b, c, d];
    for (let i = 1; i < stops.length; i++) {
      if (stops[i] <= stops[i - 1]) stops[i] = Math.min(1, stops[i - 1] + 0.0001);
    }
    return stops as [number, number, number, number];
  };
  const stops = buildStops(enter, start, end, exit);

  const opacity = useTransform(progress, stops, [0, 1, 1, 0.3]);
  const y = useTransform(progress, stops, [80, 0, 0, -40]);
  const scale = useTransform(progress, stops, [0.95, 1, 1, 0.9]);
  const blurStops = stops[2] < stops[3] ? [stops[2], stops[3]] : [stops[2], Math.min(1, stops[2] + 0.0001)];
  const blur = useTransform(progress, blurStops, [0, 6]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const Icon = project.icon;

  return (
    <motion.div
      style={{ opacity, y, scale, filter }}
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-6"
    >
      <div className="w-full max-w-6xl glass-card gradient-border overflow-hidden grid md:grid-cols-2 shadow-2xl">
        {/* Image side */}
        <div className="relative h-64 md:h-[520px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width={1280}
            height={800}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/40 to-transparent" />
          <div className={`absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${project.gradient}`} />
          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
              <Icon className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-background/60 backdrop-blur-md border border-border/40 text-foreground/80">
              {project.tag}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="relative p-6 md:p-10 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground">
              Chapter {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="text-xs uppercase tracking-widest text-accent mb-2">{project.subtitle}</div>
          <h3 className="text-2xl md:text-4xl font-bold font-heading mb-4 leading-tight">
            <span className="gradient-text">{project.title}</span>
          </h3>

          <div className="mb-4">
            <div className="text-[10px] font-medium uppercase tracking-widest text-foreground/60 mb-1">Problem</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed mb-5">{project.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-foreground/60 mb-2">System Built</div>
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
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* Pinned viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Aurora glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]),
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px]"
          />
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]),
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[180px]"
          />
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.7, 0.4]),
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[160px]"
          />
        </div>

        {/* Header */}
        <div className="absolute top-8 md:top-12 left-0 right-0 z-20 text-center px-6 pointer-events-none">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-accent/30 bg-accent/5 text-accent mb-3 backdrop-blur-md">
            AI Systems Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Featured <span className="gradient-text">AI Systems</span>
          </h2>
        </div>

        {/* Chapters stacked, animated by scroll */}
        <div className="relative w-full h-full pt-24 md:pt-32 pb-12">
          <div className="relative w-full h-full">
            {projects.map((p, i) => (
              <ProjectChapter
                key={p.title}
                project={p}
                index={i}
                total={projects.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-3">
          {projects.map((p, i) => (
            <ProgressDot
              key={p.title}
              project={p}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;