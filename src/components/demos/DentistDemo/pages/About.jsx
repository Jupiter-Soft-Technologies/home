import React from "react";

export default function About() {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Our Clinic</h2>
      <p className="text-gray-600 max-w-3xl mb-12">
        BrightSmile Dental Clinic has been providing ethical, modern,
        and personalized dental care for over 15 years.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {["Dr. Emily Carter", "Dr. John Smith", "Dr. Anna Lee"].map((doc, i) => (
          <div key={i} className="p-6 rounded-xl shadow text-center">
            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4"></div>
            <h3>{doc}</h3>
            <p className="text-gray-600">Senior Dental Specialist</p>
          </div>
        ))}
      </div>
    </div>
  );
}
