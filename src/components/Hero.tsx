import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float delay-300" />
      </div>

      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">AI-Powered Transformation</span>
            </motion.div>

            <h1 className="text-foreground mb-6">
              Accelerating{" "}
              <span className="text-primary">Innovation</span>
              <br />
              with AI & Engineering
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              We don't just deliver technology—we deliver business value. Our transformation strategies maximize ROI and drive sustainable growth across your organization.
            </p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50%</p>
                  <p className="text-xs text-muted-foreground">Faster Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">$2.8B+</p>
                  <p className="text-xs text-muted-foreground">IP Valuation</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10+</p>
                  <p className="text-xs text-muted-foreground">Industries</p>
                </div>
              </div>
            </motion.div>

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

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: "30s" }} />
              
              {/* Inner ring */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-accent/20 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
              
              {/* Center circle */}
              <div className="absolute inset-16 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground">Conceptualize</p>
                  <p className="text-2xl font-bold text-primary">Build</p>
                  <p className="text-sm font-medium text-muted-foreground">Scale</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-4 py-2 rounded-lg bg-card shadow-card border border-border animate-float">
                <p className="text-xs font-medium text-foreground">AI Systems</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 px-4 py-2 rounded-lg bg-card shadow-card border border-border animate-float delay-200">
                <p className="text-xs font-medium text-foreground">Cloud Native</p>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 px-4 py-2 rounded-lg bg-card shadow-card border border-border animate-float delay-400">
                <p className="text-xs font-medium text-foreground">Data Intelligence</p>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 px-4 py-2 rounded-lg bg-card shadow-card border border-border animate-float delay-600">
                <p className="text-xs font-medium text-foreground">Product Engineering</p>
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
