import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, DollarSign, Users, RefreshCw, Shield, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    icon: TrendingUp,
    value: "30–45%",
    numValue: 45,
    label: "Gain in Operational Efficiency",
    description: "Driven by workflow automation, platform integration, and ecosystem orchestration.",
  },
  {
    icon: DollarSign,
    value: "35–50%",
    numValue: 50,
    label: "Reduction in Engineering Costs",
    description: "Enabled by high-velocity squads, reusable accelerators, and modular architecture patterns.",
  },
  {
    icon: Users,
    value: "2–4×",
    numValue: 4,
    label: "Increase in Product Adoption",
    description: "Outcome of customer-backward design, frictionless UX, and continuous intelligence loops.",
  },
  {
    icon: RefreshCw,
    value: "50%",
    numValue: 50,
    label: "Reduction in Rework",
    description: "Achieved via Clarity Engineering™, pre-validated requirements, and early architecture alignment.",
  },
  {
    icon: Shield,
    value: "50–60%",
    numValue: 60,
    label: "Reduction in Architecture Risk",
    description: "Result of using pre-tested patterns and stress-tested deployment models.",
  },
  {
    icon: Sparkles,
    value: "$2.8B+",
    numValue: 2.8,
    label: "IP Valuation Impact",
    description: "Created through platform modernization, new digital products, and ecosystem integrations.",
  },
];

const Differentiators = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards with staggered 3D animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".diff-card");
        
        cards.forEach((card, index) => {
          // Entry animation
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 80,
              scale: 0.85,
              rotateX: -15,
              transformPerspective: 1000 
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 0.7,
              delay: index * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Value counter animation
          const valueEl = card.querySelector(".diff-value");
          const item = differentiators[index];
          
          if (valueEl && item) {
            const obj = { value: 0 };
            gsap.to(obj, {
              value: item.numValue,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              onUpdate: () => {
                if (item.value.includes("$")) {
                  valueEl.textContent = `$${obj.value.toFixed(1)}B+`;
                } else if (item.value.includes("×")) {
                  valueEl.textContent = `${Math.round(obj.value)}×`;
                } else if (item.value.includes("–")) {
                  valueEl.textContent = item.value;
                } else {
                  valueEl.textContent = `${Math.round(obj.value)}%`;
                }
              },
            });
          }

          // Hover effects
          const icon = card.querySelector(".icon-wrapper");
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { 
              y: -10, 
              scale: 1.03,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
              duration: 0.3, 
              ease: "power2.out" 
            });
            gsap.to(icon, { 
              scale: 1.2, 
              rotation: 10,
              duration: 0.4, 
              ease: "back.out(2)" 
            });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { 
              y: 0, 
              scale: 1,
              boxShadow: "var(--shadow-card)",
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
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Key Differentiators
          </span>
          <h2 className="text-foreground mb-6">
            Measurable Outcomes That{" "}
            <span className="text-primary">Drive Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real business value through proven methodologies and enterprise-grade execution.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.label}
              className="diff-card card-premium p-6 group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="icon-wrapper w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="diff-value text-3xl font-bold text-foreground">0</p>
              </div>
              <h5 className="text-lg font-semibold text-foreground mb-2">{item.label}</h5>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
