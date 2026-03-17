import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! Note: Backend integration required.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--color-navy)' }}>{t('contact.title')}</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '1rem auto 0' }}></div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem'
        }}>
          {/* Contact Details */}
          <div style={{ padding: '2rem', backgroundColor: 'var(--color-cream)', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--color-navy)' }}>{t('contact.info')}</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} color="var(--color-gold)" />
                </div>
                <div>
                  <a href="tel:+201023292001" style={{ margin: 0, fontWeight: 600, color: 'var(--color-dark)', textDecoration: 'none' }}>
                    {t('contact.person1')}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} color="var(--color-gold)" />
                </div>
                <div>
                  <a href="tel:+201144440304" style={{ margin: 0, fontWeight: 600, color: 'var(--color-dark)', textDecoration: 'none' }}>
                    {t('contact.person2')}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={24} color="var(--color-gold)" />
                </div>
                <div>
                  <a href="mailto:info@elite-hospitality.eg" style={{ margin: 0, fontWeight: 600, color: 'var(--color-dark)', textDecoration: 'none' }}>
                    info@elite-hospitality.eg
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={24} color="var(--color-gold)" />
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-dark)' }}>Privado Compound - Madinaty, Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.name')} 
                required
                style={{ padding: '1rem', border: '1px solid var(--color-light-gray)', borderRadius: '4px', fontFamily: 'inherit', fontSize: '1rem' }}
              />
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.form.phone')} 
                required
                style={{ padding: '1rem', border: '1px solid var(--color-light-gray)', borderRadius: '4px', fontFamily: 'inherit', fontSize: '1rem' }}
              />
            </div>
            
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.form.email')} 
              required
              style={{ padding: '1rem', border: '1px solid var(--color-light-gray)', borderRadius: '4px', fontFamily: 'inherit', fontSize: '1rem' }}
            />
            
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.form.message')} 
              required
              rows={5}
              style={{ padding: '1rem', border: '1px solid var(--color-light-gray)', borderRadius: '4px', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical' }}
            ></textarea>
            
            <button type="submit" className="btn btn-primary" style={{ alignSelf: isRtl ? 'flex-end' : 'flex-start', padding: '1rem 3rem' }}>
              {t('contact.form.submit')}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
