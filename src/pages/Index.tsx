import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import CaseStudies from "@/components/CaseStudies";
import EngagementModels from "@/components/EngagementModels";
import InnovationAccelerator from "@/components/InnovationAccelerator";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <CaseStudies />
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
