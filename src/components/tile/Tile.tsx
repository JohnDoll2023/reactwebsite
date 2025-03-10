import React, { useRef, useState } from 'react';
import styles from './Tile.module.css';

interface TileProps {
  children: React.ReactNode;
  mousePos: { x: number; y: number };
}

const Tile: React.FC<TileProps> = ({ children, mousePos }) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const calculateTransform = () => {
    if (!tileRef.current || !isHovered) return {};
    const rect = tileRef.current.getBoundingClientRect();
    const x = mousePos.x - rect.left;
    const y = mousePos.y - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    const rotateX = deltaY * 30;
    const rotateY = -deltaX * 30;
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    };
  };

  return (
    <div
      className={styles.tile}
      ref={tileRef}
      style={calculateTransform()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default Tile;