import React from "react";
import { Helmet } from "react-helmet";
import { Player } from "@lottiefiles/react-lottie-player";

function AboutUs() {

const testimonials = [
{
name:"Michael Carter",
text:"Jupiter Soft Technologies transformed our online presence and helped us generate consistent leads through SEO and paid advertising."
},
{
name:"Sophia Williams",
text:"Their web development and marketing strategy helped us scale globally."
},
{
name:"Daniel Rodriguez",
text:"A highly professional digital marketing agency delivering measurable ROI."
}
];

return (

<div className="bg-white text-gray-800 overflow-hidden">

<Helmet>

<title>
About Jupiter Soft Technologies | Digital Marketing & SEO Experts
</title>

<meta
name="description"
content="Jupiter Soft Technologies is a digital marketing agency providing SEO services, PPC advertising, web development, social media marketing, and AI powered marketing strategies."
/>

<meta
name="keywords"
content="digital marketing agency, SEO services, PPC advertising, web development company, social media marketing agency"
/>

</Helmet>

{/* HERO */}

<section className="pt-40 pb-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full"></div>

<div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div>

<h1 className="text-5xl font-bold text-gray-900 leading-tight">

Building Powerful Digital Growth Systems

</h1>

<p className="mt-6 text-lg text-gray-600">

Jupiter Soft Technologies is a global digital marketing agency
helping businesses scale using SEO, paid advertising,
web development, and AI-driven growth strategies.

</p>

</div>

<div>

<Player
autoplay
loop
src="https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json"
style={{ height: "320px", width: "320px" }}
/>

</div>

</div>

</section>

{/* STORY */}

<section className="py-28">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-4xl font-bold text-gray-900">

Our Mission

</h2>

<p className="mt-6 text-gray-600 leading-relaxed">

Our mission is to help businesses dominate online markets through
powerful digital marketing strategies, high-performance websites,
and scalable marketing systems.

</p>

<p className="mt-6 text-gray-600 leading-relaxed">

We combine advanced SEO techniques, paid advertising campaigns,
conversion optimization, and modern web engineering to
deliver measurable business growth.

</p>

</div>

<div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl h-[320px] flex items-center justify-center text-white text-2xl font-semibold shadow-xl">

Innovation • Strategy • Growth

</div>

</div>

</section>

{/* EXPERTISE */}

<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-gray-900">

Our Expertise

</h2>

<div className="grid md:grid-cols-4 gap-10 mt-16">

{[
"SEO Optimization",
"PPC Advertising",
"Social Media Marketing",
"Web Development",
"Mobile App Development",
"Conversion Optimization",
"Marketing Automation",
"AI Analytics"
].map((item,i)=>(

<div key={i}
className="p-8 rounded-xl bg-white border shadow-sm transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
>

<p className="font-medium text-center">{item}</p>

</div>

))}

</div>

</div>

</section>

{/* TIMELINE */}

<section className="py-28 bg-white">

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-gray-900">

Our Journey

</h2>

<div className="grid md:grid-cols-4 gap-12 mt-16">

{[
["2019","Company Founded"],
["2020","Expanded Marketing Services"],
["2022","Global Client Base"],
["2024","AI Driven Marketing Systems"]
].map((item,i)=>(

<div key={i}>

<div className="text-4xl font-bold text-blue-600">{item[0]}</div>

<h3 className="mt-4 font-semibold">{item[1]}</h3>

</div>

))}

</div>

</div>

</section>

{/* TESTIMONIALS */}

<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-gray-900">

What Our Clients Say

</h2>

<div className="grid md:grid-cols-3 gap-10 mt-16">

{testimonials.map((t,i)=>(

<div key={i} className="p-8 bg-white rounded-xl shadow border">

<p className="text-gray-600 italic">"{t.text}"</p>

<div className="mt-6 font-semibold">{t.name}</div>

</div>

))}

</div>

</div>

</section>

{/* CTA */}

<section className="py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

<div className="max-w-4xl mx-auto text-center px-6">

<h2 className="text-4xl font-bold">

Ready To Grow Your Business?

</h2>

<p className="mt-6 text-lg opacity-90">

Partner with Jupiter Soft Technologies and build a
powerful digital growth engine.

</p>

<button className="mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:scale-105 transition">

Start Your Project

</button>

</div>

</section>

{/* HIDDEN SEO */}

<div className="sr-only">

Jupiter Soft Technologies is a digital marketing agency
specializing in SEO services, pay per click advertising,
social media marketing, web development, mobile app
development, AI marketing solutions, conversion
optimization and growth marketing strategies.

</div>

</div>

);

}

export default AboutUs;