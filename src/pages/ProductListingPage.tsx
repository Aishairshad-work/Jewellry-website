import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { MobileMenu } from '../components/layout/MobileMenu';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/cart/CartDrawer';
import { WhatsAppButton } from '../components/layout/WhatsAppButton';
import { Breadcrumbs } from '../components/shop/Breadcrumbs';
import { ProductCard } from '../components/shop/ProductCard';
import { ProductToolbar } from '../components/shop/ProductToolbar';
import { FilterDrawer, FilterState } from '../components/shop/FilterDrawer';
import { PRODUCTS, CategoryDataMap } from '../data/products';
import { useShop } from '../context/ShopContext';

export const ProductListingPage: React.FC = () => {
  const { category: routeCategory } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const searchParamQuery = searchParams.get('q') || '';
  const { searchQuery, sortOption } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active category determination
  const activeCategory = routeCategory || 'all';
  const categoryInfo = CategoryDataMap.getCategoryInfo(activeCategory);

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    category: activeCategory,
    priceRange: 'all',
    material: 'all',
    style: 'all',
    inStockOnly: false
  });

  // Keep filter category in sync when route changes
  React.useEffect(() => {
    setFilters((prev) => ({ ...prev, category: activeCategory }));
  }, [activeCategory]);

  const handleClearAllFilters = () => {
    setFilters({
      category: activeCategory,
      priceRange: 'all',
      material: 'all',
      style: 'all',
      inStockOnly: false
    });
  };

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.category !== 'all' && filters.category !== activeCategory) count++;
    if (filters.priceRange !== 'all') count++;
    if (filters.material !== 'all') count++;
    if (filters.style !== 'all') count++;
    if (filters.inStockOnly) count++;
    return count;
  }, [filters, activeCategory]);

  // Filter & Sort Pipeline
  const filteredProducts = useMemo(() => {
    const activeSearch = searchQuery || searchParamQuery;

    return PRODUCTS.filter((p) => {
      // Route / Category filter
      if (filters.category !== 'all' && p.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }

      // Search query
      if (activeSearch.trim()) {
        const query = activeSearch.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCat = p.categoryLabel.toLowerCase().includes(query);
        const matchesMat = p.material.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesMat) return false;
      }

      // Price range
      if (filters.priceRange === 'under-10k' && p.price >= 10000) return false;
      if (filters.priceRange === '10k-15k' && (p.price < 10000 || p.price > 15000)) return false;
      if (filters.priceRange === 'above-15k' && p.price <= 15000) return false;

      // Material
      if (filters.material !== 'all' && p.material.toLowerCase() !== filters.material.toLowerCase()) {
        return false;
      }

      // Style
      if (filters.style !== 'all' && p.style.toLowerCase() !== filters.style.toLowerCase()) {
        return false;
      }

      // In Stock
      if (filters.inStockOnly && !p.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'newest') return a.badge === 'NEW IN' ? -1 : 1;
      return 0; // featured default
    });
  }, [filters, searchQuery, searchParamQuery, sortOption]);

  const breadcrumbs = [
    { label: 'SHOP', path: '/shop' },
    ...(activeCategory !== 'all' ? [{ label: categoryInfo.name }] : [])
  ];

  return (
    <div className="page-wrapper">
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="shop-page">
        {/* Full-width Editorial Category Hero Banner */}
        <section className="category-hero-banner">
          <div className="category-hero-banner__img-wrapper">
            <img
              src={categoryInfo.bannerImage}
              alt={`${categoryInfo.name} Banner`}
              className="category-hero-banner__img"
            />
            <div className="category-hero-banner__overlay" />
          </div>

          <div className="container category-hero-banner__content">
            <span className="category-hero-banner__eyebrow">{categoryInfo.eyebrow}</span>
            <h1 className="category-hero-banner__title">{categoryInfo.name}</h1>
            <p className="category-hero-banner__tagline">{categoryInfo.tagline}</p>
            <p className="category-hero-banner__description">{categoryInfo.description}</p>
          </div>
        </section>

        <div className="container">
          
          {/* Breadcrumbs */}
          <div className="shop-page__top-nav">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Toolbar */}
          <ProductToolbar
            totalCount={filteredProducts.length}
            activeFilterCount={activeFilterCount}
          />

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="shop-empty">
              <h2 className="shop-empty__title">No jewellery found</h2>
              <p className="shop-empty__text">
                We couldn't find any pieces matching your current filters or search query.
              </p>
              <button
                type="button"
                className="shop-empty__btn"
                onClick={handleClearAllFilters}
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="product-grid shop-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>
      </main>

      {/* Slide-in Drawers */}
      <FilterDrawer
        filters={filters}
        onFilterChange={setFilters}
        onClearAll={handleClearAllFilters}
      />
      <CartDrawer />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};
