import React from 'react';
import { Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';
interface FloatingCTAProps {
onOpenBooking: () => void;
onOpenAIStylist: () => void;
}
export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenBooking, onOpenAIStylist }) => {
const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Pleat%20%26%20Stitch!`;
return (
<>
<div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-auto">
<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id="floating-whatsapp-btn" className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30" title="Chat with Us on WhatsApp" onClick={onOpenAIStylist ? undefined : undefined}>
<WhatsAppIcon className="w-5 h-5" />
<span>Chat on WhatsApp</span>
</a>
</div>
<div id="mobile-sticky-bottom-bar" className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-plum-200/80 p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
<button type="button" onClick={onOpenBooking} className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-plum-900 to-plum-950 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md">
<Calendar className="w-4 h-4 text-champagne-300" />
<span>Book Fitting</span>
</button>
<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md">
<WhatsAppIcon className="w-4 h-4" />
<span>WhatsApp</span>
</a>
</div>
</>
);
};
