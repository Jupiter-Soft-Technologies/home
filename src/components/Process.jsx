import React, { useState, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import ProcessTimeline from "./ProcessTimeline";
import {
ClipboardList,
Palette,
Code2,
Rocket,
Search,
Lightbulb,
TrendingUp,
Database,
Cloud,
Cpu
} from "lucide-react";

const steps = [
{
title:"Discovery",
desc:"Understanding business goals, competitors and user behaviour before planning the project.",
icon:Search
},
{
title:"Strategy",
desc:"Creating a clear roadmap aligned with business objectives and growth strategy.",
icon:Lightbulb
},
{
title:"Design",
desc:"Designing high-conversion UI/UX experiences focused on usability and engagement.",
icon:Palette
},
{
title:"Development",
desc:"Building scalable, high-performance digital products using modern technologies.",
icon:Code2
},
{
title:"Launch",
desc:"Deployment, optimization and long-term growth support for continuous success.",
icon:Rocket
}
];

const tools=[
{icon:Code2,name:"React"},
{icon:Database,name:"Node.js"},
{icon:Cloud,name:"AWS"},
{icon:Cpu,name:"Tailwind"},
{icon:TrendingUp,name:"SEO Tools"}
];

const timeline=[
{week:"Week 1",title:"Strategy & Planning"},
{week:"Week 2",title:"UX/UI Design"},
{week:"Week 3",title:"Development"},
{week:"Week 4",title:"Testing & Launch"}
];

function TiltCard({step,index}){

const ref=useRef(null)
const Icon=step.icon

const move=(e)=>{

const rect=ref.current.getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

const centerX=rect.width/2
const centerY=rect.height/2

const rotateX=((y-centerY)/20)*-1
const rotateY=(x-centerX)/20

ref.current.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
}

const leave=()=>{
ref.current.style.transform="rotateX(0deg) rotateY(0deg)"
}

return(

<div className="relative">

<div
ref={ref}
onMouseMove={move}
onMouseLeave={leave}
className="bg-white/5 border border-white/10 p-10 rounded-xl backdrop-blur-xl transition-transform"
>

<div className="mb-6 flex justify-center">
<Icon size={36} className="text-purple-400"/>
</div>

<h3 className="text-2xl font-semibold mb-4">
{step.title}
</h3>

<p className="text-gray-400 text-sm">
{step.desc}
</p>

<div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
0{index+1}
</div>

</div>

</div>

)
}

function FAQ(){

const [open,setOpen]=useState(null)

const faqs=[
{
q:"How long does a project usually take?",
a:"Most projects take between 3-6 weeks depending on complexity and requirements."
},
{
q:"Do you provide support after launch?",
a:"Yes. We provide ongoing support, optimization and maintenance."
},
{
q:"Can you redesign an existing website?",
a:"Absolutely. We frequently redesign websites to improve performance and conversions."
}
]

return(

<div className="max-w-4xl mx-auto">

{faqs.map((f,i)=>(
<div key={i} className="border-b border-white/10 py-5">

<button
onClick={()=>setOpen(open===i?null:i)}
className="flex justify-between w-full text-left text-lg font-medium"
>
{f.q}
<span>{open===i?"−":"+"}</span>
</button>

{open===i &&(
<p className="text-gray-400 mt-3 text-sm">
{f.a}
</p>
)}

</div>
))}

</div>

)
}

function Process(){

return(

<AnimatedSection>

<section className="bg-[#0b0f1a] text-white py-32 overflow-hidden">

{/* HERO */}

<div className="text-center max-w-3xl mx-auto mb-28 px-6">

<h1 className="text-5xl font-bold mb-6">
Our Process
</h1>

<p className="text-gray-400 leading-relaxed">
We follow a structured process that transforms ideas into scalable
digital products. Each stage is designed to maximize performance,
usability and business growth.
</p>

</div>

<ProcessTimeline />

{/* TIMELINE PROCESS */}

<div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 mb-32 px-6">

{steps.map((step,i)=>{

const Icon=step.icon

return(

<div key={i} className="text-center">

<div className="mb-4 flex justify-center">
<Icon size={34} className="text-purple-400"/>
</div>

<h3 className="font-semibold mb-2">
{step.title}
</h3>

<p className="text-gray-400 text-sm">
{step.desc}
</p>

</div>

)

})}

</div>

{/* EXECUTION FRAMEWORK */}

<div className="text-center mb-20">

<h2 className="text-4xl font-bold mb-6">
Execution Framework
</h2>

<p className="text-gray-400 max-w-2xl mx-auto">
A refined framework designed to turn ideas into scalable digital products.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto px-6 mb-32">

{steps.slice(1,5).map((step,i)=>(
<TiltCard key={i} step={step} index={i}/>
))}

</div>

{/* PROJECT TIMELINE */}

<div className="max-w-5xl mx-auto text-center mb-32">

<h2 className="text-4xl font-bold mb-12">
Project Timeline
</h2>

<div className="grid md:grid-cols-4 gap-8">

{timeline.map((t,i)=>(
<div key={i} className="bg-white/5 border border-white/10 p-8 rounded-xl">

<h3 className="text-purple-400 font-semibold mb-2">
{t.week}
</h3>

<p className="text-gray-300">
{t.title}
</p>

</div>
))}

</div>

</div>

{/* TOOLS */}

<div className="max-w-5xl mx-auto text-center mb-32">

<h2 className="text-4xl font-bold mb-10">
Technologies We Use
</h2>

<div className="grid md:grid-cols-5 gap-8">

{tools.map((tool,i)=>{

const Icon=tool.icon

return(

<div
key={i}
className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center"
>

<Icon size={32} className="text-purple-400 mb-4"/>

<span className="text-gray-300 text-sm">
{tool.name}
</span>

</div>

)

})}

</div>

</div>

{/* RESULTS */}

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-32 px-6">

<div className="bg-white/5 p-10 rounded-xl border border-white/10 text-center">
<h3 className="text-4xl font-bold text-purple-400 mb-3">320%</h3>
<p className="text-gray-400">Average Traffic Growth</p>
</div>

<div className="bg-white/5 p-10 rounded-xl border border-white/10 text-center">
<h3 className="text-4xl font-bold text-purple-400 mb-3">180%</h3>
<p className="text-gray-400">Lead Generation Increase</p>
</div>

<div className="bg-white/5 p-10 rounded-xl border border-white/10 text-center">
<h3 className="text-4xl font-bold text-purple-400 mb-3">98</h3>
<p className="text-gray-400">Average PageSpeed Score</p>
</div>

</div>

{/* FAQ */}

<div className="mb-32">

<h2 className="text-4xl font-bold text-center mb-10">
Frequently Asked Questions
</h2>

<FAQ/>

</div>

{/* CTA */}

<div className="text-center">

<h2 className="text-4xl font-bold mb-6">
Ready to Build Your Project?
</h2>

<p className="text-gray-400 mb-8">
Let's create a high-performance digital solution for your business.
</p>

<a
href="#contact"
className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-medium transition"
>
Start Your Project
</a>

</div>

</section>

</AnimatedSection>

)

}

export default Process