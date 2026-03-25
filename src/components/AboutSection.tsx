import AnimatedSection from "./AnimatedSection";
import hemaPhoto from "@/assets/hema-photo.png";
import { BarChart3, Lightbulb, Sparkles } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="min-h-screen flex items-center py-24 relative">
    <div className="section-container w-full">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-base sm:text-lg">
            I turn raw data into clear stories and practical next steps. I love building analyses and AI-powered ideas that actually help people make better decisions.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-5 gap-10 items-center">
        {/* Photo — takes 2 cols */}
        <AnimatedSection delay={0.1} className="md:col-span-2 flex justify-center">
          <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden glass-card p-2">
            <img
              src={hemaPhoto}
              alt="Hema Harsan R"
              className="w-full h-full object-cover object-top rounded-xl"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/20" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-3xl bg-primary/10 blur-2xl" />
          </div>
        </AnimatedSection>

        {/* Text — takes 3 cols */}
        <AnimatedSection delay={0.2} className="md:col-span-3">
          <div className="glass-card rounded-2xl p-6 sm:p-8 mb-6">
            <p className="text-secondary-foreground leading-relaxed mb-4 text-base sm:text-lg">
              I'm <span className="text-primary font-semibold">Hema Harsan R</span>, a data analyst who loves diving deep into datasets to uncover patterns, build predictive models, and create clear visualizations.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              From forecasting and reporting to experiments and prototypes, I focus on turning ambiguity into measurable insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Sparkles size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">Insights</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clear takeaways you can act on.
              </p>
            </div>

            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <BarChart3 size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">Analytics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Modeling, reporting, and evaluation.
              </p>
            </div>

            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Lightbulb size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">AI Ideas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Experiments that become prototypes.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
