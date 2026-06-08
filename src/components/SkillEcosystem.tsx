import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, Workflow, Mic, Database, Brain, Link2, BookOpen, Sparkles } from "lucide-react";

type Layer = {
  index: string;
  tier: string;
  title: string;
  caption: string;
  capabilities: {
    icon: typeof Bot;
    label: string;
    description: string;
    stack: string[];
  }[];
};

const layers: Layer[] = [
  {
    index: "04",
    tier: "Interface Layer",
    title: "Human ↔ Machine",
    caption: "Where conversation, voice, and action meet the user.",
    capabilities: [
      {
        icon: Mic,
        label: "Voice AI",
        description: "Real-time speech agents with sub-second latency and natural turn-taking.",
        stack: ["ElevenLabs", "Vapi", "Deepgram"],
      },
      {
        icon: Bot,
        label: "Conversational Agents",
        description: "Multi-turn assistants that hold context across long sessions and tools.",
        stack: ["OpenAI", "Claude", "LangChain"],
      },
    ],
  },
  {
    index: "03",
    tier: "Orchestration Layer",
    title: "The Conductor",
    caption: "Routing logic, agent hand-offs, and end-to-end workflow choreography.",
    capabilities: [
      {
        icon: Workflow,
        label: "Automation Pipelines",
        description: "Event-driven workflows triggered by webhooks, schedules, and intents.",
        stack: ["n8n", "Make", "Zapier"],
      },
      {
        icon: Sparkles,
        label: "Agent Orchestration",
        description: "Planner → executor → critic loops with tool selection and self-recovery.",
        stack: ["LangGraph", "CrewAI", "AutoGen"],
      },
    ],
  },
  {
    index: "02",
    tier: "Intelligence Layer",
    title: "Reasoning Core",
    caption: "The models, memory, and retrieval that make systems actually think.",
    capabilities: [
      {
        icon: Brain,
        label: "LLM Reasoning",
        description: "Frontier models for generation, function-calling, and structured output.",
        stack: ["GPT-4o", "Claude 3.5", "Gemini"],
      },
      {
        icon: BookOpen,
        label: "RAG & Memory",
        description: "Vector retrieval over private knowledge, with long-term agent memory.",
        stack: ["Pinecone", "Supabase", "Qdrant"],
      },
    ],
  },
  {
    index: "01",
    tier: "Foundation Layer",
    title: "Data & Integrations",
    caption: "Clean data, reliable connectors — the substrate every smart system rides on.",
    capabilities: [
      {
        icon: Database,
        label: "Data Intelligence",
        description: "Ingestion, normalization and real-time analytics on structured + unstructured data.",
        stack: ["Supabase", "Postgres", "BigQuery"],
      },
      {
        icon: Link2,
        label: "API Integrations",
        description: "Bi-directional sync with CRMs, comms, and SaaS through typed adapters.",
        stack: ["REST", "GraphQL", "Webhooks"],
      },
    ],
  },
];

const cardReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SkillEcosystem = () => {
  const [active, setActive] = useState<string>("04-Voice AI");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const spineGlowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <section id="ecosystem" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.07]" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-secondary/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-primary">
              Intelligence Architecture
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-5 leading-[1.05]">
            The stack behind <br />
            <span className="gradient-text">autonomous systems.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Four layers, eight disciplines — engineered to compose into agents that ship work, not demos.
          </p>
        </motion.div>

        {/* Layered architecture */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Vertical spine track */}
          <div className="absolute left-[60px] md:left-[88px] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-border/40 to-transparent hidden sm:block" />

          {/* Scroll-driven spine fill */}
          <motion.div
            className="absolute left-[60px] md:left-[88px] top-6 w-px hidden sm:block origin-top"
            style={{
              height: spineHeight,
              background: "linear-gradient(180deg, transparent, hsl(var(--primary)) 20%, hsl(var(--secondary)) 80%, transparent)",
              opacity: spineGlowOpacity,
              filter: "blur(1px)",
            }}
          />

          <div className="space-y-6">
            {layers.map((layer, li) => (
              <motion.div
                key={layer.index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: li * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[176px_1fr] gap-6 md:gap-10 items-start"
              >
                {/* Layer label + spine node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: li * 0.08 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="hidden sm:block absolute left-[28px] md:left-[56px] top-7 w-8 h-px bg-border" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: li * 0.08 + 0.25,
                    }}
                    className="hidden sm:flex absolute left-[60px] md:left-[88px] top-5 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary bg-background items-center justify-center z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ delay: li * 0.08 + 0.35 }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                  </motion.div>
                  <div className="text-[10px] font-mono tracking-widest text-muted-foreground mb-1">
                    LAYER / {layer.index}
                  </div>
                  <div className="text-sm font-medium text-foreground">{layer.tier}</div>
                </motion.div>

                {/* Layer card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: li * 0.08 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 md:p-8 overflow-hidden group hover:border-border transition-colors duration-500"
                >
                  {/* subtle corner gradient */}
                  <div className="absolute -top-px -right-px w-40 h-40 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />

                  <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading">{layer.title}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
                      {String(layer.capabilities.length).padStart(2, "0")} modules
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 max-w-xl">{layer.caption}</p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {layer.capabilities.map((cap, ci) => {
                      const key = `${layer.index}-${cap.label}`;
                      const isActive = active === key;
                      const Icon = cap.icon;
                      return (
                        <motion.button
                          key={key}
                          custom={ci}
                          variants={cardReveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-40px" }}
                          onMouseEnter={() => setActive(key)}
                          onFocus={() => setActive(key)}
                          className={`relative text-left p-5 rounded-xl border transition-all duration-300 ${
                            isActive
                              ? "border-primary/50 bg-primary/[0.06]"
                              : "border-border/40 bg-background/20 hover:border-border hover:bg-background/40"
                          }`}
                        >
                          {/* active indicator bar */}
                          <div
                            className={`absolute left-0 top-4 bottom-4 w-[2px] rounded-full transition-all duration-300 ${
                              isActive ? "bg-gradient-to-b from-primary to-secondary opacity-100" : "opacity-0"
                            }`}
                          />
                          <div className="flex items-start gap-3 mb-2">
                            <div
                              className={`shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center transition-colors duration-300 ${
                                isActive
                                  ? "border-primary/40 bg-primary/10 text-primary"
                                  : "border-border/60 bg-background/40 text-muted-foreground"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold font-heading text-foreground">
                                {cap.label}
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                {cap.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-3 pl-12">
                            {cap.stack.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-border/50 bg-background/40 text-muted-foreground"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Footer signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex items-center justify-between text-[11px] font-mono text-muted-foreground/70 px-2"
          >
            <span className="tracking-widest">└ END / STACK</span>
            <span className="tracking-widest hidden sm:block">v.2026 — composable by design</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillEcosystem;
