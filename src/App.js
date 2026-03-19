import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import ProcessPage from "./pages/ProcessPage";
import PortfolioProject from "./pages/PortfolioProject";

import SeoPricing from "./pages/SeoPricing";
import PpcPricing from "./pages/PpcPricing";
import AmazonPpcPricing from "./pages/AmazonPpcPricing";
import WebDevPricing from "./pages/WebDevPricing";
import AppDevPricing from "./pages/AppDevPricing";
import CROPricing from "./pages/CROPricing";

import SEO from "./pages/services/SEO";

import PPC from "./pages/services/PPC";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import Services from "./components/Services";
import AppDevelopment from "./pages/services/ApplicationDevelopment";
import CustomSoftware from "./pages/services/CustomSoftware";
import CloudDevOps from "./pages/services/CloudDevOps";
import UIUX from "./pages/services/UIUX";
import SocialMedia from "./pages/services/SocialMedia";
import ConversionOptimization from "./pages/services/ConversionOptimization";

import ScrollToTop from "./components/ScrollToTop";

import Contact from "./pages/Contact";

import AboutUs from "./pages/AboutUs";
import DigitalMarketing from "./pages/services/DigitalMarketing";

import Strategy from "./pages/services/digitalMarketing/Strategy";
import Audit from "./pages/services/digitalMarketing/Audit";
import ContentMarketing from "./pages/services/digitalMarketing/ContentMarketing";
import EmailMarketing from "./pages/services/digitalMarketing/EmailMarketing";
import ReputationManagement from "./pages/services/digitalMarketing/ReputationManagement";



export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<HomePage />} />

          {/* Portfolio */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioProject />} />

          {/* Process */}
          <Route path="/process" element={<ProcessPage />} />

          {/* Pricing */}
          <Route path="/seo-pricing" element={<SeoPricing />} />
          <Route path="/ppc-pricing" element={<PpcPricing />} />
          <Route path="/cro-pricing" element={<CROPricing />} />
          <Route path="/amazon-ppc-pricing" element={<AmazonPpcPricing />} />
          <Route path="/web-pricing" element={<WebDevPricing />} />
          <Route path="/app-pricing" element={<AppDevPricing />} />

          {/* Services */}
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ppc" element={<PPC />} />
          <Route path="/services/web-development" element={<WebsiteDevelopment />} />

          <Route path="/services/social-media" element={<SocialMedia />} />

          <Route path="/services/custom-software" element={<CustomSoftware />} />

          <Route path="/services/cloud-devops" element={<CloudDevOps />} />

          <Route path="/services/ui-ux" element={<UIUX />} />
          <Route path="/services/conversion-optimization" element={<ConversionOptimization />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/digital-marketing/strategy" element={<Strategy />} />
          <Route path="/services/digital-marketing/audit" element={<Audit />} />
          <Route path="/services/digital-marketing/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/digital-marketing/email-marketing" element={<EmailMarketing />} />
          <Route path="/services/digital-marketing/reputation-management" element={<ReputationManagement />} />


        </Route>
      </Routes>
    </>
  );
}