import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { FEATURED_PRODUCTS, STUDIO_INFO } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';
export const FeaturedProducts: React.FC = () => {
const handleEnquireProduct = (product: typeof FEATURED_PRODUCTS[number]) => {
const message = `Hi Pleat & Stitch! I am interested in: ${product.name} (Rs. ${product.price.toLocaleString()}).`;
window.open(`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
};
return (
<section id="products" className="py-16 lg:py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-900 text-xs font-bold uppercase tracking-wider mb-3">
<ShoppingBag className="w-3.5 h-3.5 text-champagne-600" />
<span>Curated Styling Essentials</span>
</div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum-950 tracking-tight">Made With Love, Ready For You</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{FEATURED_PRODUCTS.map((product) => (
<div key={product.id} className="group bg-rosecream/30 rounded-3xl border border-plum-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="relative aspect-square overflow-hidden bg-plum-950">
<img src={product.image} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
{product.tag && <div className="absolute top-3 left-3 bg-ivory/95 backdrop-blur-md text-plum-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-plum-200 shadow-sm">{product.tag}</div>}
</div>
<div className="p-5">
<div className="flex items-center gap-1 text-champagne-600 text-xs mb-1.5">
<Star className="w-3.5 h-3.5 fill-current" />
<span className="font-bold text-plum-950">{product.rating}</span>
</div>
<h3 className="font-serif text-base font-bold text-plum-950 line-clamp-1">{product.name}</h3>
<div className="mt-4 pt-3 border-t border-plum-100 flex items-center justify-between">
<span className="font-serif text-lg font-bold text-plum-950">Rs. {product.price.toLocaleString()}</span>
</div>
</div>
</div>
<div className="p-5 pt-0">
<button type="button" onClick={() => handleEnquireProduct(product)} className="w-full py-2 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2">
<WhatsAppIcon className="w-4 h-4 text-white" />
<span>Enquire</span>
</button>
</div>
</div>
))}
</div>
</div>
</section>
);
};
