import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "We saw them operating at a different level... Their commitment to outcomes — not just deliverables — makes them one of the most dependable partners we've worked with.",
    author: "Mike Ortega",
    role: "CEO",
    company: "Petzey Health Tech, USA",
    badge: "The Product Scale & Reliability Partner",
  },
  {
    quote: "I am thoroughly impressed with the skill level of the engineers. Their commitment and ability to come up with solutions quickly is among the best I have seen.",
    author: "Andy Cunningham",
    role: "CEO",
    company: "Cunningham Collective, USA",
    badge: "Startup Enablement and Technology Partner",
  },
  {
    quote: "My collaboration with their engineering team led to the creation of breakthrough IP valued at USD 2.8 billion... INAXL combines world-class innovation discipline with execution excellence.",
    author: "Dr. Dave Richards",
    role: "Co-Founder",
    company: "MIT Innovation Lab, USA",
    badge: "The Deep-Tech Innovation Partner",
  },
  {
    quote: "It has been great collaborating with INAXL's team in our multi vendor global projects... What stands out most is their clarity-first approach — they understand the problem deeply before architecting the solution.",
    author: "Santhosh D",
    role: "CEO",
    company: "Netlabs Global",
    badge: "The Infrastructure & Systems Partner",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = (dir: number) => {
    setActiveIndex((prev) => {
      if (dir === 1) return prev === testimonials.length - 1 ? 0 : prev + 1;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const t = testimonials[activeIndex];

  return (
    <section
      className="section-padding"
      style={{ background: "hsl(215, 60%, 12%)" }}
      ref={ref}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
            Testimonials
          </span>
          <h2 className="text-primary-foreground mb-6">
            Building{" "}
            <span style={{ color: "hsl(200, 100%, 55%)" }}>
              Lasting Relationships
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            What our partners say about working with INAXL.
          </p>
        </motion.div>

        {/* Static Testimonial Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="rounded-2xl p-8 md:p-12 relative"
            style={{
              background: "hsl(215, 55%, 16%)",
              border: "1px solid hsl(215, 50%, 22%)",
            }}
          >
            {/* Quote Icon */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-8"
              style={{ background: "hsl(200, 100%, 55%, 0.12)" }}
            >
              <Quote
                className="w-6 h-6"
                style={{ color: "hsl(200, 100%, 55%)" }}
              />
            </div>

            {/* Badge */}
            <span
              className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "hsl(200, 100%, 55%, 0.1)",
                color: "hsl(200, 100%, 65%)",
              }}
            >
              {t.badge}
            </span>

            {/* Quote Text — fixed height container to prevent reflow */}
            <div className="min-h-[120px] md:min-h-[100px] mb-8">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-primary-foreground/90">
                "{t.quote}"
              </blockquote>
            </div>

            {/* Author + Navigation Row */}
            <div className="flex items-end justify-between">
              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-primary-foreground"
                  style={{ background: "hsl(210, 100%, 25%)" }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {t.author}
                  </p>
                  <p className="text-sm text-primary-foreground/50">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows — bottom-right */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    border: "1px solid hsl(215, 50%, 28%)",
                    color: "hsl(0, 0%, 100%, 0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "hsl(215, 50%, 22%)";
                    e.currentTarget.style.color = "hsl(0, 0%, 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "hsl(0, 0%, 100%, 0.6)";
                  }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    border: "1px solid hsl(215, 50%, 28%)",
                    color: "hsl(0, 0%, 100%, 0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "hsl(215, 50%, 22%)";
                    e.currentTarget.style.color = "hsl(0, 0%, 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "hsl(0, 0%, 100%, 0.6)";
                  }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
