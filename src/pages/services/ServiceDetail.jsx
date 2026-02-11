import React from "react";
import { useParams } from "react-router-dom";

const serviceContent = {
  seo: {
    title: "SEO Optimization",
    description: "Rank higher and dominate organic search.",
  },
  "paid-ads": {
    title: "Paid Advertising",
    description: "Scale revenue with data-driven paid campaigns.",
  },
  "social-media": {
    title: "Social Media Marketing",
    description: "Build brand authority and generate leads.",
  },
  "web-development": {
    title: "Web Development",
    description: "High-performance scalable web applications.",
  },
  "app-development": {
    title: "App Development",
    description: "Modern cross-platform mobile apps.",
  },
  "custom-software": {
    title: "Custom Software Solutions",
    description: "Tailored automation & SaaS platforms.",
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure solutions.",
  },
  "ui-ux": {
    title: "UI / UX Design",
    description: "User-first, conversion-focused design systems.",
  },
  "conversion-optimization": {
    title: "Conversion Optimization",
    description: "Turn traffic into revenue efficiently.",
  },
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceContent[slug];

  if (!service) {
    return <div className="text-white p-20">Service Not Found</div>;
  }

  return (
    <div className="bg-[#0b0f1a] text-white min-h-screen py-32 text-center">
      <h1 className="text-5xl font-bold">{service.title}</h1>
      <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
        {service.description}
      </p>
    </div>
  );
}

export default ServiceDetail;
