import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
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

          {/* Right Visual - Conceptualize / Build / Scale */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />

              {/* Words */}
              <div className="relative space-y-3">
                {[
                  { word: "Conceptualize", delay: 0.4, accent: false },
                  { word: "Build", delay: 0.6, accent: true },
                  { word: "Scale", delay: 0.8, accent: false },
                ].map((item) => (
                  <motion.div
                    key={item.word}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    className="group"
                  >
                    <div className={`relative overflow-hidden rounded-2xl px-8 py-6 border transition-all duration-500 ${
                      item.accent 
                        ? "bg-primary border-primary/30 shadow-lg shadow-primary/20" 
                        : "bg-card border-border hover:border-primary/30"
                    }`}>
                      <span className={`text-4xl md:text-5xl font-black tracking-tight ${
                        item.accent ? "text-primary-foreground" : "text-foreground"
                      }`}>
                        {item.word}
                      </span>
                      {/* Decorative dot */}
                      <span className={`absolute right-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                        item.accent ? "bg-accent" : "bg-primary/40"
                      }`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
