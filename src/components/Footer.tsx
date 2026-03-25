import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="section-container text-center">
      <p className="text-sm text-muted-foreground">© 2026 Hema Harsan. All rights reserved.</p>
    </div>

    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors backdrop-blur-sm"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} className="text-primary" />
    </motion.button>
  </footer>
);

export default Footer;
