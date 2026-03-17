import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling past the hero section (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isRtl = language === 'ar';

  return (
    <a 
      href="#contact"
      style={{
        position: 'fixed',
        bottom: '30px',
        [isRtl ? 'left' : 'right']: '30px',
        backgroundColor: 'var(--color-gold)',
        color: 'var(--color-white)',
        padding: '1rem 2rem',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        textDecoration: 'none',
        fontWeight: '600',
        boxShadow: 'var(--shadow-lg)',
        zIndex: 999,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#A38042';
        e.currentTarget.style.transform = isVisible ? 'translateY(-5px) scale(1.05)' : '';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-gold)';
        e.currentTarget.style.transform = isVisible ? 'translateY(0) scale(1)' : '';
      }}
    >
      <MessageCircle size={20} />
      <span>{t('floating.cta')}</span>
    </a>
  );
};

export default FloatingCTA;
