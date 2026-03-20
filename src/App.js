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

import VideoSEO from "./pages/VideoSEO";
import YouTubeSEO from "./pages/services/SEO/VideoSEO/YouTubeSEO";
import VideoSEOCustomerTestimonialVideos from "./pages/services/SEO/VideoSEO/CustomerTestimonialVideos";
import VlogVideoProduction from "./pages/services/SEO/VideoSEO/VlogVideoProduction";
import TechnicalSEO from "./pages/services/SEO/TechnicalSEO";
import LocalSEO from "./pages/services/SEO/LocalSEO";
import VoiceSearchOptimization from "./pages/services/SEO/VoiceSearchOptimization";
import GenerativeSEO from "./pages/services/SEO/GenerativeSEO";
import AnswerEngineOptimization from "./pages/services/SEO/AnswerEngineOptimization";
import SocialMediaOptimization from "./pages/services/SMM/SocialMediaOptimization";
import SocialMediaManagement from "./pages/services/SMM/SocialMediaManagement";
import SocialMediaAdvertising from "./pages/services/SMM/SocialMediaAdvertising";
import PPCServices from "./pages/services/DigitalAd/PPCServices";
import FacebookAds from "./pages/services/DigitalAd/FacebookAds";
import InstagramAds from "./pages/services/DigitalAd/InstagramAds";
import TwitterAds from "./pages/services/DigitalAd/TwitterAds";
import LinkedInAds from "./pages/services/DigitalAd/LinkedInAd";
import PinterestAds from "./pages/services/DigitalAd/PinterestAds";
import AmazonPPC from "./pages/services/DigitalAd/AmazonPPC";

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
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/video-seo" element={<VideoSEO />} />
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

          <Route path="/services/video-seo/youtube-seo" element={<YouTubeSEO />} />
          <Route path="/services/video-seo/customer-testimonial-videos" element={<VideoSEOCustomerTestimonialVideos />} />
          <Route path="/services/video-seo/vlog-video-production" element={<VlogVideoProduction />} />
          <Route path="/services/seo/technical-seo" element={<TechnicalSEO />} />
          <Route path="/services/seo/local-seo" element={<LocalSEO />} />
          <Route path="/services/seo/voice-search-optimization" element={<VoiceSearchOptimization />} />
          <Route path="/services/seo/generative-seo" element={<GenerativeSEO />} />
          <Route path="/services/seo/answer-engine-optimization" element={<AnswerEngineOptimization />} />

          <Route path="/services/SMM/social-media-optimization" element={<SocialMediaOptimization />} />
          <Route path="/services/SMM/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/services/SMM/social-media-advertising" element={<SocialMediaAdvertising />} />

          <Route path="/services/digital-ad/ppcServices" element={<PPCServices />} />
          <Route path="/services/digital-ad/facebook-ads" element={<FacebookAds />} />
          <Route path="/services/digital-ad/instagram-ads" element={<InstagramAds />} />
          <Route path="/services/digital-ad/twitter-ads" element={<TwitterAds />} />
          <Route path="/services/digital-ad/linkedin-ads" element={<LinkedInAds />} />
          <Route path="/services/digital-ad/pinterest-ads" element={<PinterestAds />} />
          <Route path="/services/digital-ad/amazon-ppc" element={<AmazonPPC />} />
        </Route>
      </Routes>
    </>
  );
}