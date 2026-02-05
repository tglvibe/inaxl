import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Brain, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statCounterRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
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

      // Right pillars stagger animation
      if (rightRef.current) {
        const cards = rightRef.current.querySelectorAll(".pillar-card");
        gsap.fromTo(
          cards,
          { opacity: 0, x: 60, rotateY: -10 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover effect for cards
        cards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });
      }

      // Stats counter animation
      const statValues = [10, 100, 50];
      const statSuffixes = ["+", "+", "+"];
      
      statCounterRefs.current.forEach((el, index) => {
        if (!el) return;
        
        const obj = { value: 0 };
        gsap.to(obj, {
          value: statValues[index],
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            el.innerText = Math.round(obj.value) + statSuffixes[index];
          },
        });
      });

      // Stats cards stagger
      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll(".stat-card");
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left Content */}
          <div ref={leftRef}>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <h2 className="text-foreground mb-4">
              INAXL
            </h2>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-6">
              Conceptualize. Build. Scale.
            </p>
            <div className="section-divider mb-8" />
            <p className="text-lg text-muted-foreground mb-6">
              INAXL is a US-based technology company specializing in product engineering and AI-powered transformative technologies.
            </p>
            <p className="text-muted-foreground mb-8">
              We partner with visionary entrepreneurs, enterprises, and fast-emerging startups to conceptualize, build, and scale their products and solutions. Our approach combines deep technical expertise with strategic thinking to deliver measurable business outcomes.
            </p>

            {/* Key Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4">
              <div className="stat-card text-center p-4 rounded-xl bg-card shadow-card border border-border">
                <p 
                  ref={(el) => (statCounterRefs.current[0] = el)}
                  className="text-3xl font-bold text-primary"
                >
                  0+
                </p>
                <p className="text-sm text-muted-foreground">Industries</p>
              </div>
              <div className="stat-card text-center p-4 rounded-xl bg-card shadow-card border border-border">
                <p 
                  ref={(el) => (statCounterRefs.current[1] = el)}
                  className="text-3xl font-bold text-accent"
                >
                  0+
                </p>
                <p className="text-sm text-muted-foreground">Engineers</p>
              </div>
              <div className="stat-card text-center p-4 rounded-xl bg-card shadow-card border border-border">
                <p 
                  ref={(el) => (statCounterRefs.current[2] = el)}
                  className="text-3xl font-bold text-primary"
                >
                  0+
                </p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>

          {/* Right - Pillars */}
          <div ref={rightRef} className="space-y-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="pillar-card card-premium p-6 flex gap-5 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
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
