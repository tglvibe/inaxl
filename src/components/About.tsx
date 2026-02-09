import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Brain, Users, Zap, TrendingUp, Shield } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Digital Ecosystems",
    description: "End-to-end platform engineering and scalable digital infrastructure",
  },
  {
    icon: Brain,
    title: "Decision Intelligence",
    description: "AI-powered insights and autonomous systems for smarter operations",
  },
  {
    icon: Users,
    title: "Engineering Teams",
    description: "High-performance squads that integrate seamlessly with your organization",
  },
];

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section-padding !pt-6 md:!pt-8 lg:!pt-10 bg-section-alt" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left Content */}
          <div data-animate="fade-left">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <h2 className="text-foreground mb-4">INAXL</h2>
            <p className="text-lg font-medium text-primary mb-6">
              Measurable results. Tangible impact.
            </p>
            <div className="section-divider mb-8" />
            <p className="text-lg text-muted-foreground mb-4">
              INAXL is a US-based technology company specializing in product engineering and AI-powered transformative technologies.
            </p>
            <p className="text-muted-foreground mb-8">
              We partner with visionary entrepreneurs, enterprises, and fast-emerging startups to conceptualize, build, and scale their products and solutions.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-card shadow-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">50%</p>
                <p className="text-sm text-muted-foreground">Faster Delivery</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-card shadow-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <p className="text-2xl font-bold text-accent">$2.8B+</p>
                <p className="text-sm text-muted-foreground">IP Created</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-card shadow-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">40%</p>
                <p className="text-sm text-muted-foreground">Lower TCO</p>
              </div>
            </div>
          </div>

          {/* Right - Pillars */}
          <div className="space-y-6" data-animate="stagger">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card-premium p-6 flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h4>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
