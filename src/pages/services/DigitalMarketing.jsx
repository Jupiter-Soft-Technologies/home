import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function DigitalMarketing(){

const navigate = useNavigate()

const services = [
{
title:"Digital Marketing Strategy",
path:"/services/digital-marketing/strategy",
desc:"Data driven marketing strategies designed to scale your business."
},
{
title:"Digital Marketing Audit",
path:"/services/digital-marketing/audit",
desc:"Comprehensive audit to identify opportunities and growth gaps."
},
{
title:"Content Marketing",
path:"/services/digital-marketing/content-marketing",
desc:"High quality content strategies that build authority and traffic."
},
{
title:"Email Marketing",
path:"/services/digital-marketing/email-marketing",
desc:"Automated email funnels that convert leads into customers."
},
{
title:"Reputation Management",
path:"/services/digital-marketing/reputation-management",
desc:"Protect and enhance your brand reputation across digital platforms."
}
]

return(

<div className="bg-white text-gray-800">

<Helmet>

<title>
Digital Marketing Services | Jupiter Soft Technologies
</title>

<meta
name="description"
content="Jupiter Soft Technologies provides advanced digital marketing services including strategy, SEO, content marketing, paid advertising, email marketing and growth systems."
/>

</Helmet>

{/* HERO */}

<section className="pt-40 pb-28 bg-gradient-to-br from-blue-50 to-indigo-50">

<div className="max-w-6xl mx-auto px-6 text-center">

<h1 className="text-5xl font-bold text-gray-900">

Digital Marketing Services

</h1>

<p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">

We help businesses grow online using powerful digital marketing
strategies including SEO, content marketing, paid advertising,
conversion optimization, and automation systems.

</p>

</div>

</section>

{/* SERVICES */}

<section className="py-28">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center text-gray-900">

Our Digital Marketing Solutions

</h2>

<div className="grid md:grid-cols-3 gap-10 mt-16">

{services.map((service,i)=>(
<div
key={i}
className="
p-8 border rounded-xl
hover:shadow-xl
hover:-translate-y-2
transition
cursor-pointer
"
onClick={()=>navigate(service.path)}
>

<h3 className="font-semibold text-lg">

{service.title}

</h3>

<p className="text-gray-600 mt-3 text-sm">

{service.desc}

</p>

</div>
))}

</div>

</div>

</section>

{/* PROCESS */}

<section className="py-28 bg-gray-50">

<div className="max-w-5xl mx-auto px-6 text-center">

<h2 className="text-3xl font-bold">

Our Digital Marketing Process

</h2>

<div className="grid md:grid-cols-4 gap-10 mt-16">

{[
["01","Research"],
["02","Strategy"],
["03","Execution"],
["04","Optimization"]
].map((item,i)=>(
<div key={i}>

<div className="text-4xl font-bold text-blue-600">
{item[0]}
</div>

<h3 className="mt-3 font-semibold">
{item[1]}
</h3>

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

Our digital marketing experts will build a scalable growth
system tailored to your business.

</p>

<button
onClick={()=>navigate("/contact")}
className="mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:scale-105 transition"
>

Get Free Consultation

</button>

</div>

</section>

</div>

)

}