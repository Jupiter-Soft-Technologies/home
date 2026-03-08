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