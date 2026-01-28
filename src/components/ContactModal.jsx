import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ContactModal({ open, onClose, selectedPlan }) {
  const form = useRef();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9l00qaa",
        "template_6ads65m",
        form.current,
        "MeJGLo1n0E50tSA4I"
      )
      .then(
        () => {
          alert("😊 Thanks for reaching out to us 😊");
          form.current.reset();
          onClose();
        },
        (error) => {
          alert("❌ Failed to send. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative animate-fadeIn"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-2 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Tell us about your project & we’ll get back quickly
        </p>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg min-h-[120px] focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Send Query
          </button>
        </form>
      </div>
    </div>
  );
}
