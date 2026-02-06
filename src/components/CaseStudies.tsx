import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
  const sectionRef = useScrollReveal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 400;
    el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="case-studies" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div data-animate="reveal" className="text-center max-w-3xl mx-auto mb-12">
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
        <div data-animate="reveal" className="relative group/scroll">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fade edges */}
          <div className={`absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-background to-transparent z-[5] pointer-events-none transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0"}`} />
          <div className={`absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-background to-transparent z-[5] pointer-events-none transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0"}`} />

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
            style={{ scrollbarWidth: 'thin' }}
          >
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="flex-shrink-0 w-[340px] md:w-[380px] snap-start group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
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

          {/* Scroll hint text */}
          <div className="flex justify-center mt-3">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ChevronLeft className="w-3 h-3" /> Scroll to explore <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* View All CTA */}
        <div data-animate="reveal" className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all border border-primary rounded-full px-6 py-3 hover:bg-primary hover:text-primary-foreground">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
