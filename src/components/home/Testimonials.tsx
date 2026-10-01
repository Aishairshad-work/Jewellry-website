import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items per page detection (3 desktop, 2 tablet, 1 mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  // Keep currentPage within bounds if screen resizes
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Gentle 6s autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Slice exactly 3 cards on desktop (or itemsPerPage)
  const visibleTestimonials = testimonialsData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="testimonials-section" id="testimonials" aria-label="Customer Reviews">

      {/* Sparkles */}
      <div className="section-sparkle sparkle-anim-3" style={{ top: '10%', right: '22%', fontSize: '15px' }} aria-hidden="true">✦</div>
      <div className="section-sparkle sparkle-anim-2" style={{ top: '85%', left: '16%', fontSize: '16px' }} aria-hidden="true">✦</div>

      <div className="container">
        <ScrollReveal delay={0}>
        {/* Organic Curved Container Backdrop */}
        <div className="testimonials__curved-backdrop">
          {/* Header Row */}
          <div className="testimonials__header">
            <div className="testimonials__heading-group">
              <span className="testimonials__eyebrow">CUSTOMER STORIES</span>
              <h2 className="testimonials__title">Loved by women who wear AZ JEWELRY</h2>
              <p className="testimonials__subtitle">
                Thoughtfully chosen lab-grown diamond pieces, beautifully worn and treasured.
              </p>
            </div>

            {/* Circular Navigation Buttons */}
            <div className="testimonials__controls" role="group" aria-label="Customer Stories Navigation">
              <button
                className="testimonials__nav-btn"
                onClick={handlePrev}
                aria-label="Previous customer stories"
                type="button"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="testimonials__nav-btn"
                onClick={handleNext}
                aria-label="Next customer stories"
                type="button"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Testimonials Carousel — 3 visible at a time, other 3 hidden in navigation */}
          <div
            className="testimonials__carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="testimonials__track" key={currentPage}>
              {visibleTestimonials.map((item) => (
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

          {/* Pagination Indicators */}
          <div className="testimonials__pagination" role="tablist" aria-label="Customer stories slides">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`testimonials__dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentPage}
              />
            ))}
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
