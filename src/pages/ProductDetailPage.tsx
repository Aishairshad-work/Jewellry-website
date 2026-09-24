import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, ShieldCheck, Truck, MessageCircle, Star, Minus, Plus } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { MobileMenu } from '../components/layout/MobileMenu';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/cart/CartDrawer';
import { WhatsAppButton } from '../components/layout/WhatsAppButton';
import { Breadcrumbs } from '../components/shop/Breadcrumbs';
import { ProductCard } from '../components/shop/ProductCard';
import { PRODUCTS, formatPKR } from '../data/products';
import { useShop } from '../context/ShopContext';
import { DiamondMagnifier } from '../components/common/DiamondMagnifier';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Find target product
  const product = PRODUCTS.find((p) => p.id === productId);

  // Fallback if product not found
  if (!product) {
    return (
      <div className="page-wrapper">
        <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
        <main className="shop-page container">
          <div className="shop-empty" style={{ margin: '6rem auto' }}>
            <h2 className="shop-empty__title">Piece not found</h2>
            <p className="shop-empty__text">The jewellery item you are looking for does not exist or has been archived.</p>
            <button className="shop-empty__btn" onClick={() => navigate('/shop')}>
              Back to Collection
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];

  const isWishlisted = isInWishlist(product.id);

  // Related products in same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const breadcrumbs = [
    { label: 'SHOP', path: '/shop' },
    { label: product.categoryLabel, path: `/shop/${product.category}` },
    { label: product.name }
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const whatsappInquiryUrl = `https://wa.me/923000000000?text=Hello%20Silver%20Haus%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(product.name)}%20(${formatPKR(product.price)}).`;

  return (
    <div className="page-wrapper">
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="pdp">
        <div className="container">
          
          {/* Breadcrumbs */}
          <div className="pdp__breadcrumbs">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Main PDP Grid Layout */}
          <div className="pdp__grid">
            
            {/* Gallery Column */}
            <div className="pdp__gallery">
              <div className="pdp__main-image-wrapper">
                {product.badge && (
                  <span className={`product-card__badge product-card__badge--${product.badgeType || 'new'}`}>
                    {product.badge}
                  </span>
                )}
                <DiamondMagnifier
                  src={images[selectedImageIdx]}
                  alt={product.name}
                  className="pdp__main-image"
                />
              </div>

              {images.length > 1 && (
                <div className="pdp__thumbnails">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`pdp__thumb-btn ${selectedImageIdx === idx ? 'active' : ''}`}
                      onClick={() => setSelectedImageIdx(idx)}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={img} alt="" className="pdp__thumb-img" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info & Purchase Details Column */}
            <div className="pdp__info">
              <span className="pdp__category-eyebrow">{product.categoryLabel.toUpperCase()}</span>
              <h1 className="pdp__title">{product.name}</h1>

              <div className="pdp__rating-row">
                <div className="pdp__stars">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D8C6A0" color="#D8C6A0" />
                  ))}
                </div>
                <span className="pdp__reviews-count">(18 Verified Reviews)</span>
              </div>

              <div className="pdp__price-row">
                <span className="pdp__price">{formatPKR(product.price)}</span>
                {product.originalPrice && (
                  <span className="pdp__original-price">{formatPKR(product.originalPrice)}</span>
                )}
              </div>

              <p className="pdp__description">{product.description}</p>

              {/* Quantity Picker & Add to Cart */}
              <div className="pdp__actions-row">
                <div className="pdp__qty-picker">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-val">{quantity}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  type="button"
                  className="pdp__add-btn"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={17} />
                  <span>ADD TO CART</span>
                </button>

                <button
                  type="button"
                  className={`pdp__wishlist-btn ${isWishlisted ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Toggle Wishlist"
                >
                  <Heart size={18} fill={isWishlisted ? '#7B5D42' : 'none'} color="#7B5D42" />
                </button>
              </div>

              {/* Spec Bullet Points */}
              <div className="pdp__specs">
                <h3 className="pdp__specs-title">Craftsmanship & Specifications</h3>
                <ul className="pdp__specs-list">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Perks / Guarantees */}
              <div className="pdp__perks">
                <div className="pdp__perk-item">
                  <Truck size={18} className="perk-icon" />
                  <div>
                    <strong>Express Delivery Pakistan</strong>
                    <span>Shipped in 2–4 business days with insured courier.</span>
                  </div>
                </div>

                <div className="pdp__perk-item">
                  <ShieldCheck size={18} className="perk-icon" />
                  <div>
                    <strong>AZ JEWELRY Guarantee</strong>
                    <span>Certified lab-grown diamonds with lifetime authenticity.</span>
                  </div>
                </div>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdp__whatsapp-inquiry"
                >
                  <MessageCircle size={17} />
                  <span>Inquire via WhatsApp for custom sizing</span>
                </a>
              </div>

            </div>

          </div>

          {/* Related Products Grid */}
          {relatedProducts.length > 0 && (
            <section className="pdp__related">
              <div className="pdp__related-header">
                <span className="pdp__category-eyebrow">CURATED RECOMMENDATIONS</span>
                <h2 className="pdp__related-title">Complete The Look</h2>
              </div>

              <div className="product-grid shop-grid">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <CartDrawer />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
