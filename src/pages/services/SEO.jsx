import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection";
import ahrefs from "../../assets/ahrefs.svg";
import semrush from "../../assets/Semrush.svg";
import gsc from "../../assets/gsc.png";
import analytics from "../../assets/googleanalytics.svg";
import screamingfrog from "../../assets/screamingfrog.svg";
import surfer from "../../assets/surferseo.png";

const benefits = [
"Increase organic search traffic",
"Generate qualified leads",
"Improve brand visibility",
"Build long-term digital authority"
];

const services = [
{
title:"Technical SEO",
desc:"Complete technical audits, site architecture optimization and performance improvements."
},
{
title:"Keyword Strategy",
desc:"Data-driven keyword research to target high-converting search queries."
},
{
title:"On-Page Optimization",
desc:"Optimizing meta tags, content structure, internal linking and semantic SEO."
},
{
title:"Authority Backlinks",
desc:"High-quality link building to strengthen domain authority."
},
{
title:"Local SEO",
desc:"Google Business Profile optimization and local ranking improvements."
},
{
title:"SEO Analytics",
desc:"Detailed reporting dashboards tracking rankings, traffic and conversions."
}
];

const process = [
"SEO Audit & Competitor Research",
"Keyword & Topic Mapping",
"Technical Optimization",
"Content & On-Page SEO",
"Backlink Authority Building",
"Performance Tracking"
];

const tools = [
{ src: ahrefs, alt: "Ahrefs" },
{ src: semrush, alt: "SEMrush" },
{ src: gsc, alt: "Google Search Console" },
{ src: analytics, alt: "Google Analytics" },
{ src: screamingfrog, alt: "Screaming Frog" },
{ src: surfer, alt: "Surfer SEO" }
];
const faqs = [
{
q:"How long does SEO take?",
a:"SEO typically takes 3-6 months to see measurable improvements depending on competition."
},
{
q:"Do you provide monthly reports?",
a:"Yes, we provide transparent reports covering rankings, traffic growth and conversions."
},
{
q:"Do you guarantee rankings?",
a:"No ethical SEO company can guarantee rankings but our strategies consistently improve visibility."
}
];



