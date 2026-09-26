import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../shop/ProductCard';
import { PRODUCTS } from '../../data/products';
import { ScrollReveal } from '../common/ScrollReveal';

export const ProductGrid: React.FC = () => {
  // Select top featured products for homepage grid
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="product-showcase" id="shop">

      {/* Floating Petals within Featured Section (Subtle ambient float) */}
      <div className="section-petal petal-white petal-anim-3" style={{ top: '10%', right: '11%', width: '28px', height: '28px' }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-2" style={{ top: '50%', left: '7%', width: '26px', height: '26px' }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-5" style={{ top: '88%', right: '14%', width: '30px', height: '30px' }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-1" style={{ top: '28%', left: '15%', width: '22px', height: '22px', opacity: 0.7 }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-4" style={{ top: '68%', right: '8%', width: '25px', height: '25px', opacity: 0.75 }} aria-hidden="true" />
      <div className="section-petal petal-white petal-anim-1" style={{ top: '35%', right: '5%', width: '24px', height: '24px', opacity: 0.7 }} aria-hidden="true" />
      <div className="section-petal petal-blue petal-anim-3" style={{ top: '78%', left: '4%', width: '26px', height: '26px', opacity: 0.75 }} aria-hidden="true" />

      {/* Sparkles */}
      <div className="section-sparkle sparkle-anim-2" style={{ top: '8%', left: '18%', fontSize: '15px' }} aria-hidden="true">✦</div>
      <div className="section-sparkle sparkle-anim-1" style={{ top: '90%', left: '32%', fontSize: '16px' }} aria-hidden="true">✦</div>

      <div className="container">
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="product-showcase__header">
            <div className="product-showcase__heading-group">
              <span className="product-showcase__eyebrow">Curated Selection</span>
              <h2 className="product-showcase__title">Featured Creations</h2>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Column Product Grid using reusable ProductCard */}
        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        {/* Centered CTA Section Link */}
        <ScrollReveal delay={0}>
          <div className="product-showcase__footer">
            <Link to="/shop" className="discover-products-btn">
              <span>DISCOVER THE PRODUCTS</span>
              <ArrowRight size={16} className="discover-products-btn__icon" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
