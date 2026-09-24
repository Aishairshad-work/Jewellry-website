import React, { useState } from 'react';
import { Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { Product, formatPKR } from '../../data/products';
import { useShop } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { TiltCard } from '../common/TiltCard';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { toggleWishlist, isInWishlist, addToCart } = useShop();
  const navigate = useNavigate();
  const isWishlisted = isInWishlist(product.id);
  const [showSparklePop, setShowSparklePop] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.product-card__wishlist-btn') || target.closest('.product-card__add-btn')) {
      return;
    }
    navigate(`/product/${product.id}`);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setShowSparklePop(true);
    setTimeout(() => setShowSparklePop(false), 900);
  };

  return (
    <TiltCard maxTilt={8}>
      <article className="product-card" onClick={handleCardClick}>
        <div className={`product-card__img-box ${product.bgTheme ? `product-card__img-box--${product.bgTheme}` : ''}`}>
          
          {/* Wishlist Heart Icon */}
          <button
            className={`product-card__wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlistClick}
            aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            type="button"
          >
            <Heart size={16} fill={isWishlisted ? '#7B5D42' : 'none'} color="#7B5D42" />
          </button>

          {/* Optional Badge */}
          {product.badge && (
            <span className={`product-card__badge product-card__badge--${product.badgeType || 'new'}`}>
              {product.badge}
            </span>
          )}

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="product-card__img"
            loading="lazy"
          />

          {/* Flying Sparkle Burst Feedback */}
          {showSparklePop && (
            <div className="az-sparkle-burst" aria-hidden="true">
              <Sparkles size={28} color="#D8C6A0" />
            </div>
          )}

          {/* Quick Add To Cart Slide-up */}
          <div className="product-card__quick-add">
            <button
              type="button"
              className="product-card__add-btn"
              onClick={handleAddToCartClick}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={14} />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="product-card__info">
          <div className="product-card__meta">
            <span className="product-card__category">{product.categoryLabel}</span>
            <h3 className="product-card__name">{product.name}</h3>
          </div>
          <div className="product-card__price">{formatPKR(product.price)}</div>
        </div>
      </article>
    </TiltCard>
  );
};
