import React from 'react';
import { Sparkles, ShoppingBag, Ruler, Scissors, PackageCheck, Truck, Video, ShieldCheck, CheckCircle2 } from 'lucide-react';
export const HowItWorks: React.FC = () => {
const steps = [
{ num: '01', icon: ShoppingBag, title: 'Choose Your Service', desc: 'Select from Saree Pre-Pleating, Custom Blouse Tailoring, Aari Embroidery, or Bridal Styling.' },
{ num: '02', icon: Ruler, title: 'Share Measurements / Fabric', desc: 'Visit our studio, send a sample reference, or book doorstep fabric pickup.' },
{ num: '03', icon: Scissors, title: 'Master Craft & Precision Finish', desc: 'Our master artisans sculpt your outfit with precision tailoring.' },
{ num: '04', icon: PackageCheck, title: 'Receive & Slip On in 60s', desc: 'Delivered in luxury travel boxes with a 30-day fit guarantee.' },
];
return (
<section id="how-it-works" className="py-16 lg:py-24 bg-rosecream/40 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-plum-100 border border-plum-200 text-plum-900 text-xs font-bold uppercase tracking-wider mb-3">
<Sparkles className="w-3.5 h-3.5 text-champagne-600" />
<span>Effortless 4-Step Process</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">How It Works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
{steps.map((step) => {
const Icon = step.icon;
return (
<div key={step.num} className="bg-white rounded-3xl border border-plum-200/80 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group">
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-plum-100 text-plum-900 flex items-center justify-center group-hover:bg-plum-900 group-hover:text-champagne-200 transition-colors"><Icon className="w-6 h-6" /></div>
<span className="font-serif text-3xl font-bold text-plum-950/20">{step.num}</span>
</div>
<h3 className="font-serif text-xl font-bold text-plum-950 mb-2">{step.title}</h3>
<p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">{step.desc}</p>
</div>
<div className="mt-6 pt-4 border-t border-plum-100 flex items-center gap-1.5 text-[11px] font-semibold text-plum-700">
<CheckCircle2 className="w-3.5 h-3.5" />
<span>Step {step.num} Complete</span>
</div>
</div>
);
})}
</div>
<div className="mt-12 bg-plum-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-champagne-400/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-10 h-10 rounded-full bg-plum-800 text-champagne-300 flex items-center justify-center shrink-0"><Truck className="w-5 h-5" /></div>
<span className="font-bold text-sm text-white block">Doorstep Pickup & Delivery</span>
</div>
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-10 h-10 rounded-full bg-plum-800 text-champagne-300 flex items-center justify-center shrink-0"><Video className="w-5 h-5" /></div>
<span className="font-bold text-sm text-white block">Virtual Measurement Call</span>
</div>
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-10 h-10 rounded-full bg-plum-800 text-champagne-300 flex items-center justify-center shrink-0"><ShieldCheck className="w-5 h-5" /></div>
<span className="font-bold text-sm text-white block">30-Day Fit Guarantee</span>
</div>
</div>
</div>
</section>
);
};
