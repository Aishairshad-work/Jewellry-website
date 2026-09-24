import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import newProductsImg from '../../assets/hero-set.jpg';
import bestSellersImg from '../../assets/hero-neckless3.jpg';

interface BannerItem {
  id: string;
  tagline: string;
  title: string;
  image: string;
  link: string;
  subtitle: string;
}

const bannerItems: BannerItem[] = [
  {
    id: 'new-products',
    tagline: 'AURA COLLECTION',
    title: 'NEW ARRIVALS',
    subtitle: 'Discover our latest certified lab-grown diamond statement releases.',
    image: newProductsImg,
    link: '/shop'
  },
  {
    id: 'best-sellers',
    tagline: 'LUMEN COLLECTION',
    title: 'BEST SELLERS',
    subtitle: 'Explore the timeless icons and most-coveted diamond creations.',
    image: bestSellersImg,
    link: '/shop'
  }
];

export const FeaturedBanners: React.FC = () => {
  return (
    <section className="featured-banners" id="collections">
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="featured-banners__header">
            <div className="featured-banners__heading-group">
              <span className="featured-banners__eyebrow">AZ JEWELRY Edit</span>
              <h2 className="featured-banners__section-title">Curated Collections</h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="featured-banners__grid">
          {bannerItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 120}>
              <Link
                to={item.link}
                className="banner-card"
                aria-label={`Explore ${item.title}`}
              >
                {/* Background Image with Zoom Effect */}
                <div className="banner-card__img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="banner-card__img"
                    loading="lazy"
                  />
                  <div className="banner-card__overlay" />
                </div>

                {/* Card Content Overlay */}
                <div className="banner-card__content">
                  <span className="banner-card__tagline" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-champagne-beige)', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>{item.tagline}</span>
                  <h2 className="banner-card__title">{item.title}</h2>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginBottom: '16px', maxWidth: '320px' }}>{item.subtitle}</p>
                  <div className="banner-card__cta">
                    <span>EXPLORE NOW</span>
                    <ArrowRight size={16} className="banner-card__icon" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
