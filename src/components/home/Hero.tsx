import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

// Import AZ JEWELRY Campaign Photography
import heroNecklace from '../../assets/hero-neckless.jpg';
import heroBracelet from '../../assets/hero-brecelet.jpg';
import heroSet from '../../assets/hero-set.jpg';
import heroRing from '../../assets/hero-ring.jpg';
import heroNecklace2 from '../../assets/hero-neckless2.jpg';
import heroSet2 from '../../assets/hero-set2.jpg';
import heroNecklace3 from '../../assets/hero-neckless3.jpg';

interface GalleryItem {
  id: number;
  image: string;
  tag: string;
  title: string;
  offset: 0 | 1 | 2;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: heroNecklace,
    tag: 'Solitaire Edition',
    title: 'Lab Diamond Pendant',
    offset: 0
  },
  {
    id: 2,
    image: heroBracelet,
    tag: 'Fine Bracelets',
    title: 'Woven Diamond Cuff',
    offset: 1
  },
  {
    id: 3,
    image: heroSet,
    tag: 'High Jewellery',
    title: 'The Royal Diamond Set',
    offset: 2
  },
  {
    id: 4,
    image: heroRing,
    tag: 'Statement Rings',
    title: 'Celeste Eternity Band',
    offset: 0
  },
  {
    id: 5,
    image: heroNecklace2,
    tag: 'Pendant Edit',
    title: 'Solene Diamond Drop',
    offset: 1
  },
  {
    id: 6,
    image: heroSet2,
    tag: 'Gala Collection',
    title: 'Lab Diamond Earrings & Set',
    offset: 2
  },
  {
    id: 7,
    image: heroNecklace3,
    tag: 'Editorial Edit',
    title: 'Grand Regal Choker',
    offset: 1
  }
];

// Duplicated so the track can loop seamlessly at the 50% translateX mark
const loopedGalleryItems = [...galleryItems, ...galleryItems];

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      {/* Editorial Content Column */}
      <div className="hero__content">
        <ScrollReveal delay={0}>
          <div className="hero__brand-badge">
            <span className="hero__badge-sparkle">✦</span>
            <span>LAB GROWN DIAMONDS</span>
          </div>
          <h1 className="hero__headline">
            AZ JEWELRY, <span className="hero__headline-italic">REFINED</span> FOR YOU.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="hero__cta-group">
            <a href="#collections" className="btn-primary">
              <span>EXPLORE COLLECTION</span>
              <ArrowRight size={15} className="btn-icon" />
            </a>

            <a href="/about" className="btn-secondary-link">
              <span>DISCOVER AZ JEWELRY</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Jewellery Image Strip — Continuous Looping Carousel */}
      <ScrollReveal delay={240} className="hero__gallery-container">
        <div
          className="hero__gallery-carousel"
          role="region"
          aria-label="AZ JEWELRY Featured Diamond Collection Gallery"
        >
          <div className="hero__gallery-track">
            {loopedGalleryItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`gallery-card gallery-card--offset-${item.offset}`}
                aria-hidden={index >= galleryItems.length}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - AZ JEWELRY Lab Grown Diamonds`}
                  className="gallery-card__img"
                  loading={index < galleryItems.length ? 'eager' : 'lazy'}
                />
                <div className="gallery-card__overlay">
                  <span className="gallery-card__tag">{item.tag}</span>
                  <h3 className="gallery-card__title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
