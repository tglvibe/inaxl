import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, Lightbulb, Cpu, Users, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Lightbulb, text: "Develop cutting-edge POCs for emerging technologies" },
  { icon: Cpu, text: "Build next-gen reference architectures" },
  { icon: Rocket, text: "Run deep-tech research tracks aligned to your priorities" },
  { icon: Users, text: "Accelerate internal transformation with co-innovation teams" },
];

const InnovationAccelerator = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div data-animate="fade-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Innovation Program</span>
            </span>
            <h2 className="text-foreground mb-4">
              INAXL Innovation{" "}
              <span className="text-primary">Accelerator</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your strategic partner for research, prototyping, and future-ready engineering.
            </p>
            <div className="section-divider mb-8" />
            <p className="text-muted-foreground mb-8">
              We help enterprises explore what's next. Designed for CIOs, CTOs, Digital, and Innovation Leaders who need to stay ahead of the curve.
            </p>

            <a href="#contact" className="btn-primary group inline-flex">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right - Benefits */}
          <div data-animate="fade-right">
            <div className="card-premium p-8">
              <h4 className="text-xl font-semibold text-foreground mb-2">The INAXL Advantage</h4>
              <p className="text-accent font-medium mb-6">
                Faster POCs. Next-gen architectures. Enterprise-grade innovation.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationAccelerator;
