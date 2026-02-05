import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    title: "Petzey — Telehealth",
    subtitle: "Enterprise-Grade Platform Turnaround",
    description: "Stabilized, re-engineered, and operated Petzey's national telehealth platform. Engagement: 2020-2022.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["SOC 2 Type II", "HIPAA", "24×7 NOC"],
  },
  {
    id: 2,
    title: "Enterprise-Grade Healthcare Infrastructure",
    subtitle: "HIPAA Compliant Architecture",
    description: "Architected the healthcare infrastructure: SOC 2 Type II, HIPAA, 24×7 NOC, PHI-safe engineering.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    tags: ["Healthcare", "Compliance", "Infrastructure"],
  },
  {
    id: 3,
    title: "Positioning Intelligence Platform",
    subtitle: "AI-Powered Consulting Platform",
    description: "Translating three decades of positioning expertise into an AI-powered, consultant-ready platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["AI", "ML", "Platform"],
  },
  {
    id: 4,
    title: "Advanced IP Innovation",
    subtitle: "Digital Twins, XR & Blockchain",
    description: "Co-created with senior leaders from Harvard, MIT & global consulting networks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    tags: ["Blockchain", "XR", "Digital Twins"],
  },
  {
    id: 5,
    title: "Carix Health",
    subtitle: "AI-powered Healthcare Operations",
    description: "Integrated ecosystem unifying physician marketing, credentialing, contracting, and analytics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    tags: ["Healthcare", "AI", "Analytics"],
  },
  {
    id: 6,
    title: "AxlGro",
    subtitle: "AI-Driven Growth Accelerator",
    description: "Architecting pathways to growth through company intelligence, opportunity mapping, and precision matchmaking.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
    tags: ["Growth", "AI", "Matchmaking"],
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      // Cards with horizontal scroll reveal
      if (scrollContainerRef.current) {
        const cards = scrollContainerRef.current.querySelectorAll(".case-card");
        
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 60,
              scale: 0.9,
              rotateY: -10
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 0,
              duration: 0.7,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: scrollContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Hover effects
          const image = card.querySelector(".case-image");
          
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { 
              y: -12, 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
              duration: 0.4, 
              ease: "power2.out" 
            });
            gsap.to(image, { 
              scale: 1.1,
              duration: 0.6, 
              ease: "power2.out" 
            });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { 
              y: 0, 
              scale: 1,
              boxShadow: "none",
              duration: 0.4, 
              ease: "power2.out" 
            });
            gsap.to(image, { 
              scale: 1,
              duration: 0.4, 
              ease: "power2.out" 
            });
          });
        });
      }

      // CTA button
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="case-studies" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Work
          </span>
          <h2 className="text-foreground mb-6">
            Case <span className="text-primary">Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we've helped leading organizations transform their businesses
            through innovative technology solutions
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
            style={{ scrollbarWidth: 'thin' }}
          >
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="case-card flex-shrink-0 w-[340px] md:w-[380px] snap-start group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="case-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {study.title}
                    </h4>
                    <p className="text-sm font-medium text-primary mb-3">
                      {study.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {study.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div ref={ctaRef} className="text-center mt-10">
          <MagneticButton>
            <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all border border-primary rounded-full px-6 py-3 hover:bg-primary hover:text-primary-foreground">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
