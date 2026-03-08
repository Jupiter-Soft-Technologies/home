import React, { useState } from "react";

function Contact() {

const [service,setService] = useState("SEO")

const services = [
"SEO",
"PPC Advertising",
"Social Media Marketing",
"Web Development",
"App Development"
]

return (

<div className="bg-[#050505] text-white min-h-screen">

{/* HERO */}

<section className="relative py-32 text-center px-6 overflow-hidden">

{/* glow background */}
<div className="absolute w-[650px] h-[650px] bg-blue-600 opacity-20 blur-[220px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

<div className="relative z-10">

<h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
Let's Start Your
<span className="text-blue-500"> Growth Journey</span>
</h1>

<p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
Tell us about your goals and our team will craft a custom strategy to
scale your business online.
</p>

</div>

</section>


{/* TRUST METRICS */}

<section className="py-20 border-t border-white/10">

<div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">

{[
{value:"250%",label:"Average Traffic Growth"},
{value:"180%",label:"Conversion Improvement"},
{value:"50+",label:"Businesses Scaled"}
].map((metric,i)=>(
<div
key={i}
className="bg-white/5 p-10 rounded-xl border border-white/10
hover:bg-white/10 hover:scale-[1.02] transition duration-300"
>

<h3 className="text-4xl font-bold text-blue-500">
{metric.value}
</h3>

<p className="text-gray-400 mt-3">
{metric.label}
</p>

</div>
))}

</div>

</section>


{/* SERVICE SELECTION */}

<section className="py-24 border-t border-white/10 px-6">

<h2 className="text-4xl font-semibold text-center mb-16">
What Service Are You Interested In?
</h2>

<div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">

{services.map((s,i)=>(

<button
key={i}
onClick={()=>setService(s)}
className={`p-6 rounded-xl border text-sm md:text-base font-medium
transition-all duration-300 ${
service===s
? "bg-blue-600 border-blue-600 shadow-lg scale-[1.03]"
: "bg-white/5 border-white/10 hover:bg-white/10 hover:scale-[1.03]"
}`}
>

{s}

</button>

))}

</div>

</section>


{/* CONTACT SECTION */}

<section className="py-24 border-t border-white/10 px-6">

<div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">


{/* FORM */}

<div>

<h2 className="text-3xl font-semibold mb-8">
Tell Us About Your Project
</h2>

<form className="space-y-6">

<input
type="text"
placeholder="Full Name"
className="w-full p-4 bg-white/5 border border-white/10 rounded-lg
focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
/>

<input
type="email"
placeholder="Email Address"
className="w-full p-4 bg-white/5 border border-white/10 rounded-lg
focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
/>

<input
type="text"
placeholder="Company / Website"
className="w-full p-4 bg-white/5 border border-white/10 rounded-lg
focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
/>

<textarea
rows="5"
placeholder="Project Details"
className="w-full p-4 bg-white/5 border border-white/10 rounded-lg
focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
/>

<button
type="submit"
className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg
font-semibold transition duration-300 hover:scale-[1.02]"
>
Send Message →
</button>

</form>

</div>


{/* CONTACT INFO */}

<div className="space-y-8">

{[
{
title:"Email Us",
content:"contact@jupitersofttechnologies.com",
link:"mailto:contact@jupitersofttechnologies.com"
},
{
title:"Call Us",
content:"+1 (720) 764-9455",
link:"tel:+17207649455"
},
{
title:"Office Location",
content:"30 N Gould St, STE #36521, Sheridan, WY 82801 US",
link:  "https://maps.app.goo.gl/LK1AS3jf47qHVjkm7"
}
].map((item,i)=>(
<div
key={i}
className="p-8 bg-white/5 border border-white/10 rounded-xl
hover:bg-white/10 hover:scale-[1.02] transition duration-300"
>

<h4 className="text-xl font-semibold text-blue-500">
{item.title}
</h4>

{item.link ? (
<a href={item.link} className="text-gray-400">
{item.content}
</a>
) : (
<p className="text-gray-400">
{item.content}
</p>
)}

</div>
))}

</div>

</div>

</section>


{/* GOOGLE MAP */}

<section className="py-24 border-t border-white/10 px-6">

<h2 className="text-4xl text-center font-semibold mb-16">
Find Us
</h2>

<div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-lg">

<iframe
title="location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.205710858949!2d-106.95496288418802!3d44.7976034356577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66677f%3A0x8f85bd068d1afb8a!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e1!3m2!1sen!2sin!4v1772993689119!5m2!1sen!2sin"
className="w-full h-[400px]"
></iframe>

</div>

</section>


{/* CONSULTATION PROCESS */}

<section className="py-24 border-t border-white/10 text-center">

<h2 className="text-4xl font-semibold mb-16">
Our Consultation Process
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{[
{
title:"Share Your Goals",
desc:"Tell us about your business objectives and challenges."
},
{
title:"Strategy Development",
desc:"Our team analyzes opportunities and builds a plan."
},
{
title:"Launch & Scale",
desc:"We execute campaigns and optimize for growth."
}
].map((step,i)=>(

<div
key={i}
className="p-10 bg-white/5 border border-white/10 rounded-xl
hover:bg-white/10 hover:scale-[1.03] transition duration-300"
>

<h3 className="text-blue-500 text-xl font-semibold">
{step.title}
</h3>

<p className="text-gray-400 mt-4 leading-relaxed">
{step.desc}
</p>

</div>

))}

</div>

</section>


{/* FINAL CTA */}

<section className="py-24 text-center bg-gradient-to-r from-gray-900 to-black">

<h2 className="text-4xl font-semibold">
Ready to Start?
</h2>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto">
Book a strategy session and discover how we can scale your business.
</p>

<button className="mt-8 px-8 py-4 bg-blue-600 rounded-lg
hover:bg-blue-700 hover:scale-[1.05] transition duration-300 font-semibold">
Book Free Strategy Call →
</button>

</section>

</div>

)

}

export default Contact