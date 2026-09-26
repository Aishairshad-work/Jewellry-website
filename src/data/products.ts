import heroRing from '../assets/hero-ring.jpg';
import productRing from '../assets/product-ring.jpg';
import heroNecklace from '../assets/hero-neckless.jpg';
import heroNecklace2 from '../assets/hero-neckless2.jpg';
import heroNecklace3 from '../assets/hero-neckless3.jpg';
import heroNecklace4 from '../assets/hero-neckless4.jpg';
import productNecklace from '../assets/product-neckless.jpg';
import productNecklace3 from '../assets/product-neckless3.jpg';
import heroBracelet from '../assets/hero-brecelet.jpg';
import heroSet from '../assets/hero-set.jpg';
import heroSet2 from '../assets/hero-set2.jpg';
import braceletWovenGold from '../assets/bracelet-woven-gold.jpg';
import braceletElegantDiamond from '../assets/bracelet-elegant-diamond.jpg';

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
  material: 'Lab Grown Diamond' | '18k Gold' | 'Platinum' | 'Rhodium Silver';
  style: 'Minimal' | 'Classic' | 'Statement' | 'Everyday';
  inStock: boolean;
  rating: number;
  description: string;
  details: string[];
  bgTheme?: 'dark-luxury' | 'gold-glow' | 'champagne' | 'ivory';
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
        eyebrow: 'AZ JEWELRY COLLECTION',
        tagline: 'Refined lab-grown diamond rings for life’s iconic moments.',
        description: 'Bespoke solitaire bands, marquise cuts, and pavé eternity rings crafted with certified lab-grown diamonds.',
        bannerImage: heroRing
      },
      necklaces: {
        id: 'necklaces',
        name: 'Necklaces',
        eyebrow: 'AZ JEWELRY COLLECTION',
        tagline: 'Luminous diamond pendants and high-jewellery chokers.',
        description: 'Exquisite lab-grown diamond drops, solitaire pendants, and statement chokers designed to sparkle with timeless radiance.',
        bannerImage: heroNecklace
      },
      earrings: {
        id: 'earrings',
        name: 'Earrings',
        eyebrow: 'AZ JEWELRY COLLECTION',
        tagline: 'Cascading brilliance framing every smile.',
        description: 'Classic solitaire studs, pavé halo hoops, and chandelier drops set with high-clarity lab-grown diamonds.',
        bannerImage: heroSet
      },
      bracelets: {
        id: 'bracelets',
        name: 'Bracelets',
        eyebrow: 'AZ JEWELRY COLLECTION',
        tagline: 'Fluid elegance that commands the room.',
        description: 'Artisanal tennis bracelets, heritage cuffs, and diamond link chains tailored for effortless luxury.',
        bannerImage: heroBracelet
      },
      all: {
        id: 'all',
        name: 'All Jewellery',
        eyebrow: 'AZ JEWELRY CATALOGUE',
        tagline: 'Certified Lab Grown Diamond Collections.',
        description: 'Explore the full spectrum of AZ JEWELRY handcrafted releases, iconic best-sellers, and bespoke statement pieces.',
        bannerImage: heroNecklace4
      }
    };

    return categories[category.toLowerCase()] || categories.all;
  }
}

