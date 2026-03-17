import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Key, Paintbrush, Home, Wrench, CheckCircle } from 'lucide-react';
import PhotoGrid from './PhotoGrid';

const rentalImages = [
  '/assets/rental/r01.jpeg',
  '/assets/rental/r02.jpeg',
  '/assets/rental/r03.jpeg',
  '/assets/rental/r04.jpeg',
];

const housekeepingImages = [
  '/assets/Housekeeping/WhatsApp Image 2026-03-17 at 20.01.39.jpeg',
  '/assets/Housekeeping/WhatsApp Image 2026-03-17 at 20.01.39 (1).jpeg',
];

const hospitalityImages = [
  '/assets/hospitality/hos1.jpeg',
  '/assets/hospitality/hos2.jpeg',
  '/assets/hospitality/hos3.jpeg',
  '/assets/hospitality/hos4.jpeg',
];

const maintenanceImages = [
  '/assets/Maintenance/maintenance0.jpeg',
  '/assets/Maintenance/maintenance1.jpeg',
  '/assets/Maintenance/maintenance2.jpeg',
  '/assets/Maintenance/maintenance3.jpeg',
];

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'rental',
      icon: <Key size={32} color="var(--color-gold)" />,
      title: t('services.rental.title'),
      desc: t('services.rental.desc'),
      images: rentalImages,
    },
    {
      id: 'housekeeping',
      icon: <Paintbrush size={32} color="var(--color-gold)" />,
      title: t('services.housekeeping.title'),
      desc: t('services.housekeeping.desc'),
      images: housekeepingImages,
    },
    {
      id: 'preparation',
      icon: <Home size={32} color="var(--color-gold)" />,
      title: t('services.preparation.title'),
      desc: t('services.preparation.desc'),
      images: hospitalityImages,
    },
    {
      id: 'maintenance',
      icon: <Wrench size={32} color="var(--color-gold)" />,
      title: t('services.maintenance.title'),
      desc: t('services.maintenance.desc'),
      images: maintenanceImages,
    }
  ];

  const features = [
    t('features.1'), t('features.2'), t('features.3'), t('features.4')
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-cream)', overflow: 'hidden' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ color: 'var(--color-navy)', fontSize: '2.5rem', marginBottom: '1rem' }}>{t('services.title')}</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-gold)', margin: '0 auto' }}></div>
        </div>

        {/* Enhanced Services Display */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', marginBottom: '8rem' }}>
          {services.map((srv, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={srv.id}
                className="service-block"
                style={{
                  display: 'flex',
                  flexDirection: isReversed ? 'row-reverse' : 'row',
                  alignItems: 'center',
                  gap: '4rem',
                  flexWrap: 'wrap'
                }}
              >
                {/* Text Content Area */}
                <div style={{ flex: '1 1 40%', minWidth: '300px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 160, 89, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {srv.icon}
                  </div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-gray)' }}>
                    {srv.desc}
                  </p>
                </div>

                {/* Grid Area */}
                <div style={{ flex: '1 1 50%', minWidth: '320px', width: '100%' }}>
                  <PhotoGrid images={srv.images} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow & Features section */}
        <div className="workflow-features-container">
          <div className="workflow-content">
            <h3 style={{ color: 'var(--color-gold)', marginBottom: '2rem', fontSize: '2rem' }}>
              {t('workflow.title')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {t('workflow.desc').split(/(?:\s*[→←]\s*)/).map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)',
                    fontWeight: 'bold', fontSize: '0.9rem', flexShrink: 0
                  }}>
                    {idx + 1}
                  </div>
                  <span style={{ color: 'var(--color-light-gray)', lineHeight: 1.5, fontSize: '1.1rem' }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ color: 'var(--color-gold)', marginBottom: '2rem', fontSize: '2rem' }}>
              {t('features.title')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <CheckCircle size={24} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--color-light-gray)' }}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Fallback styling for mobile screens (to handle row-reverse turning into stacked correctly) */}
      <style>{`
        @media (max-width: 900px) {
          .service-block {
            flex-direction: column !important;
            text-align: center;
            gap: 2rem !important; /* Reduce gap on mobile */
          }
          .service-block > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 0 !important;
            width: 100% !important;
          }
          
          /* Handle grid area scaling on mobile */
          .service-block > div:last-child {
            width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
