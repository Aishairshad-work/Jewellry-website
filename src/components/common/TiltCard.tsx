import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  maxTilt?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onClick,
  maxTilt = 10
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPct = x / rect.width;
    const yPct = y / rect.height;
    
    const rotY = (xPct - 0.5) * (maxTilt * 2);
    const rotX = (yPct - 0.5) * (-maxTilt * 2);

    setSheenPos({ x: xPct * 100, y: yPct * 100 });
    setStyle({
      transform: `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 100ms ease-out'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  return (
    <div
      ref={cardRef}
      className={`az-tilt-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className="az-tilt-sheen"
        style={{
          background: `radial-gradient(circle at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.28) 0%, transparent 60%)`
        }}
      />
      {children}
    </div>
  );
};
