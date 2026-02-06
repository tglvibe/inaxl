import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  Code2, BarChart3, Cloud, Compass, Rocket, Lightbulb, Package, Briefcase 
} from "lucide-react";

const verticals = [
  {
    title: "Technology Services",
    color: "primary",
    offerings: [
      { icon: Code2, title: "Product Engineering & Digital Ecosystems", description: "End-to-end product design, development, and scalable platforms" },
      { icon: BarChart3, title: "Data, Analytics & AI-Driven Transformation", description: "Turning data into actionable insights and intelligent automation" },
      { icon: Cloud, title: "Cloud & Infrastructure Management", description: "Cloud strategy, architecture, deployment, and ongoing management" },
      { icon: Compass, title: "Digital Strategy & Consulting", description: "Guiding enterprises to innovate, optimize, and achieve business impact" },
    ],
  },
  {
    title: "Product Development",
    color: "accent",
    offerings: [
      { icon: Rocket, title: "Startup Technology Partnerships", description: "Collaborating with startups to co-create impactful solutions" },
      { icon: Lightbulb, title: "IP Development", description: "Creating proprietary technology, patents, and intellectual property" },
      { icon: Package, title: "Product Development", description: "Ideation, prototyping, and scaling products for market success" },
      { icon: Briefcase, title: "Gig Entrepreneurship Program", description: "Enabling gig workers and independent innovators to build and scale digital products" },
    ],
  },
];

const Services = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div data-animate="reveal" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Business Verticals & Offerings
          </span>
          <h2 className="text-foreground">
            Comprehensive Solutions for{" "}
            <span className="text-primary">Digital Excellence</span>
          </h2>
        </div>

        {/* Verticals */}
        <div className="space-y-16">
          {verticals.map((vertical) => (
            <div key={vertical.title}>
              <div data-animate="reveal" className="mb-8">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${vertical.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                  <h3 className="text-foreground">{vertical.title}</h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-animate="stagger">
                {vertical.offerings.map((offering) => (
                  <div key={offering.title} className="card-premium p-6 group">
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
