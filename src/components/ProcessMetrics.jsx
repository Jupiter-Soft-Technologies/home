import { useEffect, useState } from "react";

const metrics = [
{ label: "Average Traffic Growth", value: 320 },
{ label: "Lead Generation Increase", value: 180 },
{ label: "Average PageSpeed Score", value: 98 },
];

export default function ProcessMetrics(){

const [counts,setCounts]=useState(metrics.map(()=>0))

useEffect(()=>{

const interval=setInterval(()=>{

setCounts(prev =>
prev.map((num,i)=>{
const target=metrics[i].value
if(num>=target) return target
return num+Math.ceil(target/40)
})
)

},40)

return()=>clearInterval(interval)

},[])

return(

<section className="max-w-6xl mx-auto py-24 px-6">

<h2 className="text-4xl font-bold text-center mb-16">
Results Our Process Delivers
</h2>

<div className="grid md:grid-cols-3 gap-10">

{metrics.map((metric,i)=>(

<div
key={i}
className="bg-white/5 border border-white/10 p-10 rounded-xl text-center"
>

<h3 className="text-5xl font-bold text-purple-400 mb-4">
{counts[i]}%
</h3>

<p className="text-gray-400 text-sm">
{metric.label}
</p>

</div>

))}

</div>

</section>

)

}