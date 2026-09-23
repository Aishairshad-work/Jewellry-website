import React from 'react';
import { X, Check } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export interface FilterState {
  category: string;
  priceRange: string;
  material: string;
  style: string;
  inStockOnly: boolean;
}

interface FilterDrawerProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearAll: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  filters,
  onFilterChange,
  onClearAll
}) => {
  const { isFilterOpen, closeFilterDrawer } = useShop();

  if (!isFilterOpen) return null;

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'rings', label: 'Rings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'bracelets', label: 'Bracelets' }
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-10k', label: 'Under PKR 10,000' },
    { id: '10k-15k', label: 'PKR 10,000 – 15,000' },
    { id: 'above-15k', label: 'Above PKR 15,000' }
  ];

  const materials = ['All', 'Sterling Silver', 'Gold Plated', 'Mixed Metal'];
  const styles = ['All', 'Minimal', 'Classic', 'Statement', 'Everyday'];

  return (
    <div className="filter-drawer__overlay" onClick={closeFilterDrawer} role="dialog" aria-modal="true" aria-label="Filter Products">
      <div className="filter-drawer__panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="filter-drawer__header">
          <h2 className="filter-drawer__title">Filter & Refine</h2>
          <button
            className="filter-drawer__close-btn"
            onClick={closeFilterDrawer}
            aria-label="Close filter drawer"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Content Body */}
        <div className="filter-drawer__body">
          
          {/* Category Filter */}
          <div className="filter-group">
            <h3 className="filter-group__title">CATEGORY</h3>
            <ul className="filter-options">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    className={`filter-option-btn ${filters.category === cat.id ? 'active' : ''}`}
                    onClick={() => onFilterChange({ ...filters, category: cat.id })}
                  >
                    <span>{cat.label}</span>
                    {filters.category === cat.id && <Check size={14} />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="filter-group">
            <h3 className="filter-group__title">PRICE RANGE</h3>
            <ul className="filter-options">
              {priceRanges.map((range) => (
                <li key={range.id}>
                  <button
                    type="button"
                    className={`filter-option-btn ${filters.priceRange === range.id ? 'active' : ''}`}
                    onClick={() => onFilterChange({ ...filters, priceRange: range.id })}
                  >
                    <span>{range.label}</span>
                    {filters.priceRange === range.id && <Check size={14} />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Material Filter */}
          <div className="filter-group">
            <h3 className="filter-group__title">MATERIAL</h3>
            <div className="filter-chips">
              {materials.map((mat) => {
                const val = mat.toLowerCase();
                const isActive = filters.material.toLowerCase() === val;
                return (
                  <button
                    key={mat}
                    type="button"
                    className={`filter-chip ${isActive ? 'active' : ''}`}
                    onClick={() => onFilterChange({ ...filters, material: val })}
                  >
                    {mat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Style Filter */}
          <div className="filter-group">
            <h3 className="filter-group__title">STYLE</h3>
            <div className="filter-chips">
              {styles.map((st) => {
                const val = st.toLowerCase();
                const isActive = filters.style.toLowerCase() === val;
                return (
                  <button
                    key={st}
                    type="button"
                    className={`filter-chip ${isActive ? 'active' : ''}`}
                    onClick={() => onFilterChange({ ...filters, style: val })}
                  >
                    {st}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Availability Toggle */}
          <div className="filter-group">
            <label className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => onFilterChange({ ...filters, inStockOnly: e.target.checked })}
                className="filter-checkbox"
              />
              <span className="filter-checkbox-text">In Stock Only</span>
            </label>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="filter-drawer__footer">
          <button
            type="button"
            className="filter-clear-btn"
            onClick={onClearAll}
          >
            Clear All
          </button>
          <button
            type="button"
            className="filter-apply-btn"
            onClick={closeFilterDrawer}
          >
            Apply Filters
          </button>
        </div>

      </div>
    </div>
  );
};
