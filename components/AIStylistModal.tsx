import React, { useState } from 'react';
import { X, Send, Bot, User, Sparkles, ArrowRight } from 'lucide-react';
interface AIStylistModalProps {
isOpen: boolean;
onClose: () => void;
onBookSuggestedLook: (lookDetails: any) => void;
}
export const AIStylistModal: React.FC<AIStylistModalProps> = ({ isOpen, onClose, onBookSuggestedLook }) => {
const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; recommendation?: any }>>([
{ sender: 'ai', text: "Namaste! I am your Senior Fashion & Saree Draping Consultant at Pleat & Stitch. Tell me about your event or fabric and I'll recommend the perfect look!" },
]);
const [inputValue, setInputValue] = useState('');
const handleSend = (textToSend?: string) => {
const query = textToSend || inputValue;
if (!query.trim()) return;
const newMessages = [...messages, { sender: 'user' as const, text: query }];
setMessages(newMessages);
setInputValue('');
setTimeout(() => {
const recommendation = { title: 'Custom Studio Consultation', service: 'Saree Pleating + Bespoke Blouse Tailoring', turnaround: '3 - 5 Days' };
setMessages([...newMessages, { sender: 'ai', text: 'Based on your request, our senior stylists recommend pairing tailored padded blouses with precision steam-pressed pleats.', recommendation }]);
}, 400);
};
if (!isOpen) return null;
return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum-950/70 backdrop-blur-md">
<div className="bg-white rounded-3xl max-w-xl w-full h-[620px] shadow-2xl border border-plum-200 flex flex-col overflow-hidden relative">
<div className="p-4 sm:p-5 bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 text-white flex items-center justify-between border-b border-plum-800">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-champagne-300 text-plum-950 flex items-center justify-center font-bold shadow-inner"><Sparkles className="w-5 h-5 text-plum-900" /></div>
<h3 className="font-serif text-lg font-bold text-champagne-200">AI Senior Stylist</h3>
</div>
<button onClick={onClose} className="p-2 rounded-full bg-plum-800/80 hover:bg-plum-800 text-white transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
</div>
<div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-rosecream/20">
{messages.map((msg, idx) => (
<div key={idx} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
{msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-plum-100 text-plum-900 flex items-center justify-center shrink-0 mt-0.5"><Bot className="w-4 h-4" /></div>}
<div className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-plum-900 text-white shadow-sm' : 'bg-white text-charcoal/90 border border-plum-200/80 shadow-2xs'}`}>
<p>{msg.text}</p>
{msg.recommendation && (
<div className="mt-3 pt-3 border-t border-plum-100 bg-rosecream/60 p-3 rounded-xl space-y-1.5">
<span className="font-serif text-sm font-bold text-plum-950 block">{msg.recommendation.title}</span>
<button type="button" onClick={() => { onClose(); onBookSuggestedLook(msg.recommendation); }} className="w-full py-2 px-3 rounded-lg bg-plum-900 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-plum-950 transition-all flex items-center justify-center gap-1 cursor-pointer mt-2">
<span>Book This Styling Look</span>
<ArrowRight className="w-3.5 h-3.5 text-champagne-300" />
</button>
</div>
)}
</div>
{msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-champagne-100 text-plum-950 flex items-center justify-center shrink-0 mt-0.5"><User className="w-4 h-4" /></div>}
</div>
))}
</div>
<div className="p-3.5 bg-white border-t border-plum-200 flex items-center gap-2">
<input type="text" placeholder="Ask anything about saree pleating, blouse cuts, fabrics..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="flex-1 p-2.5 rounded-xl border border-plum-200 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-plum-900 bg-rosecream/30" />
<button type="button" onClick={() => handleSend()} disabled={!inputValue.trim()} className="p-2.5 rounded-xl bg-plum-900 hover:bg-plum-950 disabled:opacity-50 text-white transition-colors cursor-pointer shrink-0"><Send className="w-4 h-4" /></button>
</div>
</div>
</div>
);
};
