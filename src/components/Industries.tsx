import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  HeartPulse, 
  Landmark, 
  Factory, 
  GraduationCap, 
  Server, 
  ShoppingCart,
  Truck,
  Leaf,
  Radio,
  Film
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description: "AI diagnostics, healthcare analytics, HIPAA-compliant platforms",
  },
  {
    icon: Landmark,
    title: "Financial Services & Fintech",
    description: "Risk modeling, fraud analytics, digital banking platforms",
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    description: "Smart factory systems, IoT, predictive maintenance",
  },
  {
    icon: GraduationCap,
    title: "EdTech & Knowledge Platforms",
    description: "Adaptive learning, personalized delivery",
  },
  {
    icon: Server,
    title: "Enterprise SaaS & Platforms",
    description: "Multitenant engineering, LLM copilots",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description: "Digital commerce platforms, personalization, logistics intelligence",
  },
  {
    icon: Truck,
    title: "Logistics, Mobility & Transportation",
    description: "Fleet management, route optimization, digital twins",
  },
  {
    icon: Leaf,
    title: "Energy & Sustainability",
    description: "Smart grid platforms, carbon accounting, IoT + AI",
  },
  {
    icon: Radio,
    title: "Telecom & Connectivity",
    description: "Network analytics, 5G/edge platforms, OSS/BSS modernization",
  },
  {
    icon: Film,
    title: "Media, Content & Entertainment",
    description: "Personalization engines, AI-based editing, scalable delivery",
  },
];

const Industries = () => {
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

      // Cards with wave-like stagger animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".industry-card");
        
        cards.forEach((card, index) => {
          // Calculate row and column for wave effect
          const cols = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 2 : 1;
          const row = Math.floor(index / cols);
          const col = index % cols;
          const delay = (row * 0.1) + (col * 0.05);

          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 50,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Hover effects
          const icon = card.querySelector(".industry-icon");
          
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { 
              y: -8, 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
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
    <section id="industries" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="text-foreground mb-6">
            Transforming Industries with{" "}
            <span className="text-primary">AI & Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep domain expertise across diverse sectors, delivering tailored solutions for industry-specific challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="industry-card card-premium p-5 group text-center cursor-pointer"
            >
              <div className="industry-icon w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">
                {industry.title}
              </h5>
              <p className="text-xs text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
