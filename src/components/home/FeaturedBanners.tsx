import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import newProductsImg from '../../assets/New Products.png';
import bestSellersImg from '../../assets/Best Sellers.png';

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
    title: 'NEW PRODUCTS',
    subtitle: 'Discover our latest handcrafted statement pieces & artisan releases.',
    image: newProductsImg,
    link: '/shop'
  },
  {
    id: 'best-sellers',
    tagline: 'LUMEN COLLECTION',
    title: 'BEST SELLERS',
    subtitle: 'Explore the timeless icons and most-coveted luxury creations.',
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
              <span className="featured-banners__eyebrow">Curated Collections</span>
              <h2 className="featured-banners__section-title">The Edit</h2>
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
                  <h2 className="banner-card__title">{item.title}</h2>
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
