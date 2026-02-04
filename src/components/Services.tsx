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
          <h2 className="text-foreground mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-gradient-primary">Digital Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From enterprise technology services to innovative product development, we deliver end-to-end solutions that drive transformation.
          </p>
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
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${vertical.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                  <h3 className="text-foreground">{vertical.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg ml-6">{vertical.subtitle}</p>
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
                    <h5 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {offering.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">{offering.description}</p>
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
