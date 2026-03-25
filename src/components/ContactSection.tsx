import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setStatus("idle");

    emailjs
      .sendForm("service_4chdkfw", "template_9nw9f9f", formRef.current, "JgGVSlfTu9U5uI3Qp")
      .then(() => {
        setStatus("success");
        setFormData({ from_name: "", from_email: "", message: "" });
        formRef.current?.reset(); // in case EmailJS reads raw DOM values
      })
      .catch(() => setStatus("error"))
      .finally(() => setSending(false));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 relative">
      <div className="section-container w-full">
        <AnimatedSection>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-center">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-14 text-base">
            Ready to bring your next project to life? Let&apos;s discuss how we can create something extraordinary together.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 w-full items-stretch">
          {/* Left — form */}
          <AnimatedSection delay={0.1} className="flex flex-col h-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 sm:p-10 flex flex-col gap-4 h-full justify-center"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleInputChange}
                required
                className="bg-black/20 border border-border rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {/* Compatibility: some EmailJS templates may use `name` instead of `from_name` */}
              <input type="hidden" name="name" value={formData.from_name} />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleInputChange}
                required
                className="bg-black/20 border border-border rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {/* Compatibility: some EmailJS templates may use `email` instead of `from_email` */}
              <input type="hidden" name="email" value={formData.from_email} />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="bg-black/20 border border-border rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-muted/40 border border-border/60 text-foreground font-medium text-base disabled:opacity-60 hover:bg-muted/55 transition-colors"
              >
                <Send size={18} />
                {sending ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-primary mt-1">
                  <CheckCircle size={16} /> Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-destructive mt-1">
                  <AlertCircle size={16} /> Failed to send. Please try again.
                </p>
              )}
            </form>
          </AnimatedSection>

          {/* Right — info card */}
          <AnimatedSection delay={0.2} className="flex flex-col h-full">
            <div className="glass-card rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-center gap-5">
              <h3 className="text-2xl font-semibold text-foreground mb-1">Get in Touch</h3>

              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a data analyst who turns messy data into clear insights that help teams make confident decisions.
                I work with stakeholders to translate goals into measurable analysis and actionable recommendations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need dashboards, exploratory analysis, or ML-ready datasets, I&apos;m here to support your workflow and deliver results you can trust.
              </p>

              <div className="mt-2 space-y-3">
                <a
                  href="mailto:hemaharsan3@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <Mail size={18} className="text-primary" />
                  <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    hemaharsan3@gmail.com
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-base text-muted-foreground">
                    Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/HEMAHARSAN-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center hover:bg-muted/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-primary" />
                </a>
                <a
                  href="https://linkedin.com/in/hema-harsan-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center hover:bg-muted/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-primary" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
