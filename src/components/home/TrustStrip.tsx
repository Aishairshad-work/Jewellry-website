import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';

interface TrustItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

/* ── Refined SVG Icons in Silver Haus style ── */
const ShippingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="trust-strip__icon-svg" aria-hidden="true">
    <rect x="2" y="14" width="28" height="22" rx="2" />
    <path d="M30 20h10l6 8v8H30V20Z" />
    <circle cx="11" cy="38" r="4" />
    <circle cx="37" cy="38" r="4" />
    <line x1="2" y1="22" x2="30" y2="22" />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="trust-strip__icon-svg" aria-hidden="true">
    <circle cx="24" cy="24" r="20" />
    <path d="M8 24a16 16 0 0 1 16-16" strokeDasharray="3 2" />
    <circle cx="24" cy="24" r="8" />
    <path d="M9 15 L18 19M9 33 L18 29M39 15 L30 19M39 33 L30 29" />
  </svg>
);

const ReturnIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="trust-strip__icon-svg" aria-hidden="true">
    <path d="M40 24a16 16 0 1 1-5-11.5" />
    <polyline points="34 6 40 12 34 18" />
    <line x1="24" y1="16" x2="24" y2="24" />
    <line x1="24" y1="24" x2="30" y2="28" />
  </svg>
);

const SecureIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="trust-strip__icon-svg" aria-hidden="true">
    <path d="M24 4 L40 10 L40 26 C40 34 33 41 24 44 C15 41 8 34 8 26 L8 10 Z" />
    <polyline points="17 24 22 29 31 19" />
  </svg>
);

const trustItems: TrustItem[] = [
  {
    id: 'shipping',
    icon: <ShippingIcon />,
    title: 'Free Shipping',
    description: 'Complimentary delivery on all orders above PKR 5,000 across Pakistan.'
  },
  {
    id: 'support',
    icon: <SupportIcon />,
    title: 'Support 24/7',
    description: 'Reach our team anytime via WhatsApp, seven days a week.'
  },
  {
    id: 'returns',
    icon: <ReturnIcon />,
    title: '7 Day Returns',
    description: 'Not in love? Return or exchange within 7 days of delivery.'
  },
  {
    id: 'secure',
    icon: <SecureIcon />,
    title: '100% Secure',
    description: 'Your payments and personal details are always protected.'
  }
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="trust-strip" aria-label="Why shop with AZ JEWELRY">
      <div className="container">
        <div className="trust-strip__grid">
          {trustItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 80}>
              <div className="trust-strip__item">
                {/* Divider between items (hidden on first) */}
                {index > 0 && <span className="trust-strip__divider" aria-hidden="true" />}

                <div className="trust-strip__icon-wrap" aria-hidden="true">
                  {item.icon}
                </div>

                <div className="trust-strip__text">
                  <h3 className="trust-strip__title">{item.title}</h3>
                  <p className="trust-strip__desc">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
