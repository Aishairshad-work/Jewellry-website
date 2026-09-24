import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

// AZ JEWELRY Category photography
import ringsImg from '../../assets/hero-ring.jpg';
import necklaceImg from '../../assets/product-neckless3.jpg';
import earringsImg from '../../assets/hero-set.jpg';
import braceletsImg from '../../assets/hero-brecelet.jpg';

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
    id: 'necklaces',
    label: 'Necklaces',
    tagline: 'Pendants & diamond chokers',
    href: '/shop/necklaces',
    image: necklaceImg
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
  }
];

export const CategoryShowcase: React.FC = () => {
  return (
    <section className="category-showcase" id="shop-by-category" aria-label="Shop by Category">
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
                    <ArrowRight size={13} className="category-showcase__cta-icon" />
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
