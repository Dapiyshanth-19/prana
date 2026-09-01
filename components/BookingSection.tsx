import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ServiceCategory, OccasionType, BookingFormData } from '../types';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';
interface BookingSectionProps {
initialService?: ServiceCategory;
initialOccasion?: OccasionType;
onBookingSubmitted: (data: BookingFormData) => void;
}
export const BookingSection: React.FC<BookingSectionProps> = ({ initialService = 'pleating', initialOccasion = 'wedding', onBookingSubmitted }) => {
const [service, setService] = useState<ServiceCategory>(initialService);
const [occasion, setOccasion] = useState<OccasionType>(initialOccasion);
const [eventDate, setEventDate] = useState('');
const [fullName, setFullName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [notes, setNotes] = useState('');
const [isExpress, setIsExpress] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (!fullName || !phone) {
alert('Please provide your name and phone number.');
return;
}
onBookingSubmitted({ fullName, phone, email, service, occasion, eventDate, deliveryMethod: 'doorstep-pickup', notes, isExpress });
setIsSubmitted(true);
};
const handleWhatsApp = () => {
const text = `Hi Pleat & Stitch! Service: ${service}, Occasion: ${occasion}, Name: ${fullName || 'Customer'}, Phone: ${phone || 'Pending'}`;
window.open(`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
};
return (
<section id="booking-quote" className="py-16 lg:py-24 bg-gradient-to-b from-white via-rosecream/40 to-ivory relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-14">
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">Have a Saree or Blouse in Mind?</h2>
</div>
<div className="max-w-4xl mx-auto bg-white rounded-3xl border border-plum-200/90 shadow-xl overflow-hidden">
{isSubmitted ? (
<div className="p-8 sm:p-14 text-center space-y-6">
<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto"><CheckCircle2 className="w-8 h-8" /></div>
<h3 className="font-serif text-3xl font-bold text-plum-950">Booking Request Received!</h3>
<p className="text-charcoal/80 text-sm max-w-md mx-auto">Thank you, <strong>{fullName}</strong>! We'll contact you at <strong>{phone}</strong> shortly.</p>
<button type="button" onClick={handleWhatsApp} className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md mx-auto">
<WhatsAppIcon className="w-4 h-4 text-white" />
<span>Open WhatsApp Thread</span>
</button>
</div>
) : (
<form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">Select Service *</label>
<select value={service} onChange={(e) => setService(e.target.value as ServiceCategory)} className="w-full p-3.5 rounded-xl border border-plum-200 bg-rosecream/30 text-xs font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-plum-900" required>
<option value="pleating">Saree Pleating (Rs. 1,500)</option>
<option value="blouse-stitching">Custom Blouse Tailoring (Rs. 3,500)</option>
<option value="custom-design">Hand Embroidery & Aari Work (Rs. 7,500)</option>
<option value="alterations">Alterations & Fit (Rs. 850)</option>
<option value="draping">Bridal Draping (Rs. 4,500)</option>
<option value="custom-wear">Custom Ethnic Wear (Rs. 9,500)</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">Occasion *</label>
<select value={occasion} onChange={(e) => setOccasion(e.target.value as OccasionType)} className="w-full p-3.5 rounded-xl border border-plum-200 bg-rosecream/30 text-xs font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-plum-900" required>
<option value="wedding">Wedding / Muhurtham</option>
<option value="reception">Grand Reception</option>
<option value="engagement">Engagement / Roka</option>
<option value="party">Sangeet / Cocktail</option>
<option value="festival">Festive & Pooja</option>
<option value="photoshoot">Photoshoot</option>
<option value="office">Office / Corporate</option>
<option value="special">Anniversary / Special</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">Event Date *</label>
<input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="w-full p-3.5 rounded-xl border border-plum-200 bg-rosecream/30 text-xs font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-plum-900" required />
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">Full Name *</label>
<input type="text" placeholder="e.g. Dilani Perera" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-3.5 rounded-xl border border-plum-200 bg-white text-xs font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-plum-900" required />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">Phone / WhatsApp *</label>
<input type="tel" placeholder="e.g. +94 77 123 4567" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3.5 rounded-xl border border-plum-200 bg-white text-xs font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-plum-900" required />
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">Email</label>
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3.5 rounded-xl border border-plum-200 bg-white text-xs font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-plum-900" />
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">Notes</label>
<textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full p-3.5 rounded-xl border border-plum-200 bg-white text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-plum-900" />
</div>
<div className="p-4 rounded-2xl bg-champagne-50 border border-champagne-300/80 flex items-center justify-between">
<span className="text-xs font-bold text-plum-950 block">48-Hour Express Turnaround?</span>
<input type="checkbox" checked={isExpress} onChange={(e) => setIsExpress(e.target.checked)} className="w-5 h-5 accent-plum-900 cursor-pointer" />
</div>
<div className="pt-4 border-t border-plum-100 flex flex-col sm:flex-row items-center gap-4">
<button type="submit" id="booking-submit-quote-btn" className="w-full sm:flex-1 py-4 px-8 rounded-full bg-gradient-to-r from-plum-900 to-plum-950 hover:from-plum-950 hover:to-plum-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer">
<span>Request Studio Quote & Booking</span>
<ArrowRight className="w-4 h-4 text-champagne-300" />
</button>
<button type="button" onClick={handleWhatsApp} className="w-full sm:w-auto py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md">
<WhatsAppIcon className="w-4 h-4 text-white" />
<span>WhatsApp Us</span>
</button>
</div>
<div className="flex items-center justify-center gap-4 text-[11px] text-warmgray text-center pt-2">
<span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /><span>100% Fit Guarantee</span></span>
</div>
</form>
)}
</div>
</div>
</section>
);
};
