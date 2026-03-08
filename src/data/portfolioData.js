import DentistDemo from "../components/demos/DentistDemo/DentistDemo";
import LawyerDemo from "../components/demos/LawyerDemo";
import PlumberDemo from "../components/demos/PlumberDemo";
import RealEstateDemo from "../components/demos/RealEstateDemo";
import FinancialDemo from "../components/demos/FinancialDemo";
import InsuranceDemo from "../components/demos/InsuranceDemo";
import RestaurantDemo from "../components/demos/RestaurantDemo";

import {
  Stethoscope,
  Scale,
  Wrench,
  Building2,
  Landmark,
  ShieldCheck,
  UtensilsCrossed
} from "lucide-react";

export const portfolioProjects = [

{
slug:"dental-clinic",
title:"Dental Clinic Website",

desc:"High-conversion dental clinic website designed to increase patient appointments, improve local SEO visibility, and build trust through modern design and fast performance.",

category:"Healthcare",
icon:Stethoscope,
demo:DentistDemo,

overview:"The client wanted a modern dental clinic website capable of generating more patient appointments while improving their visibility in Google local search results. Their previous website lacked mobile responsiveness, strong call-to-action sections, and trust-building elements that encourage patients to book appointments.",

goals:[
"Increase patient appointment bookings",
"Improve Google local SEO visibility",
"Create a fast mobile-friendly website",
"Build patient trust with testimonials"
],

strategy:"We designed a conversion-focused website that highlights dental services, adds online appointment booking, integrates patient testimonials, and optimizes pages for local SEO keywords so the clinic ranks higher in search results.",

metrics:[
{label:"Organic Traffic",value:"+320%"},
{label:"Appointments",value:"+180%"},
{label:"Page Speed",value:"98"},
{label:"Conversion Rate",value:"+95%"}
],

features:[
"Online appointment booking system",
"Local SEO optimized service pages",
"Patient testimonials and trust badges",
"Mobile-first responsive design"
],

tech:["React","Tailwind CSS","SEO Optimization"],

before:"Outdated clinic website with poor mobile experience, slow loading speed, and limited search engine visibility.",

after:"Modern dental clinic website optimized for performance, conversions, and strong local SEO rankings."
},

{
slug:"law-firm",
title:"Law Firm Website",

desc:"Professional legal services website designed to build authority and generate consultation requests from potential clients.",

category:"Legal",
icon:Scale,
demo:LawyerDemo,

overview:"The law firm needed a professional website that clearly communicates their expertise while generating consultation inquiries from potential clients searching online for legal services.",

goals:[
"Increase consultation inquiries",
"Build credibility and trust",
"Improve SEO visibility",
"Showcase legal expertise"
],

strategy:"We created a clean professional website structure with dedicated practice area pages, attorney profiles, and consultation booking sections optimized for search engine visibility.",

metrics:[
{label:"Consultation Leads",value:"+210%"},
{label:"Client Inquiries",value:"+160%"},
{label:"Bounce Rate",value:"-40%"},
{label:"Page Speed",value:"97"}
],

features:[
"Practice area pages",
"Attorney profiles",
"Consultation request forms",
"Legal blog content"
],

tech:["React","SEO","Conversion UX"],

before:"Outdated legal website with weak branding and limited lead generation.",

after:"Professional law firm website that establishes authority and converts visitors into consultation requests."
},

{
slug:"plumbing-services",
title:"Plumbing Services Website",

desc:"Local service business website optimized to generate phone calls and service requests through strong local SEO and fast mobile performance.",

category:"Local Business",
icon:Wrench,
demo:PlumberDemo,

overview:"The plumbing company wanted to increase service requests and phone calls from local customers searching for emergency plumbing services online.",

goals:[
"Increase local phone calls",
"Improve Google Maps ranking",
"Generate service bookings",
"Optimize mobile performance"
],

strategy:"We built a fast mobile-first website with service location pages, emergency call-to-action sections, and strong local SEO optimization targeting nearby service areas.",

metrics:[
{label:"Local Leads",value:"+240%"},
{label:"Phone Calls",value:"+170%"},
{label:"Conversion Rate",value:"+120%"},
{label:"Page Speed",value:"96"}
],

features:[
"Emergency plumbing booking",
"Local service area pages",
"Click-to-call functionality",
"Mobile optimized layout"
],

tech:["React","Local SEO","Tailwind CSS"],

before:"Basic plumbing website with poor local search visibility and slow mobile experience.",

after:"Lead-generating service website ranking higher in local search results."
},

{
slug:"real-estate",
title:"Real Estate Platform",

desc:"Modern real estate website designed to showcase property listings and generate buyer and seller leads.",

category:"Real Estate",
icon:Building2,
demo:RealEstateDemo,

overview:"The real estate agency required a modern property listing platform that allows users to browse available listings and easily contact agents.",

goals:[
"Generate buyer and seller leads",
"Showcase property listings",
"Improve user engagement",
"Increase mobile usability"
],

strategy:"We designed a property browsing system with search filters, property galleries, and strong lead capture forms to convert visitors into property inquiries.",

metrics:[
{label:"Property Leads",value:"+250%"},
{label:"User Engagement",value:"+170%"},
{label:"Mobile Speed",value:"96"},
{label:"Conversion Rate",value:"+120%"}
],

features:[
"Advanced property search",
"Agent profile pages",
"Lead capture forms",
"Property image galleries"
],

tech:["React","API Integration","SEO"],

before:"Simple property listing website with limited filtering features.",

after:"Modern real estate platform designed to attract buyers and generate inquiries."
},

{
slug:"financial-services",
title:"Financial Services Website",

desc:"Investment advisory website designed to build credibility and generate consultation leads from potential clients.",

category:"Finance",
icon:Landmark,
demo:FinancialDemo,

overview:"The financial advisory firm needed a professional online presence that builds trust with potential investors and encourages consultation requests.",

goals:[
"Increase consultation requests",
"Improve online credibility",
"Educate visitors about services",
"Enhance SEO visibility"
],

strategy:"We built a trust-focused website featuring service explanations, financial education content, and consultation booking forms.",

metrics:[
{label:"Consultation Leads",value:"+200%"},
{label:"User Engagement",value:"+150%"},
{label:"Page Speed",value:"97"},
{label:"Conversion Rate",value:"+110%"}
],

features:[
"Investment service pages",
"Consultation booking forms",
"Educational finance content",
"Mobile responsive design"
],

tech:["React","SEO","UX Design"],

before:"Generic financial services website lacking strong branding and trust signals.",

after:"Professional financial advisory platform designed to convert visitors into clients."
},

{
slug:"insurance-agency",
title:"Insurance Agency Website",

desc:"Insurance lead generation website with quote request forms and policy information pages.",

category:"Finance",
icon:ShieldCheck,
demo:InsuranceDemo,

overview:"The insurance agency wanted a website capable of generating policy inquiries and quote requests from potential customers.",

goals:[
"Increase quote requests",
"Improve trust with visitors",
"Generate more leads",
"Enhance online presence"
],

strategy:"We implemented lead capture forms, trust indicators, and optimized landing pages that encourage visitors to request insurance quotes.",

metrics:[
{label:"Lead Growth",value:"+220%"},
{label:"Quote Requests",value:"+180%"},
{label:"Bounce Rate",value:"-40%"},
{label:"Speed Score",value:"96"}
],

features:[
"Insurance quote request forms",
"Policy information pages",
"Lead capture funnels",
"Mobile-optimized design"
],

tech:["React","SEO","Lead Conversion"],

before:"Outdated insurance website with poor lead generation.",

after:"High-conversion insurance website generating more policy inquiries."
},

{
slug:"restaurant-cafe",
title:"Restaurant & Cafe Website",

desc:"Restaurant website with online reservations, menu showcase, and local discovery optimization.",

category:"Hospitality",
icon:UtensilsCrossed,
demo:RestaurantDemo,

overview:"The restaurant needed a modern website that allows customers to view menus, reserve tables, and discover the restaurant through local search.",

goals:[
"Increase online reservations",
"Improve local search visibility",
"Showcase menu items",
"Improve mobile experience"
],

strategy:"We created a visually appealing restaurant website with menu sections, reservation forms, and optimized local SEO structure.",

metrics:[
{label:"Online Reservations",value:"+300%"},
{label:"Customer Engagement",value:"+200%"},
{label:"Page Speed",value:"98"},
{label:"Conversion Rate",value:"+140%"}
],

features:[
"Online table reservation system",
"Digital restaurant menu",
"Google Maps integration",
"Mobile friendly UI"
],

tech:["React","UX Design","SEO"],

before:"Basic restaurant website without online reservation capability.",

after:"Modern restaurant website designed to increase reservations and customer engagement."
}

];