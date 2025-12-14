import React from "react";
import { Button } from "../../../ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact & Appointments</h1>
        <p className="opacity-90">
          Get in touch with us for consultations, emergencies, or inquiries.
        </p>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <p>123 Dental Avenue, New York, NY 10001</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <p>info@brightsmile.com</p>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-blue-600" />
              <p>
                Mon-Fri: 8AM – 6PM <br />
                Sat: 9AM – 3PM
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow space-y-4">
            <input
              className="w-full p-3 rounded border dark:bg-gray-950"
              placeholder="Full Name"
            />
            <input
              className="w-full p-3 rounded border dark:bg-gray-950"
              placeholder="Phone Number"
            />
            <select className="w-full p-3 rounded border dark:bg-gray-950">
              <option>Select Service</option>
              <option>General Dentistry</option>
              <option>Cosmetic Dentistry</option>
              <option>Dental Implants</option>
            </select>
            <textarea
              className="w-full p-3 rounded border dark:bg-gray-950"
              placeholder="Message"
              rows="4"
            />
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Request Appointment
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
