import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { Sparkles, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Google Form field entry IDs (prefilled submission endpoint)
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSesKB4f_yFHT1Qh8HCxDSkgEOp9ieTrbArKYIWo51ICw4U4kQ/formResponse";

const ContactFormDialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("entry.1864024854", form.name);
      formData.append("entry.1707729289", form.email);
      formData.append("entry.1250199395", form.phone);
      formData.append("entry.726786283", form.message);

      await fetch(FORM_ACTION, { method: "POST", mode: "no-cors", body: formData });

      setSubmitted(true);
      toast({ title: "Message sent!", description: "I'll get back to you shortly." });
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", message: "" });
      }, 1800);
    } catch {
      toast({ title: "Something went wrong", description: "Please email me directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg w-[95vw] p-0 overflow-hidden bg-background/95 backdrop-blur-2xl border border-primary/30 shadow-[0_0_80px_-10px_hsl(var(--primary)/0.4)]">
        <DialogTitle className="sr-only">Contact Form</DialogTitle>
        <DialogDescription className="sr-only">Get in touch with Sujal Patel.</DialogDescription>

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-[120px]" />
        </div>

        {/* Header */}
        <div className="relative z-10 px-7 pt-7 pb-5 border-b border-border/30">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Let's Connect
            </span>
          </div>
          <h3 className="text-2xl font-heading font-bold leading-tight">
            Tell me about your <span className="gradient-text">project</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1.5">
            Drop a message — I usually reply within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="relative z-10 p-7">
          {submitted ? (
            <div className="py-10 flex flex-col items-center text-center gap-3 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg">Message received</h4>
              <p className="text-sm text-muted-foreground">Thanks — I'll reach out soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground tracking-wide">Name</label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-muted/30 border-border/50 focus-visible:ring-primary/40 focus-visible:border-primary/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground tracking-wide">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@domain.com"
                    className="bg-muted/30 border-border/50 focus-visible:ring-primary/40 focus-visible:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground tracking-wide">Phone</label>
                <Input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 555 000 0000"
                  className="bg-muted/30 border-border/50 focus-visible:ring-primary/40 focus-visible:border-primary/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground tracking-wide">Message</label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me what you want to build…"
                  className="bg-muted/30 border-border/50 focus-visible:ring-primary/40 focus-visible:border-primary/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium font-heading tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;