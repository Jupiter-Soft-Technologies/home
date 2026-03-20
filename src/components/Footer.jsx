import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";

function Footer() {
  const form = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const validate = (data) => {
    const newErrors = {};

    if (!data.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!data.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.user_email)) {
      newErrors.user_email = "Invalid email format";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(data.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      phone: countryCode + " " + form.current.phone.value,
      message: form.current.message.value,
      honeypot: form.current.honeypot.value,
    };

    if (formData.honeypot) return;

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        "service_9l00qaa",
        "template_6ads65m",
        form.current,
        "MeJGLo1n0E50tSA4I"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        toast.success("Message sent successfully 🚀");
        form.current.reset();
        setTimeout(() => setSuccess(false), 2000);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0B0B12] via-[#111827] to-[#0F172A] text-gray-400 pt-28 pb-10 overflow-hidden">

      <Toaster position="top-right" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600 opacity-20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* CONTACT FORM */}
        <div className="mb-24 p-14 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          <div className="grid md:grid-cols-2 gap-14 items-start">

            <div>
              <h3 className="text-4xl font-bold text-white leading-tight">
                Let’s Build Something Great
              </h3>

              <p className="mt-5 text-gray-400 text-lg leading-relaxed max-w-md">
                Tell us about your project and our team will get back to you
                with a strategy to grow your business.
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4"
            >
              <input type="text" name="honeypot" className="hidden" />

              {/* NAME */}
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className={`w-full px-6 py-4 bg-black/40 border rounded-xl text-white focus:ring-2 focus:ring-purple-500 outline-none ${
                    errors.user_name ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.user_name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.user_name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className={`w-full px-6 py-4 bg-black/40 border rounded-xl text-white focus:ring-2 focus:ring-purple-500 outline-none ${
                    errors.user_email ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.user_email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.user_email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-4 py-4 bg-black/40 border border-white/10 rounded-xl text-white"
                  >
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={`flex-1 px-6 py-4 bg-black/40 border rounded-xl text-white focus:ring-2 focus:ring-purple-500 outline-none ${
                      errors.phone ? "border-red-500" : "border-white/10"
                    }`}
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/g, ""))
                    }
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`w-full px-6 py-4 bg-black/40 border rounded-xl text-white min-h-[120px] focus:ring-2 focus:ring-purple-500 outline-none ${
                    errors.message ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300
                bg-gradient-to-r from-[#7C3AED] to-[#A855F7]
                ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}
                ${success ? "ring-4 ring-green-400 animate-pulse" : ""}`}
              >
                {loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER GRID */}
        <div className="grid md:grid-cols-5 gap-12">

          <div>
            <img
              src={logo}
              alt="JST Logo"
              onClick={() => navigate("/")}
              className="w-44 mb-6 hover:scale-105 cursor-pointer transition-transform duration-300"
            />

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              We build scalable digital ecosystems combining SEO, performance
              marketing, web & app engineering to drive predictable growth.
            </p>

            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-white/5 border border-white/10
                    hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
                    hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "SEO Optimization", path: "/services/seo" },
                { name: "Paid Advertising", path: "/services/ppc" },
                { name: "Social Media Marketing", path: "/services/social-media" },
                { name: "Web Development", path: "/services/web-development" },
                { name: "App Development", path: "/services/app-development" },
              ].map((item, i) => (
                <li
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="cursor-pointer hover:text-purple-400 transition"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Service Areas</h4>
            <ul className="space-y-3 text-sm">
              {["New York", "Los Angeles", "Chicago", "Houston", "Seattle"].map(
                (city, i) => (
                  <li key={i} className="cursor-pointer hover:text-purple-400 transition">
                    {city}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Case Studies", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((link, i) => (
                <li
                  key={i}
                  onClick={() => navigate(link.path)}
                  className="cursor-pointer hover:text-purple-400 transition"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>📍 30 N GOULD st,STE #37621, Sheridan, WY 82801</li>
              <li>📞 +1 (720) 764-9455</li>
              <li>✉️ jupitersofttechnologies@gmail.com</li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-20 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} JST Technologies. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;