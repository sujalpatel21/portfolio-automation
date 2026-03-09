import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-32 relative">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          Let's Build Something{" "}
          <span className="gradient-text">Intelligent</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Ready to automate your workflows with AI? Let's talk.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: "Email", href: "mailto:hello@sujalpatel.com" },
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="glass-card px-6 py-3 text-sm font-heading hover:border-primary/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@sujalpatel.com"
          className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium font-heading tracking-wide hover:opacity-90 transition-opacity glow-primary"
        >
          Start a Conversation
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
