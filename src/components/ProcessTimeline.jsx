import { useEffect, useRef, useState } from "react";
import { Search, Lightbulb, Palette, Code2, Rocket } from "lucide-react";

const steps = [
{
title:"Discovery & Research",
desc:"We analyze the business, audience and competitors to understand opportunities and define the digital strategy.",
icon:Search
},
{
title:"Strategy & Planning",
desc:"Our team creates a roadmap including user flows, architecture and conversion strategy.",
icon:Lightbulb
},
{
title:"UI / UX Design",
desc:"We design modern interfaces optimized for usability, engagement and conversions.",
icon:Palette
},
{
title:"Development",
desc:"Our engineers build scalable and high-performance digital products using modern frameworks.",
icon:Code2
},
{
title:"Launch & Optimization",
desc:"We deploy, test performance and continuously optimize for growth and scalability.",
icon:Rocket
}
];

export default function ProcessTimeline(){

const ref=useRef(null)
const [progress,setProgress]=useState(0)

useEffect(()=>{

const handleScroll=()=>{

const rect=ref.current.getBoundingClientRect()

const windowHeight=window.innerHeight

const visible=windowHeight-rect.top

const total=rect.height

const percent=Math.min(Math.max(visible/total,0),1)

setProgress(percent)

}

window.addEventListener("scroll",handleScroll)

return()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<section ref={ref} className="relative max-w-5xl mx-auto py-32 px-6">

<h2 className="text-4xl font-bold text-center mb-20">
Our Development Journey
</h2>

<div className="relative">

{/* progress line */}

<div className="absolute left-1/2 top-0 w-[4px] h-full bg-white/10 -translate-x-1/2"></div>

<div
className="absolute left-1/2 top-0 w-[4px] bg-purple-500 -translate-x-1/2 transition-all duration-300"
style={{height:`${progress*100}%`}}
></div>

{steps.map((step,i)=>{

const Icon=step.icon

return(

<div
key={i}
className={`flex items-center mb-20 ${
i%2===0?"flex-row":"flex-row-reverse"
}`}
>

<div className="w-1/2 px-8">

<div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-xl">

<div className="mb-4">
<Icon size={32} className="text-purple-400"/>
</div>

<h3 className="text-xl font-semibold mb-3">
{step.title}
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
{step.desc}
</p>

</div>

</div>

<div className="relative w-0">

<div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#0b0f1a]"></div>

</div>

<div className="w-1/2"></div>

</div>

)

})}

</div>

</section>

)

}