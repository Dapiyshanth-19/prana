import React from 'react';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { SOCIAL_GALLERY } from '../data/studioData';
export const SocialGallery: React.FC = () => {
return (
<section id="social-gallery" className="py-16 lg:py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-900 text-xs font-bold uppercase tracking-wider mb-3">
<Instagram className="w-3.5 h-3.5 text-plum-700" />
<span>@PleatAndStitchStudio</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">See What We're Creating</h2>
</div>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-plum-950 bg-rosecream hover:bg-plum-100 border border-plum-200 transition-colors">
<span>Follow Our Journey</span>
<ExternalLink className="w-3.5 h-3.5" />
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
{SOCIAL_GALLERY.map((post) => (
<div key={post.id} className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-plum-950 shadow-2xs hover:shadow-xl transition-all cursor-pointer">
<img src={post.img} alt={post.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
<div className="absolute inset-0 bg-gradient-to-t from-plum-950/95 via-plum-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white text-xs">
<div className="flex justify-end">
<div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold">
<Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
<span>{post.likes}</span>
</div>
</div>
<p className="text-[11px] text-white/90 leading-tight mt-1 line-clamp-3">{post.caption}</p>
</div>
</div>
))}
</div>
</div>
</section>
);
};
