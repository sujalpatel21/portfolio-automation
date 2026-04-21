import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ReactNode } from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSesKB4f_yFHT1Qh8HCxDSkgEOp9ieTrbArKYIWo51ICw4U4kQ/viewform?embedded=true";

const ContactFormDialog = ({ children }: { children: ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="max-w-3xl w-[95vw] p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-primary/20">
      <DialogTitle className="sr-only">Contact Form</DialogTitle>
      <DialogDescription className="sr-only">
        Fill out the form to get in touch with Sujal Patel.
      </DialogDescription>
      <div className="w-full h-[80vh]">
        <iframe
          src={FORM_URL}
          className="w-full h-full border-0"
          title="Contact form"
        >
          Loading…
        </iframe>
      </div>
    </DialogContent>
  </Dialog>
);

export default ContactFormDialog;