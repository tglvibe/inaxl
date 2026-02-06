import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

const verticals = [
  {
    title: "Technology Services",
    color: "primary",
    offerings: [
      { icon: Code2, title: "Product Engineering & Digital Ecosystems" },
      { icon: BarChart3, title: "Data, Analytics & AI-Driven Transformation" },
      { icon: Cloud, title: "Cloud & Infrastructure Management" },
      { icon: Compass, title: "Digital Strategy & Consulting" },
    ],
  },
  {
    title: "Product Development",
    color: "accent",
    offerings: [
      { icon: Rocket, title: "Startup Technology Partnerships" },
      { icon: Lightbulb, title: "IP Development" },
      { icon: Package, title: "Product Development" },
      { icon: Briefcase, title: "Gig Entrepreneurship Program" },
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Business Verticals & Offerings
          </span>
          <h2 className="text-foreground">
            Comprehensive Solutions for{" "}
            <span className="text-primary">Digital Excellence</span>
          </h2>
        </motion.div>

        {/* Verticals */}
        <div className="space-y-16">
          {verticals.map((vertical, vIndex) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: vIndex * 0.2 }}
            >
              {/* Vertical Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${vertical.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                  <h3 className="text-foreground">{vertical.title}</h3>
                </div>
              </div>

              {/* Offerings Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {vertical.offerings.map((offering, oIndex) => (
                  <motion.div
                    key={offering.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + oIndex * 0.1 }}
                    className="card-premium p-6 group"
                  >
                    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      vertical.color === 'primary' 
                        ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                        : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground'
                    }`}>
                      <offering.icon className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {offering.title}
                    </h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
