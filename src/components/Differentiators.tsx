import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, DollarSign, Users, RefreshCw, Shield, Sparkles } from "lucide-react";

const differentiators = [
  {
    icon: TrendingUp,
    value: "30–45%",
    label: "Gain in Operational Efficiency",
    description: "Driven by workflow automation, platform integration, and ecosystem orchestration.",
  },
  {
    icon: DollarSign,
    value: "35–50%",
    label: "Reduction in Engineering Costs",
    description: "Enabled by high-velocity squads, reusable accelerators, and modular architecture patterns.",
  },
  {
    icon: Users,
    value: "2–4×",
    label: "Increase in Product Adoption",
    description: "Outcome of customer-backward design, frictionless UX, and continuous intelligence loops.",
  },
  {
    icon: RefreshCw,
    value: "50%",
    label: "Reduction in Rework",
    description: "Achieved via Clarity Engineering™, pre-validated requirements, and early architecture alignment.",
  },
  {
    icon: Shield,
    value: "50–60%",
    label: "Reduction in Architecture Risk",
    description: "Result of using pre-tested patterns and stress-tested deployment models.",
  },
  {
    icon: Sparkles,
    value: "$2.8B+",
    label: "IP Valuation Impact",
    description: "Created through platform modernization, new digital products, and ecosystem integrations.",
  },
];

const Differentiators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-dark text-primary-foreground" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Key Differentiators
          </span>
          <h2 className="text-primary-foreground mb-6">
            Measurable Outcomes That{" "}
            <span className="text-accent">Drive Transformation</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Real business value through proven methodologies and enterprise-grade execution.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-3xl font-bold text-primary-foreground">{item.value}</p>
              </div>
              <h5 className="text-lg font-semibold text-primary-foreground mb-2">{item.label}</h5>
              <p className="text-sm text-primary-foreground/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
