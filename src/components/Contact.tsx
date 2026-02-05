import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact info items
      if (leftRef.current) {
        const contactItems = leftRef.current.querySelectorAll(".contact-item");
        gsap.fromTo(
          contactItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Form card animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 60, scale: 0.95, rotateY: -5 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotateY: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form fields stagger
      if (formRef.current) {
        const formFields = formRef.current.querySelectorAll(".form-field");
        gsap.fromTo(
          formFields,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Input focus animations
        const inputs = formRef.current.querySelectorAll("input, textarea");
        inputs.forEach((input) => {
          input.addEventListener("focus", () => {
            gsap.to(input, {
              scale: 1.02,
              borderColor: "hsl(var(--primary))",
              duration: 0.3,
              ease: "power2.out",
            });
          });
          input.addEventListener("blur", () => {
            gsap.to(input, {
              scale: 1,
              borderColor: "hsl(var(--border))",
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={leftRef}>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-foreground mb-6">
              Ready to{" "}
              <span className="text-primary">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how INAXL can help you accelerate innovation, drive digital transformation, and achieve measurable business outcomes.
            </p>

            <div className="space-y-4">
              <div className="contact-item flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">hello@inaxl.com</p>
                </div>
              </div>
              <div className="contact-item flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form 
            ref={formRef}
            className="card-premium space-y-6 p-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="form-field grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your company"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="form-field">
              <MagneticButton className="w-full">
                <button
                  type="submit"
                  className="btn-primary w-full py-4 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