export default function SEO(){

const navigate = useNavigate();
const [open,setOpen]=useState(null)

return(

<div className="bg-[#0b0f1a] text-white">

{/* HERO */}

<section className="py-32 text-center px-6">

<h1 className="text-5xl md:text-6xl font-bold">
SEO Services That
<span className="text-blue-500"> Grow Your Business</span>
</h1>

<p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg">
Our SEO strategies help businesses rank higher on Google,
generate organic traffic and increase leads.
</p>

<button
onClick={()=>navigate("/seo-pricing")}
className="mt-10 px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
>
Explore Our SEO Packages →
</button>

</section>


{/* BENEFITS */}

<AnimatedSection>

<section className="py-24 text-center">

<h2 className="text-4xl mb-16">
Why SEO Matters
</h2>

<div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

{benefits.map((item,i)=>(

<div key={i}
className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-600/20 transition">

{item}

</div>

))}

</div>

</section>

</AnimatedSection>

{/* 🔥 ULTRA PREMIUM SEO SUB SERVICES */}

<AnimatedSection>

<section className="py-28 px-6 relative overflow-hidden">

{/* Background Glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/20 blur-[160px] rounded-full"></div>

<div className="relative max-w-7xl mx-auto">

{/* Heading */}
<div className="text-center">
<h2 className="text-4xl md:text-6xl font-bold leading-tight">
Explore Our
<span className="text-blue-500"> SEO Solutions</span>
</h2>

<p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
Advanced SEO services designed to dominate Google rankings,
AI search engines, and next-gen search experiences.
</p>
</div>

{/* Cards */}
<div className="grid md:grid-cols-3 gap-10 mt-20">

{/* Technical SEO */}
<div
onClick={()=>navigate("/services/seo/technical-seo")}
className="group cursor-pointer relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl 
hover:border-blue-500 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

<div className="relative">
<div className="text-4xl mb-6 text-blue-500">⚙️</div>

<h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">
Technical SEO
</h3>

<p className="text-gray-400 mt-4 leading-relaxed">
Fix technical issues, improve performance, and build a strong SEO foundation.
</p>

<div className="mt-8 flex justify-between items-center">
<span className="text-sm text-gray-500">Core Foundation</span>
<span className="text-blue-500 group-hover:translate-x-2 transition">→</span>
</div>
</div>
</div>

{/* Local SEO */}
<div
onClick={()=>navigate("/services/seo/local-seo")}
className="group cursor-pointer relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl 
hover:border-blue-500 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

<div className="relative">
<div className="text-4xl mb-6 text-blue-500">📍</div>

<h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">
Local SEO
</h3>

<p className="text-gray-400 mt-4 leading-relaxed">
Rank higher in Google Maps and capture local customers ready to buy.
</p>

<div className="mt-8 flex justify-between items-center">
<span className="text-sm text-gray-500">High Intent Leads</span>
<span className="text-blue-500 group-hover:translate-x-2 transition">→</span>
</div>
</div>
</div>

{/* Voice Search */}
<div
onClick={()=>navigate("/services/seo/voice-search")}
className="group cursor-pointer relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl 
hover:border-blue-500 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

<div className="relative">
<div className="text-4xl mb-6 text-blue-500">🎤</div>

<h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">
Voice Search Optimization
</h3>

<p className="text-gray-400 mt-4 leading-relaxed">
Optimize for conversational queries and voice-based search behavior.
</p>

<div className="mt-8 flex justify-between items-center">
<span className="text-sm text-gray-500">Future Search</span>
<span className="text-blue-500 group-hover:translate-x-2 transition">→</span>
</div>
</div>
</div>

{/* Generative SEO */}
<div
onClick={()=>navigate("/services/seo/generative-seo")}
className="group cursor-pointer relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl 
hover:border-blue-500 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

<div className="relative">
<div className="text-4xl mb-6 text-blue-500">🤖</div>

<h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">
Generative SEO (GEO)
</h3>

<p className="text-gray-400 mt-4 leading-relaxed">
Optimize your brand for AI engines like ChatGPT and Google SGE.
</p>

<div className="mt-8 flex justify-between items-center">
<span className="text-sm text-gray-500">AI Visibility</span>
<span className="text-blue-500 group-hover:translate-x-2 transition">→</span>
</div>
</div>
</div>

{/* Answer Engine (FEATURED) */}
<div
onClick={()=>navigate("/services/seo/answer-engine-optimization")}
className="group cursor-pointer relative bg-gradient-to-b from-blue-600/20 to-transparent border border-blue-500 p-10 rounded-3xl 
hover:-translate-y-3 transition-all duration-500 scale-105 shadow-[0_0_40px_rgba(59,130,246,0.3)] overflow-hidden"
>
<div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-60"></div>

<div className="relative">
<div className="text-4xl mb-6 text-blue-300">💡</div>

<h3 className="text-2xl font-semibold text-blue-300">
Answer Engine Optimization
</h3>

<p className="text-gray-300 mt-4 leading-relaxed">
Get featured in AI answers, snippets, and zero-click search results.
</p>

<div className="mt-8 flex justify-between items-center">
<span className="text-sm text-blue-300">🔥 High Impact</span>
<span className="text-blue-300 group-hover:translate-x-2 transition">→</span>
</div>
</div>
</div>

</div>

</div>

</section>

</AnimatedSection>

{/* SERVICES */}

<AnimatedSection>

<section className="py-24 px-6">

<h2 className="text-4xl text-center mb-16">
Our SEO Services
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{services.map((s,i)=>(

<div key={i}
className="p-8 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition">

<h3 className="text-blue-400 text-xl mb-3">
{s.title}
</h3>

<p className="text-gray-400">
{s.desc}
</p>

</div>

))}

</div>

</section>

</AnimatedSection>


{/* PROCESS */}

<AnimatedSection>

<section className="py-24 text-center">

<h2 className="text-4xl mb-16">
Our SEO Process
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

{process.map((step,i)=>(

<div key={i}
className="p-8 bg-white/5 border border-white/10 rounded-xl">

<h3 className="text-blue-500">
Step {i+1}
</h3>

<p className="text-gray-400 mt-2">
{step}
</p>

</div>

))}

</div>

</section>

</AnimatedSection>


{/* TOOLS */}

<AnimatedSection>

<section className="py-24 text-center">

<h2 className="text-4xl mb-16">
SEO Tools We Use
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-6xl mx-auto items-center">

{tools.map((tool,i)=>(
    
<div
key={i}
className="flex flex-col items-center justify-center
opacity-70 hover:opacity-100 transition
grayscale hover:grayscale-0
transform hover:scale-110"
>

<img
src={tool.src}
alt={tool.alt}
className="h-14 object-contain"
/>

<p className="text-gray-400 text-sm mt-3">
{tool.alt}
</p>

</div>

))}

</div>

</section>

</AnimatedSection>


{/* CASE STUDIES */}

<AnimatedSection>

<section className="py-24 text-center">

<h2 className="text-4xl mb-16">
SEO Case Study Results
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

<div className="p-8 bg-white/5 border border-white/10 rounded-xl">
Dental Clinic
<p className="text-gray-400 mt-3">
320% traffic growth
</p>
</div>

<div className="p-8 bg-white/5 border border-white/10 rounded-xl">
Local Plumbing
<p className="text-gray-400 mt-3">
4X lead increase
</p>
</div>

<div className="p-8 bg-white/5 border border-white/10 rounded-xl">
SaaS Startup
<p className="text-gray-400 mt-3">
210% more signups
</p>
</div>

</div>

</section>

</AnimatedSection>


{/* TRAFFIC TIMELINE */}

<AnimatedSection>

<section className="py-24 text-center">

<h2 className="text-4xl mb-16">
SEO Traffic Growth Timeline
</h2>

<div className="max-w-4xl mx-auto space-y-6">

<div className="p-6 bg-white/5 border border-white/10 rounded-xl">
Month 1 – Technical SEO Fix
</div>

<div className="p-6 bg-white/5 border border-white/10 rounded-xl">
Month 2 – Keyword Optimization
</div>

<div className="p-6 bg-white/5 border border-white/10 rounded-xl">
Month 3 – Content Authority
</div>

<div className="p-6 bg-white/5 border border-white/10 rounded-xl">
Month 6 – Top Google Rankings
</div>

</div>

</section>

</AnimatedSection>


{/* EXPLORE PACKAGES CTA */}

<section className="py-20 text-center">

<h2 className="text-3xl font-semibold mb-6">
Ready to See Our SEO Packages?
</h2>

<p className="text-gray-400 mb-10 max-w-xl mx-auto">
Explore our transparent SEO pricing plans designed for startups,
local businesses, and growing brands.
</p>

<button
onClick={()=>navigate("/seo-pricing")}
className="px-12 py-4 text-lg font-semibold rounded-xl
bg-gradient-to-r from-blue-600 to-purple-600
hover:from-blue-700 hover:to-purple-700
shadow-lg hover:shadow-blue-500/30
transition duration-300 transform hover:scale-105"
>

Explore Our SEO Packages →

</button>

</section>


{/* FAQ */}

<AnimatedSection>

<section className="py-24 px-6 max-w-4xl mx-auto">

<h2 className="text-4xl text-center mb-16">
SEO FAQs
</h2>

{faqs.map((faq,i)=>(

<div key={i} className="border-b border-white/10 py-6">

<button
onClick={()=>setOpen(open===i?null:i)}
className="w-full text-left flex justify-between">

{faq.q}

<span>{open===i?"−":"+"}</span>

</button>

{open===i &&(

<p className="text-gray-400 mt-3">
{faq.a}
</p>

)}

</div>

))}

</section>

</AnimatedSection>




{/* CONTACT */}

<section className="py-24 text-center bg-[#111827] px-6">

<h2 className="text-4xl mb-10">
Get Your Free SEO Audit
</h2>

<form className="max-w-3xl mx-auto space-y-6">

<input className="w-full p-4 bg-white/5 border border-white/10 rounded-lg" placeholder="Your Name"/>
<input className="w-full p-4 bg-white/5 border border-white/10 rounded-lg" placeholder="Your Email"/>
<input className="w-full p-4 bg-white/5 border border-white/10 rounded-lg" placeholder="Your Website"/>

<textarea rows="4"
className="w-full p-4 bg-white/5 border border-white/10 rounded-lg"
placeholder="Tell us about your business"/>

<button className="px-8 py-4 bg-blue-600 rounded-lg">
Submit →
</button>

</form>

</section>


{/* STICKY CTA */}

<div className="fixed bottom-0 left-0 w-full bg-blue-600 text-center py-4">
Ready to rank higher? Call Now: 9999999999
</div>

</div>

)

}