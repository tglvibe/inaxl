import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Cpu,
  ChevronRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("ai");

  const activeData = techCategories.find((cat) => cat.id === activeCategory);

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

      // Tabs animation
      if (tabsRef.current) {
        const tabs = tabsRef.current.querySelectorAll(".tech-tab");
        gsap.fromTo(
          tabs,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: tabsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Content card
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 40, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate content change
  useEffect(() => {
    if (!contentRef.current) return;
    
    const items = contentRef.current.querySelectorAll(".tech-item");
    gsap.fromTo(
      items,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
      }
    );
  }, [activeCategory]);

  const handleTabClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    
    // Magnetic ripple effect
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(2)",
        });
      },
    });
    
    setActiveCategory(id);
  };

  return (
    <section id="technologies" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Technologies We Work With
          </span>
          <h2 className="text-foreground mb-6">
            Engineering the Future with{" "}
            <span className="text-primary">Advanced Platforms</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AI-native architectures, cloud-native systems, and next-generation digital infrastructure for enterprise-grade solutions.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <div ref={tabsRef} className="space-y-3">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={(e) => handleTabClick(category.id, e)}
                className={`tech-tab w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-secondary border border-border"
                }`}
              >
                <category.icon className={`w-6 h-6 ${activeCategory === category.id ? "text-primary-foreground" : "text-primary"}`} />
                <span className="font-medium text-sm">{category.title}</span>
                <ChevronRight className={`w-4 h-4 ml-auto transition-transform duration-300 ${activeCategory === category.id ? "rotate-90" : ""}`} />
              </button>
            ))}
          </div>

          {/* Active Category Details */}
          <div
            ref={contentRef}
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
                    <li
                      key={index}
                      className="tech-item flex items-start gap-3"
                    >
                      <span className="shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
