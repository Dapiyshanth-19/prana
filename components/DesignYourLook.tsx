import React, { useState } from 'react';
import { Sparkles, Crown, Check, ChevronRight, ChevronLeft, ArrowRight, Clock } from 'lucide-react';
import { OccasionType } from '../types';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';
interface DesignYourLookProps {
onBookLook: (lookDetails: any) => void;
}
const OCCASIONS: OccasionType[] = ['wedding', 'reception', 'engagement', 'party', 'festival', 'photoshoot'];
const SAREES = ['Kanjivaram Pure Silk', 'Sheer Organza / Tissue', 'Royal Banarasi Brocade', 'Fluid Chiffon & Georgette'];
const STYLES = ['Classic Royal Heritage', 'Modern Minimalist Couture', 'Intricate Aari & Maggam Bridal', 'Fusion Corset / Bralette'];
const SERVICES = [
{ name: 'Saree Pre-Pleating & Box Folding', price: 1500 },
{ name: '60-Sec Ready-to-Wear Conversion', price: 2700 },
{ name: 'Custom Blouse Tailoring (Padded)', price: 4300 },
{ name: 'Handcrafted Pearl Latkans', price: 1450 },
];
export const DesignYourLook: React.FC<DesignYourLookProps> = ({ onBookLook }) => {
const [currentStep, setCurrentStep] = useState(1);
const [selectedOccasion, setSelectedOccasion] = useState<OccasionType>('wedding');
const [selectedSaree, setSelectedSaree] = useState(SAREES[0]);
const [selectedStyle, setSelectedStyle] = useState(STYLES[0]);
const [selectedServices, setSelectedServices] = useState<string[]>([SERVICES[0].name, SERVICES[2].name]);
const [isExpressDelivery, setIsExpressDelivery] = useState(false);
const toggleService = (name: string) => {
setSelectedServices((prev) => prev.includes(name) ? (prev.length > 1 ? prev.filter(s => s !== name) : prev) : [...prev, name]);
};
const totalPrice = selectedServices.reduce((sum, name) => sum + (SERVICES.find(s => s.name === name)?.price || 0), 0) + (isExpressDelivery ? 750 : 0);
const handleCompleteLook = () => {
onBookLook({ occasion: selectedOccasion, saree: selectedSaree, style: selectedStyle, services: selectedServices, isExpress: isExpressDelivery, totalPrice, currency: 'Rs.' });
};
const handleWhatsAppBooking = () => {
const message = `Hi Pleat & Stitch! Occasion: ${selectedOccasion}, Saree: ${selectedSaree}, Style: ${selectedStyle}, Total: Rs. ${totalPrice.toLocaleString()}`;
window.open(`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
};
return (
<section id="design-your-look" className="py-16 lg:py-24 bg-gradient-to-b from-rosecream/40 via-ivory to-rosecream/60 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-10">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-plum-950 text-xs font-bold uppercase tracking-wider mb-3">
<Sparkles className="w-3.5 h-3.5 text-champagne-700" />
<span>Interactive Signature Experience</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">Design Your Look</h2>
<p className="text-charcoal/80 text-base sm:text-lg mt-3">Build your personalized saree & blouse ensemble in 4 simple steps.</p>
</div>
<div className="max-w-3xl mx-auto mb-10 grid grid-cols-4 gap-2 text-center">
{['Occasion', 'Saree Fabric', 'Blouse Style', 'Services'].map((label, i) => {
const num = i + 1;
const isCurrent = currentStep === num;
const isDone = currentStep > num;
return (
<button key={label} type="button" onClick={() => setCurrentStep(num)} className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all cursor-pointer ${isCurrent ? 'bg-plum-900 text-white shadow-sm' : isDone ? 'bg-plum-100 text-plum-900' : 'bg-white/60 text-warmgray'}`}>
<span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mb-1 ${isCurrent ? 'bg-champagne-300 text-plum-950' : isDone ? 'bg-plum-700 text-white' : 'bg-plum-100 text-charcoal/60'}`}>{isDone ? <Check className="w-3.5 h-3.5" /> : num}</span>
<span className="text-[11px] sm:text-xs font-semibold truncate max-w-full">{label}</span>
</button>
);
})}
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7 bg-white rounded-3xl border border-plum-200 p-6 sm:p-8 shadow-sm min-h-[420px] flex flex-col justify-between">
<div className="space-y-4">
{currentStep === 1 && (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
{OCCASIONS.map((occ) => (
<button key={occ} type="button" onClick={() => setSelectedOccasion(occ)} className={`p-4 rounded-2xl border text-left transition-all cursor-pointer capitalize ${selectedOccasion === occ ? 'bg-plum-950 text-white border-plum-950 shadow-md' : 'bg-white text-charcoal border-plum-100 hover:border-plum-300'}`}>
<span className="text-xs font-bold block">{occ}</span>
</button>
))}
</div>
)}
{currentStep === 2 && (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
{SAREES.map((item) => (
<button key={item} type="button" onClick={() => setSelectedSaree(item)} className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${selectedSaree === item ? 'bg-plum-50/80 border-plum-900 shadow-sm' : 'bg-white border-plum-100 hover:border-plum-200'}`}>
<span className="text-xs font-bold text-plum-950 block">{item}</span>
</button>
))}
</div>
)}
{currentStep === 3 && (
<div className="space-y-2.5 pt-2">
{STYLES.map((opt) => (
<button key={opt} type="button" onClick={() => setSelectedStyle(opt)} className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${selectedStyle === opt ? 'bg-plum-50/80 border-plum-900 shadow-sm' : 'bg-white border-plum-100 hover:border-plum-200'}`}>
<span className="text-xs font-bold text-plum-950 block">{opt}</span>
{selectedStyle === opt && <Check className="w-3 h-3 text-plum-900" />}
</button>
))}
</div>
)}
{currentStep === 4 && (
<div className="space-y-3 pt-2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
{SERVICES.map((svc) => {
const isChecked = selectedServices.includes(svc.name);
return (
<button key={svc.name} type="button" onClick={() => toggleService(svc.name)} className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between ${isChecked ? 'bg-plum-50/80 border-plum-900 shadow-sm' : 'bg-white border-plum-100 hover:border-plum-200'}`}>
<span className="text-xs font-bold text-plum-950 block">{svc.name}</span>
<span className="text-xs font-bold text-plum-700 shrink-0 ml-2">+Rs. {svc.price.toLocaleString()}</span>
</button>
);
})}
</div>
<div className="p-3.5 rounded-2xl bg-champagne-50 border border-champagne-300/80 flex items-center justify-between mt-4">
<span className="text-xs font-bold text-plum-950 block">48-Hour Express Rush (+Rs. 750)</span>
<button type="button" onClick={() => setIsExpressDelivery(!isExpressDelivery)} className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${isExpressDelivery ? 'bg-plum-900 text-white' : 'bg-white text-charcoal/80 border border-champagne-300'}`}>{isExpressDelivery ? 'Enabled' : 'Add Express'}</button>
</div>
</div>
)}
</div>
<div className="flex items-center justify-between pt-6 border-t border-plum-100 mt-6">
{currentStep > 1 ? (
<button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-charcoal/80 hover:bg-plum-50 cursor-pointer"><ChevronLeft className="w-4 h-4" /><span>Previous Step</span></button>
) : <div />}
{currentStep < 4 ? (
<button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-plum-900 hover:bg-plum-950 cursor-pointer shadow-sm"><span>Continue</span><ChevronRight className="w-4 h-4" /></button>
) : (
<button type="button" onClick={handleCompleteLook} className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-plum-900 hover:bg-plum-950 cursor-pointer shadow-md"><span>Finalize & Book Look</span><Sparkles className="w-4 h-4 text-champagne-300" /></button>
)}
</div>
</div>
<div className="lg:col-span-5 bg-gradient-to-br from-plum-950 via-plum-900 to-plum-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-champagne-400/30 relative">
<div className="flex items-center gap-2 border-b border-plum-800/80 pb-4 mb-5">
<Crown className="w-5 h-5 text-champagne-300" />
<span className="font-serif text-lg font-bold text-champagne-200">Your Bespoke Look</span>
</div>
<div className="space-y-4 text-xs">
<div className="p-3 rounded-2xl bg-plum-900/60 border border-plum-800"><span className="text-[10px] uppercase font-semibold tracking-wider text-champagne-400 block">Occasion</span><span className="font-bold text-sm text-white capitalize">{selectedOccasion}</span></div>
<div className="p-3 rounded-2xl bg-plum-900/60 border border-plum-800"><span className="text-[10px] uppercase font-semibold tracking-wider text-champagne-400 block">Saree Material</span><span className="font-bold text-sm text-white">{selectedSaree}</span></div>
<div className="p-3 rounded-2xl bg-plum-900/60 border border-plum-800"><span className="text-[10px] uppercase font-semibold tracking-wider text-champagne-400 block">Blouse Architecture</span><span className="font-bold text-sm text-white">{selectedStyle}</span></div>
<div className="flex items-center justify-between text-xs text-champagne-300/90 pt-1"><span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /><span>Turnaround:</span></span><span className="font-bold text-white">{isExpressDelivery ? '48 Hours' : '3 - 5 Days'}</span></div>
</div>
<div className="mt-6 pt-5 border-t border-plum-800/80 space-y-4">
<div>
<span className="text-[10px] uppercase tracking-wider text-champagne-300 font-semibold block">Estimated Look Package (LKR)</span>
<span className="font-serif text-3xl sm:text-4xl font-bold text-champagne-200">Rs. {totalPrice.toLocaleString()}</span>
</div>
<div className="space-y-2.5">
<button type="button" onClick={handleCompleteLook} id="book-this-look-cta" className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-champagne-400 to-champagne-500 hover:from-champagne-300 hover:to-champagne-400 text-plum-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer">
<span>Book This Look Online</span>
<ArrowRight className="w-4 h-4" />
</button>
<button type="button" onClick={handleWhatsAppBooking} id="whatsapp-this-look-cta" className="w-full py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md">
<WhatsAppIcon className="w-4 h-4 text-white" />
<span>Send Look to WhatsApp Stylist</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
);
};
