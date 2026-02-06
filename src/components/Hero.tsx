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
              {/* Ambient glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/8 via-accent/5 to-transparent rounded-[3rem] blur-2xl" />

              {/* Vertical connector line */}
              <div className="absolute left-10 top-8 bottom-8 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-primary/20" />

              {/* Steps */}
              <div className="relative space-y-5">
                {[
                  { num: "01", word: "Conceptualize", sub: "Strategy & Vision", color: "slate" as const },
                  { num: "02", word: "Build", sub: "Engineering Excellence", color: "primary" as const },
                  { num: "03", word: "Scale", sub: "Growth & Performance", color: "accent" as const },
                ].map((item, i) => (
                  <motion.div
                    key={item.word}
                    initial={{ opacity: 0, x: 50, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.2, ease: "easeOut" }}
                    style={{ marginLeft: `${i * 24}px` }}
                  >
                    <div
                      className={`relative rounded-2xl p-6 border backdrop-blur-sm transition-all duration-500 group cursor-default ${
                        item.color === "primary"
                          ? "bg-primary border-primary/40 shadow-xl shadow-primary/25"
                          : item.color === "accent"
                          ? "bg-accent border-accent/40 shadow-xl shadow-accent/20"
                          : "border-border/60 shadow-lg"
                      }`}
                      style={
                        item.color === "slate"
                          ? { backgroundColor: "hsl(215, 60%, 15%)" }
                          : undefined
                      }
                    >
                      {/* Number badge */}
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                        <span className="text-[10px] font-bold text-primary">{item.num}</span>
                      </div>

                      <div className="flex items-center gap-5 pl-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-none mb-1">
                            {item.word}
                          </h3>
                          <p className="text-sm font-medium text-white/70 tracking-wide">
                            {item.sub}
                          </p>
                        </div>
                      </div>

                      {/* Shine line */}
                      <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
