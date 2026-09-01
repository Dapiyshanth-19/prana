import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
Scissors,
Sparkles,
Menu,
X,
ChevronRight,
Calendar
} from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ThemeToggle } from './ThemeToggle';
interface NavbarProps {
onOpenBooking: (service?: string) => void;
onOpenAIStylist?: () => void;
isDarkMode: boolean;
onToggleDarkMode: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({
onOpenBooking,
isDarkMode,
onToggleDarkMode
}) => {
const [isScrolled, setIsScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 20);
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
const navLinks = [
{ label: 'Services', href: '#services' },
{ label: 'Design Look', href: '#design-your-look', isSpecial: true },
{ label: 'Lookbook', href: '#blouse-gallery' },
{ label: 'Saree Pleating', href: '#saree-pleating' },
{ label: 'Before & After', href: '#before-after' },
{ label: 'Occasions', href: '#occasions' },
{ label: 'Essentials', href: '#products' },
];
const handleNavClick = (href: string) => {
setMobileMenuOpen(false);
const el = document.querySelector(href);
if (el) {
el.scrollIntoView({ behavior: 'smooth' });
}
};
return (
<>
{/* Top Notification Bar */}
<div
id="top-announcement-bar"
className="bg-plum-950 text-champagne-200 text-[11px] sm:text-xs py-1.5 px-4 font-medium tracking-wide flex items-center justify-between sm:justify-center gap-3 border-b border-plum-900 sticky top-0 z-50 whitespace-nowrap overflow-hidden"
>
<div className="flex items-center gap-2 mx-auto sm:mx-0 truncate">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
<span className="truncate">
Colombo & Jaffna: <strong>48-Hour Express Pleating & Tailoring</strong> Available
</span>
<a
href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Pleat%20%26%20Stitch%20Sri%20Lanka%2C%20I%20would%20like%20to%20enquire%20about%20express%20slots.`}
target="_blank"
rel="noopener noreferrer"
className="ml-2 underline text-champagne-300 hover:text-white transition-colors cursor-pointer hidden md:inline-flex items-center gap-1 font-semibold whitespace-nowrap"
>
<span>Express Booking</span>
<ChevronRight className="w-3 h-3" />
</a>
</div>
{/* WhatsApp Direct Header Link */}
<a
href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Pleat%20%26%20Stitch%20Sri%20Lanka%2C%20I%20would%20like%20to%20enquire%20about%20your%20saree%20and%20blouse%20services.`}
target="_blank"
rel="noopener noreferrer"
className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 hover:text-emerald-200 bg-emerald-950/70 hover:bg-emerald-900/90 px-2.5 py-0.5 rounded-full border border-emerald-500/30 transition-all cursor-pointer shrink-0 whitespace-nowrap"
>
<WhatsAppIcon className="w-3 h-3 text-[#25D366]" fillBg={false} />
<span>{STUDIO_INFO.phone}</span>
</a>
</div>
{/* Main Navbar */}
<header
id="main-navbar"
className={`sticky top-[29px] z-40 transition-all duration-300 ${
isScrolled
? 'bg-white/95 dark:bg-plum-950/95 backdrop-blur-md shadow-md shadow-plum-950/5 py-2.5 border-b border-plum-100 dark:border-plum-900'
: 'bg-white/90 dark:bg-plum-950/90 backdrop-blur-sm shadow-xs py-3 sm:py-3.5 border-b border-plum-100/70 dark:border-plum-900/70'
}`}
>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
{/* Brand Logo */}
<a
href="#"
className="flex items-center gap-2.5 group cursor-pointer focus:outline-none shrink-0"
id="brand-logo"
>
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plum-900 to-plum-950 flex items-center justify-center text-champagne-200 shadow-sm group-hover:scale-105 transition-all duration-300 border border-champagne-400/20 shrink-0">
<Scissors className="w-4 h-4 text-champagne-300" />
</div>
<div className="flex flex-col">
<span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-plum-950 dark:text-champagne-100 leading-none group-hover:text-plum-800 dark:group-hover:text-champagne-300 transition-colors whitespace-nowrap">
Pleat <span className="text-champagne-600 font-light">&</span> Stitch
</span>
<span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-warmgray dark:text-champagne-400/70 font-semibold mt-0.5 whitespace-nowrap">
Bespoke Studio • Sri Lanka
</span>
</div>
</a>
{/* Desktop Navigation Links (Clean, horizontal, no wrapping) */}
<nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium text-charcoal/80 dark:text-champagne-200/90">
{navLinks.map((item) => (
<button
key={item.label}
type="button"
onClick={() => handleNavClick(item.href)}
className={`transition-all duration-200 cursor-pointer whitespace-nowrap px-3 py-1.5 rounded-lg focus:outline-none ${
item.isSpecial
? 'text-plum-950 dark:text-champagne-950 font-bold bg-champagne-100/90 dark:bg-champagne-300 border border-champagne-300 hover:bg-champagne-200 shadow-2xs flex items-center gap-1.5'
: 'hover:text-plum-950 dark:hover:text-white hover:bg-plum-50/60 dark:hover:bg-plum-900/60'
}`}
>
{item.isSpecial && <Sparkles className="w-3.5 h-3.5 text-champagne-700 dark:text-plum-950 animate-spin-slow shrink-0" />}
<span>{item.label}</span>
</button>
))}
</nav>
{/* Right Action CTA Buttons */}
<div className="hidden sm:flex items-center gap-3 shrink-0">
{/* Unique Luxury Dark Mode Toggle */}
<ThemeToggle
isDarkMode={isDarkMode}
onToggle={onToggleDarkMode}
/>
{/* WhatsApp Quick Chat */}
<a
href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Pleat%20%26%20Stitch%2C%20I%20would%20like%20to%20enquire%20about%20custom%20saree%20pleating%20and%20blouse%20tailoring.`}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 transition-all duration-300 shadow-2xs hover:shadow-sm cursor-pointer group shrink-0"
title="Chat on WhatsApp"
id="nav-whatsapp-btn"
>
<WhatsAppIcon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
</a>
{/* Main Booking Button */}
<button
type="button"
onClick={() => onOpenBooking()}
id="nav-book-service-btn"
className="inline-flex items-center gap-1.5 px-3.5 py-1.5 xl:px-4 xl:py-2 text-xs font-bold uppercase tracking-wider rounded-full text-white bg-plum-900 hover:bg-plum-950 dark:bg-champagne-500 dark:hover:bg-champagne-400 dark:text-plum-950 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border border-plum-800 dark:border-champagne-400 whitespace-nowrap shrink-0"
>
<Calendar className="w-3 h-3 text-champagne-300 dark:text-plum-950 shrink-0" />
<span>Book Fitting</span>
</button>
</div>
{/* Mobile Menu & Quick Controls */}
<div className="flex lg:hidden items-center gap-2 shrink-0">
<ThemeToggle
isDarkMode={isDarkMode}
onToggle={onToggleDarkMode}
/>
<a
href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Pleat%20%26%20Stitch%2C%20I%20would%20like%20to%20enquire%20about%20saree%20and%20blouse%20services.`}
target="_blank"
rel="noopener noreferrer"
className="p-1.5 rounded-full bg-[#25D366] text-white shadow-xs"
title="WhatsApp"
>
<WhatsAppIcon className="w-3.5 h-3.5" />
</a>
<button
type="button"
onClick={() => onOpenBooking()}
className="px-2.5 py-1 text-[11px] font-bold rounded-full text-white bg-plum-900 shadow-xs whitespace-nowrap"
>
Book
</button>
<button
type="button"
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
id="mobile-menu-toggle"
className="p-1.5 rounded-lg text-plum-950 dark:text-champagne-200 bg-plum-50 dark:bg-plum-900 border border-plum-200 dark:border-plum-800 hover:bg-plum-100 transition-colors focus:outline-none"
aria-label="Toggle Navigation Menu"
>
{mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
</button>
</div>
</div>
</header>
{/* Mobile Drawer Menu */}
<AnimatePresence>
{mobileMenuOpen && (
<motion.div
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -10 }}
id="mobile-nav-drawer"
className="lg:hidden fixed top-[82px] left-3 right-3 z-50 bg-white/95 dark:bg-plum-950/95 backdrop-blur-xl rounded-2xl border border-plum-200 dark:border-plum-800 shadow-2xl overflow-hidden"
>
<div className="p-4 space-y-3 max-h-[calc(100vh-100px)] overflow-y-auto">
<div className="flex items-center justify-between p-3 bg-plum-50/80 dark:bg-plum-900/60 rounded-xl border border-plum-200 dark:border-plum-800">
<span className="text-xs font-bold text-plum-950 dark:text-champagne-200">
{isDarkMode ? 'Royal Night Atmosphere' : 'Luxe Daylight Atmosphere'}
</span>
<ThemeToggle
isDarkMode={isDarkMode}
onToggle={onToggleDarkMode}
/>
</div>
<div className="divide-y divide-plum-100 dark:divide-plum-900 text-xs font-semibold">
{navLinks.map((item) => (
<button
key={item.label}
type="button"
onClick={() => handleNavClick(item.href)}
className="w-full text-left py-2.5 flex items-center justify-between text-charcoal dark:text-champagne-100 hover:text-plum-900 dark:hover:text-champagne-400 transition-colors whitespace-nowrap"
>
<span>{item.label}</span>
<ChevronRight className="w-3.5 h-3.5 text-warmgray dark:text-champagne-500/60" />
</button>
))}
</div>
<div className="pt-2 border-t border-plum-100 dark:border-plum-900 space-y-2">
<button
type="button"
onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-plum-900 hover:bg-plum-950 dark:bg-champagne-500 dark:hover:bg-champagne-400 dark:text-plum-950 rounded-xl shadow-xs"
>
Book Studio Fitting
</button>
<a
href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Pleat%20%26%20Stitch%20Sri%20Lanka%2C%20I%20would%20like%20to%20enquire%20about%20your%20saree%20and%20blouse%20services.`}
target="_blank"
rel="noopener noreferrer"
className="w-full py-2 text-center text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-xs flex items-center justify-center gap-2 transition-colors"
>
<WhatsAppIcon className="w-3.5 h-3.5 text-white" />
<span>Chat on WhatsApp</span>
</a>
</div>
</div>
</motion.div>
)}
</AnimatePresence>
</>
);
};
