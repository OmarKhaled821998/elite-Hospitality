import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutUs: React.FC = () => {
  const { t, language } = useLanguage();

  // Padding adjustment based on language direction
  const isRtl = language === 'ar';
  
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div 
          className="about-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Text Content */}
          <div className="about-text">
            <h2 style={{ color: 'var(--color-navy)', position: 'relative', paddingBottom: '1rem', marginBottom: '2rem' }}>
              {t('about.title')}
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                [isRtl ? 'right' : 'left']: 0, 
                width: '60px', 
                height: '3px', 
                backgroundColor: 'var(--color-gold)' 
              }}></span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
              {t('about.description')}
            </p>
            
            <div style={{ backgroundColor: 'var(--color-cream)', padding: '2rem', borderRadius: '8px', borderLeft: isRtl ? 'none' : '4px solid var(--color-gold)', borderRight: isRtl ? '4px solid var(--color-gold)' : 'none' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{t('about.model')}</h3>
              <p style={{ margin: 0 }}>{t('about.model_desc')}</p>
            </div>
            
            <div style={{ marginTop: '2.5rem' }}>
              <h4 style={{ color: 'var(--color-navy)', marginBottom: '1rem' }}>{t('about.scope')}</h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                  <span>{t('about.scope.1')}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                  <span>{t('about.scope.2')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision/Mission Cards */}
          <div className="about-cards" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ 
              backgroundColor: 'var(--color-navy)', 
              color: 'var(--color-white)', 
              padding: '2.5rem', 
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <h3 style={{ color: 'var(--color-gold)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('vision.title')}</h3>
              <p style={{ color: 'var(--color-light-gray)', margin: 0, lineHeight: 1.8 }}>{t('vision.desc')}</p>
            </div>
            
            <div className="card" style={{ 
              backgroundColor: 'var(--color-cream)', 
              padding: '2.5rem', 
              borderRadius: '12px',
              border: '1px solid var(--color-light-gray)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 style={{ color: 'var(--color-navy)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('mission.title')}</h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>{t('mission.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
