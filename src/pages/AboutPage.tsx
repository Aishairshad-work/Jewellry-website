import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { MobileMenu } from '../components/layout/MobileMenu';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/cart/CartDrawer';
import { WhatsAppButton } from '../components/layout/WhatsAppButton';
import { ScrollReveal } from '../components/common/ScrollReveal';

// Existing assets
import ringsImg from '../assets/Rings.jpg';
import necklacesImg from '../assets/Necklaces.jpg';
import earringsImg from '../assets/Earrings.jpg';
import braceletsImg from '../assets/Bracelets.jpg';
import artisanImg from '../assets/Artisan Heritage.jpg';
import carousel1 from '../assets/Newsletter Bg.jpg';
import BazarBanner from '../assets/Bazar Banner.jpg';

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
    title: 'Authentic Materials',
    body: 'Crafted in genuine 925 Sterling Silver — verified, hallmarked and built to last.',
  },
  {
    id: 'timeless',
    number: '02',
    title: 'Timeless Design',
    body: 'Minimal forms designed to remain relevant and beautiful beyond passing trends.',
  },
  {
    id: 'everyday',
    number: '03',
    title: 'Everyday Luxury',
    body: 'Fine jewellery made to become an effortless part of your daily wardrobe.',
  },
  {
    id: 'craft',
    number: '04',
    title: 'Thoughtful Craft',
    body: 'Every piece is carefully selected with close attention to detail and finish.',
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
        <section className="about-hero" aria-label="Silver Haus Story Hero">
          {/* Background image */}
          <div className="about-hero__bg">
            <img src={carousel1} alt="Silver Haus Editorial" className="about-hero__bg-img" />
            <div className="about-hero__overlay" />
          </div>

          {/* Content */}
          <div className="container about-hero__content">
            <ScrollReveal delay={0}>
              <span className="about-hero__eyebrow">THE SILVER HAUS STORY</span>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h1 className="about-hero__heading">
                Jewellery,<br />
                <em>Refined for</em><br />
                Modern Living.
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
                <span className="about-story__eyebrow">Our Story</span>
                <h2 className="about-story__big-heading" id="story-heading">
                  OUR<br />STORY
                </h2>
              </div>
            </ScrollReveal>

            {/* Right — story body */}
            <ScrollReveal delay={120}>
              <div className="about-story__body-col">
                <p className="about-story__lead">
                  Rooted in the heart of Karachi's historic jewellery district —{' '}
                  <strong>Zaibunnisa Street, Saddar</strong> — Silver Haus was founded
                  to rethink how fine metals fit into modern wardrobes.
                </p>
                <p className="about-story__text">
                  For generations, Saddar has been the pulse of Pakistan's artisanal
                  metalwork and luxury jewellery. We took that deep-rooted tradition
                  of metal smithing and stripped away the bulky, outdated designs of
                  the past.
                </p>
                <p className="about-story__text">
                  The result? A curated house of minimalist, versatile, and striking{' '}
                  <strong>925 Sterling Silver</strong> creations tailored for today's
                  fashion-conscious generation — pieces that move from morning to evening,
                  from casual to ceremonial, without missing a beat.
                </p>

                <div className="about-story__stat-row">
                  <div className="about-story__stat">
                    <span className="about-story__stat-num">925</span>
                    <span className="about-story__stat-label">Sterling Silver</span>
                  </div>
                  <div className="about-story__stat-divider" aria-hidden="true" />
                  <div className="about-story__stat">
                    <span className="about-story__stat-num">100%</span>
                    <span className="about-story__stat-label">Authentic</span>
                  </div>
                  <div className="about-story__stat-divider" aria-hidden="true" />
                  <div className="about-story__stat">
                    <span className="about-story__stat-num">PKR</span>
                    <span className="about-story__stat-label">Local Pricing</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Decorative full-width image strip */}
          <ScrollReveal delay={60} direction="fade">
            <div className="about-story__image-strip">
              <img src={BazarBanner} alt="Location Banner" className="about-story__strip-img" loading="lazy" />
              <div className="about-story__strip-overlay" />
              <span className="about-story__strip-label">Zaibunnisa Street · Saddar · Karachi</span>
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
                "We bridge the gap between heavy traditional wear and disposable
                fashion jewellery — offering authentic silver that elevates your
                everyday look without compromising on quality."
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="about-statement__rule" aria-hidden="true" />
            </ScrollReveal>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            SECTION 4 — KARACHI / HERITAGE
        ═══════════════════════════════════════ */}
        <section className="about-heritage" aria-labelledby="heritage-heading">
          <div className="container about-heritage__inner">

            {/* Left image */}
            <ScrollReveal delay={0}>
              <div className="about-heritage__img-col">
                <div className="about-heritage__img-frame">
                  <img
                    src={artisanImg}
                    alt="Artisan crafting silver jewellery — Karachi heritage"
                    className="about-heritage__img"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right text */}
            <ScrollReveal delay={140}>
              <div className="about-heritage__text-col">
                <span className="about-heritage__eyebrow">Heritage &amp; Craft</span>
                <h2 className="about-heritage__heading" id="heritage-heading">
                  ROOTED IN<br />SADDAR
                </h2>
                <p className="about-heritage__body">
                  Inspired by generations of craftsmanship in Karachi's historic
                  jewellery district, we bring the character of traditional metalwork
                  into a cleaner, more contemporary expression.
                </p>
                <p className="about-heritage__body">
                  Every Silver Haus piece carries within it the spirit of Saddar's
                  artisan culture — reimagined through a modern, editorial lens so
                  that heritage and style are never in conflict.
                </p>
                <div className="about-heritage__location-tag">
                  <span className="about-heritage__location-dot" aria-hidden="true" />
                  <span>Zaibunnisa Street, Saddar, Karachi, Pakistan</span>
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
                <span className="about-beliefs__eyebrow">Our Values</span>
                <h2 className="about-beliefs__heading" id="beliefs-heading">
                  WHAT WE BELIEVE
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
                  THE COLLECTION
                </h2>
              </div>
            </ScrollReveal>

            <div className="about-collection__grid">
              {collections.map((cat, index) => (
                <ScrollReveal key={cat.id} delay={index * 80}>
                  <Link
                    to={cat.link}
                    className="about-collection-card"
                    aria-label={`Shop ${cat.label}`}
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
              <span className="about-cta__eyebrow">Ready to explore?</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="about-cta__heading">
                Find Your Signature Piece
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="about-cta__sub">
                Discover jewellery designed to become part of your story.
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
