import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  avatarInitials: string;
  purchasedItem?: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Ayesha Khan',
    location: 'Karachi',
    rating: 5,
    testimonial:
      '“The diamond brilliance is even more breathtaking in person. My AZ JEWELRY pieces feel elegant enough for grand celebrations yet effortless enough to wear every day.”',
    avatarInitials: 'AK',
    purchasedItem: 'AZ Luminary Solitaire Ring'
  },
  {
    id: '2',
    name: 'Mahnoor Ahmed',
    location: 'Lahore',
    rating: 5,
    testimonial:
      '“I ordered a lab diamond pendant for my sister and the presentation was stunning. The diamond clarity looked incredibly refined and she absolutely loved it.”',
    avatarInitials: 'MA',
    purchasedItem: 'AZ Étoile Lab Diamond Pendant'
  },
  {
    id: '3',
    name: 'Sara Malik',
    location: 'Karachi',
    rating: 5,
    testimonial:
      '“AZ JEWELRY has such a beautiful balance of modern design and timeless diamond brilliance. It has quickly become my go-to luxury jewellery brand.”',
    avatarInitials: 'SM',
    purchasedItem: 'AZ Royal Diamond Set'
  },
  {
    id: '4',
    name: 'Hira Sheikh',
    location: 'Islamabad',
    rating: 5,
    testimonial:
      '“Exquisite finishing, certified lab-grown diamonds, and a very premium luxury experience. The tennis bracelet received compliments the first time I wore it.”',
    avatarInitials: 'HS',
    purchasedItem: 'AZ Seraphina Diamond Tennis Bracelet'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items per page detection
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

  const totalItems = testimonialsData.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

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
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getVisibleTestimonials = () => {
    const visible: TestimonialItem[] = [];
    for (let i = 0; i < totalItems; i++) {
      const idx = (currentIndex + i) % totalItems;
      visible.push(testimonialsData[idx]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="testimonials-section" id="testimonials" aria-label="Customer Reviews">
      <div className="container">
        <ScrollReveal delay={0}>
        {/* Organic Curved Container Backdrop */}
        <div className="testimonials__curved-backdrop">
          
          {/* Header & Controls Row */}
          <div className="testimonials__header">
            <div className="testimonials__heading-group">
              <span className="testimonials__eyebrow">CUSTOMER STORIES</span>
              <h2 className="testimonials__title">Loved by women who wear AZ JEWELRY</h2>
              <p className="testimonials__subtitle">
                Thoughtfully chosen lab-grown diamond pieces, beautifully worn and treasured.
              </p>
            </div>

            {/* Circular Navigation Buttons */}
            <div className="testimonials__controls" role="group" aria-label="Carousel Controls">
              <button
                className="testimonials__nav-btn"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                type="button"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="testimonials__nav-btn"
                onClick={handleNext}
                aria-label="Next testimonial"
                type="button"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Carousel Track Container */}
          <div
            className="testimonials__carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="testimonials__track">
              {visibleTestimonials.slice(0, itemsPerPage).map((item) => (
                <article key={item.id} className="testimonial-card">
                  {/* Subtle Oversized Quote Mark */}
                  <span className="testimonial-card__quote-watermark" aria-hidden="true">
                    “
                  </span>

                  {/* Rating Stars */}
                  <div className="testimonial-card__stars" aria-label={`Rating ${item.rating} out of 5 stars`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#D8C6A0" color="#D8C6A0" className="star-icon" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="testimonial-card__quote">
                    <p>{item.testimonial}</p>
                  </blockquote>

                  {/* Customer Info Footer */}
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <span>{item.avatarInitials}</span>
                    </div>
                    <div className="testimonial-card__details">
                      <h3 className="testimonial-card__name">{item.name}</h3>
                      <span className="testimonial-card__location">{item.location}, Pakistan</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="testimonials__pagination" role="tablist" aria-label="Testimonial slides">
            {testimonialsData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`testimonials__dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-selected={index === currentIndex}
              />
            ))}
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
