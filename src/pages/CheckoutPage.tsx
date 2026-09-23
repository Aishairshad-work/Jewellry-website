import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, Lock, CreditCard, Banknote, Building2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { formatPKR } from '../data/products';
import logo from '../assets/Logo-black.png';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useShop();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Karachi',
    area: '',
    postalCode: '',
    paymentMethod: 'cod',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const shippingFee = cartTotal >= 15000 || cartTotal === 0 ? 0 : 250;
  const grandTotal = cartTotal + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const generatedOrderNo = `SH-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNo);
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="checkout-success-page">
        <div className="checkout-success-card">
          <div className="success-icon__wrapper">
            <CheckCircle2 size={54} color="#7B5D42" />
          </div>

          <span className="success-eyebrow">ORDER CONFIRMED</span>
          <h1 className="success-title">Thank You, {formData.fullName || 'Valued Customer'}!</h1>
          <p className="success-message">
            Your Silver Haus jewellery order <strong>#{orderNumber}</strong> has been successfully placed.
          </p>

          <div className="success-details-box">
            <div className="success-detail-row">
              <span>Order Number:</span>
              <strong>{orderNumber}</strong>
            </div>
            <div className="success-detail-row">
              <span>Payment Method:</span>
              <strong>
                {formData.paymentMethod === 'cod'
                  ? 'Cash on Delivery (COD)'
                  : formData.paymentMethod === 'bank'
                  ? 'Direct Bank Transfer'
                  : 'Credit / Debit Card'}
              </strong>
            </div>
            <div className="success-detail-row">
              <span>Delivery Address:</span>
              <span>{formData.address}, {formData.city}, Pakistan</span>
            </div>
            <div className="success-detail-row">
              <span>Estimated Delivery:</span>
              <strong>2 – 4 Business Days</strong>
            </div>
            <div className="success-detail-row total-row">
              <span>Amount Payable:</span>
              <strong>{formatPKR(grandTotal)}</strong>
            </div>
          </div>

          <p className="success-note">
            A confirmation SMS & email have been dispatched to your contact details. Our team in Saddar, Karachi is dispatching your order.
          </p>

          <button
            type="button"
            className="success-home-btn"
            onClick={() => navigate('/')}
          >
            RETURN TO HOMEPAGE
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="checkout-header container">
          <Link to="/" className="checkout-logo">
            <img src={logo} alt="Silver Haus" className="checkout-logo__img" />
          </Link>
        </div>
        <div className="container" style={{ margin: '5rem auto', textAlign: 'center', maxWidth: 500 }}>
          <h2 className="shop-empty__title">Your bag is empty</h2>
          <p className="shop-empty__text">Add pieces to your bag before proceeding to checkout.</p>
          <button className="shop-empty__btn" onClick={() => navigate('/shop')}>
            Browse Jewellery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      {/* Top Header */}
      <header className="checkout-header container">
        <Link to="/shop" className="checkout-back-link">
          <ArrowLeft size={16} />
          <span>Return to Shop</span>
        </Link>

        <Link to="/" className="checkout-logo">
          <img src={logo} alt="Silver Haus" className="checkout-logo__img" />
        </Link>

        <div className="checkout-security-badge">
          <Lock size={14} />
          <span>256-bit Secure Checkout</span>
        </div>
      </header>

      {/* Main Checkout Split */}
      <main className="checkout-content container">
        <form className="checkout-form" onSubmit={handleOrderSubmit}>
          
          {/* Customer Information */}
          <section className="checkout-section">
            <h2 className="checkout-section__title">1. Customer Details</h2>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Ayesha Khan"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ayesha@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (For Delivery SMS) *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="0300 1234567"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section className="checkout-section">
            <h2 className="checkout-section__title">2. Shipping Address in Pakistan</h2>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="address">Street Address / House No. *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="House / Apartment #, Street Name, Block / Phase"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City *</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="checkout-select"
                >
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Sialkot">Sialkot</option>
                  <option value="Gujranwala">Gujranwala</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="area">Area / Locality *</label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  required
                  placeholder="e.g. Saddar, Clifton, DHA, Gulberg"
                  value={formData.area}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="checkout-section">
            <h2 className="checkout-section__title">3. Payment Option</h2>
            <div className="payment-options">
              
              <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                />
                <Banknote size={20} className="payment-icon" />
                <div className="payment-label-text">
                  <strong>Cash on Delivery (COD)</strong>
                  <span>Pay upon receiving parcel at your doorstep across Pakistan.</span>
                </div>
              </label>

              <label className={`payment-option ${formData.paymentMethod === 'bank' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={handleInputChange}
                />
                <Building2 size={20} className="payment-icon" />
                <div className="payment-label-text">
                  <strong>Direct Bank Transfer (Meezan / HBL / Alfalah)</strong>
                  <span>Transfer directly to Silver Haus account. Account details sent via SMS.</span>
                </div>
              </label>

              <label className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                />
                <CreditCard size={20} className="payment-icon" />
                <div className="payment-label-text">
                  <strong>Credit / Debit Card (Visa, Mastercard, PayPak)</strong>
                  <span>Secure 256-bit encrypted online card checkout.</span>
                </div>
              </label>

            </div>
          </section>

          <button type="submit" className="checkout-submit-btn">
            <span>COMPLETE ORDER ({formatPKR(grandTotal)})</span>
          </button>
        </form>

        {/* Order Summary Column */}
        <aside className="checkout-summary">
          <h2 className="checkout-summary__title">Order Summary ({cart.length})</h2>

          <ul className="checkout-items-list">
            {cart.map(({ product, quantity }) => (
              <li key={product.id} className="checkout-item">
                <img src={product.image} alt={product.name} className="checkout-item__img" />
                <div className="checkout-item__info">
                  <h4 className="checkout-item__name">{product.name}</h4>
                  <span className="checkout-item__qty">Qty: {quantity}</span>
                </div>
                <span className="checkout-item__price">{formatPKR(product.price * quantity)}</span>
              </li>
            ))}
          </ul>

          <div className="checkout-breakdown">
            <div className="breakdown-row">
              <span>Subtotal</span>
              <span>{formatPKR(cartTotal)}</span>
            </div>
            <div className="breakdown-row">
              <span>Express Insured Shipping</span>
              <span>{shippingFee === 0 ? 'FREE' : formatPKR(shippingFee)}</span>
            </div>
            <div className="breakdown-row total">
              <span>Total Payable</span>
              <span className="grand-total">{formatPKR(grandTotal)}</span>
            </div>
          </div>

          <div className="checkout-guarantees">
            <div className="guarantee-item">
              <ShieldCheck size={16} />
              <span>Authentic 925 Silver & 18k Gold Finish</span>
            </div>
            <div className="guarantee-item">
              <Truck size={16} />
              <span>Dispatching from Zaibunnisa St, Saddar, Karachi</span>
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
};
