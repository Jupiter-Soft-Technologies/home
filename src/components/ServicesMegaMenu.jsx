import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Megaphone,
  Hash,
  Globe,
  Search,
  Video,
  TrendingUp,
  ShoppingCart,
  ArrowRight
} from "lucide-react";

export default function ServicesMegaMenu({ isMobile, closeMenu }) {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const services = [
    {
      title: "Digital Marketing",
      icon: <Megaphone size={16} />,
      items: [
        { name: "Digital Marketing Strategy", path: "/services/digital-marketing/strategy" },
        { name: "Digital Marketing Audit", path: "/services/digital-marketing/audit" },
        { name: "Content Marketing", path: "/services/digital-marketing/content-marketing" },
        { name: "Email Marketing", path: "/services/digital-marketing/email-marketing" },
        { name: "Reputation Management", path: "/services/digital-marketing/reputation-management" },
      ],
      path: "/services/digital-marketing",
      highlight: true
    },
    {
      title: "Social Media Marketing",
      icon: <Hash size={16} />,
      items: [
        { name: "Social Media Optimization", path: "/services/SMM/social-media-optimization" },
        { name: "Social Media Management", path: "/services/SMM/social-media-management" },
        { name: "Social Media Advertising", path: "/services/SMM/social-media-advertising" }
      ],
      path: "/services/social-media"
    },
    {
      title: "Website Design & Development",
      icon: <Globe size={16} />,
      items: [
        { name: "WordPress Development", path: "/services/WebDesDev/wordpress-development" },
        { name: "E-commerce Web Development", path: "/services/WebDesDev/ecommerce-development" },
        { name: "Custom Website Design", path: "/services/WebDesDev/custom-web-development" },
        { name: "Website Redesign Service", path: "/services/WebDesDev/website-redesign" },
        { name: "Website Hosting Services", path: "/services/WebDesDev/website-hosting" }
      ],
      path: "/services/web-development"
    },
    {
      title: "SEO",
      icon: <Search size={16} />,
      items: [
        { name: "Technical SEO Services", path: "/services/seo/technical-seo" },
        { name: "Local SEO Services", path: "/services/seo/local-seo" },
        { name: "Voice Search Optimization", path: "/services/seo/voice-search-optimization" },
        { name: "Generative Engine Optimization", path: "/services/seo/generative-seo" },
        { name: "Answer Engine Optimization", path: "/services/seo/answer-engine-optimization" }
      ],
      path: "/services/seo"
    },
    {
      title: "Video SEO",
      icon: <Video size={16} />,
      items: [
        { name: "YouTube Optimization", path: "/services/video-seo/youtube-seo" },
        { name: "Customer Testimonial Videos", path: "/services/video-seo/customer-testimonial-videos" },
        { name: "Vlog Video Production Services", path: "/services/video-seo/vlog-video-production" }
      ],
      path: "/services/video-seo"
    },
    {
      title: "Digital Advertising",
      icon: <TrendingUp size={16} />,
      items: [
        { name: "Pay Per Click", path: "/services/digital-ad/ppcServices" },
        { name: "Facebook", path: "/services/digital-ad/facebook-ads" },
        { name: "Instagram", path: "/services/digital-ad/instagram-ads" },
        { name: "X", path: "/services/digital-ad/twitter-ads" },
        { name: "LinkedIn", path: "/services/digital-ad/linkedin-ads" },
        { name: "Pinterest", path: "/services/digital-ad/pinterest-ads" },
        { name: "Conversion Rate Optimization", path: "/services/conversion-optimization" },
        { name: "Amazon PPC Services", path: "/services/digital-ad/amazon-ppc" }
      ],
      path: "/services/ppc"
    },
    {
      title: "Application Development",
      icon: <ShoppingCart size={16} />,
      items: [
        { name: "E-commerce App Development", path: "/services/AppDevelopment/ecommerce-app-development" },
        { name: "Ed-tech App Development", path: "/services/AppDevelopment/edtech-app-development" },
        { name: "Payment Gateway Integration", path: "/services/AppDevelopment/payment-gateway-integration" }
      ],
      path: "/services/app-development"
    }
  ];

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
    if (closeMenu) closeMenu();
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (isMobile) return <div />;

  return (
    <div ref={menuRef} className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="font-medium hover:text-blue-500 transition flex items-center gap-1"
      >
        Services
        <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="
          absolute left-1/2 -translate-x-1/2 top-14
          w-[1150px] max-w-[95vw]
          rounded-2xl
          bg-[#0b1220]/95 backdrop-blur-2xl
          border border-white/10
          shadow-[0_30px_90px_rgba(0,0,0,0.8)]
          overflow-hidden z-50
        ">

          {/* HEADER */}
          <div className="px-8 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <p className="text-xs opacity-80 mt-1">
              Performance-driven marketing & development solutions
            </p>
          </div>

          {/* GRID */}
          <div className="p-6 grid grid-cols-4 gap-4">

            {services.map((service, i) => (
              <div
                key={i}
                className={`
                  group p-4 rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  hover:bg-white/[0.08]
                  transition-all duration-300
                  ${service.highlight ? "col-span-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10" : ""}
                `}
              >

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                    {service.icon}
                  </div>

                  <h3
                    onClick={() => goTo(service.path)}
                    className="text-sm font-semibold text-white cursor-pointer hover:text-blue-400"
                  >
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-[3px]">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => goTo(item.path)}
                        className="
                          flex items-center justify-between w-full
                          text-[11px] text-gray-400
                          hover:text-blue-400
                          transition group/item
                        "
                      >
                        <span>{item.name}</span>
                        <ArrowRight
                          size={11}
                          className="opacity-0 group-hover/item:opacity-100 transition"
                        />
                      </button>
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between bg-white/[0.03]">
            <span className="text-xs text-gray-400">
              Not sure what fits your business?
            </span>

            <button
              onClick={() => goTo("/contact")}
              className="
                px-4 py-2 rounded-lg
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white text-xs
                hover:scale-105 transition
              "
            >
              Free Strategy Call
            </button>
          </div>

        </div>
      )}

    </div>
  );
}