import AnimatedSection from "./AnimatedSection";
import { BarChart3, Code, Eye, Wrench } from "lucide-react";

const categories = [
  { title: "Programming", icon: Code, skills: ["Python", "SQL", "Java"] },
  { title: "Data Analysis", icon: BarChart3, skills: ["Pandas", "NumPy", "EDA"] },
  { title: "Visualization", icon: Eye, skills: ["Tableau", "Power BI"] },
  { title: "Tools", icon: Wrench, skills: ["Excel", "Git", "GitHub"] },
];

const quickSkills = Array.from(new Set(categories.flatMap((c) => c.skills)));

const SkillsSection = () => (
  <section id="skills" className="min-h-screen flex items-center py-24 relative">
    <div className="absolute inset-0 bg-dots opacity-20" />
    <div className="section-container relative z-10 w-full">
      <AnimatedSection>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-base sm:text-lg">
          Technologies I use to build, analyze, and ship real projects.
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <AnimatedSection delay={0.1} className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
                <div
                key={cat.title}
                className="glass-card rounded-2xl p-6 sm:p-7 transition-transform hover:-translate-y-1 ring-1 ring-inset ring-border/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <cat.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{cat.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cat.skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted/35 text-muted-foreground ring-1 ring-inset ring-border/15 hover:bg-muted/60 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-7 mt-6 ring-1 ring-inset ring-border/10">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="text-xl font-semibold text-foreground">All Skills</h3>
              <span className="text-xs text-muted-foreground">{quickSkills.length} total</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted/25 text-muted-foreground ring-1 ring-inset ring-border/15"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="lg:col-span-4">
          <div className="glass-card rounded-2xl p-6 sm:p-7 ring-1 ring-inset ring-border/10">
            <h3 className="text-xl font-semibold text-foreground">Skill Focus</h3>
            <p className="text-muted-foreground mt-2 mb-5 leading-relaxed">
              I combine strong programming with analysis and visualization to turn data into
              practical decisions.
            </p>

            <div className="space-y-3">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-xl bg-muted/25 p-4 ring-1 ring-inset ring-border/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <cat.icon size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-foreground">{cat.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{cat.skills.length}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {cat.skills.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SkillsSection;
