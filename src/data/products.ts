import ringsImg from '../assets/Rings.jpg';
import necklaceImg from '../assets/Necklaces.jpg';
import earringsImg from '../assets/Earrings.jpg';
import braceletsImg from '../assets/Bracelets.jpg';
import ringsBanner from '../assets/Rings Banner.jpg';
import necklacesBanner from '../assets/Necklaces Banner.jpg';
import earringsBanner from '../assets/Earrings Banner.jpg';
import braceletsBanner from '../assets/Bracelets Banner.jpg';
import shopAllBanner from '../assets/Shop Banner.jpg';
import product1 from '../assets/Product1.png';
import product2 from '../assets/Product2.png';
import product3 from '../assets/Product3.png';
import product4 from '../assets/Product4.png';
import carousel1 from '../assets/Carousel 1.png';
import carousel2 from '../assets/Carousel 2.png';
import carousel3 from '../assets/Carousel 3.png';

export interface Product {
  id: string;
  name: string;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets';
  categoryLabel: string;
  price: number; // in PKR
  originalPrice?: number;
  image: string;
  galleryImages?: string[];
  badge?: string;
  badgeType?: 'new' | 'bestseller' | 'sale' | 'restock';
  material: 'Sterling Silver' | 'Gold Plated' | 'Mixed Metal';
  style: 'Minimal' | 'Classic' | 'Statement' | 'Everyday';
  inStock: boolean;
  rating: number;
  description: string;
  details: string[];
}

export interface CategoryInfo {
  id: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'all';
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  bannerImage: string;
}

export class CategoryDataMap {
  static getCategoryInfo(category: string): CategoryInfo {
    const categories: Record<string, CategoryInfo> = {
      rings: {
        id: 'rings',
        name: 'Rings',
        eyebrow: 'THE COLLECTION',
        tagline: 'Refined rings for every occasion.',
        description: 'Timeless bands, statement solitaires, and delicate stacking rings handcrafted for understated luxury.',
        bannerImage: ringsBanner
      },
      necklaces: {
        id: 'necklaces',
        name: 'Necklaces',
        eyebrow: 'THE COLLECTION',
        tagline: 'Delicate silhouettes, designed to be remembered.',
        description: 'Pendants, gilded chains, and pearl chokers created to gracefully elevate everyday wear and grand celebrations.',
        bannerImage: necklacesBanner
      },
      earrings: {
        id: 'earrings',
        name: 'Earrings',
        eyebrow: 'THE COLLECTION',
        tagline: 'Elegant details that frame every moment.',
        description: 'Subtle studs, crystalline drops, and baroque pearl chandelier earrings designed with modern Pakistani elegance.',
        bannerImage: earringsBanner
      },
      bracelets: {
        id: 'bracelets',
        name: 'Bracelets',
        eyebrow: 'THE COLLECTION',
        tagline: 'Effortless pieces that move with you.',
        description: 'Artisanal bangles, heritage cuffs, and fluid link chains tailored for sophisticated armwear stacks.',
        bannerImage: braceletsBanner
      },
      all: {
        id: 'all',
        name: 'All Jewellery',
        eyebrow: 'COMPLETE CATALOGUE',
        tagline: 'Thoughtfully curated luxury jewellery.',
        description: 'Explore the full spectrum of Silver Haus handcrafted releases, iconic best-sellers, and bespoke statement pieces.',
        bannerImage: shopAllBanner
      }
    };

    return categories[category.toLowerCase()] || categories.all;
  }
}

