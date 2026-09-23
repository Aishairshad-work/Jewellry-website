import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { MobileMenu } from '../components/layout/MobileMenu';
import { Hero } from '../components/home/Hero';
import { CategoryShowcase } from '../components/home/CategoryShowcase';
import { FeaturedBanners } from '../components/home/FeaturedBanners';
import { ProductGrid } from '../components/home/ProductGrid';
import { Testimonials } from '../components/home/Testimonials';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/cart/CartDrawer';
import { WhatsAppButton } from '../components/layout/WhatsAppButton';

export const HomePage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="page-wrapper">
      {/* Navbar with Transparent-to-Scrolled transition */}
      <Navbar
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <main>
        <Hero />
        <CategoryShowcase />
        <FeaturedBanners />
        <ProductGrid />
        <Testimonials />
      </main>

      {/* Slide-in Cart Drawer */}
      <CartDrawer />

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Inquiry */}
      <WhatsAppButton />
    </div>
  );
};
