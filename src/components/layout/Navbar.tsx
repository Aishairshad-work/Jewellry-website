import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import logo from '../../assets/Logo-black.png';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

const shopCategories = [
  { name: 'Rings',     href: '/shop/rings' },
  { name: 'Bracelets', href: '/shop/bracelets' },
  { name: 'Necklaces', href: '/shop/necklaces' },
  { name: 'Earrings',  href: '/shop/earrings' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isSearchOpen, setIsSearchOpen]   = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [localSearch, setLocalSearch]     = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { cartCount, openCartDrawer, setSearchQuery, wishlist } = useShop();
  const navigate = useNavigate();

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  /* ── Hover helpers (with slight delay to prevent flicker) ── */
  const handleMouseEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimer.current = setTimeout(() => setIsDropdownOpen(false), 120);
  };

  /* ── Search submit ── */
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchQuery(localSearch);
      setIsSearchOpen(false);
      navigate(`/shop?q=${encodeURIComponent(localSearch)}`);
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
        <div className="container navbar__inner">

          {/* Mobile Hamburger */}
          <div className="navbar__mobile-toggle">
            <button
              className="icon-btn"
              onClick={onOpenMobileMenu}
              aria-label="Open Mobile Menu"
              type="button"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* ── Desktop Nav Left ── */}
          <nav className="navbar__menu-left" aria-label="Main Navigation">
    {/* Shop By Category with dropdown */}
            <div
              className="nav-dropdown-wrapper"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-link nav-dropdown-trigger ${isDropdownOpen ? 'nav-dropdown-trigger--active' : ''}`}
                type="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen((v) => !v)}
              >
                Shop By Category
                <ChevronDown
                  size={13}
                  className={`nav-dropdown-chevron ${isDropdownOpen ? 'nav-dropdown-chevron--open' : ''}`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`nav-dropdown-panel ${isDropdownOpen ? 'nav-dropdown-panel--open' : ''}`}
                role="menu"
              >
                {shopCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    to={cat.href}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
                        <Link to="/shop" className="nav-link nav-link--accent">New Arrival</Link>

            <Link to="/about" className="nav-link">About Us</Link>

        


          </nav>

          {/* ── Logo Center ── */}
          <div className="navbar__logo-wrapper">
            <Link to="/" aria-label="AZ JEWELRY Home" className="navbar__logo-link">
              <img src={logo} alt="AZ JEWELRY — Lab Grown Diamonds" className="navbar__logo" />
            </Link>
          </div>

          {/* ── Utility Icons Right ── */}
          <div className="navbar__utility-right">
            <button
              className="icon-btn"
              aria-label="Search Collection"
              type="button"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={19} />
            </button>

            <Link to="/shop" className="icon-btn hide-mobile" aria-label="View Wishlist">
              <Heart size={19} />
              {wishlist.length > 0 && <span className="icon-btn__badge">{wishlist.length}</span>}
            </Link>

            <button className="icon-btn hide-mobile" aria-label="Account Login" type="button">
              <User size={19} />
            </button>

            <button
              className="icon-btn"
              aria-label="Shopping Bag"
              type="button"
              onClick={openCartDrawer}
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && <span className="icon-btn__badge">{cartCount}</span>}
            </button>
          </div>

        </div>
      </header>

      {/* ── Search Modal ── */}
      {isSearchOpen && (
        <div className="navbar__search-overlay" onClick={() => setIsSearchOpen(false)}>
          <div className="navbar__search-bar" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit} className="search-form container">
              <Search size={20} className="search-form__icon" />
              <input
                type="search"
                autoFocus
                placeholder="Search jewellery, e.g. pearl, ring, gold..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="search-form__input"
              />
              <button type="button" className="search-form__close" onClick={() => setIsSearchOpen(false)}>
                <X size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
