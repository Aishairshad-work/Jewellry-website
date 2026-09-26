import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import newProductsImg from '../../assets/hero-set.jpg';
import bestSellersImg from '../../assets/hero-neckless3.jpg';

interface BannerItem {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const bannerItems: BannerItem[] = [
  {
    id: 'new-arrivals',
    eyebrow: 'AZ JEWELRY COLLECTIONS',
    title: 'NEW ARRIVALS',
    subtitle: 'Discover our latest creations, crafted for the modern you.',
    image: newProductsImg,
    link: '/shop'
  },
  {
    id: 'best-sellers',
    eyebrow: 'AZ JEWELRY COLLECTIONS',
    title: 'BEST SELLERS',
    subtitle: 'Timeless favorites, loved by many.',
    image: bestSellersImg,
    link: '/shop'
  }
];

export const FeaturedBanners: React.FC = () => {
  return (
    <section className="featured-banners" id="collections">

      {/* Floating Petals within Collections (Increased quantity, natural drift, scrolls with page) */}
      <div className="section-petal petal-blue petal-anim-4" style={{ top: '6%', left: '16%', width: '28px', height: '28px' }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-1" style={{ top: '55%', right: '7%', width: '32px', height: '32px' }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-2" style={{ top: '88%', left: '20%', width: '25px', height: '25px' }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-3" style={{ top: '24%', right: '15%', width: '24px', height: '24px', opacity: 0.75 }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-5" style={{ top: '70%', left: '8%', width: '26px', height: '26px', opacity: 0.7 }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-2" style={{ top: '38%', left: '4%', width: '25px', height: '25px', opacity: 0.7 }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-1" style={{ top: '82%', right: '5%', width: '26px', height: '26px', opacity: 0.75 }} aria-hidden="true" />

      {/* Sparkles */}
      <div className="section-sparkle sparkle-anim-3" style={{ top: '12%', left: '30%', fontSize: '17px' }} aria-hidden="true">✦</div>
      <div className="section-sparkle sparkle-anim-1" style={{ top: '75%', right: '22%', fontSize: '15px' }} aria-hidden="true">✦</div>

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
              <div className="banner-card-outer">
                {/* Top center diamond sparkle on the outer gold border line (Reference 2) */}
                <div className="banner-card__top-sparkle" aria-hidden="true">
                  <span className="sparkle-line" />
                  <span className="sparkle-gem">✦</span>
                  <span className="sparkle-line" />
                </div>

                {/* 3D Floral Corner Accent peeking gracefully from card corner (Reference 2) */}
                <div
                  className={`banner-card__floral-corner ${
                    index === 0 ? 'banner-card__floral-corner--tl' : 'banner-card__floral-corner--tr'
                  }`}
                  aria-hidden="true"
                />

                <Link
                  to={item.link}
                  className="banner-card"
                  aria-label={`Explore ${item.title}`}
                >
                  {/* Inner Arched Image Container (Roman arch shape matching Reference 2) */}
                  <div className="banner-card__arched-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="banner-card__img"
                      loading="lazy"
                    />
                    <div className="banner-card__overlay" />

                    {/* Editorial Content Overlay within the Arch */}
                    <div className="banner-card__content">
                      <span className="banner-card__eyebrow">{item.eyebrow}</span>
                      <h2 className="banner-card__title">{item.title}</h2>

                      {/* Centered Diamond Sparkle Divider Line */}
                      <div className="banner-card__sparkle-divider" aria-hidden="true">
                        <span className="sparkle-bar" />
                        <span className="sparkle-icon">✦</span>
                        <span className="sparkle-bar" />
                      </div>

                      <p className="banner-card__subtitle">{item.subtitle}</p>
                    </div>
                  </div>

                  {/* Bottom Card Action Area (below arched image) */}
                  <div className="banner-card__bottom-area">
                    {/* Decorative Gold Divider Line with Sparkle */}
                    <div className="banner-card__bottom-divider" aria-hidden="true">
                      <span className="divider-line" />
                      <span className="divider-gem">✦</span>
                      <span className="divider-line" />
                    </div>

                    {/* Circular Gold Outlined Arrow Button & CTA Label */}
                    <div className="banner-card__cta">
                      <span className="banner-card__cta-btn" aria-hidden="true">
                        <ArrowRight size={15} />
                      </span>
                      <span className="banner-card__cta-label">EXPLORE NOW</span>
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
