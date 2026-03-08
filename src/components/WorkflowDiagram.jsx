import {
Search,
Lightbulb,
Palette,
Code2,
Rocket
} from "lucide-react";

const flow=[
{icon:Search,label:"Research"},
{icon:Lightbulb,label:"Strategy"},
{icon:Palette,label:"Design"},
{icon:Code2,label:"Development"},
{icon:Rocket,label:"Launch"}
];

export default function WorkflowDiagram(){

return(

<section className="max-w-6xl mx-auto py-28 px-6 text-center">

<h2 className="text-4xl font-bold mb-16">
How Projects Move Through Our System
</h2>

<div className="flex flex-wrap justify-center items-center gap-10">

{flow.map((step,i)=>{

const Icon=step.icon

return(

<div key={i} className="flex items-center">

<div className="flex flex-col items-center">

<div className="bg-white/5 border border-white/10 p-6 rounded-full">
<Icon className="text-purple-400" size={28}/>
</div>

<span className="text-sm mt-3 text-gray-400">
{step.label}
</span>

</div>

{i<flow.length-1 &&(
<div className="w-16 h-[2px] bg-purple-500 mx-4"></div>
)}

</div>

)

})}

</div>

</section>

)

}