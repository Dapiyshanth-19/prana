import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
interface ThemeToggleProps {
isDarkMode: boolean;
onToggle: () => void;
className?: string;
showLabel?: boolean;
}
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
isDarkMode,
onToggle,
className = '',
showLabel = false
}) => {
return (
<div className={`inline-flex items-center gap-2 shrink-0 ${className}`}>
{showLabel && (
<span className="text-xs font-semibold text-charcoal/80 dark:text-champagne-200 select-none">
{isDarkMode ? 'Royal Night Mode' : 'Luxe Daylight Mode'}
</span>
)}
<button
type="button"
onClick={onToggle}
id="luxury-dark-mode-toggle"
role="switch"
aria-checked={isDarkMode}
aria-label={isDarkMode ? 'Switch to Luxe Daylight Mode' : 'Switch to Royal Night Dark Mode'}
className={`relative inline-flex items-center w-[54px] h-[30px] p-[2px] rounded-full transition-colors duration-300 cursor-pointer focus:outline-none border shrink-0 select-none overflow-hidden ${
isDarkMode
? 'bg-plum-950 border-champagne-500/50 shadow-inner ring-1 ring-champagne-400/30'
: 'bg-[#F2E8EB] border-plum-200/90 shadow-inner hover:border-champagne-400'
}`}
title={isDarkMode ? 'Switch to Luxe Daylight' : 'Switch to Royal Night (Dark Mode)'}
>
{/* Background ambient symbols anchored within bounds */}
<div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] pointer-events-none select-none z-0">
{/* Sun icon on left */}
<Sun
className={`w-3.5 h-3.5 transition-all duration-300 ${
isDarkMode
? 'opacity-20 text-warmgray'
: 'opacity-90 text-champagne-700'
}`}
/>
{/* Moon icon on right */}
<Moon
className={`w-3.5 h-3.5 transition-all duration-300 ${
isDarkMode
? 'opacity-100 text-champagne-300 drop-shadow-[0_0_4px_rgba(212,175,116,0.6)]'
: 'opacity-20 text-warmgray'
}`}
/>
</div>
{/* Sliding luxury brass/gold toggle thumb */}
<motion.div
animate={{ x: isDarkMode ? 24 : 0 }}
transition={{ type: 'spring', stiffness: 500, damping: 32 }}
className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-colors ${
isDarkMode
? 'bg-gradient-to-tr from-champagne-400 via-champagne-300 to-amber-200 text-plum-950 shadow-[0_0_8px_rgba(225,202,158,0.5)]'
: 'bg-gradient-to-tr from-plum-900 via-plum-800 to-plum-950 text-champagne-200 shadow-plum-950/20'
}`}
>
{isDarkMode ? (
<motion.div
key="dark-icon"
initial={{ rotate: -60, scale: 0.7 }}
animate={{ rotate: 0, scale: 1 }}
transition={{ duration: 0.25 }}
className="flex items-center justify-center"
>
<Sparkles className="w-3 h-3 text-plum-950" />
</motion.div>
) : (
<motion.div
key="light-icon"
initial={{ rotate: 60, scale: 0.7 }}
animate={{ rotate: 0, scale: 1 }}
transition={{ duration: 0.25 }}
className="flex items-center justify-center"
>
<Sun className="w-3 h-3 text-champagne-300" />
</motion.div>
)}
</motion.div>
</button>
</div>
);
};
