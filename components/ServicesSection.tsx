import React from 'react';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/studioData';
interface ServicesSectionProps {
onBookService: (serviceId: string) => void;
}
export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
return (
<section id="services" className="py-16 lg:py-24 bg-rosecream/40 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-14">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-plum-100 border border-plum-200 text-plum-900 text-xs font-bold uppercase tracking-wider mb-3">
<Sparkles className="w-3.5 h-3.5 text-champagne-600" />
<span>Signature Studio Offerings</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">Made for Every Occasion</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{SERVICES_DATA.map((service) => (
<div key={service.id} className="group bg-white rounded-3xl border border-plum-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="relative aspect-[16/11] overflow-hidden bg-plum-100">
<img src={service.image} alt={service.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
<div className="absolute top-3 right-3 bg-ivory/95 backdrop-blur-md text-plum-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-plum-200 shadow-sm flex items-center gap-1">
<Clock className="w-3 h-3 text-champagne-600" />
<span>{service.turnaround}</span>
</div>
<div className="absolute bottom-3 left-3 bg-plum-950/90 backdrop-blur-sm text-champagne-200 text-xs font-bold px-3 py-1 rounded-full border border-champagne-400/30">From {service.startingPrice}</div>
</div>
<div className="p-6">
<h3 className="font-serif text-xl font-bold text-plum-950">{service.name}</h3>
<p className="text-xs font-medium text-plum-700 italic mt-0.5 mb-2.5">"{service.tagline}"</p>
<p className="text-charcoal/70 text-xs sm:text-sm leading-relaxed line-clamp-3">{service.description}</p>
</div>
</div>
<div className="p-6 pt-0">
<button type="button" onClick={() => onBookService(service.id)} className="w-full py-2.5 px-3 rounded-xl bg-plum-900 hover:bg-plum-950 text-white text-xs font-bold uppercase tracking-wider text-center transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer">
<span>Book Now</span>
<ArrowRight className="w-3.5 h-3.5 text-champagne-300" />
</button>
</div>
</div>
))}
</div>
</div>
</section>
);
};
