import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import HomePage from "./pages/HomePage";
import SeoPricing from "./pages/SeoPricing";
import PpcPricing from "./pages/PpcPricing";
import AmazonPpcPricing from "./pages/AmazonPpcPricing";
import WebDevPricing from "./pages/WebDevPricing";
import AppDevPricing from "./pages/AppDevPricing";
import CROPricing from "./pages/CROPricing";

export default function App() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/seo-pricing" element={<SeoPricing />} />
        <Route path="/ppc-pricing" element={<PpcPricing />} />
        <Route path="/cro-pricing" element={<CROPricing />} />
        <Route path="/amazon-ppc-pricing" element={<AmazonPpcPricing />} />
        <Route path="/web-pricing" element={<WebDevPricing />} />
        <Route path="/app-pricing" element={<AppDevPricing />} />
        {/* future routes */}
        {/* <Route path="/web-pricing" element={<WebPricing />} /> */}
        {/* <Route path="/app-pricing" element={<AppPricing />} /> */}
      </Route>
    </Routes>
  );
}
