import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Target, Users, Handshake, UserCheck } from "lucide-react";

const models = [
  {
    icon: Target,
    title: "Project-Based Delivery",
    description: "Fixed-scope delivery with strong emphasis on timelines and outcome ownership.",
    features: [
      "Fixed-scope or milestone-driven engagements",
      "Ideal for product builds, MVPs, POCs, and system rollouts",
      "Strong emphasis on quality and outcome ownership",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Teams / Pods",
    description: "High-performance cross-functional squads that scale dynamically with your needs.",
    features: [
      "High-performance squads integrated into your environment",
      "Cross-functional teams: engineering, AI, design, cloud",
      "Scales dynamically based on evolving requirements",
    ],
  },
  {
    icon: Handshake,
    title: "Strategic Innovation Partnerships",
    description: "Long-term deep-tech collaboration with shared IP and outcome-based innovation.",
    features: [
      "Long-term deep-tech collaboration and co-creation",
      "R&D extensions, labs-as-a-service, ecosystem building",
      "Shared IP models and outcome-based innovation",
    ],
  },
  {
    icon: UserCheck,
    title: "Gig-Based Expert Hiring",
    description: "On-demand specialized senior talent for short-term, high-impact initiatives.",
    features: [
      "Access to specialized senior talent across AI, engineering, cloud",
      "Fast onboarding for high-impact initiatives",
      "Flexible, cost-efficient model for skill gaps",
    ],
  },
];

const EngagementModels = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-section" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Engagement Models
          </span>
          <h2 className="text-foreground mb-6">
            Flexible Models for{" "}
            <span className="text-gradient-primary">Every Stage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At INAXL, we align our engagement models to your stage, speed, and scale. 4 engagement models, 100% outcome focused.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <model.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground">{model.title}</h4>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{model.description}</p>
              <ul className="space-y-3">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
