import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Instagram, ChevronDown } from 'lucide-react';
import logo from '../../assets/Logo-black.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const shopCategories = [
  { name: 'Rings',     href: '/shop/rings' },
  { name: 'Bracelets', href: '/shop/bracelets' },
  { name: 'Necklaces', href: '/shop/necklaces' },
  { name: 'Earrings',  href: '/shop/earrings' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isShopOpen, setIsShopOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset submenu state when menu closes
  useEffect(() => {
    if (!isOpen) setIsShopOpen(false);
  }, [isOpen]);

  return (
    <div
      className={`mobile-menu-overlay ${isOpen ? 'mobile-menu-overlay--open' : ''}`}
      aria-hidden={!isOpen}
    >
      {/* Header */}
      <div className="mobile-menu__header">
        <img src={logo} alt="Silver Haus Logo" className="mobile-menu__logo" />
        <button className="mobile-menu__close-btn" onClick={onClose} aria-label="Close menu">
          <span>Close</span>
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mobile-menu__nav">

        {/* About Us */}
        <Link to="/about" className="mobile-menu__link" onClick={onClose}>
          <span>About Us</span>
          <span className="mobile-menu__link-num">01 <ArrowRight size={14} style={{ display: 'inline', marginLeft: '4px' }} /></span>
        </Link>

        {/* Shop By Category (accordion) */}
        <div className="mobile-menu__accordion">
          <button
            type="button"
            className={`mobile-menu__link mobile-menu__accordion-trigger ${isShopOpen ? 'mobile-menu__accordion-trigger--open' : ''}`}
            onClick={() => setIsShopOpen((v) => !v)}
            aria-expanded={isShopOpen}
          >
            <span>Shop By Category</span>
            <span className="mobile-menu__link-num">
              02
              <ChevronDown
                size={14}
                style={{
                  display: 'inline',
                  marginLeft: '6px',
                  transform: isShopOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1)',
                  verticalAlign: 'middle',
                }}
              />
            </span>
          </button>

          {/* Submenu */}
          <div
            className={`mobile-menu__submenu ${isShopOpen ? 'mobile-menu__submenu--open' : ''}`}
          >
            <div className="mobile-menu__submenu-inner">
              {shopCategories.map((cat) => (
                <Link
                  key={cat.href}
                  to={cat.href}
                  className="mobile-menu__submenu-item"
                  onClick={onClose}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <Link to="/contact" className="mobile-menu__link" onClick={onClose}>
          <span>Contact Us</span>
          <span className="mobile-menu__link-num">03 <ArrowRight size={14} style={{ display: 'inline', marginLeft: '4px' }} /></span>
        </Link>

        {/* New Arrival */}
        <Link to="/shop" className="mobile-menu__link mobile-menu__link--accent" onClick={onClose}>
          <span>New Arrival</span>
          <span className="mobile-menu__link-num">04 <ArrowRight size={14} style={{ display: 'inline', marginLeft: '4px' }} /></span>
        </Link>

      </nav>

      {/* Footer */}
      <div className="mobile-menu__footer">
        <div className="mobile-menu__location">
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-muted-taupe)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Flagship Boutique
          </p>
          <p style={{ marginTop: '2px' }}>Zaibunnisa Street, Saddar, Karachi, Pakistan</p>
        </div>

        <div className="mobile-menu__socials">
          <a
            href="https://www.instagram.com/silvere_haus/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu__social-link"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Instagram size={14} /> Instagram @silvere_haus
          </a>
        </div>
      </div>
    </div>
  );
};
