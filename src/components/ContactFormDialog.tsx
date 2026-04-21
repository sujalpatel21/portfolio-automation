import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSesKB4f_yFHT1Qh8HCxDSkgEOp9ieTrbArKYIWo51ICw4U4kQ/viewform?embedded=true";

const ContactFormDialog = ({ children }: { children: ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="max-w-2xl w-[95vw] p-0 overflow-hidden bg-background/95 backdrop-blur-2xl border border-primary/30 shadow-[0_0_80px_-10px_hsl(220,100%,65%,0.4)]">
      <DialogTitle className="sr-only">Contact Form</DialogTitle>
      <DialogDescription className="sr-only">
        Fill out the form to get in touch with Sujal Patel.
      </DialogDescription>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 pt-6 pb-4 border-b border-border/30">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium tracking-wider uppercase text-primary">
            Let's Connect
          </span>
        </div>
        <h3 className="text-xl font-heading font-bold">
          Tell me about your <span className="gradient-text">project</span>
        </h3>
      </div>

      {/* Themed iframe wrapper */}
      <div className="relative z-10 p-4">
        <div className="rounded-xl overflow-hidden border border-border/40 bg-muted/10">
          <iframe
            src={FORM_URL}
            className="w-full h-[65vh] border-0 bg-transparent"
            title="Contact form"
            style={{ colorScheme: "light" }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default ContactFormDialog;