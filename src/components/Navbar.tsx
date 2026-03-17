import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="nav-brand">
          <span style={{ color: 'var(--color-gold)' }}>Elite</span>
          <span>Hospitality</span>
        </a>
        
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">{t('nav.home')}</a></li>
          <li><a href="#about" className="nav-link">{t('nav.about')}</a></li>
          <li><a href="#services" className="nav-link">{t('nav.services')}</a></li>
          <li><a href="#contact" className="nav-link">{t('nav.contact')}</a></li>
        </ul>

        <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
          <Globe size={18} />
          {language === 'en' ? 'العربية' : 'EN'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
