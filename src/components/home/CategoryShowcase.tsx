import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

// AZ JEWELRY Category photography
import ringsImg from '../../assets/hero-ring.jpg';
import earringsImg from '../../assets/hero-set.jpg';
import braceletsImg from '../../assets/hero-brecelet.jpg';
import pendantsImg from '../../assets/hero-neckless2.jpg';

interface ShowcaseCategory {
  id: string;
  label: string;
  tagline: string;
  href: string;
  image: string;
}

const showcaseCategories: ShowcaseCategory[] = [
  {
    id: 'rings',
    label: 'Rings',
    tagline: 'Solitaires & eternity bands',
    href: '/shop/rings',
    image: ringsImg
  },
  {
    id: 'earrings',
    label: 'Earrings',
    tagline: 'Studs & chandelier drops',
    href: '/shop/earrings',
    image: earringsImg
  },
  {
    id: 'bracelets',
    label: 'Bracelets',
    tagline: 'Tennis bracelets & cuffs',
    href: '/shop/bracelets',
    image: braceletsImg
  },
  {
    id: 'pendants',
    label: 'Pendants',
    tagline: 'Solitaire drops & medallions',
    href: '/shop/necklaces',
    image: pendantsImg
  }
];

export const CategoryShowcase: React.FC = () => {
  return (
    <section className="category-showcase" id="shop-by-category" aria-label="Shop by Category">

      {/* Floating Petals within Category (Subtle ambient float in margins, never covering text) */}
      <div className="section-petal petal-white petal-anim-2" style={{ top: '6%', left: '4%', width: '28px', height: '28px' }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-3" style={{ top: '22%', right: '5%', width: '25px', height: '25px' }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-1" style={{ top: '48%', left: '3%', width: '26px', height: '26px' }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-4" style={{ top: '68%', right: '4%', width: '24px', height: '24px', opacity: 0.7 }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-5" style={{ top: '88%', left: '5%', width: '26px', height: '26px', opacity: 0.75 }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-2" style={{ top: '94%', right: '5%', width: '24px', height: '24px', opacity: 0.7 }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-4" style={{ top: '15%', left: '8%', width: '22px', height: '22px', opacity: 0.65 }} aria-hidden="true" />

      {/* Delicate Sparkles positioned safely in margins */}
      <div className="section-sparkle sparkle-anim-2" style={{ top: '5%', right: '8%', fontSize: '15px' }} aria-hidden="true">✦</div>
      <div className="section-sparkle sparkle-anim-1" style={{ top: '92%', left: '6%', fontSize: '14px' }} aria-hidden="true">✦</div>

      <div className="container">
        <ScrollReveal delay={0}>
          <div className="category-showcase__header">
            <div className="category-showcase__heading-group">
              <span className="category-showcase__eyebrow">AZ JEWELRY Collection</span>
              <h2 className="category-showcase__title">Shop by Category</h2>
            </div>
            <Link to="/shop" className="category-showcase__view-all">
              <span>View All</span>
              <ArrowUpRight size={15} className="category-showcase__view-all-icon" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="category-showcase__grid">
          {showcaseCategories.map((cat, index) => (
            <ScrollReveal key={cat.id} delay={index * 80}>
              <Link
                to={cat.href}
                className="category-showcase__card"
                aria-label={`Shop AZ JEWELRY ${cat.label}`}
              >
                <span className="category-showcase__img-box">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="category-showcase__img"
                    loading="lazy"
                  />
                  <span className="category-showcase__img-glow" aria-hidden="true" />
                </span>

                <span className="category-showcase__info">
                  <span className="category-showcase__name">{cat.label}</span>
                  <span className="category-showcase__tagline">{cat.tagline}</span>
                  <span className="category-showcase__cta">
                    <span>Shop Now</span>
                    <ArrowRight size={16} strokeWidth={2} className="category-showcase__cta-icon" />
                  </span>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
