import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Brain, Cloud, Code, Database, Smartphone, Cpu, ChevronRight, ChevronDown 
} from "lucide-react";

const techCategories = [
  {
    id: "ai",
    icon: Brain,
    title: "AI, GenAI & Agentic Systems",
    items: [
      "Large Language Models & Foundation Models: OpenAI, Anthropic, Google Gemini, Llama, Mistral",
      "Domain-tuned LLMs, RAG architectures, Fine-tuning, Prompt Engineering",
      "Agentic AI & Autonomous Workflows: Multi-agent orchestration, Enterprise copilots",
      "Computer Vision & Multimodal AI: Vision-Language models, OCR, Video intelligence",
      "MLOps & AI Infrastructure: MLflow, Vertex AI, SageMaker, Responsible AI",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud-Native & Distributed Systems",
    items: [
      "Cloud Platforms: AWS, Azure, Google Cloud",
      "Cloud-Native Architecture: Kubernetes, Service Meshes, Serverless, Event-driven systems",
      "Infrastructure Automation & Observability: Terraform, Pulumi, Prometheus, Grafana",
    ],
  },
  {
    id: "engineering",
    icon: Code,
    title: "Modern Engineering & Platforms",
    items: [
      "Backend: Python, Go, Java, Node.js; Domain-driven design",
      "Frontend: React, Next.js, Angular",
      "High-Performance: Rust, Concurrent pipelines",
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "Data Engineering & Real-Time Intelligence",
    items: [
      "Platforms & Pipelines: Spark, Flink, Kafka, Airflow, dbt",
      "Warehouses & Lakehouses: Snowflake, BigQuery, Redshift",
      "Advanced Analytics: Predictive modeling, BI platforms",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Modern Mobile & Edge",
    items: [
      "Mobile: Swift, Kotlin, Flutter",
      "Edge & On-Device AI: Jetson, TinyML",
      "IoT Platforms: MQTT, OPC-UA",
    ],
  },
  {
    id: "emerging",
    icon: Cpu,
    title: "Emerging Technologies & Deep Tech",
    items: [
      "Generative AI systems, Digital twins",
      "Blockchain (select use cases)",
      "Spatial computing",
    ],
  },
];

const Technologies = () => {
  const sectionRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("ai");
  const isMobile = useIsMobile();
  const activeData = techCategories.find((cat) => cat.id === activeCategory);

  const handleToggle = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <section id="technologies" className="section-padding bg-section-alt" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div data-animate="reveal" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Technologies We Work With
          </span>
          <h2 className="text-foreground">
            Engineering the Future with{" "}
            <span className="text-primary">Advanced Platforms</span>
          </h2>
        </div>

        {/* Mobile: Accordion Layout */}
        {isMobile ? (
          <div data-animate="reveal" className="space-y-3">
            {techCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <div key={category.id} className="rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => handleToggle(category.id)}
                    className={`w-full flex items-center gap-3 p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-card hover:bg-secondary"
                    }`}
                  >
                    <category.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                    <span className="font-medium text-sm flex-1">{category.title}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-card border-t border-border">
                          <ul className="space-y-3">
                            {category.items.map((item, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <span className="shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                                <span className="text-muted-foreground text-sm">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          /* Desktop: Side-by-side Layout (unchanged) */
          <div data-animate="reveal" className="grid lg:grid-cols-3 gap-8">
            {/* Category Tabs */}
            <div className="space-y-3">
              {techCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card hover:bg-secondary border border-border"
                  }`}
                >
                  <category.icon className={`w-6 h-6 ${activeCategory === category.id ? "text-primary-foreground" : "text-primary"}`} />
                  <span className="font-medium text-sm">{category.title}</span>
                  <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${activeCategory === category.id ? "rotate-90" : ""}`} />
                </button>
              ))}
            </div>

            {/* Active Category Details */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 card-premium p-8"
            >
              {activeData && (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <activeData.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{activeData.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {activeData.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;
