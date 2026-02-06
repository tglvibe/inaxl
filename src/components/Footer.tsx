import logo from "@/assets/logo.png";
import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Technology Services", href: "#services" },
      { label: "Product Development", href: "#services" },
      { label: "AI Solutions", href: "#technologies" },
      { label: "Innovation Program", href: "#contact" },
    ],
    industries: [
      { label: "Healthcare", href: "#industries" },
      { label: "Financial Services", href: "#industries" },
      { label: "Manufacturing", href: "#industries" },
      { label: "Enterprise SaaS", href: "#industries" },
    ],
  };

  return (
    <footer className="bg-inaxl-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img src={logo} alt="INAXL" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/60 text-sm mb-4">
              Accelerating Innovation with AI-powered transformation and world-class engineering.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h6 className="font-semibold text-primary-foreground mb-4">Company</h6>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h6 className="font-semibold text-primary-foreground mb-4">Services</h6>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h6 className="font-semibold text-primary-foreground mb-4">Industries</h6>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h6 className="font-semibold text-primary-foreground mb-4">Start a Project</h6>
            <p className="text-sm text-primary-foreground/60 mb-4">
              Ready to transform your business with AI and technology?
            </p>
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} INAXL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
