import React, { useState } from 'react';
import { Scissors, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../data/studioData';
export const BeforeAfterSlider: React.FC = () => {
const [activeSlideIndex, setActiveSlideIndex] = useState(0);
const [sliderPosition, setSliderPosition] = useState(50);
const activeItem = BEFORE_AFTER_DATA[activeSlideIndex];
return (
<section id="before-after" className="py-16 lg:py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-900 text-xs font-bold uppercase tracking-wider mb-3">
<Scissors className="w-3.5 h-3.5 text-champagne-600" />
<span>Master Craftsmanship</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">The Difference is in the Details</h2>
</div>
<div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2">
{BEFORE_AFTER_DATA.map((item, idx) => (
<button key={item.id} type="button" onClick={() => { setActiveSlideIndex(idx); setSliderPosition(50); }} className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap border ${activeSlideIndex === idx ? 'bg-plum-900 text-white border-plum-900 shadow-sm' : 'bg-rosecream/70 text-charcoal/80 border-plum-100 hover:bg-plum-50'}`}>
{item.title}
</button>
))}
</div>
<div className="bg-rosecream/30 rounded-3xl border border-plum-200/80 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-plum-950 shadow-xl border border-plum-200">
<img src={activeItem.afterImg} alt={activeItem.afterLabel} className="absolute inset-0 w-full h-full object-cover object-center" />
<div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
<img src={activeItem.beforeImg} alt={activeItem.beforeLabel} className="absolute inset-0 h-full object-cover object-center" style={{ width: '100vw', maxWidth: 'none' }} />
</div>
<input type="range" min={0} max={100} value={sliderPosition} onChange={(e) => setSliderPosition(Number(e.target.value))} className="absolute bottom-4 left-4 right-4 z-20" />
</div>
</div>
<div className="lg:col-span-5 space-y-6">
<h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum-950">{activeItem.title}</h3>
<p className="text-charcoal/80 text-sm sm:text-base">{activeItem.subtitle}</p>
<div className="space-y-3 pt-2">
{activeItem.highlightPoints.map((pt, i) => (
<div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-plum-100 shadow-2xs">
<CheckCircle2 className="w-4 h-4 text-plum-700 shrink-0 mt-0.5" />
<span className="text-xs sm:text-sm font-medium text-charcoal/90">{pt}</span>
</div>
))}
</div>
<div className="p-4 rounded-2xl bg-champagne-50 border border-champagne-300/70 flex items-center gap-3">
<ShieldCheck className="w-6 h-6 text-champagne-700 shrink-0" />
<span className="text-xs font-bold text-plum-950">Zero Fabric Damage Guarantee</span>
</div>
</div>
</div>
</div>
</section>
);
};
