import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Instagram, Facebook, Video, Check, Plus, X } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { TrustStrip } from '../home/TrustStrip';
import logo from '../../assets/Logo-transparent.png';
import newsletterBg from '../../assets/Newsletter Bg.jpg';

// Brand Configuration Constants
const BRAND_CONFIG = {
  WHATSAPP_URL: 'https://wa.me/923000000000?text=Hello%20Silver%20Haus%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collection.',
  INSTAGRAM_URL: 'https://www.instagram.com/silvere_haus/',
  FACEBOOK_URL: 'https://facebook.com/silverhausofficial',
  TIKTOK_URL: 'https://tiktok.com/@silverhaus'
};

const shopLinks = [
  { name: 'All Jewellery', href: '#shop' },
  { name: 'Rings', href: '#rings' },
  { name: 'Necklaces', href: '#necklaces' },
  { name: 'Earrings', href: '#earrings' },
  { name: 'Bracelets', href: '#bracelets' },
  { name: 'New Arrivals', href: '#new-arrivals' },
  { name: 'Best Sellers', href: '#best-sellers' },
];

const infoLinks = [
  { name: 'About Silver Haus', href: '#about' },
  { name: 'Our Story', href: '#our-story' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Shipping & Delivery', href: '#shipping' },
  { name: 'Returns & Exchanges', href: '#returns' },
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms & Conditions', href: '#terms' },
];

const customerCareLinks = [
  { name: 'Contact Us', href: '#contact' },
  {
    name: 'WhatsApp Assistant',
    href: BRAND_CONFIG.WHATSAPP_URL,
    isExternal: true,
    icon: <MessageCircle size={15} className="footer-link__icon" />
  },
  { name: 'Order Tracking', href: '#order-tracking' },
  { name: 'Care Guide', href: '#care-guide' },
  { name: 'Gift Cards', href: '#gift-cards' },
];

/* ── Mobile accordion helper ── */
interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`footer-accordion ${isOpen ? 'footer-accordion--open' : ''}`}>
      <button
        type="button"
        className="footer-accordion__trigger"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        <span className="footer-accordion__label">{title}</span>
        <span className="footer-accordion__icon" aria-hidden="true">
          {isOpen ? <X size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div className="footer-accordion__body">
        <div className="footer-accordion__inner">
          {children}
        </div>
      </div>
    </div>
  );
};

