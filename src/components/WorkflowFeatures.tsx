import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle } from 'lucide-react';

const WorkflowFeatures: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    t('features.1'), t('features.2'), t('features.3'), t('features.4')
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)', overflow: 'hidden' }}>
      <div className="container">
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
    </section>
  );
};

export default WorkflowFeatures;
