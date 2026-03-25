import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, BarChart3, Users, TrendingUp, Github } from "lucide-react";
import HLogo from "@/assets/H_logo.png";

const HProjectIcon = ({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <img
    src={HLogo}
    alt="H logo"
    width={size}
    height={size}
    className={`object-contain ${className}`}
  />
);

const projects = [
  {
    title: "Sales Analytics & Forecasting Dashboard",
    desc: "Built a comprehensive sales analytics dashboard with forecasting capabilities to identify trends and optimize revenue strategies.",
    tech: ["Python", "Pandas", "Tableau", "SQL"],
    url: "https://github.com/HEMAHARSAN-3/Sales-Analytics-Project",
    icon: BarChart3,
  },
  {
    title: "Customer Segmentation & Marketing Analytics",
    desc: "Developed customer segmentation models using clustering algorithms to drive targeted marketing campaigns and improve ROI.",
    tech: ["Python", "Scikit-learn", "EDA", "Power BI"],
    url: "https://github.com/HEMAHARSAN-3/Customer-Segmentation-Marketing-Analytics",
    icon: Users,
  },
  {
    title: "Healthcare Disease Prediction System",
    desc: "Created a machine learning system that predicts diseases based on patient symptoms and health data with high accuracy.",
    tech: ["Python", "ML", "NumPy", "Pandas"],
    url: "https://github.com/HEMAHARSAN-3/healthcare-disease-prediction",
    icon: HProjectIcon,
  },
  {
    title: "Business Performance & KPI Dashboard",
    desc: "Designed an interactive KPI dashboard to monitor business performance metrics and enable data-driven decision making.",
    tech: ["Excel", "Tableau", "SQL", "Python"],
    url: "https://github.com/HEMAHARSAN-3/Business-Analytics-Project",
    icon: TrendingUp,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="min-h-screen flex items-center py-24 relative">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-14 text-base">
          Real-world data problems I've solved.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <motion.a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="block glass-card rounded-2xl p-6 h-full group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <p.icon size={22} className="text-primary" />
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm font-medium rounded-full bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>

      {/* View All Projects Button */}
      <AnimatedSection delay={0.5}>
        <div className="flex justify-center mt-10">
          <motion.a
            href="https://github.com/HEMAHARSAN-3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-lg hover:shadow-xl transition-shadow"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ProjectsSection;
