import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  const [direction, setDirection] = useState(0);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      navigate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-foreground mb-6">
            Building{" "}
            <span className="text-primary">Lasting Relationships</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            What our partners say about working with INAXL.
          </p>
        </motion.div>

        {/* Single Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-10 w-12 h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-10 w-12 h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonial Card */}
            <div className="overflow-hidden px-8 md:px-0">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative"
                >
                  {/* Large Quote Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-7 h-7 text-primary" />
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-8">
                    {currentTestimonial.badge}
                  </span>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                      {currentTestimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">
                        {currentTestimonial.author}
                      </p>
                      <p className="text-muted-foreground">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
