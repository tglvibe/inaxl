import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
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
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-premium p-5 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">
                {industry.title}
              </h5>
              <p className="text-xs text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
