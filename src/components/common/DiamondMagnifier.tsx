import React, { useState, useRef } from 'react';

interface DiamondMagnifierProps {
  src: string;
  alt: string;
  className?: string;
  zoomLevel?: number;
}

export const DiamondMagnifier: React.FC<DiamondMagnifierProps> = ({
  src,
  alt,
  className = '',
  zoomLevel = 2.2
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Check bounds
    if (x < 0 || y < 0 || x > width || y > height) {
      setShowMagnifier(false);
      return;
    }

    setPos({ x, y });
    setShowMagnifier(true);
  };

  return (
    <div
      className={`az-magnifier-container ${className}`}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowMagnifier(false)}
      style={{ position: 'relative', display: 'block', cursor: 'zoom-in', overflow: 'hidden' }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="az-magnifier-img"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {showMagnifier && imgRef.current && (
        <div
          className="az-magnifier-lens"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            height: '170px',
            width: '170px',
            top: `${pos.y - 85}px`,
            left: `${pos.x - 85}px`,
            borderRadius: '50%',
            border: '2px solid rgba(216, 198, 160, 0.85)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35), inset 0 0 15px rgba(255, 255, 255, 0.4)',
            backgroundImage: `url('${src}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${imgRef.current.width * zoomLevel}px ${imgRef.current.height * zoomLevel}px`,
            backgroundPositionX: `${-pos.x * zoomLevel + 85}px`,
            backgroundPositionY: `${-pos.y * zoomLevel + 85}px`,
            zIndex: 10
          }}
        >
          <span
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: '#ffffff',
              background: 'rgba(31, 27, 24, 0.85)',
              padding: '2px 8px',
              borderRadius: '10px',
              backdropFilter: 'blur(4px)',
              whiteSpace: 'nowrap'
            }}
          >
            ✦ DIAMOND CLARITY 2.2X
          </span>
        </div>
      )}
    </div>
  );
};
