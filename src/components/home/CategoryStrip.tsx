import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../common/ScrollReveal';

interface Category {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

/* ── Hand-drawn sketch SVG icons matching the inspiration ── */
const HeartPendantIcon = () => (
  <svg viewBox="0 0 60 72" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="cat-icon__svg" aria-hidden="true">
    <path d="M30 22 C30 22 18 12 18 20 C18 28 30 36 30 36 C30 36 42 28 42 20 C42 12 30 22 30 22Z" />
    <line x1="30" y1="36" x2="30" y2="48" />
    <circle cx="30" cy="52" r="4" />
  </svg>
);

const EarringsIcon = () => (
  <svg viewBox="0 0 60 72" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="cat-icon__svg" aria-hidden="true">
    <circle cx="20" cy="16" r="4" />
    <line x1="20" y1="20" x2="20" y2="32" />
    <path d="M13 32 Q20 44 27 32" />
    <circle cx="40" cy="16" r="4" />
    <line x1="40" y1="20" x2="40" y2="32" />
    <path d="M33 32 Q40 44 47 32" />
  </svg>
);

const NecklaceIcon = () => (
  <svg viewBox="0 0 60 72" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="cat-icon__svg" aria-hidden="true">
    <path d="M10 18 Q30 10 50 18" />
    <path d="M10 18 Q8 38 22 50" />
    <path d="M50 18 Q52 38 38 50" />
    <path d="M22 50 Q30 56 38 50" />
  </svg>
);

const RingsDoubleIcon = () => (
  <svg viewBox="0 0 60 72" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="cat-icon__svg" aria-hidden="true">
    <circle cx="22" cy="32" r="12" />
    <circle cx="38" cy="32" r="12" />
  </svg>
);

const DiamondIcon = () => (
  <svg viewBox="0 0 60 72" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="cat-icon__svg" aria-hidden="true">
    {/* Shine lines */}
    <line x1="30" y1="8" x2="30" y2="4" />
    <line x1="42" y1="12" x2="44" y2="9" />
    <line x1="18" y1="12" x2="16" y2="9" />
    {/* Diamond shape */}
    <polygon points="30,20 46,32 30,54 14,32" />
    <line x1="14" y1="32" x2="46" y2="32" />
    <line x1="22" y1="20" x2="14" y2="32" />
    <line x1="38" y1="20" x2="46" y2="32" />
    <line x1="22" y1="20" x2="30" y2="32" />
    <line x1="38" y1="20" x2="30" y2="32" />
  </svg>
);

const RingSolitaireIcon = () => (
  <svg viewBox="0 0 60 72" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="cat-icon__svg" aria-hidden="true">
    <path d="M20 42 Q12 42 12 50 Q12 58 30 58 Q48 58 48 50 Q48 42 40 42" />
    <path d="M20 42 L24 34 L36 34 L40 42" />
    <polygon points="30,22 36,30 30,34 24,30" />
  </svg>
);

const categories: Category[] = [
  { id: 'pendants',  label: 'Pendants',   href: '/shop/necklaces', icon: <HeartPendantIcon /> },
  { id: 'earrings',  label: 'Earrings',   href: '/shop/earrings',  icon: <EarringsIcon /> },
  { id: 'necklaces', label: 'Necklaces',  href: '/shop/necklaces', icon: <NecklaceIcon /> },
  { id: 'rings',     label: 'Rings',      href: '/shop/rings',     icon: <RingsDoubleIcon /> },
  { id: 'diamond',   label: 'Fine Gems',  href: '/shop',           icon: <DiamondIcon /> },
  { id: 'solitaire', label: 'Solitaires', href: '/shop/rings',     icon: <RingSolitaireIcon /> },
];

export const CategoryStrip: React.FC = () => {
  return (
    <section className="category-strip" aria-label="Shop by Category">
      <div className="container">
        <ScrollReveal delay={0}>
          <div className="category-strip__header">
            <span className="category-strip__eyebrow">Explore The Edit</span>
            <h2 className="category-strip__title">Shop by Category</h2>
          </div>
        </ScrollReveal>

        <ul className="category-strip__list" role="list">
          {categories.map((cat, i) => (
            <li key={cat.id} className="category-strip__item">
              {i > 0 && <span className="category-strip__divider" aria-hidden="true" />}
              <ScrollReveal delay={i * 80}>
                <Link to={cat.href} className="category-strip__link" aria-label={`Shop ${cat.label}`}>
                  <span className="cat-icon">
                    <span className="cat-icon__ring" aria-hidden="true" />
                    {cat.icon}
                  </span>
                  <span className="category-strip__label">{cat.label}</span>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
