import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#0B0B12] text-gray-400 pt-20 pb-10 overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Newsletter Glass Box */}
        <div className="mb-20 p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Stay Ahead with <span className="text-[#A855F7]">Digital Insights</span>
              </h3>
              <p className="mt-4 text-gray-400">
                Subscribe to receive marketing strategies, growth hacks, and
                tech insights directly to your inbox.
              </p>
            </div>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-l-lg bg-black/40 border border-white/10 focus:outline-none text-white"
              />
              <button className="px-6 py-3 rounded-r-lg bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-5 gap-12">

          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              <span className="text-[#A855F7]">Jupiter</span>Soft
            </h2>

            <p className="mt-6 text-sm leading-relaxed">
              We build scalable digital ecosystems combining SEO, performance
              marketing, web & app engineering to drive predictable growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-9 h-9 flex items-center justify-center rounded-full 
                               bg-white/5 border border-white/10
                               hover:border-[#A855F7] hover:shadow-[0_0_15px_#A855F7]
                               transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "SEO Optimization",
                "Paid Advertising",
                "Social Media Marketing",
                "Web Development",
                "App Development",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-[#A855F7] transition relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-[#7C3AED] to-[#A855F7] group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3 text-sm">
              {["New York", "Los Angeles", "Chicago", "Houston", "Seattle"].map(
                (city, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-[#A855F7] transition"
                  >
                    {city}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Services", "Case Studies", "Contact"].map(
                (link, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-[#A855F7] transition"
                  >
                    {link}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>📍 123 Business Street, NY 10001</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@jupitersoft.com</li>
            </ul>

            <button
              className="mt-6 px-5 py-2 rounded-md text-white font-medium
                         border border-[#7C3AED]
                         hover:shadow-[0_0_20px_#A855F7]
                         hover:bg-gradient-to-r from-[#7C3AED] to-[#A855F7]
                         transition-all duration-300"
            >
              Download Profile
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} JupiterSoftTechnologies. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-[#A855F7] cursor-pointer transition">
              Terms & Conditions
            </span>
            <span className="hover:text-[#A855F7] cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-[#A855F7] cursor-pointer transition">
              Refund Policy
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