export const PRODUCTS: Product[] = [
  // --- RINGS ---
  {
    id: 'ring-001',
    name: 'Aurora Solitaire Band',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 8500,
    originalPrice: 9800,
    image: product3,
    galleryImages: [product3, ringsImg, product4],
    badge: 'NEW IN',
    badgeType: 'new',
    material: 'Sterling Silver',
    style: 'Classic',
    inStock: true,
    rating: 5,
    description: 'The Aurora Solitaire Band encapsulates contemporary Pakistani elegance. Hand-set with a brilliantly faceted brilliant cut zircon in high-grade 925 sterling silver.',
    details: [
      '925 Sterling Silver with anti-tarnish protective coating',
      'Hand-set AAA Cubic Zirconia stone',
      'Hypoallergenic & nickel-free',
      'Delivered in signature Silver Haus velvet box'
    ]
  },
  {
    id: 'ring-002',
    name: 'Celeste Diamond Ring',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 14500,
    image: ringsImg,
    galleryImages: [ringsImg, product3, product2],
    badge: 'BEST SELLER',
    badgeType: 'bestseller',
    material: 'Gold Plated',
    style: 'Statement',
    inStock: true,
    rating: 5,
    description: 'An architectural 18k gold-plated statement ring featuring an intricate lattice setting. Perfect for evening soirées and grand festive occasions.',
    details: [
      '18k Heavy Gold Plating over Solid Silver core',
      'Double-tier pavé stone alignment',
      'Ergonomic comfort-fit interior band',
      'Includes Silver Haus care card & polish cloth'
    ]
  },
  {
    id: 'ring-003',
    name: 'Elysian Twisted Band',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 6800,
    image: product4,
    galleryImages: [product4, ringsImg, product3],
    material: 'Sterling Silver',
    style: 'Everyday',
    inStock: true,
    rating: 4.8,
    description: 'A fluid, entwined silver band created for seamless everyday stacking or refined minimal single-finger accent.',
    details: [
      'Polished 925 Sterling Silver finish',
      'Subtle rope twist texture',
      'Tarnish-resistant clear lacquer finish'
    ]
  },

  // --- NECKLACES ---
  {
    id: 'necklace-001',
    name: 'Luna Pearl Drop Necklace',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 12800,
    image: carousel1,
    galleryImages: [carousel1, necklaceImg, product1],
    badge: 'NEW IN',
    badgeType: 'new',
    material: 'Gold Plated',
    style: 'Classic',
    inStock: true,
    rating: 5,
    description: 'A luminous freshwater pearl suspended from a delicately handcrafted 18k gold-plated wheat chain.',
    details: [
      'Authentic cultured freshwater pearl drop',
      '18k Gold Plated 925 Sterling Silver chain',
      'Adjustable length: 16" to 18" with extension clasp',
      'Handcrafted by master artisans in Karachi'
    ]
  },
  {
    id: 'necklace-002',
    name: 'Élan Gilded Chain',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 18500,
    originalPrice: 21000,
    image: necklaceImg,
    galleryImages: [necklaceImg, carousel1, carousel3],
    badge: 'RESTOCK',
    badgeType: 'restock',
    material: 'Gold Plated',
    style: 'Statement',
    inStock: true,
    rating: 4.9,
    description: 'Bold yet fluid interlocking links coated in rich 18k champagne gold plating. Designed to anchor modern bridal and festive ensembles.',
    details: [
      'Heavy 18k Champagne Gold micron plating',
      'Secure lobster claw lock with engraved logo',
      'Custom length options available'
    ]
  },
  {
    id: 'necklace-003',
    name: 'Solene Diamond Pendant',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 22000,
    image: carousel3,
    galleryImages: [carousel3, necklaceImg, carousel1],
    material: 'Sterling Silver',
    style: 'Minimal',
    inStock: true,
    rating: 5,
    description: 'A radiant teardrop pendant showcasing high-clarity lab gemstones set into a lustrous sterling silver cradle.',
    details: [
      'Rhodium plated 925 Sterling Silver',
      'Prong-set central teardrop crystal',
      'Micro-pavé halo accent'
    ]
  },

  // --- EARRINGS ---
  {
    id: 'earring-001',
    name: 'Aurelia Statement Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 8500,
    image: product1,
    galleryImages: [product1, earringsImg, product2],
    badge: 'NEW IN',
    badgeType: 'new',
    material: 'Gold Plated',
    style: 'Statement',
    inStock: true,
    rating: 5,
    description: 'Triple-tier baroque cluster earrings featuring sparkling accents and dangling teardrop pearl drops.',
    details: [
      'Hand-cast brass core with 18k gold finish',
      'Hypoallergenic titanium post backs for sensitive ears',
      'Lightweight design for comfortable all-day wear'
    ]
  },
  {
    id: 'earring-002',
    name: 'Mira Pearl Drop Studs',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 7200,
    image: earringsImg,
    galleryImages: [earringsImg, product1, product2],
    badge: 'BEST SELLER',
    badgeType: 'bestseller',
    material: 'Sterling Silver',
    style: 'Everyday',
    inStock: true,
    rating: 4.9,
    description: 'Understated elegance personified. Crisp sterling silver studs culminating in pristine natural pearls.',
    details: [
      'AAA grade freshwater button pearls',
      '925 Sterling Silver post and butterfly backs',
      'Versatile style from boardroom to dinner'
    ]
  },
  {
    id: 'earring-003',
    name: 'Lumen Crystal Drops',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 11500,
    image: product2,
    galleryImages: [product2, earringsImg, product1],
    material: 'Sterling Silver',
    style: 'Classic',
    inStock: true,
    rating: 4.8,
    description: 'Cascading geometric crystals that catch light with every gesture. Designed for timeless glamour.',
    details: [
      'High-refraction crystal elements',
      'Rhodium finished sterling silver framework',
      'Secure push-back closure'
    ]
  },

  // --- BRACELETS ---
  {
    id: 'bracelet-001',
    name: 'Étoile Heritage Cuff',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 15200,
    image: carousel2,
    galleryImages: [carousel2, braceletsImg, product4],
    badge: 'BEST SELLER',
    badgeType: 'bestseller',
    material: 'Gold Plated',
    style: 'Statement',
    inStock: true,
    rating: 5,
    description: 'An open-ended structural cuff embellished with traditional filigree motifs and modern polished edges.',
    details: [
      'Custom flexible fit for all wrist sizes',
      '18k warm gold plating with satin finish',
      'Engraved Silver Haus hallmark'
    ]
  },
  {
    id: 'bracelet-002',
    name: 'Woven Gold Bangle',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 19800,
    image: braceletsImg,
    galleryImages: [braceletsImg, carousel2, product3],
    badge: 'NEW IN',
    badgeType: 'new',
    material: 'Gold Plated',
    style: 'Classic',
    inStock: true,
    rating: 4.9,
    description: 'A luxurious solid bangle with intricate braided gold strands, evoking South Asian artisanal heritage.',
    details: [
      'Hand-twisted wire construction',
      'Concealed hinge and dual safety latch',
      'Scratch-resistant clear sealant'
    ]
  },
  {
    id: 'bracelet-003',
    name: 'Seraphina Chain Link',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 9600,
    image: carousel2,
    galleryImages: [carousel2, braceletsImg, product1],
    material: 'Sterling Silver',
    style: 'Minimal',
    inStock: true,
    rating: 4.7,
    description: 'Dainty oval chain links in pure sterling silver, featuring a delicate solitaire charm at the toggle.',
    details: [
      '925 Solid Sterling Silver',
      'Adjustable 6.5" to 7.5" wrist circumference',
      'Tarnish-proof storage pouch included'
    ]
  }
];

export const formatPKR = (amount: number): string => {
  return `PKR ${amount.toLocaleString('en-PK')}`;
};
