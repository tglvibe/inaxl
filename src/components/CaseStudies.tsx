import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp, Shield, Zap, Layers, Heart, Rocket } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Petzey",
    subtitle: "National Telehealth Platform",
    description: "Stabilized, re-engineered, and operated Petzey's national telehealth platform.",
    icon: Heart,
    color: "primary",
    metrics: [
      { value: "10×", label: "Scalability" },
      { value: "90%", label: "Incident Reduction" },
      { value: "Sub-second", label: "Connections" },
    ],
    outcomes: ["Future-ready modular architecture", "Higher development velocity"],
  },
  {
    id: 2,
    title: "NetLabs Global",
    subtitle: "Enterprise Healthcare Infrastructure",
    description: "Architected healthcare infrastructure: SOC 2 Type II, HIPAA, 24×7 NOC, PHI-safe engineering.",
    icon: Shield,
    color: "accent",
    metrics: [
      { value: "2", label: "Data Centers" },
      { value: "SOC 2", label: "Certified" },
      { value: "24×7", label: "Reliability" },
    ],
    outcomes: ["US–India operational continuity", "PHI-safe engineering ecosystem"],
  },
  {
    id: 3,
    title: "Cunningham Collective",
    subtitle: "Positioning Intelligence Platform",
    description: "Translating three decades of positioning expertise into an AI-powered, consultant-ready platform.",
    icon: Zap,
    color: "primary",
    metrics: [
      { value: "40-55%", label: "Faster Creation" },
      { value: "3×", label: "Consistency Increase" },
      { value: "80%+", label: "Pilot Completion" },
    ],
    outcomes: ["30-40% faster discovery-to-deliverable cycles", "65-75% AI-generated messaging accuracy"],
  },
  {
    id: 4,
    title: "Advanced IP Innovation",
    subtitle: "Digital Twins, XR & Blockchain",
    description: "Co-created with senior leaders from Harvard, MIT & global consulting networks.",
    icon: Layers,
    color: "accent",
    metrics: [
      { value: "12+", label: "Patentable Components" },
      { value: "$2.8B", label: "Portfolio Valuation" },
      { value: "72+", label: "Architectural Models" },
    ],
    outcomes: ["50-70% faster prototype cycles", "3 frontier innovations engineered"],
  },
  {
    id: 5,
    title: "Carix Health",
    subtitle: "AI-powered Healthcare Operations",
    description: "Integrated ecosystem unifying physician marketing, credentialing, contracting, and analytics.",
    icon: TrendingUp,
    color: "primary",
    metrics: [
      { value: "40-60%", label: "Faster Credentialing" },
      { value: "30%", label: "Reduced Leakage" },
      { value: "50%", label: "Lower Overhead" },
    ],
    outcomes: ["Real-time unified physician identity", "Enterprise interoperability"],
  },
  {
    id: 6,
    title: "AxlGro",
    subtitle: "AI-Driven Growth Accelerator",
    description: "Architecting pathways to growth through company intelligence, opportunity mapping, and precision matchmaking.",
    icon: Rocket,
    color: "accent",
    metrics: [
      { value: "40%", label: "Faster Readiness" },
      { value: "3×", label: "Match Accuracy" },
      { value: "50-70%", label: "GTM Time Reduction" },
    ],
    outcomes: ["End-to-end growth lifecycle", "Global partner network enablement"],
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Case Studies
          </span>
          <h2 className="text-foreground mb-6">
            Transforming Businesses Through{" "}
            <span className="text-gradient-primary">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we've helped leading organizations transform their businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-6 group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  study.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                }`}>
                  <study.icon className={`w-6 h-6 ${study.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {study.title}
              </h4>
              <p className={`text-sm font-medium mb-3 ${study.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {study.subtitle}
              </p>
              <p className="text-muted-foreground text-sm mb-5">{study.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="text-center p-2 rounded-lg bg-secondary">
                    <p className="text-lg font-bold text-foreground">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Outcomes */}
              <div className="border-t border-border pt-4">
                <ul className="space-y-1">
                  {study.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${study.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
