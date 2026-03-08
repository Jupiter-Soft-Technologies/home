import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import StatsCounter from "../components/StatsCounter";
import ClientCarousel from "../components/ClientCarousel";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

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
    <main>
      {/* SEO META */}
      <Helmet>
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Jupiter Soft Technologies",
          "url": "https://jupitersofttechnologies.com",
          "logo": "https://jupitersofttechnologies.com/logo.png",
          "description": "Digital marketing and development agency specializing in SEO, PPC, CRO, web development, and app development.",
          "sameAs": [
            "https://www.linkedin.com",
            "https://twitter.com",
            "https://facebook.com"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-000-000-0000",
            "contactType": "customer service"
          }
        }
        `}
        </script>

        <title>
          Jupiter Soft Technologies | SEO, Web Development, PPC & CRO Experts
        </title>

        <meta
          name="description"
          content="Jupiter Soft Technologies helps businesses grow with expert SEO, Web Development, PPC, CRO and Digital Marketing services. Performance-driven strategies that scale."
        />

        <meta
          name="keywords"
          content="SEO services, digital marketing agency, web development company, PPC services, CRO services, Jupiter Soft Technologies"
        />

        <meta property="og:title" content="Jupiter Soft Technologies" />
        <meta
          property="og:description"
          content="Grow your business with expert SEO, Web Development, PPC and CRO services."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jupitersofttechnologies.com" />
      </Helmet>

      {/* HERO */}
      <section id="hero" className="pt-24">
        <Hero />
      </section>
      <ClientCarousel />
      {/* TRUSTED BY */}
      <TrustedBy />

      {/* TRUST METRICS */}
      <StatsCounter />

      {/* SERVICES */}
      <section id="services" aria-label="Digital Marketing Services">
        <Services />
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>
    </main>
  );
}