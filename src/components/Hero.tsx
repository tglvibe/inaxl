import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";
import SplitText from "./animations/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Master timeline for hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Badge animation
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8 },
        0.2
      );

      // Headline reveal
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 1.2 },
        0.4
      );

      // Description slide up
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.7
      );

      // Stats stagger
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll(".stat-item");
        tl.fromTo(
          statItems,
          { opacity: 0, y: 30, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.6, 
            stagger: 0.1,
            ease: "back.out(1.7)"
          },
          0.9
        );
      }

      // CTA buttons
      if (ctaRef.current) {
        const buttons = ctaRef.current.querySelectorAll("a");
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          1.1
        );
      }

      // Cards cascade animation
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".process-card");
        tl.fromTo(
          cards,
          { 
            opacity: 0, 
            x: 100, 
            rotateY: -15,
            transformPerspective: 1000 
          },
          { 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            duration: 0.8, 
            stagger: 0.2,
            ease: "power3.out"
          },
          0.5
        );

        // Cards floating animation after entrance
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: "random(-8, 8)",
            duration: 2 + index * 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 2 + index * 0.2,
          });
        });
      }

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 },
        1.5
      );

      // Parallax effect on scroll
      gsap.to(headlineRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(cardsContainerRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">Measurable results. Tangible impact.</span>
            </div>

            <h1 ref={headlineRef} className="text-foreground mb-6">
              <SplitText 
                text="Accelerating" 
                className="block"
                delay={0.5}
                stagger={0.04}
              />
              <span className="text-primary">
                <SplitText 
                  text="Transformation" 
                  delay={0.8}
                  stagger={0.04}
                />
              </span>
              <br />
              <SplitText 
                text="with AI Powered Innovation" 
                delay={1.1}
                stagger={0.03}
              />
            </h1>

            <p ref={descRef} className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              We don't just deliver technology—we deliver business value. Our transformation strategies maximize ROI and drive sustainable growth across your organization.
            </p>

            {/* Stats Row */}
            <div
              ref={statsRef}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              <div className="stat-item flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50%</p>
                  <p className="text-xs text-muted-foreground">Faster Delivery</p>
                </div>
              </div>
              <div className="stat-item flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">$2.8B+</p>
                  <p className="text-xs text-muted-foreground">IP Valuation</p>
                </div>
              </div>
              <div className="stat-item flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10+</p>
                  <p className="text-xs text-muted-foreground">Industries</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticButton>
                <a href="#contact" className="btn-primary group">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#case-studies" className="btn-outline">
                  View Case Studies
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right Visual - Stacked Cards with Process Flow */}
          <div
            ref={cardsContainerRef}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main stacked cards */}
              <div className="space-y-4">
                {/* Conceptualize Card - Deep Slate */}
                <div
                  className="process-card relative p-6 rounded-2xl shadow-xl ml-0 cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: 'hsl(220, 40%, 20%)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <span className="text-2xl font-black text-white">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Conceptualize</h3>
                      <p className="text-sm text-white/80">Strategy & Vision</p>
                    </div>
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full" />
                </div>

                {/* Build Card - Blue */}
                <div
                  className="process-card relative bg-primary p-6 rounded-2xl shadow-xl ml-8 cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <span className="text-2xl font-black text-white">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Build</h3>
                      <p className="text-sm text-white/80">Engineering Excellence</p>
                    </div>
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full" />
                </div>

                {/* Scale Card - Green */}
                <div
                  className="process-card relative bg-accent p-6 rounded-2xl shadow-xl ml-16 cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <span className="text-2xl font-black text-white">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Scale</h3>
                      <p className="text-sm text-white/80">Growth & Performance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting line */}
              <div className="absolute left-6 top-16 bottom-16 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
