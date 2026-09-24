import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/Logo-transparent.png';

export const PageTransition: React.FC = () => {
  const { pathname } = useLocation();
  const [animating, setAnimating] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!animating) return null;

  return (
    <div className="az-page-curtain" aria-hidden="true">
      <div className="az-page-curtain__content">
        <img src={logo} alt="AZ JEWELRY" className="az-page-curtain__logo" />
        <span className="az-page-curtain__sparkle">✦ LAB GROWN DIAMONDS ✦</span>
      </div>
    </div>
  );
};
