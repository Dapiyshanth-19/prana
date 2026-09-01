import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmartServiceSelector } from './components/SmartServiceSelector';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { DesignYourLook } from './components/DesignYourLook';
import { BlouseGallery } from './components/BlouseGallery';
import { SareePleatingShowcase } from './components/SareePleatingShowcase';
import { OccasionSelector } from './components/OccasionSelector';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Testimonials } from './components/Testimonials';
import { SocialGallery } from './components/SocialGallery';
import { BookingSection } from './components/BookingSection';
import { FloatingCTA } from './components/FloatingCTA';
import { AIStylistModal } from './components/AIStylistModal';
import { Footer } from './components/Footer';
import { ServiceCategory, OccasionType, BlouseDesignItem, BookingFormData } from './types';
export function App() {
const [isAIStylistOpen, setIsAIStylistOpen] = useState<boolean>(false);
const [activeBookingService, setActiveBookingService] = useState<ServiceCategory>('pleating');
const [activeBookingOccasion, setActiveBookingOccasion] = useState<OccasionType>('wedding');
// Dark Mode State & Persistence
const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
if (typeof window !== 'undefined') {
const saved = localStorage.getItem('ps_dark_mode');
if (saved !== null) {
return saved === 'true';
}
return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
return false;
});
useEffect(() => {
if (isDarkMode) {
document.documentElement.classList.add('dark');
localStorage.setItem('ps_dark_mode', 'true');
} else {
document.documentElement.classList.remove('dark');
localStorage.setItem('ps_dark_mode', 'false');
}
}, [isDarkMode]);
const toggleDarkMode = () => {
setIsDarkMode((prev) => !prev);
};
// Smooth scroll handler
const scrollToSection = (sectionId: string) => {
const el = document.getElementById(sectionId);
if (el) {
el.scrollIntoView({ behavior: 'smooth' });
}
};
const handleBookService = (serviceId: string) => {
setActiveBookingService(serviceId as ServiceCategory);
scrollToSection('booking-quote');
};
const handleUseBlouseDesign = (design: BlouseDesignItem) => {
scrollToSection('design-your-look');
};
const handleSelectOccasionPackage = (pkg: any) => {
setActiveBookingOccasion(pkg.occasion);
scrollToSection('booking-quote');
};
const handleLookCompleted = (lookData: any) => {
scrollToSection('booking-quote');
};
const handleBookingSubmitted = (data: BookingFormData) => {
console.log('Booking request registered:', data);
};
const handleAISuggestedLook = (lookDetails: any) => {
scrollToSection('booking-quote');
};
return (
<div className="min-h-screen bg-ivory dark:bg-[#120409] text-charcoal dark:text-[#F8ECF1] font-sans selection:bg-plum-900 selection:text-white relative transition-colors duration-300">
{/* 1. Header & Navigation with Unique Luxury Theme Switcher */}
<Navbar
onOpenBooking={() => scrollToSection('booking-quote')}
onOpenAIStylist={() => setIsAIStylistOpen(true)}
isDarkMode={isDarkMode}
onToggleDarkMode={toggleDarkMode}
/>
<main id="main-content">
{/* 2. Editorial Hero Section */}
<Hero
onOpenBooking={() => scrollToSection('booking-quote')}
onExploreWork={() => scrollToSection('services')}
onOpenDesignYourLook={() => scrollToSection('design-your-look')}
/>
{/* 3. Smart Service & Pricing Configurator */}
<SmartServiceSelector
onBookSelectedService={(serviceId) => handleBookService(serviceId)}
/>
{/* 4. Before / After Interactive Slider */}
<BeforeAfterSlider />
{/* 5. Core Services Section */}
<ServicesSection
onBookService={(serviceId) => handleBookService(serviceId)}
/>
{/* 6. Signature "Design Your Look" 4-Step Configurator */}
<DesignYourLook
onBookLook={handleLookCompleted}
/>
{/* 7. Blouse Design Lookbook & Gallery */}
<BlouseGallery
onUseDesign={handleUseBlouseDesign}
/>
{/* 8. Saree Pleating Showcase (Process & 60-Sec Step-in) */}
<SareePleatingShowcase
onBookPleating={() => handleBookService('pleating')}
/>
{/* 9. Occasion Quick Selector */}
<OccasionSelector
onSelectOccasionPackage={handleSelectOccasionPackage}
/>
{/* 10. How It Works */}
<HowItWorks />
{/* 11. Curated Styling Essentials & Products */}
<FeaturedProducts />
{/* 12. Verified Customer Testimonials */}
<Testimonials />
{/* 13. Social Lookbook & Instagram Grid */}
<SocialGallery />
{/* 14. Main Booking & Instant Quote Section */}
<BookingSection
initialService={activeBookingService}
initialOccasion={activeBookingOccasion}
onBookingSubmitted={handleBookingSubmitted}
/>
</main>
{/* 15. Premium Studio Footer with FAQ Accordion */}
<Footer />
{/* 16. Floating WhatsApp Button & Mobile Action Bar */}
<FloatingCTA
onOpenBooking={() => scrollToSection('booking-quote')}
onOpenAIStylist={() => setIsAIStylistOpen(true)}
/>
{/* 17. Virtual AI Stylist & Saree Consultant Modal */}
<AIStylistModal
isOpen={isAIStylistOpen}
onClose={() => setIsAIStylistOpen(false)}
onBookSuggestedLook={handleAISuggestedLook}
/>
</div>
);
}
export default App;
