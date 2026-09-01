export type OccasionType =
| 'wedding'
| 'reception'
| 'engagement'
| 'party'
| 'festival'
| 'photoshoot'
| 'office'
| 'special';
export type ServiceCategory =
| 'pleating'
| 'blouse-stitching'
| 'custom-design'
| 'alterations'
| 'draping'
| 'custom-wear';
export interface ServiceDetail {
id: ServiceCategory;
name: string;
tagline: string;
description: string;
startingPrice: string;
turnaround: string;
image: string;
features: string[];
popularFor: string[];
options: {
title: string;
choices: { name: string; desc?: string; priceAdd?: number; icon?: string }[];
}[];
}
export interface BlouseDesignItem {
id: string;
name: string;
category: 'bridal' | 'minimal' | 'backs' | 'aari' | 'sleeves' | 'classic';
categoryLabel: string;
neckline: string;
backStyle: string;
sleeveType: string;
fabricRecommendation: string;
occasion: string;
image: string;
badge?: string;
estimatedPrice: string;
}
export interface BeforeAfterItem {
id: string;
title: string;
subtitle: string;
beforeImg: string;
afterImg: string;
beforeLabel: string;
afterLabel: string;
highlightPoints: string[];
}
export interface OccasionRecommendation {
id: OccasionType;
label: string;
icon: string;
title: string;
description: string;
recommendedServices: string[];
suggestedTurnaround: string;
stylingTip: string;
image: string;
popularPackages: { name: string; price: string; features: string[] }[];
}
export interface ProductItem {
id: string;
name: string;
category: string;
price: number;
rating: number;
reviewsCount: number;
image: string;
description: string;
inStock: boolean;
tag?: string;
}
export interface TestimonialItem {
id: string;
name: string;
city: string;
occasion: string;
rating: number;
quote: string;
serviceUsed: string;
avatar: string;
date: string;
}
export interface LookConfiguration {
occasion: OccasionType;
sareeType: string;
blouseStyle: string;
neckline: string;
services: string[];
deliverySpeed: 'standard' | 'express';
estimatedTotal: number;
estimatedTimeline: string;
}
export interface BookingFormData {
fullName: string;
phone: string;
email: string;
service: ServiceCategory;
occasion: OccasionType;
eventDate: string;
deliveryMethod: 'studio-visit' | 'doorstep-pickup' | 'courier';
address?: string;
notes: string;
referenceImage?: string;
isExpress: boolean;
}
