import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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

        <div className="contact-grid">
          {/* Contact Details */}
          <div style={{ padding: '2rem', backgroundColor: 'var(--color-cream)', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--color-navy)' }}>{t('contact.info')}</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light-gray)', paddingBottom: '1rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-dark)', fontSize: '1.1rem' }}>
                  {t('contact.person1')}
                </span>
                <motion.a 
                  href="tel:+201023292001" 
                  whileHover={{ scale: 1.1, y: -3, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--color-navy)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer'
                  }}
                >
                  <Phone size={22} color="var(--color-gold)" />
                </motion.a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light-gray)', paddingBottom: '1rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-dark)', fontSize: '1.1rem' }}>
                  {t('contact.person2')}
                </span>
                <motion.a 
                  href="tel:+201144440304" 
                  whileHover={{ scale: 1.1, y: -3, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--color-navy)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer'
                  }}
                >
                  <Phone size={22} color="var(--color-gold)" />
                </motion.a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-light-gray)', paddingBottom: '1rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-dark)', fontSize: '1.1rem' }}>
                  {t('contact.email')}
                </span>
                <motion.a 
                  href="mailto:info@elite-hospitality.eg" 
                  whileHover={{ scale: 1.1, y: -3, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--color-navy)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer'
                  }}
                >
                  <Mail size={22} color="var(--color-gold)" />
                </motion.a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-dark)', fontSize: '1.1rem', maxWidth: '70%' }}>
                  {t('contact.location')}
                </span>
                <motion.a 
                  href="https://maps.google.com/?q=Privado+Compound+Madinaty+Egypt" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--color-navy)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer'
                  }}
                >
                  <MapPin size={22} color="var(--color-gold)" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div className="contact-inputs">
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
