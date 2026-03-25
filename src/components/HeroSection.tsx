import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import resumePdf from "@/assets/Hema_Harsan.pdf";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="section-container relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-8"
          >
            Data Analyst & Problem Solver
          </motion.span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]">
            <span className="text-foreground">Hema Harsan</span>{" "}
            <span className="text-gradient">R</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Data Analyst | Python | SQL | Tableau | Machine Learning
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-12">
            Turning raw data into actionable insights — solving real-world problems one dataset at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-lg hover:shadow-xl transition-shadow"
            >
              View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumePdf}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 rounded-xl glass-card text-foreground font-medium text-base hover:bg-muted/50 transition-colors text-center"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Down arrow at bottom, clicks to about */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={24} className="text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
