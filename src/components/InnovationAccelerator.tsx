import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, Lightbulb, Cpu, Users, ArrowRight } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: Lightbulb, text: "Develop cutting-edge POCs for emerging technologies" },
  { icon: Cpu, text: "Build next-gen reference architectures" },
  { icon: Rocket, text: "Run deep-tech research tracks aligned to your priorities" },
  { icon: Users, text: "Accelerate internal transformation with co-innovation teams" },
];

const InnovationAccelerator = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left content slide in
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Right card with scale reveal
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, scale: 0.9, rotateY: -10 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Benefit items stagger
      if (rightRef.current) {
        const benefitItems = rightRef.current.querySelectorAll(".benefit-item");
        
        gsap.fromTo(
          benefitItems,
          { opacity: 0, x: 40, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover effects for benefit items
        benefitItems.forEach((item) => {
          const icon = item.querySelector(".benefit-icon");
          
          item.addEventListener("mouseenter", () => {
            gsap.to(item, { 
              x: 8, 
              backgroundColor: "hsl(var(--primary) / 0.1)",
              duration: 0.3, 
              ease: "power2.out" 
            });
            gsap.to(icon, { 
              scale: 1.2, 
              rotation: 360,
              duration: 0.5, 
              ease: "back.out(1.7)" 
            });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(item, { 
              x: 0,
              backgroundColor: "hsl(var(--secondary))",
              duration: 0.3, 
              ease: "power2.out" 
            });
            gsap.to(icon, { 
              scale: 1, 
              rotation: 0,
              duration: 0.3, 
              ease: "power2.out" 
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={leftRef}>
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

            <MagneticButton>
              <a href="#contact" className="btn-primary group inline-flex">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
          </div>

          {/* Right - Benefits */}
          <div
            ref={rightRef}
            className="card-premium p-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-2">The INAXL Advantage</h4>
            <p className="text-accent font-medium mb-6">
              Faster POCs. Next-gen architectures. Enterprise-grade innovation.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item flex items-start gap-4 p-4 rounded-xl bg-secondary cursor-pointer transition-colors"
                >
                  <div className="benefit-icon w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationAccelerator;