export const PRODUCTS: Product[] = [
  // --- RINGS ---
  {
    id: 'ring-001',
    name: 'AZ Luminary Solitaire Ring',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 48500,
    originalPrice: 55000,
    image: productRing,
    galleryImages: [productRing, heroRing, heroSet],
    badge: 'NEW IN',
    badgeType: 'new',
    material: 'Lab Grown Diamond',
    style: 'Classic',
    inStock: true,
    rating: 5.0,
    bgTheme: 'dark-luxury',
    description: 'The AZ Luminary Ring showcases a brilliant 1.5 carat lab-grown solitaire diamond set in pure platinum prongs with micro-pavé shoulder accents.',
    details: [
      '1.5 Carat VVS1 Clarity Lab-Grown Diamond',
      'Solid Platinum & 925 Rhodium Silver band',
      'Certified conflict-free & sustainable diamond',
      'Delivered in signature AZ JEWELRY velvet presentation box'
    ]
  },
  {
    id: 'ring-002',
    name: 'AZ Celeste Diamond Eternity Band',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 64500,
    image: heroRing,
    galleryImages: [heroRing, productRing, heroSet2],
    badge: 'BEST SELLER',
    badgeType: 'bestseller',
    material: '18k Gold',
    style: 'Statement',
    inStock: true,
    rating: 5.0,
    bgTheme: 'gold-glow',
    description: 'An architectural 18k gold-plated statement eternity band featuring an intricate lattice setting of lab-grown diamonds.',
    details: [
      '18k Heavy Gold Finish over Solid Core',
      'Full-circle round brilliant lab diamonds',
      'Ergonomic comfort-fit interior band',
      'Includes AZ JEWELRY certificate of authenticity & polish cloth'
    ]
  },
  {
    id: 'ring-003',
    name: 'AZ Royal Marquise Solitaire',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 36800,
    image: heroSet2,
    galleryImages: [heroSet2, productRing, heroRing],
    material: 'Rhodium Silver',
    style: 'Minimal',
    inStock: true,
    rating: 4.9,
    bgTheme: 'champagne',
    description: 'A fluid, elongated marquise cut lab-grown diamond created for seamless everyday luxury or refined minimal single-finger accent.',
    details: [
      'Polished 925 Rhodium-finished Silver',
      'Hand-set 1.0ct Marquise Lab Diamond',
      'Tarnish-resistant anti-oxidative clear coating'
    ]
  },

  // --- NECKLACES ---
  {
    id: 'necklace-001',
    name: 'AZ Étoile Lab Diamond Pendant',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 42800,
    image: productNecklace3,
    galleryImages: [productNecklace3, heroNecklace, productNecklace],
    badge: 'NEW IN',
    badgeType: 'new',
    material: 'Lab Grown Diamond',
    style: 'Classic',
    inStock: true,
    rating: 5.0,
    bgTheme: 'ivory',
    description: 'A luminous 1.2 carat brilliant round lab-grown diamond suspended from a delicately handcrafted platinum wheat chain.',
    details: [
      'Authentic certified lab-grown diamond drop',
      '18k Gold & Rhodium Silver adjustable chain (16" to 18")',
      'Anti-tarnish protective micro-shield',
      'Handcrafted by master jewel artisans'
    ]
  },
  {
    id: 'necklace-002',
    name: 'AZ Grand Regal Diamond Choker',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 88500,
    originalPrice: 95000,
    image: heroNecklace,
    galleryImages: [heroNecklace, heroNecklace2, heroNecklace3],
    badge: 'RESTOCK',
    badgeType: 'restock',
    material: '18k Gold',
    style: 'Statement',
    inStock: true,
    rating: 5.0,
    bgTheme: 'dark-luxury',
    description: 'Bold yet fluid interlocking links studded with high-clarity lab-grown diamonds in rich 18k champagne gold. Designed to anchor bridal & red-carpet ensembles.',
    details: [
      'Over 5 Carats total weight of lab-grown diamonds',
      'Heavy 18k Champagne Gold finish',
      'Custom secure clasp with engraved AZ JEWELRY logo'
    ]
  },
  {
    id: 'necklace-003',
    name: 'AZ Solene Solitaire Drop Necklace',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 52000,
    image: heroNecklace2,
    galleryImages: [heroNecklace2, productNecklace, heroNecklace4],
    material: 'Platinum',
    style: 'Minimal',
    inStock: true,
    rating: 4.9,
    bgTheme: 'champagne',
    description: 'A radiant teardrop pendant showcasing high-clarity VVS lab-grown diamonds set into a lustrous solid silver cradle.',
    details: [
      'Rhodium plated 925 Sterling Silver',
      'Prong-set central teardrop lab diamond',
      'Micro-pavé halo accent'
    ]
  },

  // --- EARRINGS ---
  {
    id: 'earring-001',
    name: 'AZ Aurelia Diamond Drop Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 38500,
    image: heroSet,
    galleryImages: [heroSet, heroSet2, heroNecklace3],
    badge: 'NEW IN',
    badgeType: 'new',
    material: '18k Gold',
    style: 'Statement',
    inStock: true,
    rating: 5.0,
    bgTheme: 'dark-luxury',
    description: 'Triple-tier lab-grown diamond cluster earrings featuring sparkling accents and dangling teardrop diamond drops.',
    details: [
      'Hand-set lab-grown diamonds with 18k gold finish',
      'Hypoallergenic titanium post backs for sensitive ears',
      'Lightweight ergonomic balance for evening wear'
    ]
  },
  {
    id: 'earring-002',
    name: 'AZ Lumina Solitaire Diamond Studs',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 27200,
    image: heroSet2,
    galleryImages: [heroSet2, heroSet, productNecklace3],
    badge: 'BEST SELLER',
    badgeType: 'bestseller',
    material: 'Lab Grown Diamond',
    style: 'Everyday',
    inStock: true,
    rating: 4.9,
    bgTheme: 'ivory',
    description: 'Understated elegance personified. Crisp rhodium-finished posts with 2.0 Carat t.w. brilliant round lab-grown diamonds.',
    details: [
      'VS1 clarity lab-grown diamond solitaire studs',
      '925 Sterling Silver post & double-notch friction backs',
      'Versatile style from boardroom to gala'
    ]
  },
  {
    id: 'earring-003',
    name: 'AZ Halo Diamond Hoops',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 41500,
    image: heroSet,
    galleryImages: [heroSet, heroSet2],
    material: 'Rhodium Silver',
    style: 'Classic',
    inStock: true,
    rating: 4.8,
    bgTheme: 'gold-glow',
    description: 'Cascading pavé lab-grown diamond hoops that catch light with every gesture. Designed for timeless glamour.',
    details: [
      'High-refraction lab diamond elements',
      'Rhodium finished sterling framework',
      'Secure snap-bar closure'
    ]
  },

  // --- BRACELETS ---
  {
    id: 'bracelet-001',
    name: 'AZ Seraphina Diamond Tennis Bracelet',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 75200,
    image: heroBracelet,
    galleryImages: [heroBracelet, heroSet, heroRing],
    badge: 'BEST SELLER',
    badgeType: 'bestseller',
    material: 'Lab Grown Diamond',
    style: 'Statement',
    inStock: true,
    rating: 5.0,
    bgTheme: 'dark-luxury',
    description: 'A continuous line of brilliant-cut lab-grown diamonds set in four-prong platinum mountings with double safety locks.',
    details: [
      'Over 4.0 Carats total weight lab-grown diamonds',
      'Custom flexible articulation for comfort',
      'Engraved AZ JEWELRY hallmark'
    ]
  },
  {
    id: 'bracelet-002',
    name: 'AZ Élan Woven Diamond Bangle',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 69800,
    image: braceletWovenGold,
    galleryImages: [braceletWovenGold, heroBracelet, heroSet2],
    badge: 'NEW IN',
    badgeType: 'new',
    material: '18k Gold',
    style: 'Classic',
    inStock: true,
    rating: 4.9,
    bgTheme: 'gold-glow',
    description: 'A luxurious solid bangle with intricate braided gold strands and embedded lab-grown diamond highlights.',
    details: [
      'Hand-twisted wire construction with 18k gold plating',
      'Concealed hinge and dual safety latch',
      'Scratch-resistant clear micro-sealant'
    ]
  },
  {
    id: 'bracelet-003',
    name: 'AZ Empire Diamond Link Bracelet',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 39600,
    image: braceletElegantDiamond,
    galleryImages: [braceletElegantDiamond, heroBracelet, productRing],
    material: 'Rhodium Silver',
    style: 'Minimal',
    inStock: true,
    rating: 4.8,
    bgTheme: 'champagne',
    description: 'Dainty oval chain links in pure sterling silver, featuring a delicate solitaire diamond charm at the toggle.',
    details: [
      '925 Solid Sterling Silver',
      'Adjustable 6.5" to 7.5" wrist circumference',
      'Tarnish-proof AZ JEWELRY pouch included'
    ]
  }
];

export const formatPKR = (amount: number): string => {
  return `PKR ${amount.toLocaleString('en-PK')}`;
};
