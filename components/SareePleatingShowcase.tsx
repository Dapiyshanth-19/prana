import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
interface SareePleatingShowcaseProps {
onBookPleating: () => void;
}
export const SareePleatingShowcase: React.FC<SareePleatingShowcaseProps> = ({ onBookPleating }) => {
const [activeStage, setActiveStage] = useState<'loose' | 'pleated' | 'ready'>('pleated');
const stageData = {
loose: { title: 'Stage 1: Loose, Unfolded Saree', image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1000&auto=format&fit=crop', points: ['Manual pleats often bunch up adding unwanted bulk', 'Zari borders slide out of alignment'] },
pleated: { title: 'Stage 2: Precision Steam-Pressed Pleats', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop', points: ['Exact fold distribution customized to your height', 'Tension-balanced pallu fan pleats'] },
ready: { title: 'Stage 3: 60-Second Ready-to-Wear Step-In', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop', points: ['Concealed multi-hook waistband', 'Pre-stitched box pleats that never unfold'] },
};
const steps = [
{ num: '01', title: 'Choose Your Saree', desc: 'Courier to us, book pickup, or drop off at our studio.' },
{ num: '02', title: 'We Perfect the Pleats', desc: 'Master artisans calculate custom fold counts.' },
{ num: '03', title: 'Secure & Finish', desc: 'Invisible safety locks and pre-measured anchoring.' },
{ num: '04', title: 'Receive & Slip On', desc: 'Delivered in travel-safe packaging.' },
];
return (
<section id="saree-pleating" className="py-16 lg:py-24 bg-rosecream/50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-14">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-plum-100 border border-plum-200 text-plum-900 text-xs font-bold uppercase tracking-wider mb-3">
<Layers className="w-3.5 h-3.5 text-champagne-600" />
<span>Signature Studio Experience</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">Pleated. Packed. Ready to Wear.</h2>
</div>
<div className="bg-white rounded-3xl border border-plum-200/90 p-6 sm:p-8 lg:p-10 shadow-md mb-16">
<div className="flex items-center gap-2 p-1.5 bg-rosecream rounded-2xl border border-plum-100 mb-8 w-fit">
{(['loose', 'pleated', 'ready'] as const).map((s) => (
<button key={s} type="button" onClick={() => setActiveStage(s)} className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeStage === s ? 'bg-plum-900 text-white shadow-sm' : 'text-charcoal/70 hover:text-charcoal'}`}>
{s === 'loose' ? '1. Loose Saree' : s === 'pleated' ? '2. Pleated' : '3. Ready-to-Wear'}
</button>
))}
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 relative">
<div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-plum-950 shadow-xl border border-plum-200">
<img src={stageData[activeStage].image} alt={stageData[activeStage].title} className="w-full h-full object-cover object-center" />
</div>
</div>
<div className="lg:col-span-5 space-y-5">
<h4 className="font-serif text-2xl font-bold text-plum-950">{stageData[activeStage].title}</h4>
<div className="space-y-2.5">
{stageData[activeStage].points.map((pt, i) => (
<div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-rosecream/70 border border-plum-100 text-xs text-charcoal/90">
<CheckCircle2 className="w-4 h-4 text-plum-700 shrink-0 mt-0.5" />
<span>{pt}</span>
</div>
))}
</div>
<button type="button" onClick={onBookPleating} className="w-full py-3.5 px-6 rounded-xl bg-plum-900 hover:bg-plum-950 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
<span>Book Saree Pleating (Rs. 1,500)</span>
<ArrowRight className="w-4 h-4 text-champagne-300" />
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
{steps.map((step) => (
<div key={step.num} className="bg-white rounded-2xl border border-plum-200/70 p-6 shadow-2xs relative group hover:border-plum-900 transition-colors">
<div className="w-10 h-10 rounded-full bg-plum-100 text-plum-900 font-serif font-bold text-lg flex items-center justify-center mb-4 group-hover:bg-plum-900 group-hover:text-white transition-colors">{step.num}</div>
<h4 className="font-serif text-lg font-bold text-plum-950 mb-1.5">{step.title}</h4>
<p className="text-xs text-charcoal/70 leading-relaxed">{step.desc}</p>
</div>
))}
</div>
</div>
</section>
);
};
