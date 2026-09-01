import React, { useState } from 'react';
import { Crown, ArrowRight } from 'lucide-react';
import { BlouseDesignItem } from '../types';
import { BLOUSE_GALLERY } from '../data/studioData';
interface BlouseGalleryProps {
onUseDesign: (design: BlouseDesignItem) => void;
}
export const BlouseGallery: React.FC<BlouseGalleryProps> = ({ onUseDesign }) => {
const [activeCategory, setActiveCategory] = useState<string>('all');
const filteredDesigns = activeCategory === 'all' ? BLOUSE_GALLERY : BLOUSE_GALLERY.filter(item => item.category === activeCategory);
return (
<section id="blouse-gallery" className="py-16 lg:py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-900 text-xs font-bold uppercase tracking-wider mb-3">
<Crown className="w-3.5 h-3.5 text-champagne-600" />
<span>Couture Inspiration Lookbook</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">Find Your Blouse Inspiration</h2>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
{['all', 'bridal', 'minimal', 'aari', 'backs', 'sleeves', 'classic'].map((cat) => (
<button key={cat} type="button" onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer border shrink-0 ${activeCategory === cat ? 'bg-plum-900 text-white border-plum-900 shadow-sm' : 'bg-rosecream/60 text-charcoal/80 border-plum-100 hover:bg-plum-50'}`}>
{cat === 'all' ? 'All Designs' : cat}
</button>
))}
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{filteredDesigns.map((design) => (
<div key={design.id} className="group bg-rosecream/30 rounded-3xl border border-plum-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="relative aspect-[4/5] overflow-hidden bg-plum-950">
<img src={design.image} alt={design.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
{design.badge && <div className="absolute top-3 left-3 bg-ivory/95 backdrop-blur-md text-plum-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-plum-200 shadow-sm">{design.badge}</div>}
<div className="absolute bottom-3 left-3 right-3 text-white text-xs">
<span className="text-[10px] font-semibold text-champagne-300 uppercase tracking-wider block">{design.categoryLabel}</span>
<span className="font-serif text-lg font-bold text-white block">{design.name}</span>
</div>
</div>
<div className="p-5 space-y-2 text-xs text-charcoal/80">
<div className="flex items-center justify-between border-b border-plum-100 pb-1.5"><span className="text-warmgray">Neckline:</span><span className="font-bold text-plum-950">{design.neckline}</span></div>
<div className="flex items-center justify-between pt-0.5"><span className="text-warmgray">Ideal For:</span><span className="font-semibold text-plum-700">{design.occasion}</span></div>
</div>
</div>
<div className="p-5 pt-0">
<button type="button" onClick={() => onUseDesign(design)} className="w-full py-3 px-4 rounded-xl bg-plum-900 hover:bg-plum-950 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
<span>I Want This Design</span>
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
