import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" className="nav-brand" onClick={closeMenu}>
            <span style={{ color: 'var(--color-gold)' }}>Elite</span>
            <span>Hospitality</span>
          </a>
          
          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
              <Globe size={18} />
              <span className="ltr-only">{language === 'en' ? 'العربية' : 'EN'}</span>
              <span className="rtl-only">{language === 'ar' ? 'EN' : 'العربية'}</span>
            </button>
            <button 
              className="menu-toggle" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close" onClick={closeMenu} aria-label="Close menu">
          <X size={32} />
        </button>
        <ul className="overlay-nav-links">
          <li><a href="#home" className="overlay-nav-link" onClick={closeMenu}>{t('nav.home')}</a></li>
          <li><a href="#about" className="overlay-nav-link" onClick={closeMenu}>{t('nav.about')}</a></li>
          <li><a href="#services" className="overlay-nav-link" onClick={closeMenu}>{t('nav.services')}</a></li>
          <li><a href="#contact" className="overlay-nav-link" onClick={closeMenu}>{t('nav.contact')}</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
