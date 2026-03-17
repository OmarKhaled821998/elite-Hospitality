import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(27, 42, 71, 0.8), rgba(27, 42, 71, 0.9)), url('/images/home/hero-bg.jpg') center/cover`,
        color: 'var(--color-white)',
        textAlign: 'center',
        padding: '0 2rem'
      }}
    >
      <div className="hero-content" style={{ maxWidth: '800px', animation: 'fadeInUp 1s ease' }}>
        <h1 style={{ marginBottom: '1.5rem', color: 'var(--color-gold)' }}>
          Elite Hospitality
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--color-cream)' }}>
          {t('hero.tagline')}
        </p>
        <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
          {t('hero.cta')}
        </a>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
