import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/3 h-1/3 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>
      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <img
              src={heroVisual}
              alt="AI Robot holding a futuristic tablet"
              className="w-full max-w-lg object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-foreground mb-4">
              Accelerating{" "}
              <span className="text-primary">Transformation</span>
              <br />
              with AI Powered Innovation
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              We build AI-driven products that help you outrun the competition.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary group">
                Start Your Transformation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#case-studies" className="btn-outline">
                View Case Studies
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
