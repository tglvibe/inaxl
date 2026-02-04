import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

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
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-primary font-serif italic text-4xl md:text-5xl mb-6">
            Case Studies
          </h2>
          <p className="text-muted-foreground">
            Discover how we've helped leading organizations transform their businesses
            <br className="hidden md:block" />
            through innovative technology solutions
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
            style={{ scrollbarWidth: 'thin' }}
          >
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[340px] md:w-[380px] snap-start group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              </motion.article>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all border border-primary rounded-full px-6 py-3 hover:bg-primary hover:text-primary-foreground">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
