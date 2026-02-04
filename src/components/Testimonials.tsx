import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

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

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Badge */}
              <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                {testimonial.badge}
              </span>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
