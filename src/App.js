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
import ServiceDetail from "./pages/services/ServiceDetail";

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
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

      </Route>
    </Routes>
  );
}