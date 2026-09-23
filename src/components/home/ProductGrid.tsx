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
