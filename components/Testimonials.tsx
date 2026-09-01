import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';
export const Testimonials: React.FC = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
const current = TESTIMONIALS[currentIndex];
return (
<section id="testimonials" className="py-16 lg:py-24 bg-rosecream/40 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-14">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-plum-100 border border-plum-200 text-plum-900 text-xs font-bold uppercase tracking-wider mb-3">
<Heart className="w-3.5 h-3.5 text-plum-700" />
<span>Verified Customer Stories</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">Loved by Women Who Love Their Sarees</h2>
</div>
<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-3xl border border-plum-200/90 p-8 sm:p-12 shadow-md relative">
<Quote className="w-16 h-16 text-plum-100 absolute top-6 right-8 pointer-events-none" />
<div className="relative z-10 space-y-6">
<div className="flex items-center gap-1.5 text-champagne-600">
{[...Array(current.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
<span className="text-xs font-bold text-plum-950 ml-1">5.0 / 5.0 Rating</span>
</div>
<p className="font-serif text-lg sm:text-2xl text-plum-950 leading-relaxed italic">"{current.quote}"</p>
<div className="pt-4 border-t border-plum-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3.5">
<img src={current.avatar} alt={current.name} className="w-12 h-12 rounded-full object-cover border-2 border-plum-200" />
<div>
<h4 className="font-bold text-sm text-plum-950">{current.name}</h4>
<span className="text-xs text-warmgray block">{current.occasion} • {current.city}</span>
</div>
</div>
<div className="inline-flex items-center gap-1.5 bg-rosecream px-3 py-1.5 rounded-full border border-plum-100 text-xs font-semibold text-plum-900">
<ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
<span>{current.serviceUsed}</span>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-8 pt-4 border-t border-plum-100/60">
<span className="text-xs text-warmgray font-semibold">{currentIndex + 1} of {TESTIMONIALS.length} Stories</span>
<div className="flex items-center gap-2">
<button type="button" onClick={prevTestimonial} className="p-2.5 rounded-full bg-rosecream hover:bg-plum-100 text-plum-950 transition-colors cursor-pointer border border-plum-200" aria-label="Previous testimonial"><ChevronLeft className="w-4 h-4" /></button>
<button type="button" onClick={nextTestimonial} className="p-2.5 rounded-full bg-plum-900 hover:bg-plum-950 text-white transition-colors cursor-pointer shadow-sm" aria-label="Next testimonial"><ChevronRight className="w-4 h-4" /></button>
</div>
</div>
</div>
</div>
</div>
</section>
);
};
