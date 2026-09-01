import React, { useState } from 'react';
import { Crown, Lightbulb, CheckCircle2 } from 'lucide-react';
import { OccasionType } from '../types';
import { OCCASION_RECOMMENDATIONS } from '../data/studioData';
interface OccasionSelectorProps {
onSelectOccasionPackage: (pkg: any) => void;
}
export const OccasionSelector: React.FC<OccasionSelectorProps> = ({ onSelectOccasionPackage }) => {
const [selectedOccasion, setSelectedOccasion] = useState<OccasionType>('wedding');
const currentRec = OCCASION_RECOMMENDATIONS.find(o => o.id === selectedOccasion) || OCCASION_RECOMMENDATIONS[0];
return (
<section id="occasions" className="py-16 lg:py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-plum-950 text-xs font-bold uppercase tracking-wider mb-3">
<Crown className="w-3.5 h-3.5 text-champagne-700" />
<span>Event-Specific Recommendations</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">What are you dressing for?</h2>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
{OCCASION_RECOMMENDATIONS.map((occ) => (
<button key={occ.id} type="button" onClick={() => setSelectedOccasion(occ.id)} className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${selectedOccasion === occ.id ? 'bg-plum-950 text-white border-plum-950 shadow-md' : 'bg-rosecream/40 text-charcoal/80 border-plum-200/70 hover:bg-rosecream'}`}>
<span className="text-[11px] font-bold tracking-tight line-clamp-1 leading-tight">{occ.label}</span>
</button>
))}
</div>
<div className="bg-rosecream/30 rounded-3xl border border-plum-200/80 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5 relative">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-plum-950 shadow-xl border border-plum-200">
<img src={currentRec.image} alt={currentRec.title} className="w-full h-full object-cover object-center" />
</div>
</div>
<div className="lg:col-span-7 space-y-6">
<h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum-950">{currentRec.title}</h3>
<p className="text-charcoal/80 text-sm sm:text-base leading-relaxed">{currentRec.description}</p>
<div className="p-4 rounded-2xl bg-champagne-100/70 border border-champagne-300 flex items-start gap-3">
<Lightbulb className="w-5 h-5 text-champagne-800 shrink-0 mt-0.5" />
<span className="text-xs text-charcoal/80">{currentRec.stylingTip}</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
{currentRec.recommendedServices.map((svc, i) => (
<div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-plum-100 text-xs font-semibold text-plum-950">
<CheckCircle2 className="w-4 h-4 text-plum-700 shrink-0" />
<span>{svc}</span>
</div>
))}
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
{currentRec.popularPackages.map((pkg, idx) => (
<div key={idx} className="p-4 rounded-2xl bg-white border border-plum-200 shadow-2xs hover:border-plum-900 transition-colors flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-bold text-plum-950">{pkg.name}</span>
<span className="font-serif text-sm font-bold text-plum-900">{pkg.price}</span>
</div>
<button type="button" onClick={() => onSelectOccasionPackage({ occasion: selectedOccasion, package: pkg.name, price: pkg.price })} className="w-full py-2 px-3 rounded-xl bg-plum-100 hover:bg-plum-900 hover:text-white text-plum-950 font-bold text-[11px] uppercase tracking-wider transition-all text-center cursor-pointer mt-2">
Book This Package
</button>
</div>
))}
</div>
</div>
</div>
</div>
</section>
);
};
