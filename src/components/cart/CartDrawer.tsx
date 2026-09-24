import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { formatPKR } from '../../data/products';
import { useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, closeCartDrawer, updateQuantity, removeFromCart, cartTotal, cartCount } = useShop();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 15000;
  const shippingProgress = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  const handleCheckoutClick = () => {
    closeCartDrawer();
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    closeCartDrawer();
    navigate('/shop');
  };

  return (
    <div className="cart-drawer__overlay" onClick={closeCartDrawer} role="dialog" aria-modal="true" aria-label="Shopping Cart">
      <div className="cart-drawer__panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Drawer Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__title-group">
            <ShoppingBag size={18} className="cart-drawer__icon" />
            <h2 className="cart-drawer__title">Shopping Bag</h2>
            <span className="cart-drawer__count">({cartCount})</span>
          </div>
          <button
            className="cart-drawer__close-btn"
            onClick={closeCartDrawer}
            aria-label="Close cart drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="cart-drawer__shipping-bar">
          <p className="cart-drawer__shipping-text" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {remainingForFreeShipping > 0 ? (
              <span>Add <strong>{formatPKR(remainingForFreeShipping)}</strong> more for FREE express shipping in Pakistan.</span>
            ) : (
              <span style={{ color: 'var(--color-warm-brown)', fontWeight: 600 }}>
                <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                You've unlocked FREE Insured Express Delivery across Pakistan!
              </span>
            )}
          </p>
          <div className="cart-drawer__progress-track">
            <div
              className={`cart-drawer__progress-fill ${shippingProgress >= 100 ? 'unlocked' : ''}`}
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Drawer Body Items */}
        <div className="cart-drawer__body">
          {cart.length === 0 ? (
            <div className="cart-drawer__empty">
              <ShoppingBag size={48} className="cart-drawer__empty-icon" />
              <h3 className="cart-drawer__empty-title">Your shopping bag is empty</h3>
              <p className="cart-drawer__empty-text">
                Explore our handcrafted rings, necklaces, earrings and bracelets to find your signature piece.
              </p>
              <button
                className="cart-drawer__explore-btn"
                onClick={handleContinueShopping}
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <ul className="cart-drawer__list">
              {cart.map(({ product, quantity }) => (
                <li key={product.id} className="cart-item">
                  <div
                    className="cart-item__img-box"
                    onClick={() => {
                      closeCartDrawer();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    <img src={product.image} alt={product.name} className="cart-item__img" />
                  </div>

                  <div className="cart-item__info">
                    <div className="cart-item__top">
                      <span className="cart-item__category">{product.categoryLabel}</span>
                      <h4
                        className="cart-item__title"
                        onClick={() => {
                          closeCartDrawer();
                          navigate(`/product/${product.id}`);
                        }}
                      >
                        {product.name}
                      </h4>
                    </div>

                    <div className="cart-item__price">{formatPKR(product.price * quantity)}</div>

                    <div className="cart-item__controls">
                      <div className="cart-item__qty-picker">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-val">{quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart-item__remove-btn"
                        onClick={() => removeFromCart(product.id)}
                        aria-label={`Remove ${product.name} from cart`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span className="summary-total">{formatPKR(cartTotal)}</span>
              </div>
              <p className="summary-note">Taxes and shipping calculated at checkout.</p>
            </div>

            <button
              type="button"
              className="cart-drawer__checkout-btn"
              onClick={handleCheckoutClick}
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
