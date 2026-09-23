import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

// Import Jewellery Campaign Assets
import carousel1 from '../../assets/Carousel 1.png';
import carousel2 from '../../assets/Carousel 2.png';
import carousel3 from '../../assets/Carousel 3.png';
import carousel4 from '../../assets/Carousel 4.png';
import carousel5 from '../../assets/Carousel 5.png';
import carousel6 from '../../assets/Carousel 6.png';
import carousel7 from '../../assets/Carousel 7.png';

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
    image: carousel1,
    tag: 'Statement Rings',
    title: 'The Solitaire Edition',
    offset: 0
  },
  {
    id: 2,
    image: carousel2,
    tag: 'Artisan Bangles',
    title: 'Woven Gold Heritage',
    offset: 1
  },
  {
    id: 3,
    image: carousel3,
    tag: 'High Jewellery',
    title: 'The Royal Emerald Drop',
    offset: 2
  },
  {
    id: 4,
    image: carousel4,
    tag: 'Bridal Sets',
    title: 'The Eternal Vow',
    offset: 0
  },
  {
    id: 5,
    image: carousel5,
    tag: 'Fine Necklaces',
    title: 'Gilded Chain Signature',
    offset: 1
  },
  {
    id: 6,
    image: carousel6,
    tag: 'Editorial Drops',
    title: 'Cascading Pearl Earrings',
    offset: 2
  },
  {
    id: 7,
    image: carousel7,
    tag: 'Stacked Bracelets',
    title: 'The Layered Cuff',
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
          <h1 className="hero__headline">
            JEWELLERY, <span className="hero__headline-italic">REFINED</span> FOR YOU.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="hero__cta-group">
            <a href="#collections" className="btn-primary">
              <span>EXPLORE COLLECTION</span>
              <ArrowRight size={15} className="btn-icon" />
            </a>

            <a href="#about" className="btn-secondary-link">
              <span>DISCOVER SILVER HAUS</span>
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
          aria-label="Featured Jewellery Collection Gallery"
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
                  alt={`${item.title} - Silver Haus Luxury Jewellery`}
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
