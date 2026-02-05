import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import CaseStudies from "@/components/CaseStudies";
import Differentiators from "@/components/Differentiators";
import EngagementModels from "@/components/EngagementModels";
import InnovationAccelerator from "@/components/InnovationAccelerator";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <CaseStudies />
        <Differentiators />
        <EngagementModels />
        <InnovationAccelerator />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
