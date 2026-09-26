import React from 'react';
import { Star } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

// Existing photography assets from the AZ JEWELRY project
import heroSetImg from '../../assets/hero-set.jpg';
import heroRingImg from '../../assets/hero-ring.jpg';
import heroNecklaceImg from '../../assets/hero-neckless3.jpg';
import heroBraceletImg from '../../assets/hero-brecelet.jpg';
import heroNecklace4Img from '../../assets/hero-neckless4.jpg';
import braceletDiamondImg from '../../assets/bracelet-elegant-diamond.jpg';

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  avatarInitials: string;
  purchasedItem?: string;
  image: string;
  isFeatured?: boolean;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Mahnoor Ahmed',
    location: 'Lahore, Pakistan',
    rating: 5,
    testimonial:
      '“I ordered a diamond pendant for my sister and she absolutely loved it. The quality and packaging were beyond expectations. Truly a wonderful experience!”',
    avatarInitials: 'MA',
    image: heroSetImg,
    purchasedItem: 'AZ Étoile Lab Diamond Pendant'
  },
  {
    id: '2',
    name: 'Sara Malik',
    location: 'Karachi, Pakistan',
    rating: 5,
    testimonial:
      '“AZ JEWELRY has such a beautiful collection, I\'m in love with my ring and their packaging. It beyond stunning.”',
    avatarInitials: 'SM',
    image: heroRingImg,
    isFeatured: true,
    purchasedItem: 'AZ Royal Diamond Set'
  },
  {
    id: '3',
    name: 'Hira Sheikh',
    location: 'Islamabad, Pakistan',
    rating: 5,
    testimonial:
      '“Excellent service and highly professional team. The jewellery is exactly as shown and even more beautiful in real life. I\'ll definitely shop again!”',
    avatarInitials: 'HS',
    image: heroNecklaceImg,
    purchasedItem: 'AZ Luminary Solitaire Ring'
  },
  {
    id: '4',
    name: 'Ayesha Khan',
    location: 'Rawalpindi, Pakistan',
    rating: 5,
    testimonial:
      '“From ordering to delivery, everything was perfect. The quality, shine and elegance of the pieces are unmatched. AZ Jewelry is now my favorite brand!”',
    avatarInitials: 'AK',
    image: heroBraceletImg,
    purchasedItem: 'AZ Seraphina Diamond Tennis Bracelet'
  },
  {
    id: '5',
    name: 'Zainab Tariq',
    location: 'Islamabad, Pakistan',
    rating: 5,
    testimonial:
      '“The craftsmanship on my diamond necklace is breathtaking. Wearing it to our anniversary dinner made me feel truly radiant. Thank you AZ JEWELRY!”',
    avatarInitials: 'ZT',
    image: heroNecklace4Img,
    purchasedItem: 'AZ Luminary Solitaire Pendant'
  },
  {
    id: '6',
    name: 'Dua Fatima',
    location: 'Lahore, Pakistan',
    rating: 5,
    testimonial:
      '“The sparkle and diamond clarity exceeded every expectation. The bespoke unboxing experience felt like a dream. Highly recommended!”',
    avatarInitials: 'DF',
    image: braceletDiamondImg,
    purchasedItem: 'AZ Celeste Diamond Tennis Bracelet'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section" id="testimonials" aria-label="Customer Reviews">

      {/* Floating Petals within Testimonials (Subtle ambient float, scrolls with page) */}
      <div className="section-petal petal-blue petal-anim-1" style={{ top: '12%', left: '8%', width: '28px', height: '28px' }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-4" style={{ top: '75%', right: '9%', width: '30px', height: '30px' }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-2" style={{ top: '32%', right: '14%', width: '24px', height: '24px', opacity: 0.8 }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-5" style={{ top: '82%', left: '12%', width: '26px', height: '26px', opacity: 0.75 }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-3" style={{ top: '22%', right: '5%', width: '25px', height: '25px', opacity: 0.7 }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-2" style={{ top: '65%', left: '5%', width: '26px', height: '26px', opacity: 0.75 }} aria-hidden="true" />

      {/* Sparkles */}
      <div className="section-sparkle sparkle-anim-3" style={{ top: '10%', right: '22%', fontSize: '15px' }} aria-hidden="true">✦</div>
      <div className="section-sparkle sparkle-anim-2" style={{ top: '85%', left: '16%', fontSize: '16px' }} aria-hidden="true">✦</div>

      <div className="container">
        <ScrollReveal delay={0}>
        {/* Organic Curved Container Backdrop */}
        <div className="testimonials__curved-backdrop">
          {/* 3D Floral Corner Accents */}
          <div className="testimonials__floral-corner-left" aria-hidden="true" />
          <div className="testimonials__floral-corner-right" aria-hidden="true" />
          
          {/* Header Row */}
          <div className="testimonials__header">
            <div className="testimonials__heading-group">
              <span className="testimonials__eyebrow">CUSTOMER STORIES</span>
              <h2 className="testimonials__title">Loved by women who wear AZ JEWELRY</h2>
              <p className="testimonials__subtitle">
                Thoughtfully chosen lab-grown diamond pieces, beautifully worn and treasured.
              </p>
            </div>
          </div>

          {/* Testimonials Grid — All 6 Cards in Front */}
          <div className="testimonials__carousel-wrapper">
            <div className="testimonials__track testimonials__grid-all">
              {testimonialsData.map((item) => (
                <article
                  key={item.id}
                  className={`testimonial-card ${item.isFeatured ? 'testimonial-card--featured' : ''}`}
                >
                  {/* Top Arch Crest for Featured Card (Reference 1) */}
                  {item.isFeatured && (
                    <div className="testimonial-card__crest" aria-hidden="true">
                      <span className="testimonial-card__crest-icon">✦</span>
                    </div>
                  )}

                  {/* Arched Top Image Area */}
                  <div className="testimonial-card__image-container">
                    <img
                      src={item.image}
                      alt={`Jewellery worn by ${item.name}`}
                      className="testimonial-card__img"
                      loading="lazy"
                    />
                  </div>

                  {/* Circular Quotation Badge overlapping the seam */}
                  <div className="testimonial-card__quote-badge" aria-hidden="true">
                    <span className="testimonial-card__quote-mark">“</span>
                  </div>

                  {/* Card Content Area */}
                  <div className="testimonial-card__content">
                    {/* Rating Stars (5 gold stars) */}
                    <div className="testimonial-card__stars" aria-label={`Rating ${item.rating} out of 5 stars`}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={13} fill="#C5A059" color="#C5A059" className="star-icon" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="testimonial-card__quote">
                      <p>{item.testimonial}</p>
                    </blockquote>

                    {/* Author Section */}
                    <div className="testimonial-card__author">
                      <div className="testimonial-card__avatar">
                        <span>{item.avatarInitials}</span>
                      </div>
                      <div className="testimonial-card__details">
                        <h3 className="testimonial-card__name">{item.name}</h3>
                        <span className="testimonial-card__location">{item.location}</span>
                      </div>
                    </div>

                    {/* Small Elegant Gold Decorative Line Near Bottom (Reference 1) */}
                    <div className="testimonial-card__bottom-line" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Elegant Centered Diamond Sparkle Divider Line at Bottom */}
          <div className="testimonials__bottom-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-gem">✦</span>
            <span className="divider-line" />
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
