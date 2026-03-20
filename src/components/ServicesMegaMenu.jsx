import React from "react";
import { useNavigate } from "react-router-dom";
import {
Megaphone,
MapPin,
Hash,
Globe,
Search,
Video,
TrendingUp,
ShoppingCart,
ArrowRight
} from "lucide-react";

export default function ServicesMegaMenu({ isMobile, closeMenu }) {

const navigate = useNavigate();

const services = [

{
title: "Digital Marketing",
icon: <Megaphone size={18}/> ,
items: [
{ name:"Digital Marketing Strategy", path:"/services/digital-marketing/strategy"},
{ name:"Digital Marketing Audit", path:"/services/digital-marketing/audit"},
{ name:"Content Marketing", path:"/services/digital-marketing/content-marketing"},
{ name:"Email Marketing", path:"/services/digital-marketing/email-marketing"},
{ name:"Reputation Management", path:"/services/digital-marketing/reputation-management"},
],
path:"/services/digital-marketing",
highlight:true
},

{
title: "Social Media Marketing",
icon: <Hash size={18}/> ,
items: [
{ name:"Social Media Optimization", path:"/services/social-media"},
{ name:"Social Media Management", path:"/services/social-media"},
{ name:"Social Media Advertising", path:"/services/social-media"}
],
path:"/services/social-media"
},

{
title: "Website Design & Development",
icon: <Globe size={18}/> ,
items: [
{ name:"WordPress Development", path:"/services/web-development"},
{ name:"E-commerce Web Development", path:"/services/web-development"},
{ name:"Custom Website Design", path:"/services/web-development"},
{ name:"Website Redesign Service", path:"/services/web-development"},
{ name:"Website Hosting Services", path:"/services/web-development"}
],
path:"/services/web-development"
},

{
title: "SEO",
icon: <Search size={18}/> ,
items: [
{ name:"Technical SEO Services", path:"/services/seo/technical-seo"},
{ name:"Local SEO Services", path:"/services/seo/local-seo"},
{ name:"Voice Search Optimization", path:"/services/seo/voice-search-optimization"},
{ name:"Generative Engine Optimization", path:"/services/seo/generative-seo"},
{ name:"Answer Engine Optimization", path:"/services/seo/answer-engine-optimization"}
],
path:"/services/seo"
},

{
title: "Video SEO",
icon: <Video size={18}/> ,
items: [
{ name:"YouTube Optimization", path:"/services/video-seo/youtube-seo"},
{ name:"Customer Testimonial Videos", path:"/services/video-seo/customer-testimonial-videos"},
{ name:"Vlog Video Production Services", path:"/services/video-seo/vlog-video-production"}
],
path:"/services/video-seo"
},

{
title: "Digital Advertising",
icon: <TrendingUp size={18}/> ,
items: [
{ name:"Pay Per Click", path:"/services/ppc"},
{ name:"Facebook", path:"/services/ppc"},
{ name:"Instagram", path:"/services/ppc"},
{ name:"X", path:"/services/ppc"},
{ name:"LinkedIn", path:"/services/ppc"},
{ name:"Pinterest", path:"/services/ppc"},
{ name:"Conversion Rate Optimization", path:"/services/conversion-optimization"},
{ name:"Amazon PPC Services", path:"/services/ppc"}
],
path:"/services/ppc"
},

{
title: "Application Development",
icon: <ShoppingCart size={18}/> ,
items: [
{ name:"E-commerce App Development", path:"/services/app-development"},
{ name:"Ed-tech App Development", path:"/services/app-development"},
{ name:"Payment Gateway Integration", path:"/services/app-development"}
],
path:"/services/app-development"
}

];

const goTo = (path) => {
navigate(path);
if(closeMenu) closeMenu();
};

/* MOBILE MENU */

if(isMobile){

return(

<div className="space-y-6">

{services.map((service,i)=>(

<div key={i}>

<h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-2">
{service.icon}
{service.title}
</h3>

<div className="space-y-2 ml-6">

{service.items.map((item,idx)=>(

<button
key={idx}
onClick={()=>goTo(item.path)}
className="block text-sm text-gray-600 hover:text-blue-600 transition"
>

{item.name}

</button>

))}

</div>

</div>

))}

</div>

)

}

/* DESKTOP MEGA MENU */

return (

<div className="relative group">

<button
  onClick={() => goTo("/services")}
  className="font-medium hover:text-blue-500 transition"
>
Services
</button>
<div
className="
absolute left-1/2 -translate-x-1/2 mt-6
w-[1250px]
bg-white/95 backdrop-blur-xl
shadow-2xl rounded-3xl
border border-gray-200
opacity-0 invisible
group-hover:opacity-100 group-hover:visible
transition-all duration-300
p-10 z-50
"
>

<div className="grid grid-cols-4 gap-8">

{services.map((service,i)=>(

<div
key={i}
className={`
p-5 rounded-xl border transition
group/service bg-white
${service.highlight ? "bg-gradient-to-br from-blue-50 to-orange-50 border-blue-200" : "border-gray-100 hover:border-blue-200 hover:shadow-lg"}
`}
>

<div className="flex items-center gap-2 mb-4">

<div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
{service.icon}
</div>

<h3
onClick={()=>goTo(service.path)}
className="font-semibold text-gray-900 cursor-pointer group-hover/service:text-blue-600 transition"
>

{service.title}

</h3>

</div>

<ul className="space-y-2">

{service.items.map((item,idx)=>(

<li key={idx}>

<button
onClick={()=>goTo(item.path)}
className="
flex items-center justify-between w-full
text-sm text-gray-600
hover:text-blue-600
transition
group/item
"
>

<span>{item.name}</span>

<ArrowRight
size={14}
className="opacity-0 group-hover/item:opacity-100 transition"
/>

</button>

</li>

))}

</ul>

</div>

))}

</div>

{/* CTA SECTION */}

<div className="mt-10 pt-8 border-t flex items-center justify-between">

<div>

<h4 className="font-semibold text-gray-900">
Need help choosing a service?
</h4>

<p className="text-sm text-gray-500">
Talk with our experts and get a free strategy session.
</p>

</div>

<button
onClick={()=>goTo("/contact")}
className="
px-6 py-3 rounded-lg
bg-gradient-to-r from-blue-600 to-indigo-600
text-white font-medium
hover:shadow-lg
hover:scale-105
transition
"
>

Free Consultation

</button>

</div>

</div>

</div>

)

}