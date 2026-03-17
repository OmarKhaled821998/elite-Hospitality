import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoGridProps {
  images: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play feature for the showcase
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      
      {/* Main Cinematic Hero Image */}
      <div style={{
        width: '100%',
        height: '450px',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: 'var(--shadow-lg)',
        backgroundColor: 'var(--color-navy)',
      }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`Showcase Image ${activeIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              inset: 0,
            }}
          />
        </AnimatePresence>
        
        {/* Luxury gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Thumbnails Strip */}
      {images.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For IE
          width: '100%',
        }}>
          {/* Hide webkit scrollbar */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={`thumb-${index}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -4 }}
                style={{
                  minWidth: '100px',
                  width: '100px',
                  height: '70px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  border: isActive ? '2px solid var(--color-gold)' : '2px solid transparent',
                  opacity: isActive ? 1 : 0.6,
                  transition: 'opacity 0.3s ease, border-color 0.3s ease',
                  flexShrink: 0,
                }}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${index + 1}`} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {!isActive && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s ease',
                  }} />
                )}
              </motion.div>
            );
          })}
        </div>
      )}
      
    </div>
  );
};

export default PhotoGrid;