/* ── Socials block (shared) ── */
const SocialsBlock: React.FC = () => (
  <div className="footer-socials">
    <span className="footer-socials__label">Connect</span>
    <div className="footer-socials__icons">
      <a href={BRAND_CONFIG.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
        className="social-btn" aria-label="Follow Silver Haus on Instagram">
        <Instagram size={17} />
      </a>
      <a href={BRAND_CONFIG.FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
        className="social-btn" aria-label="Follow Silver Haus on Facebook">
        <Facebook size={17} />
      </a>
      <a href={BRAND_CONFIG.TIKTOK_URL} target="_blank" rel="noopener noreferrer"
        className="social-btn" aria-label="Follow Silver Haus on TikTok">
        <Video size={17} />
      </a>
    </div>
  </div>
);

/* ── Newsletter form (shared) ── */
const NewsletterForm: React.FC<{
  email: string;
  isSubscribed: boolean;
  setEmail: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}> = ({ email, isSubscribed, setEmail, onSubmit }) => (
  <form className="footer-nl__form" onSubmit={onSubmit} aria-label="Newsletter Subscription">
    {isSubscribed ? (
      <div className="footer-nl__success" role="status">
        <Check size={14} />
        <span>You're subscribed!</span>
      </div>
    ) : (
      <div className="footer-nl__pill">
        <input
          type="email"
          className="footer-nl__input"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email for newsletter"
        />
        <button type="submit" className="footer-nl__btn" aria-label="Subscribe">
          <ArrowRight size={15} />
        </button>
      </div>
    )}
  </form>
);

/* ══════════════════════════════════════════
   FOOTER COMPONENT
══════════════════════════════════════════ */
export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <>
      {/* ── Newsletter Section (full-width, on page background) ── */}
      <section className="newsletter-section" aria-label="Newsletter Subscription">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-card__content">
              <span className="newsletter-card__eyebrow">PRIVATE ACCESS</span>
              <h2 className="newsletter-card__title">
                Shine in <span className="newsletter-card__title-italic">your</span> own way!
              </h2>
              <p className="newsletter-card__subtitle">
                Jewelry that speaks your style. Receive first access to new arrivals, private releases and Silver Haus updates.
              </p>
              <form
                className="newsletter-card__form"
                onSubmit={handleNewsletterSubmit}
                aria-label="Newsletter Subscription"
              >
                {isSubscribed ? (
                  <div className="newsletter-card__success" role="status">
                    <Check size={16} />
                    <span>Welcome to Silver Haus Private Access.</span>
                  </div>
                ) : (
                  <div className="newsletter-card__input-pill">
                    <input
                      type="email"
                      className="newsletter-card__input"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-label="Email address for newsletter"
                    />
                    <button type="submit" className="newsletter-card__action-btn" aria-label="Subscribe to Private Access">
                      <ArrowRight size={17} />
                    </button>
                  </div>
                )}
              </form>
            </div>
            <div className="newsletter-card__visual">
              <div className="newsletter-card__img-frame">
                <img src={newsletterBg} alt="Silver Haus Luxury Jewelry Collection" className="newsletter-card__img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <TrustStrip />

      {/* ══════════════════════════════════════════
          MAIN FOOTER
      ══════════════════════════════════════════ */}
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer__main">
          <div className="container">

            {/* ─────────────────────────────────────
                DESKTOP + TABLET: standard grid
            ───────────────────────────────────── */}
            <div className="site-footer__grid">

              {/* Col 1 — Brand */}
              <ScrollReveal delay={0}>
                <div className="footer-col footer-col--brand">
                  <a href="/" aria-label="Silver Haus Home" className="footer-logo__wrapper">
                    <img src={logo} alt="Silver Haus Luxury Jewellery" className="footer-logo" />
                  </a>
                  <p className="footer-brand__tagline">"Jewellery, refined for you."</p>
                  <p className="footer-brand__description">
                    Timeless pieces, thoughtfully curated for the moments worth remembering.
                  </p>
                  <div className="footer-brand__location">
                    <span>Zaibunnisa Street, Saddar, Karachi, Pakistan</span>
                  </div>
                  {/* Socials shown inline on desktop/tablet inside brand col */}
                  <SocialsBlock />
                </div>
              </ScrollReveal>

              {/* Col 2 — Shop */}
              <ScrollReveal delay={80}>
                <nav className="footer-col" aria-label="Shop Navigation">
                  <h3 className="footer-col__title">Shop</h3>
                  <ul className="footer-links__list">
                    {shopLinks.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="footer-link">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ScrollReveal>

              {/* Col 3 — Information */}
              <ScrollReveal delay={160}>
                <nav className="footer-col" aria-label="Information Navigation">
                  <h3 className="footer-col__title">Information</h3>
                  <ul className="footer-links__list">
                    {infoLinks.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="footer-link">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ScrollReveal>

              {/* Col 4 — Customer Care */}
              <ScrollReveal delay={240}>
                <nav className="footer-col" aria-label="Customer Care Navigation">
                  <h3 className="footer-col__title">Customer Care</h3>
                  <ul className="footer-links__list">
                    {customerCareLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="footer-link footer-link--iconic"
                          target={link.isExternal ? '_blank' : undefined}
                          rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        >
                          {link.icon}
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ScrollReveal>

            </div>

            {/* ─────────────────────────────────────
                MOBILE ONLY: brand + accordion layout
            ───────────────────────────────────── */}
            <div className="site-footer__mobile">

              {/* Brand block */}
              <div className="footer-mobile-brand">
                <a href="/" aria-label="Silver Haus Home" className="footer-logo__wrapper">
                  <img src={logo} alt="Silver Haus Luxury Jewellery" className="footer-logo footer-logo--mobile" />
                </a>
                <p className="footer-brand__tagline">"Jewellery, refined for you."</p>
                <p className="footer-brand__description">
                  Timeless pieces, thoughtfully curated for the moments worth remembering.
                </p>
                <SocialsBlock />
              </div>

              {/* Accordion: Shop */}
              <AccordionSection title="Shop">
                <ul className="footer-links__list">
                  {shopLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </AccordionSection>

              {/* Accordion: Information */}
              <AccordionSection title="Information">
                <ul className="footer-links__list">
                  {infoLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </AccordionSection>

              {/* Accordion: Customer Care */}
              <AccordionSection title="Customer Care">
                <ul className="footer-links__list">
                  {customerCareLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="footer-link footer-link--iconic"
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionSection>

              {/* Accordion: Newsletter Signup */}
              <AccordionSection title="Newsletter Signup">
                <p className="footer-nl__desc">
                  Receive first access to new arrivals, private releases and Silver Haus updates.
                </p>
                <NewsletterForm
                  email={email}
                  isSubscribed={isSubscribed}
                  setEmail={setEmail}
                  onSubmit={handleNewsletterSubmit}
                />
              </AccordionSection>

            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <ScrollReveal delay={0} direction="fade">
          <div className="site-footer__bottom">
            <div className="container">
              <div className="site-footer__bottom-inner">
                <div className="site-footer__copyright">
                  <p>© 2026 Silver Haus. All rights reserved.</p>
                </div>
                <div className="site-footer__legal-links">
                  <a href="#privacy" className="legal-link">Privacy Policy</a>
                  <span className="legal-divider">•</span>
                  <a href="#terms" className="legal-link">Terms &amp; Conditions</a>
                  <span className="legal-divider">•</span>
                  <a href="#shipping" className="legal-link">Shipping &amp; Returns</a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </footer>
    </>
  );
};
