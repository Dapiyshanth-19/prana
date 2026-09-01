import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data/studioData';
interface SmartServiceSelectorProps {
onSelectService?: (serviceId: ServiceCategory, options?: any) => void;
onBookSelectedService?: (serviceId: ServiceCategory, options?: any) => void;
}
export const SmartServiceSelector: React.FC<SmartServiceSelectorProps> = ({ onSelectService, onBookSelectedService }) => {
const [activeCategory, setActiveCategory] = useState<ServiceCategory>('pleating');
const currentService = SERVICES_DATA.find(s => s.id === activeCategory) || SERVICES_DATA[0];
const handleBooking = () => {
if (onBookSelectedService) onBookSelectedService(activeCategory);
else if (onSelectService) onSelectService(activeCategory);
};
return (
<section id="smart-service-selector" className="py-16 lg:py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-900 text-xs font-semibold uppercase tracking-wider mb-3">
<Sparkles className="w-3.5 h-3.5 text-champagne-600" />
<span>Interactive Studio Selector</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">What can we create for you?</h2>
</div>
<div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-8">
{SERVICES_DATA.map((cat) => (
<button key={cat.id} type="button" onClick={() => setActiveCategory(cat.id)} className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer border shrink-0 ${activeCategory === cat.id ? 'bg-plum-900 text-white border-plum-900 shadow-md' : 'bg-rosecream/60 text-charcoal/80 border-plum-100 hover:bg-plum-50'}`}>
{cat.name}
</button>
))}
</div>
<div className="bg-rosecream/40 rounded-3xl border border-plum-200/80 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
<div className="lg:col-span-7 space-y-4">
<h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum-950">{currentService.tagline}</h3>
<p className="text-charcoal/80 text-sm leading-relaxed">{currentService.description}</p>
<ul className="space-y-2 text-xs text-charcoal/80">
{currentService.features.map((f, i) => <li key={i}>• {f}</li>)}
</ul>
</div>
<div className="lg:col-span-5 bg-white rounded-2xl border border-plum-200 p-6 shadow-md space-y-5">
<img src={currentService.image} alt={currentService.name} className="w-full aspect-[16/10] object-cover rounded-xl" />
<div className="flex items-baseline justify-between">
<span className="font-serif text-2xl sm:text-3xl font-bold text-plum-950">{currentService.startingPrice}</span>
<span className="text-xs text-warmgray">{currentService.turnaround}</span>
</div>
<button type="button" onClick={handleBooking} id="service-selector-submit-btn" className="w-full py-3.5 px-6 rounded-xl bg-plum-900 hover:bg-plum-950 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
<span>Book {currentService.name}</span>
<ArrowRight className="w-4 h-4 text-champagne-300" />
</button>
</div>
</div>
</div>
</section>
);
};
