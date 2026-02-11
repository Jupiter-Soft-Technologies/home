import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import DemoWebsites from "../components/DemoWebsites";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100); 
    }
  }, [location]);

  return (
    <>
      {/* HERO */}
      <section id="hero" className="pt-24">
        <Hero />
      </section>

      <TrustedBy />

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* DEMO WEBSITES */}
      <section id="demo-websites">
        <DemoWebsites />
      </section>

      {/* PROCESS */}
      <section id="process">
        <Process />
      </section>

      <WhyChooseUs />

      <Testimonials />

      {/* PRICING */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
