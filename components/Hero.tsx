import React from 'react';
import { motion } from 'framer-motion';
import {
Sparkles,
ArrowRight,
CheckCircle2,
Clock,
Star,
ShieldCheck,
Scissors,
Ruler,
Layers,
Eye
} from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
interface HeroProps {
onOpenBooking: () => void;
onExploreWork: () => void;
onOpenDesignYourLook: () => void;
}
export const Hero: React.FC<HeroProps> = ({
onOpenBooking,
onExploreWork,
onOpenDesignYourLook
}) => {
return (
<section id="hero-section" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-rosecream/60 via-ivory to-rosecream/30 dark:from-[#1a0812] dark:via-[#120409] dark:to-[#17050e] transition-colors duration-300">
{/* Delicate background decorative watermarks / stitches */}
<div className="absolute top-0 right-0 w-96 h-96 bg-plum-100/40 dark:bg-plum-900/20 rounded-full blur-3xl pointer-events-none -z-10" />
<div className="absolute bottom-10 left-0 w-80 h-80 bg-champagne-100/50 dark:bg-champagne-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
{/* Decorative Thread-stitch line SVG */}
<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10 -z-10" xmlns="http://www.w3.org/2000/svg">
<path d="M-100,100 C300,250 600,-50 1200,180 S1800,80 2200,300" fill="none" stroke="#863c5a" strokeWidth="1.5" strokeDasharray="6 8" />
<path d="M-50,400 C400,200 800,600 1400,350 S1900,500 2400,400" fill="none" stroke="#c59a54" strokeWidth="1" strokeDasharray="4 6" />
</svg>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
{/* Left Column: Headline, Copy, Action CTAs & Trust Badges */}
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
className="lg:col-span-7 flex flex-col items-start text-left"
>
{/* Monogram / Eyebrow chip */}
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plum-100/80 dark:bg-plum-900/70 border border-plum-200 dark:border-plum-700/60 text-plum-900 dark:text-champagne-200 text-xs font-semibold tracking-wide mb-6">
<span className="w-2 h-2 rounded-full bg-plum-600 dark:bg-champagne-400 animate-ping" />
<span>Bespoke Saree Pleating & Couture Blouse Studio</span>
</div>
{/* Main Headline */}
<h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-plum-950 dark:text-white leading-[1.12] mb-6">
Your Saree. <br className="hidden sm:inline" />
Your Style. <br />
<span className="italic font-normal text-champagne-600 dark:text-champagne-400">Perfect</span>{' '}
<span className="underline decoration-plum-300 dark:decoration-champagne-400/70 decoration-wavy underline-offset-8">Crafted.</span>
</h1>
{/* Supporting Copy */}
<p className="text-base sm:text-lg text-charcoal/80 dark:text-champagne-100/80 max-w-2xl leading-relaxed mb-8">
From razor-sharp saree pleats to sculpted bridal blouses with zero shoulder drop, we turn your most treasured outfits into effortless, camera-ready works of art.
</p>
{/* Primary & Secondary Action CTAs */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
<button
onClick={onOpenBooking}
id="hero-book-service-cta"
className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-full text-white bg-plum-900 hover:bg-plum-950 dark:bg-champagne-400 dark:hover:bg-champagne-300 dark:text-plum-950 transition-all shadow-lg shadow-plum-950/15 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer group"
>
<span>Book a Service</span>
<ArrowRight className="w-4 h-4 text-champagne-300 dark:text-plum-950 group-hover:translate-x-1 transition-transform" />
</button>
<button
onClick={onOpenDesignYourLook}
id="hero-design-look-cta"
className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold tracking-wide rounded-full text-plum-950 bg-champagne-100/90 border border-champagne-300 hover:bg-champagne-200 dark:bg-plum-900/80 dark:border-plum-700 dark:text-champagne-200 dark:hover:bg-plum-800 transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer"
>
<Sparkles className="w-4 h-4 text-champagne-700 dark:text-champagne-300" />
<span>Design Your Look</span>
</button>
<button
onClick={onExploreWork}
id="hero-explore-work-cta"
className="inline-flex items-center justify-center gap-1.5 px-5 py-4 text-sm font-semibold text-charcoal/80 hover:text-plum-900 dark:text-champagne-200/80 dark:hover:text-champagne-100 transition-colors cursor-pointer"
>
<Eye className="w-4 h-4 text-plum-700 dark:text-champagne-400" />
<span>Explore Gallery</span>
</button>
</div>
{/* Trust Points Mini Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-plum-200/60 dark:border-plum-900 w-full text-xs text-charcoal/80 dark:text-champagne-200/80 font-medium">
<div className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-plum-700 dark:text-champagne-400 shrink-0" />
<span>100% Fit Guarantee</span>
</div>
<div className="flex items-center gap-2">
<Clock className="w-4 h-4 text-champagne-700 dark:text-champagne-400 shrink-0" />
<span>48-Hour Express Available</span>
</div>
<div className="flex items-center gap-2">
<ShieldCheck className="w-4 h-4 text-plum-700 dark:text-champagne-400 shrink-0" />
<span>Zero Fabric Cutting on Silks</span>
</div>
</div>
</motion.div>
{/* Right Column: Editorial Visual Showcase with Floating Interactive Overlays */}
<motion.div
initial={{ opacity: 0, scale: 0.96 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8, delay: 0.15 }}
className="lg:col-span-5 relative"
>
<div className="relative mx-auto max-w-md lg:max-w-none">
{/* Decorative Frame Outline */}
<div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-plum-200/80 dark:border-plum-800/80 -rotate-1 pointer-events-none" />
<div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-plum-900/10 via-transparent to-champagne-500/20 rotate-1 pointer-events-none" />
{/* Main Image Container */}
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-plum-950/20 aspect-[4/5] bg-plum-100 dark:bg-plum-950 border border-transparent dark:border-plum-800">
<img
src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
alt="Model wearing pristine Kanjivaram silk saree with tailored bridal blouse and razor pleats"
className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
/>
{/* Gradient overlay at bottom for contrast */}
<div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent pointer-events-none" />
{/* Bottom Image Tag */}
<div className="absolute bottom-4 left-4 right-4 text-white text-xs">
<span className="font-serif italic text-champagne-200 text-sm font-medium">Heirloom Kanjivaram</span>
<p className="text-white/80 text-[11px]">Precision 1.25" Box Pleat Architecture + Antique Zari Stitched Pallu</p>
</div>
</div>
{/* Floating Service Badge 1 (Top Left) */}
<motion.div
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: 0.4 }}
className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 dark:bg-plum-950/95 backdrop-blur-md p-3.5 rounded-2xl border border-plum-200 dark:border-plum-800 shadow-xl max-w-[210px] z-10"
>
<div className="flex items-center gap-1.5 mb-1 text-champagne-600 dark:text-champagne-400">
{[...Array(5)].map((_, i) => (
<Star key={i} className="w-3.5 h-3.5 fill-current" />
))}
<span className="text-[11px] font-bold text-plum-950 dark:text-champagne-200 ml-1">4.9/5</span>
</div>
<p className="text-xs font-bold text-plum-950 dark:text-white leading-snug">
“Flawless pleats that stayed intact all through my wedding!”
</p>
<span className="text-[10px] text-warmgray dark:text-champagne-400/80 block mt-0.5">Ananya K. — Bride</span>
</motion.div>
{/* Floating Service Badge 2 (Bottom Right) */}
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.55 }}
className="absolute -bottom-6 -right-4 sm:-right-6 bg-plum-900 dark:bg-plum-900 text-white p-4 rounded-2xl border border-champagne-400/40 shadow-2xl max-w-[230px] z-10"
>
<div className="flex items-center gap-2 mb-1.5">
<div className="p-1.5 rounded-lg bg-plum-800 text-champagne-300">
<Ruler className="w-4 h-4" />
</div>
<div>
<span className="text-[11px] font-bold uppercase tracking-wider text-champagne-300 block">
Perfect Pleats
</span>
<span className="text-[10px] text-white/70">60-Sec Step-In Ready</span>
</div>
</div>
<p className="text-[11px] text-white/90 leading-tight">
Calibrated to your exact height & waist. Zero safety pin struggles.
</p>
</motion.div>
{/* Decorative corner stitch motif */}
<div className="absolute top-4 right-4 bg-white/80 dark:bg-plum-900/80 backdrop-blur-sm p-2 rounded-full border border-plum-200/60 dark:border-plum-700 shadow-sm text-plum-900 dark:text-champagne-300">
<Scissors className="w-4 h-4" />
</div>
</div>
</motion.div>
</div>
{/* Studio Numbers & Proven Track Record Bar */}
<div className="mt-16 sm:mt-20 pt-8 border-t border-plum-200/70 dark:border-plum-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="space-y-1">
<span className="font-serif text-3xl sm:text-4xl font-bold text-plum-950 dark:text-champagne-100 block">14,500+</span>
<span className="text-xs uppercase tracking-wider text-warmgray dark:text-champagne-400/70 font-semibold">Sarees Perfectly Pleated</span>
</div>
<div className="space-y-1">
<span className="font-serif text-3xl sm:text-4xl font-bold text-plum-950 dark:text-champagne-100 block">8,200+</span>
<span className="text-xs uppercase tracking-wider text-warmgray dark:text-champagne-400/70 font-semibold">Bespoke Blouses Tailored</span>
</div>
<div className="space-y-1">
<span className="font-serif text-3xl sm:text-4xl font-bold text-plum-950 dark:text-champagne-100 block">4.9 ★</span>
<span className="text-xs uppercase tracking-wider text-warmgray dark:text-champagne-400/70 font-semibold">1,280+ Verified Reviews</span>
</div>
<div className="space-y-1">
<span className="font-serif text-3xl sm:text-4xl font-bold text-champagne-600 dark:text-champagne-400 block">48 Hrs</span>
<span className="text-xs uppercase tracking-wider text-warmgray dark:text-champagne-400/70 font-semibold">Express Turnaround Available</span>
</div>
</div>
</div>
</section>
);
};
