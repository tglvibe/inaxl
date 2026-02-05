import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Code2, 
  BarChart3, 
  Cloud, 
  Compass,
  Rocket,
  Lightbulb,
  Package,
  Briefcase
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const verticals = [
  {
    title: "Technology Services",
    subtitle: "Delivering cutting-edge technology solutions and digital transformation for businesses",
    color: "primary",
    offerings: [
      {
        icon: Code2,
        title: "Product Engineering & Digital Ecosystems",
        description: "End-to-end product design, development, and scalable platforms",
      },
      {
        icon: BarChart3,
        title: "Data, Analytics & AI-Driven Transformation",
        description: "Turning data into actionable insights and intelligent automation",
      },
      {
        icon: Cloud,
        title: "Cloud & Infrastructure Management",
        description: "Cloud strategy, architecture, deployment, and ongoing management",
      },
      {
        icon: Compass,
        title: "Digital Strategy & Consulting",
        description: "Guiding enterprises to innovate, optimize, and achieve business impact",
      },
    ],
  },
  {
    title: "Product Development",
    subtitle: "Building innovative products, IP, and entrepreneurial opportunities",
    color: "accent",
    offerings: [
      {
        icon: Rocket,
        title: "Startup Technology Partnerships",
        description: "Collaborating with startups to co-create impactful solutions",
      },
      {
        icon: Lightbulb,
        title: "IP Development",
        description: "Creating proprietary technology, patents, and intellectual property",
      },
      {
        icon: Package,
        title: "Product Development",
        description: "Ideation, prototyping, and scaling products for market success",
      },
      {
        icon: Briefcase,
        title: "Gig Entrepreneurship Program",
        description: "Enabling gig workers and independent innovators to build and scale digital products",
      },
    ],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const verticalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation with text reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Vertical sections with parallax-like stagger
      if (verticalsRef.current) {
        const verticalSections = verticalsRef.current.querySelectorAll(".vertical-section");
        
        verticalSections.forEach((section, vIndex) => {
          // Vertical header
          const header = section.querySelector(".vertical-header");
          gsap.fromTo(
            header,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Offering cards with 3D flip effect
          const cards = section.querySelectorAll(".offering-card");
          cards.forEach((card, cIndex) => {
            gsap.fromTo(
              card,
              { 
                opacity: 0, 
                y: 60,
                rotateX: -20,
                scale: 0.9,
                transformPerspective: 1000
              },
              {
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
                duration: 0.7,
                delay: cIndex * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 75%",
                  toggleActions: "play none none reverse",
                },
              }
            );

            // Hover effects
            const icon = card.querySelector(".icon-container");
            card.addEventListener("mouseenter", () => {
              gsap.to(card, { 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
                duration: 0.3, 
                ease: "power2.out" 
              });
              gsap.to(icon, { 
                scale: 1.15, 
                rotation: 5,
                duration: 0.3, 
                ease: "back.out(1.7)" 
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
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Business Verticals & Offerings
          </span>
          <h2 className="text-foreground mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-primary">Digital Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From enterprise technology services to innovative product development, we deliver end-to-end solutions that drive transformation.
          </p>
        </div>

        {/* Verticals */}
        <div ref={verticalsRef} className="space-y-16">
          {verticals.map((vertical) => (
            <div key={vertical.title} className="vertical-section">
              {/* Vertical Header */}
              <div className="vertical-header mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${vertical.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                  <h3 className="text-foreground">{vertical.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg ml-6">{vertical.subtitle}</p>
              </div>

              {/* Offerings Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {vertical.offerings.map((offering) => (
                  <div
                    key={offering.title}
                    className="offering-card card-premium p-6 group cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className={`icon-container w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-colors duration-300 ${
                      vertical.color === 'primary' 
                        ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                        : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground'
                    }`}>
                      <offering.icon className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {offering.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">{offering.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
