import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="text-xl font-bold text-blue-600">BrightSmile Dental</span>
        <div className="space-x-6 text-sm font-medium">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/services" className="hover:text-blue-600">Services</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
