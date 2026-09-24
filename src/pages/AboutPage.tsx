import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { MobileMenu } from '../components/layout/MobileMenu';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/cart/CartDrawer';
import { WhatsAppButton } from '../components/layout/WhatsAppButton';
import { ScrollReveal } from '../components/common/ScrollReveal';

// AZ JEWELRY Photography
import ringsImg from '../assets/hero-ring.jpg';
import necklacesImg from '../assets/hero-neckless.jpg';
import earringsImg from '../assets/hero-set.jpg';
import braceletsImg from '../assets/hero-brecelet.jpg';
import artisanImg from '../assets/hero-set2.jpg';
import heroBg from '../assets/hero-neckless4.jpg';
import stripBanner from '../assets/hero-neckless3.jpg';

/* ─────────────────────────────────────────
   COLLECTION DATA
───────────────────────────────────────── */
const collections = [
  { id: 'rings',     label: 'Rings',     image: ringsImg,     link: '/shop/rings' },
  { id: 'necklaces', label: 'Necklaces', image: necklacesImg,  link: '/shop/necklaces' },
  { id: 'earrings',  label: 'Earrings',  image: earringsImg,   link: '/shop/earrings' },
  { id: 'bracelets', label: 'Bracelets', image: braceletsImg,  link: '/shop/bracelets' },
];

