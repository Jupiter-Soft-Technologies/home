import { useState } from "react";

const cases = [

{
title:"Dental Clinic",
goal:"Increase patient bookings",
result:"+180% appointments"
},

{
title:"Plumbing Services",
goal:"Generate local leads",
result:"+240% local leads"
},

{
title:"Restaurant Website",
goal:"Increase reservations",
result:"+300% bookings"
}

];

export default function ClientSuccess(){

const [index,setIndex]=useState(0)

const next=()=>{
setIndex((index+1)%cases.length)
}

const prev=()=>{
setIndex((index-1+cases.length)%cases.length)
}

const caseStudy=cases[index]

return(

<section className="max-w-4xl mx-auto py-28 text-center">

<h2 className="text-4xl font-bold mb-10">
Client Success Stories
</h2>

<div className="bg-white/5 border border-white/10 rounded-xl p-12">

<h3 className="text-2xl font-semibold mb-4">
{caseStudy.title}
</h3>

<p className="text-gray-400 mb-2">
Goal: {caseStudy.goal}
</p>

<p className="text-purple-400 font-semibold">
Result: {caseStudy.result}
</p>

</div>

<div className="flex justify-center gap-6 mt-8">

<button
onClick={prev}
className="px-6 py-2 bg-white/10 rounded-lg"
>
Prev
</button>

<button
onClick={next}
className="px-6 py-2 bg-purple-600 rounded-lg"
>
Next
</button>

</div>

</section>

)

}