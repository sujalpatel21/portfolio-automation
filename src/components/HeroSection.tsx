import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Bot, Workflow, Mic, MessageSquare, Database, Zap, Brain, Globe } from "lucide-react";

const orbitModules = [
  { icon: Bot, label: "AI Agents", angle: 0 },
  { icon: Workflow, label: "Automation", angle: 45 },
  { icon: Mic, label: "Voice AI", angle: 90 },
  { icon: MessageSquare, label: "RAG Systems", angle: 135 },
  { icon: Database, label: "Data", angle: 180 },
  { icon: Zap, label: "APIs", angle: 225 },
  { icon: Brain, label: "LLM Models", angle: 270 },
  { icon: Globe, label: "Real-time AI", angle: 315 },
];

/* ── Canvas: flowing particles + energy streams ── */
const AIFieldCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;
    const cx = () => W() / 2;
    const cy = () => H() / 2;

    // Particles
    const particles: {
      x: number; y: number; r: number; speed: number;
      angle: number; dist: number; opacity: number; hue: number;
    }[] = [];

    for (let i = 0; i < 120; i++) {
      const dist = 40 + Math.random() * 220;
      const angle = Math.random() * Math.PI * 2;
      particles.push({
        x: 0, y: 0, r: Math.random() * 2 + 0.5,
        speed: (0.15 + Math.random() * 0.35) * (Math.random() > 0.5 ? 1 : -1),
        angle, dist,
        opacity: 0.3 + Math.random() * 0.7,
        hue: [220, 255, 186][Math.floor(Math.random() * 3)],
      });
    }

    // Energy streams (curved flowing lines)
    const streams: { points: { angle: number; dist: number }[]; hue: number; speed: number }[] = [];
    for (let i = 0; i < 6; i++) {
      const pts = [];
      const startAngle = Math.random() * Math.PI * 2;
      for (let j = 0; j < 8; j++) {
        pts.push({ angle: startAngle + j * 0.3, dist: 60 + j * 25 + Math.random() * 20 });
      }
      streams.push({ points: pts, hue: [220, 255, 186][i % 3], speed: 0.003 + Math.random() * 0.004 });
    }

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, W(), H());
      const centerX = cx();
      const centerY = cy();

      // Draw energy streams
      streams.forEach((s) => {
        ctx.beginPath();
        s.points.forEach((p, idx) => {
          p.angle += s.speed;
          const x = centerX + Math.cos(p.angle) * p.dist;
          const y = centerY + Math.sin(p.angle) * p.dist * 0.75;
          if (idx === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = `hsla(${s.hue}, 100%, 65%, 0.08)`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Draw particles
      particles.forEach((p) => {
        p.angle += p.speed * 0.01;
        p.x = centerX + Math.cos(p.angle) * p.dist;
        p.y = centerY + Math.sin(p.angle) * p.dist * 0.75;

        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + p.angle);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity * pulse * 0.6})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${p.opacity * pulse * 0.08})`;
        ctx.fill();
      });

      // Central glow pulse
      const pulseSize = 80 + Math.sin(t) * 15;
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize);
      grad.addColorStop(0, `hsla(220, 100%, 65%, 0.12)`);
      grad.addColorStop(0.5, `hsla(255, 60%, 68%, 0.05)`);
      grad.addColorStop(1, `hsla(186, 100%, 50%, 0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(centerX - pulseSize, centerY - pulseSize, pulseSize * 2, pulseSize * 2);

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      setTime((prev) => prev + 0.008);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />

      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[160px] floating" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[160px] floating-slow" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/4 rounded-full blur-[120px] floating" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
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
              <span className="gradient-text">AI Systems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              AI Agents · Automation Workflows · Voice AI · RAG Systems · Real-Time Intelligence
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
                Explore Projects
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#ecosystem"
                className="px-8 py-4 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm text-foreground font-medium font-heading text-sm tracking-wide hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                View AI Systems
              </a>
            </motion.div>

            {/* Stats */}
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

          {/* Right — Animated AI Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[560px] mx-auto">
              {/* Canvas particle field */}
              <AIFieldCanvas />

              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-[8%] rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[18%] rounded-full border border-secondary/8"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[30%] rounded-full border border-accent/6"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Central AI Core */}
              <div className="absolute inset-[36%] flex items-center justify-center">
                <motion.div
                  className="w-full h-full rounded-full bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/15 border border-primary/40 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 60px -15px hsla(220,100%,65%,0.4)",
                      "0 0 100px -15px hsla(255,60%,68%,0.4)",
                      "0 0 60px -15px hsla(186,100%,50%,0.3)",
                      "0 0 60px -15px hsla(220,100%,65%,0.4)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Brain className="w-10 h-10 text-primary mx-auto mb-1.5" />
                    </motion.div>
                    <span className="text-[11px] font-heading font-bold text-primary">AI Core</span>
                  </div>
                </motion.div>
              </div>

              {/* Orbiting modules */}
              {orbitModules.map((mod, i) => {
                const Icon = mod.icon;
                const orbitRadius = 42; // % from center
                const angleRad = (mod.angle * Math.PI) / 180 + time * (i % 2 === 0 ? 0.3 : -0.3);
                const x = 50 + Math.cos(angleRad) * orbitRadius;
                const y = 50 + Math.sin(angleRad) * orbitRadius * 0.8;

                return (
                  <motion.div
                    key={mod.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1, type: "spring" }}
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-card/70 border border-border/50 backdrop-blur-md flex flex-col items-center justify-center gap-1 hover:border-accent/60 hover:bg-card/90 hover:shadow-[0_0_30px_-5px_hsl(186,100%,50%,0.25)] transition-all duration-500 cursor-default">
                        <Icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors duration-300" />
                        <span className="text-[7px] font-heading font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                          {mod.label}
                        </span>
                      </div>
                      {/* Ambient pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border border-primary/15 pointer-events-none"
                        animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {/* Floating data particles (decorative) */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-accent/60"
                  style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Lightweight particle bg (reused) */
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.3, opacity: Math.random() * 0.3 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 140, 255, ${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

export default HeroSection;
