import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: 'var(--color-dark)', 
      color: 'var(--color-white)', 
      padding: '4rem 0 2rem 0',
      borderTop: '5px solid var(--color-gold)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h2 style={{ color: 'var(--color-gold)', margin: 0, fontSize: '1.8rem' }}>Elite</h2>
            <p style={{ margin: 0, color: 'var(--color-light-gray)' }}>Hospitality Management</p>
          </div>
          
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            display: 'flex', 
            gap: '1.5rem',
            margin: 0
          }}>
            <li><a href="#home" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold)'} onMouseOut={e=>e.currentTarget.style.color='var(--color-light-gray)'}>{t('nav.home')}</a></li>
            <li><a href="#about" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold)'} onMouseOut={e=>e.currentTarget.style.color='var(--color-light-gray)'}>{t('nav.about')}</a></li>
            <li><a href="#services" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold)'} onMouseOut={e=>e.currentTarget.style.color='var(--color-light-gray)'}>{t('nav.services')}</a></li>
            <li><a href="#contact" style={{ color: 'var(--color-light-gray)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold)'} onMouseOut={e=>e.currentTarget.style.color='var(--color-light-gray)'}>{t('nav.contact')}</a></li>
          </ul>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'var(--color-gray)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            &copy; {currentYear} Elite Facility and Hospitality Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
