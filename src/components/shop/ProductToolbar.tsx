import React from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

interface ProductToolbarProps {
  totalCount: number;
  activeFilterCount: number;
}

export const ProductToolbar: React.FC<ProductToolbarProps> = ({
  totalCount,
  activeFilterCount
}) => {
  const { openFilterDrawer, sortOption, setSortOption } = useShop();

  return (
    <div className="product-toolbar">
      {/* Count */}
      <div className="product-toolbar__count">
        <span>{totalCount} {totalCount === 1 ? 'PIECE' : 'PIECES'}</span>
      </div>

      {/* Action Controls Group */}
      <div className="product-toolbar__controls">
        {/* Filter Drawer Trigger */}
        <button
          className="product-toolbar__filter-btn"
          onClick={openFilterDrawer}
          type="button"
          aria-label="Open Filter Drawer"
        >
          <SlidersHorizontal size={15} />
          <span>FILTER & CONCENTRATION</span>
          {activeFilterCount > 0 && (
            <span className="filter-badge">{activeFilterCount}</span>
          )}
        </button>

        {/* Sort Select Dropdown */}
        <div className="product-toolbar__sort">
          <label htmlFor="sort-select" className="sort-label">SORT BY:</label>
          <div className="sort-select__wrapper">
            <select
              id="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="sort-select"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="sort-select__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
