import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

// Reuse the same campaign photography already shipped with the site
import ringsImg from '../../assets/Product3.png';
import necklaceImg from '../../assets/Carousel 1.png';
import earringsImg from '../../assets/Product1.png';
import braceletsImg from '../../assets/Carousel 2.png';

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
    tagline: 'Solitaires & bands',
    href: '/shop/rings',
    image: ringsImg
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    tagline: 'Pendants & chains',
    href: '/shop/necklaces',
    image: necklaceImg
  },
  {
    id: 'earrings',
    label: 'Earrings',
    tagline: 'Studs & drops',
    href: '/shop/earrings',
    image: earringsImg
  },
  {
    id: 'bracelets',
    label: 'Bracelets',
    tagline: 'Bangles & cuffs',
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
              <span className="category-showcase__eyebrow">The Collection</span>
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
                aria-label={`Shop ${cat.label}`}
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
