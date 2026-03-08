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

export default function App() {
  return (
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
        <Route path="/seo" element={<SEO />} />
        <Route path="/services/:slug" element={<Services/>} />
        <Route path="/ppc" element={<PPC />} />
        <Route path="/web-development" element={<WebsiteDevelopment />} />
        
        <Route path="/social-media" element={<SocialMedia />} />
        
        <Route path="/custom-software" element={<CustomSoftware />} />
        
        <Route path="/cloud-devops" element={<CloudDevOps />} />
        
        <Route path="/UI / UX Design" element={<UIUX/>} />
        <Route path="/conversion-optimization" element={<ConversionOptimization />} />
        <Route path="/app-development" element={<AppDevelopment />} />

      </Route>
    </Routes>
  );
}