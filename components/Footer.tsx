import React, { useState } from 'react';
import {
Scissors,
Sparkles,
MapPin,
Phone,
Mail,
Instagram,
ChevronDown,
ChevronUp,
ShieldCheck,
Clock,
Heart,
Globe
} from 'lucide-react';
import { STUDIO_INFO, FAQS } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';
export const Footer: React.FC = () => {
const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
const toggleFaq = (index: number) => {
setOpenFaqIndex(openFaqIndex === index ? null : index);
};
return (
<footer id="footer-section" className="bg-plum-950 text-white pt-16 pb-24 sm:pb-16 border-t border-plum-900 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/* FAQ Accordion Section */}
<div className="max-w-3xl mx-auto mb-16 pb-16 border-b border-plum-900/80">
<div className="text-center mb-10">
<span className="text-xs uppercase tracking-widest text-champagne-400 font-bold block mb-1">
Got Questions?
</span>
<h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
Frequently Asked Questions
</h3>
</div>
<div className="space-y-3">
{FAQS.map((faq, idx) => {
const isOpen = openFaqIndex === idx;
return (
<div
key={idx}
className="rounded-2xl border border-plum-800/80 bg-plum-900/40 backdrop-blur-sm overflow-hidden transition-colors"
>
<button
type="button"
onClick={() => toggleFaq(idx)}
className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-champagne-300 transition-colors cursor-pointer"
>
<span>{faq.q}</span>
{isOpen ? (
<ChevronUp className="w-4 h-4 text-champagne-400 shrink-0" />
) : (
<ChevronDown className="w-4 h-4 text-warmgray shrink-0" />
)}
</button>
{isOpen && (
<div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-white/80 leading-relaxed border-t border-plum-800/60 pt-3">
{faq.a}
</div>
)}
</div>
);
})}
</div>
</div>
{/* Brand Information & Links 5-Column Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-plum-900/80 text-xs text-white/80">
{/* Col 1 & 2: Brand Bio & Studio Mission */}
<div className="lg:col-span-2 space-y-4">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-champagne-400 to-champagne-500 text-plum-950 flex items-center justify-center shadow-md">
<Scissors className="w-4 h-4 text-plum-950" />
</div>
<span className="font-serif text-2xl font-bold tracking-tight text-white">
Pleat <span className="text-champagne-400 font-light">&</span> Stitch
</span>
</div>
<p className="text-white/70 leading-relaxed max-w-sm">
Crafting exquisite sarees, blouses and custom looks with artisanal precision in Colombo and Jaffna, Sri Lanka. Redefining modern ethnic wear with 60-second ready-to-wear pre-pleating and bespoke anatomical tailoring.
</p>
<div className="pt-2 space-y-2 text-[11px]">
<div className="flex items-center gap-2 text-champagne-300">
<ShieldCheck className="w-4 h-4 text-champagne-400" />
<span>100% Fit Guarantee with 30-Day Free Adjustments</span>
</div>
<div className="flex items-center gap-2 text-champagne-300">
<Clock className="w-4 h-4 text-champagne-400" />
<span>{STUDIO_INFO.hours}</span>
</div>
</div>
</div>
{/* Col 3: Services */}
<div className="space-y-3">
<h4 className="font-serif text-sm font-bold text-champagne-300 uppercase tracking-wider">
Studio Services
</h4>
<ul className="space-y-2">
<li><a href="#services" className="hover:text-white transition-colors">Saree Pre-Pleating</a></li>
<li><a href="#services" className="hover:text-white transition-colors">Custom Blouse Tailoring</a></li>
<li><a href="#services" className="hover:text-white transition-colors">Bridal Maggam & Aari Work</a></li>
<li><a href="#services" className="hover:text-white transition-colors">60-Sec Ready-to-Wear Saree</a></li>
<li><a href="#services" className="hover:text-white transition-colors">Blouse Alterations & Fit</a></li>
<li><a href="#services" className="hover:text-white transition-colors">On-Site Bridal Draping</a></li>
</ul>
</div>
{/* Col 4: Quick Navigation */}
<div className="space-y-3">
<h4 className="font-serif text-sm font-bold text-champagne-300 uppercase tracking-wider">
Explore
</h4>
<ul className="space-y-2">
<li><a href="#design-your-look" className="hover:text-white transition-colors">Design Your Look</a></li>
<li><a href="#blouse-gallery" className="hover:text-white transition-colors">Blouse Lookbook</a></li>
<li><a href="#before-after" className="hover:text-white transition-colors">Before & After Slider</a></li>
<li><a href="#occasions" className="hover:text-white transition-colors">Occasion Guide</a></li>
<li><a href="#products" className="hover:text-white transition-colors">Saree Shapers & Pins</a></li>
<li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews (Sri Lanka)</a></li>
</ul>
</div>
{/* Col 5: Studio Contact & Location */}
<div className="space-y-3">
<h4 className="font-serif text-sm font-bold text-champagne-300 uppercase tracking-wider">
Studio Contact
</h4>
<div className="space-y-2 text-white/80">
<div className="flex items-start gap-2">
<MapPin className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
<span>{STUDIO_INFO.location}</span>
</div>
<div className="flex items-center gap-2">
<Phone className="w-4 h-4 text-champagne-400 shrink-0" />
<span>{STUDIO_INFO.phone}</span>
</div>
<div className="flex items-center gap-2">
<Mail className="w-4 h-4 text-champagne-400 shrink-0" />
<span>{STUDIO_INFO.email}</span>
</div>
</div>
<div className="pt-3 flex items-center gap-3">
<a
href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
target="_blank"
rel="noopener noreferrer"
className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all shadow-sm"
title="Chat on WhatsApp"
>
<WhatsAppIcon className="w-4.5 h-4.5 text-white" />
</a>
<a
href="https://instagram.com"
target="_blank"
rel="noopener noreferrer"
className="w-9 h-9 rounded-xl bg-plum-800 hover:bg-plum-700 text-white flex items-center justify-center transition-colors"
title="Instagram"
>
<Instagram className="w-4 h-4 text-rose-300" />
</a>
</div>
</div>
</div>
{/* Bottom Copyright & Guarantee */}
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-white/60">
<div>
© 2026 {STUDIO_INFO.name} Sri Lanka. All rights reserved. Crafted with love for sarees.
</div>
<div className="flex items-center gap-4">
<a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
<span>•</span>
<a href="#" className="hover:text-white transition-colors">Terms of Service</a>
<span>•</span>
<a href="#" className="hover:text-white transition-colors">Fit Guarantee Policy</a>
</div>
</div>
</div>
</footer>
);
};
