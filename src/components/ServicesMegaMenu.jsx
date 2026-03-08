import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Megaphone,
  BarChart3,
  Globe,
  Smartphone
} from "lucide-react";

export default function ServicesMegaMenu({ isMobile, closeMenu }) {

  const navigate = useNavigate();

  const services = [
    {
      title: "SEO",
      icon: <Search className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-500",
      items: [
        { name: "Technical SEO", path: "/seo" },
        { name: "Ecommerce SEO", path: "/seo" },
        { name: "Link Building", path: "/seo" },
        { name: "Local SEO", path: "/seo" }
      ]
    },
    {
      title: "Marketing",
      icon: <Megaphone className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Digital Marketing Strategy", path: "/marketing" },
        { name: "Content Marketing", path: "/marketing" },
        { name: "Email Marketing", path: "/marketing" },
        { name: "Reputation Management", path: "/marketing" }
      ]
    },
    {
      title: "PPC",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "from-emerald-500 to-lime-500",
      items: [
        { name: "Google Ads", path: "/ppc" },
        { name: "Facebook Ads", path: "/ppc" },
        { name: "Instagram Ads", path: "/ppc" },
        { name: "LinkedIn Ads", path: "/ppc" }
      ]
    },
    {
      title: "Website Development",
      icon: <Globe className="w-5 h-5" />,
      color: "from-cyan-500 to-teal-500",
      items: [
        { name: "WordPress Development", path: "/web-development" },
        { name: "Custom Website Design", path: "/web-development" },
        { name: "Website Redesign", path: "/web-development" },
        { name: "Website Hosting", path: "/web-development" }
      ]
    },
    {
      title: "Application Development",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      items: [
        { name: "Android App Development", path: "/app-development" },
        { name: "iOS App Development", path: "/app-development" },
        { name: "Cross Platform Apps", path: "/app-development" },
        { name: "App Maintenance", path: "/app-development" }
      ]
    }
  ];

  const goTo = (path) => {
    navigate(path);
    if (closeMenu) closeMenu();
  };

  /* MOBILE MENU */

  if (isMobile) {
    return (
      <div className="space-y-6">

        {services.map((service, i) => (

          <div key={i}>

            <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
              {service.icon}
              {service.title}
            </h3>

            <div className="space-y-2 ml-6">

              {service.items.map((item, idx) => (

                <button
                  key={idx}
                  onClick={() => goTo(item.path)}
                  className="block text-sm text-gray-600 hover:text-blue-600 transition"
                >
                  {item.name}
                </button>

              ))}

            </div>

          </div>

        ))}

      </div>
    );
  }

  /* DESKTOP MEGA MENU */

  return (

    <div className="relative group">

      {/* NAV BUTTON */}

      <button className="font-medium hover:text-blue-500 transition">
        Services
      </button>

      {/* MEGA MENU */}

      <div
        className="absolute left-1/2 -translate-x-1/2 mt-6 w-[1000px]
        bg-white shadow-2xl rounded-3xl border border-gray-200
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-300
        p-10 z-50"
      >

        <div className="grid grid-cols-5 gap-8">

          {services.map((service, i) => (

            <div
              key={i}
              className="p-4 rounded-xl hover:bg-gray-50 transition"
            >

              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color}
                text-white flex items-center justify-center mb-3`}
              >
                {service.icon}
              </div>

              <h3
                className="font-semibold text-gray-900 mb-3 cursor-pointer hover:text-blue-600"
                onClick={() => goTo(service.items[0].path)}
              >
                {service.title}
              </h3>

              <div className="space-y-2">

                {service.items.map((item, idx) => (

                  <button
                    key={idx}
                    onClick={() => goTo(item.path)}
                    className="block text-sm text-gray-600 hover:text-blue-600 transition"
                  >
                    {item.name}
                  </button>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-10 pt-6 border-t flex justify-between items-center">

          <p className="text-sm text-gray-500">
            Need help choosing a service?
          </p>

          <button
            onClick={() => goTo("/contact")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Free Consultation
          </button>

        </div>

      </div>

    </div>
  );
}