/* ─────────────────────────────────────────
   BELIEFS DATA
───────────────────────────────────────── */
const beliefs = [
  {
    id: 'authentic',
    number: '01',
    title: 'Certified Lab-Grown Diamonds',
    body: 'Indistinguishable from mined diamonds in physical, chemical, and optical composition — 100% conflict-free and ethically created.',
  },
  {
    id: 'timeless',
    number: '02',
    title: 'Precision Craftsmanship',
    body: 'Hand-set solitaire mountings, VVS clarity diamonds, and 18k solid gold & platinum finishes engineered for eternal brilliance.',
  },
  {
    id: 'everyday',
    number: '03',
    title: 'Everyday High Jewellery',
    body: 'Fine diamond jewellery designed to seamlessly move from daily wear to grand red-carpet celebrations.',
  },
  {
    id: 'craft',
    number: '04',
    title: 'Unrivaled Transparency',
    body: 'Every AZ JEWELRY diamond is accompanied by verified certification, giving you ultimate peace of mind and luxury confidence.',
  },
];

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */
export const AboutPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="page-wrapper">
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="about-page">

        {/* ═══════════════════════════════════════
            SECTION 1 — EDITORIAL HERO
        ═══════════════════════════════════════ */}
        <section className="about-hero" aria-label="AZ JEWELRY Story Hero">
          {/* Background image */}
          <div className="about-hero__bg">
            <img src={heroBg} alt="AZ JEWELRY Editorial" className="about-hero__bg-img" />
            <div className="about-hero__overlay" />
          </div>

          {/* Content */}
          <div className="container about-hero__content">
            <ScrollReveal delay={0}>
              <span className="about-hero__eyebrow">THE AZ JEWELRY STORY</span>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h1 className="about-hero__heading">
                Lab Grown<br />
                <em>Diamonds,</em><br />
                Refined.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <Link to="/shop" className="about-hero__cta">
                <span>EXPLORE THE COLLECTION</span>
                <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>

          {/* Scroll hint */}
          <div className="about-hero__scroll-hint" aria-hidden="true">
            <span />
          </div>
        </section>


        {/* ═══════════════════════════════════════
            SECTION 2 — OUR STORY (asymmetric)
        ═══════════════════════════════════════ */}
        <section className="about-story" aria-labelledby="story-heading">
          <div className="container about-story__inner">

            {/* Left — large heading */}
            <ScrollReveal delay={0}>
              <div className="about-story__heading-col">
                <span className="about-story__eyebrow">Brand Heritage</span>
                <h2 className="about-story__big-heading" id="story-heading">
                  AZ<br />JEWELRY
                </h2>
              </div>
            </ScrollReveal>

            {/* Right — story body */}
            <ScrollReveal delay={120}>
              <div className="about-story__body-col">
                <p className="about-story__lead">
                  At <strong>AZ JEWELRY</strong>, we pioneer the future of luxury with certified{' '}
                  <strong>Lab-Grown Diamonds</strong> — combining world-class diamond brilliance with conscious, ethical craftsmanship.
                </p>
                <p className="about-story__text">
                  Originating with a reverence for Pakistan’s master metalworking traditions in historic Saddar, Karachi, AZ JEWELRY reimagines fine jewellery for the modern connoisseur. We select only high-clarity, brilliant-cut lab-grown diamonds set into solid 18k gold, platinum, and rhodium-finished silver.
                </p>
                <p className="about-story__text">
                  Our lab-grown diamonds share the exact carbon crystal lattice, optical fire, and hardness (10 Mohs) as mined diamonds — delivering incredible brilliance, larger carat sizes, and unmatched purity without environmental compromise.
                </p>

                <div className="about-story__stat-row">
                  <div className="about-story__stat">
                    <span className="about-story__stat-num">VVS1</span>
                    <span className="about-story__stat-label">Diamond Clarity</span>
                  </div>
                  <div className="about-story__stat-divider" aria-hidden="true" />
                  <div className="about-story__stat">
                    <span className="about-story__stat-num">100%</span>
                    <span className="about-story__stat-label">Conflict Free</span>
                  </div>
                  <div className="about-story__stat-divider" aria-hidden="true" />
                  <div className="about-story__stat">
                    <span className="about-story__stat-num">PKR</span>
                    <span className="about-story__stat-label">Direct Pricing</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Decorative full-width image strip */}
          <ScrollReveal delay={60} direction="fade">
            <div className="about-story__image-strip">
              <img src={stripBanner} alt="AZ JEWELRY Campaign Banner" className="about-story__strip-img" loading="lazy" />
              <div className="about-story__strip-overlay" />
              <span className="about-story__strip-label">AZ JEWELRY · LAB GROWN DIAMONDS</span>
            </div>
          </ScrollReveal>
        </section>


        {/* ═══════════════════════════════════════
            SECTION 3 — BRAND STATEMENT (editorial quote)
        ═══════════════════════════════════════ */}
        <section className="about-statement" aria-label="Brand Philosophy Statement">
          <div className="container">
            <ScrollReveal delay={0}>
              <span className="about-statement__label">Our Philosophy</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <blockquote className="about-statement__quote">
                "We believe luxury should be brilliant, sustainable, and uncompromising. AZ JEWELRY brings certified lab-grown diamond elegance into everyday life."
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="about-statement__rule" aria-hidden="true" />
            </ScrollReveal>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            SECTION 4 — HERITAGE & CRAFT
        ═══════════════════════════════════════ */}
        <section className="about-heritage" aria-labelledby="heritage-heading">
          <div className="container about-heritage__inner">

            {/* Left image */}
            <ScrollReveal delay={0}>
              <div className="about-heritage__img-col">
                <div className="about-heritage__img-frame">
                  <img
                    src={artisanImg}
                    alt="AZ JEWELRY Master Diamond Artisans"
                    className="about-heritage__img"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right text */}
            <ScrollReveal delay={140}>
              <div className="about-heritage__text-col">
                <span className="about-heritage__eyebrow">Master Craftsmanship</span>
                <h2 className="about-heritage__heading" id="heritage-heading">
                  ARTISANAL<br />EXCELLENCE
                </h2>
                <p className="about-heritage__body">
                  Every solitaire setting, tennis link, and chandelier drop in the AZ JEWELRY collection is meticulously hand-finished. Our master setters align each diamond facet to ensure maximum light dispersion and fire.
                </p>
                <p className="about-heritage__body">
                  By pairing artisanal setting techniques with advanced lab-grown diamond innovation, AZ JEWELRY delivers heirloom-quality pieces crafted to shine across generations.
                </p>
                <div className="about-heritage__location-tag">
                  <span className="about-heritage__location-dot" aria-hidden="true" />
                  <span>AZ JEWELRY Flagship · Saddar, Karachi, Pakistan</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>


        {/* ═══════════════════════════════════════
            SECTION 5 — WHAT WE BELIEVE
        ═══════════════════════════════════════ */}
        <section className="about-beliefs" aria-labelledby="beliefs-heading">
          <div className="container">
            <ScrollReveal delay={0}>
              <div className="about-beliefs__header">
                <span className="about-beliefs__eyebrow">Our Core Values</span>
                <h2 className="about-beliefs__heading" id="beliefs-heading">
                  THE AZ JEWELRY STANDARDS
                </h2>
              </div>
            </ScrollReveal>

            <div className="about-beliefs__grid">
              {beliefs.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 80}>
                  <div className="about-belief-card">
                    <span className="about-belief-card__number" aria-hidden="true">
                      {item.number}
                    </span>
                    <div className="about-belief-card__rule" aria-hidden="true" />
                    <h3 className="about-belief-card__title">{item.title}</h3>
                    <p className="about-belief-card__body">{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            SECTION 6 — THE COLLECTION showcase
        ═══════════════════════════════════════ */}
        <section className="about-collection" aria-labelledby="collection-heading">
          <div className="container">
            <ScrollReveal delay={0}>
              <div className="about-collection__header">
                <span className="about-collection__eyebrow">Explore</span>
                <h2 className="about-collection__heading" id="collection-heading">
                  THE DIAMOND COLLECTION
                </h2>
              </div>
            </ScrollReveal>

            <div className="about-collection__grid">
              {collections.map((cat, index) => (
                <ScrollReveal key={cat.id} delay={index * 80}>
                  <Link
                    to={cat.link}
                    className="about-collection-card"
                    aria-label={`Shop AZ JEWELRY ${cat.label}`}
                  >
                    <div className="about-collection-card__img-wrap">
                      <img
                        src={cat.image}
                        alt={cat.label}
                        className="about-collection-card__img"
                        loading="lazy"
                      />
                      <div className="about-collection-card__overlay" />
                    </div>
                    <div className="about-collection-card__label">
                      <span className="about-collection-card__name">{cat.label}</span>
                      <span className="about-collection-card__explore">
                        Explore <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            SECTION 7 — FINAL CTA
        ═══════════════════════════════════════ */}
        <section className="about-cta" aria-label="Shop the Collection">
          <div className="container about-cta__inner">
            <ScrollReveal delay={0}>
              <span className="about-cta__eyebrow">Ready to shine?</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="about-cta__heading">
                Find Your Signature Diamond Piece
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="about-cta__sub">
                Discover lab-grown diamond jewellery designed to become part of your story.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={280}>
              <Link to="/shop" className="about-cta__btn">
                <span>SHOP THE COLLECTION</span>
                <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <CartDrawer />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
