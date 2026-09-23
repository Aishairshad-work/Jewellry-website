import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  isFilterOpen: boolean;
  searchQuery: string;
  sortOption: string;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  toggleCartDrawer: () => void;
  openFilterDrawer: () => void;
  closeFilterDrawer: () => void;
  setSearchQuery: (query: string) => void;
  setSortOption: (option: string) => void;
  cartCount: number;
  cartTotal: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const LOCAL_CART_KEY = 'silver_haus_cart_v1';
const LOCAL_WISHLIST_KEY = 'silver_haus_wishlist_v1';

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state with localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state with localStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_WISHLIST_KEY);
      return saved ? JSON.parse(saved) : ['ring-001', 'earring-002'];
    } catch {
      return ['ring-001', 'earring-002'];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Save wishlist changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_WISHLIST_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  // Add to cart & auto open drawer
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const openCartDrawer = () => setIsCartOpen(true);
  const closeCartDrawer = () => setIsCartOpen(false);
  const toggleCartDrawer = () => setIsCartOpen((prev) => !prev);

  const openFilterDrawer = () => setIsFilterOpen(true);
  const closeFilterDrawer = () => setIsFilterOpen(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        isFilterOpen,
        searchQuery,
        sortOption,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        openCartDrawer,
        closeCartDrawer,
        toggleCartDrawer,
        openFilterDrawer,
        closeFilterDrawer,
        setSearchQuery,
        setSortOption,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
