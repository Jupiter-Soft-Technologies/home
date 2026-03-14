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
icon: <Megaphone size={18}/>,
items: [
"Digital Marketing Strategy",
"Digital Marketing Audit",
"Content Marketing",
"Email Marketing",
"Reputation Management",
"Franchise Digital Marketing"
],
path:"/services/digital-marketing"
},

{
title: "Local SEO Services",
icon: <MapPin size={18}/>,
items: [
"Small Business SEO",
"GBP Optimization"
],
path:"/local-seo"
},

{
title: "Social Media Marketing",
icon: <Hash size={18}/>,
items: [
"Social Media Optimization",
"Social Media Management",
"Social Media Advertising"
],
path:"/social-media"
},

{
title: "Website Design & Development",
icon: <Globe size={18}/>,
items: [
"WordPress Development",
"Custom Website Design",
"Website Redesign Service",
"Magento Development",
"Mobile App Development",
"Joomla Website Development",
"Website Hosting Services"
],
path:"/web-development"
},

{
title: "SEO",
icon: <Search size={18}/>,
items: [
"Ecommerce SEO Services",
"Link Building Services",
"Technical SEO Services",
"Franchise SEO Services",
"Voice Search Optimization",
"App Store Optimization",
"White Label SEO",
"Generative Engine Optimization",
"Answer Engine Optimization"
],
path:"/seo"
},

{
title: "Video SEO",
icon: <Video size={18}/>,
items: [
"YouTube Optimization",
"Customer Testimonial Videos",
"Vlog Video Production Services"
],
path:"/video-seo"
},

{
title: "Digital Advertising",
icon: <TrendingUp size={18}/>,
items: [
"Pay Per Click",
"Facebook",
"Instagram",
"X",
"LinkedIn",
"Pinterest",
"Conversion Rate Optimization",
"Amazon PPC Services"
],
path:"/ppc"
},

{
title: "Ecommerce Development",
icon: <ShoppingCart size={18}/>,
items: [
"Shopify Web Development",
"Woocommerce Development",
"Payment Gateway"
],
path:"/ecommerce"
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
onClick={()=>goTo(service.path)}
className="block text-sm text-gray-600 hover:text-blue-600 transition"
>

{item}

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

<button className="font-medium hover:text-blue-500 transition">
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
className="
p-5 rounded-xl border border-gray-100
hover:border-blue-200
hover:shadow-lg
transition
group/service
bg-white
"
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
onClick={()=>goTo(service.path)}
className="
flex items-center justify-between w-full
text-sm text-gray-600
hover:text-blue-600
transition
group/item
"
>

<span>{item}</span>

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