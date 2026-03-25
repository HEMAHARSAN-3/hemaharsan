import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="min-h-screen flex items-center py-24 relative">
    <div className="absolute inset-0 bg-dots opacity-20" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-center">
          Internships <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-lg sm:text-xl">
          Practical experience working on real-world Django applications and building features from idea to delivery.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="w-full max-w-5xl mx-auto glass-card rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 ring-1 ring-inset ring-border/10">
              <Briefcase size={22} className="text-primary" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">
                    Internships
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight mt-1">
                    Full Stack Development – Python Django Intern
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium ring-1 ring-inset ring-primary/20">
                  Pinesphere Solutions
                </span>
                <span className="px-3 py-1 rounded-full bg-muted/35 text-muted-foreground text-sm font-medium ring-1 ring-inset ring-border/15">
                  Coimbatore, Tamil Nadu, India
                </span>
                <span className="px-3 py-1 rounded-full bg-muted/35 text-muted-foreground text-sm font-medium ring-1 ring-inset ring-border/15">
                  July 23, 2024 – August 7, 2024
                </span>
              </div>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Worked on real-world web applications using Django. Built Connect, a social
                platform for college students to share posts and interact. Gained hands-on
                experience with PostgreSQL and enhanced Python/backend skills through practical
                problem-solving and development using the Code for Life platform.
              </p>

              <div className="mt-4">
                <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  Highlights
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <li>Built backend features for Connect and updated data models based on feedback.</li>
                  <li>Hands-on PostgreSQL experience: writing queries and supporting database migrations.</li>
                  <li>Enhanced Python and backend development through real problem-solving tasks.</li>
                  <li>Applied learning on Code for Life to complete development-oriented assignments.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;
