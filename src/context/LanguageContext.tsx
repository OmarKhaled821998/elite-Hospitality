/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define language types
export type Language = 'en' | 'ar';

// Define the context shape
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.tagline': 'Premium Serviced Apartments Management in Egypt',
    'hero.cta': 'Get Your Property Managed',
    
    // About
    'about.title': 'About Elite Hospitality',
    'about.description': 'Elite Facility and Hospitality Company specializes in managing and operating serviced apartments with high professional standards. We offer integrated solutions including short and long-term rental management, hotel housekeeping, operational maintenance, and preparing residential units for hospitality operations.',
    'about.model': 'Integrated Hospitality Management Model',
    'about.model_desc': 'We manage the entire lifecycle of the unit, from preparation and furnishing to daily operations, guest reception, and managing the stay experience.',
    'about.scope': 'Main Operational Scope:',
    'about.scope.1': 'Operating and managing units within Privado Compound - Madinaty',
    'about.scope.2': 'Professional cleaning and maintenance services in Madinaty and surrounding areas',
    
    // Vision & Mission
    'vision.title': 'Vision',
    'vision.desc': 'To be a leading company in Egypt in serviced apartments management, providing a hotel stay experience within residential communities while maximizing ROI for owners.',
    'mission.title': 'Mission',
    'mission.desc': 'Transforming residential apartments into professionally managed hotel units, providing comfortable and distinct stays for guests and highest returns for owners through professional rental management, hotel cleaning and maintenance, modern preparation, and an efficient operational system.',
    
    // Services
    'services.title': 'Core Services',
    'services.rental.title': '1. Rental Management',
    'services.rental.desc': 'Hotel rental management (short/long-term): booking platforms integration, occupancy rate management, dynamic pricing, check-in/out procedures, guest experience management.',
    'services.housekeeping.title': '2. Housekeeping Operations',
    'services.housekeeping.desc': 'Hotel-standard cleaning services: scheduled cleaning cycles, deep cleaning, linens and supplies management, quality inspection, task scheduling system.',
    'services.preparation.title': '3. Unit Preparation & Furnishing',
    'services.preparation.desc': 'Full unit preparation: interior finishing, high-quality hotel furniture, home appliances installation, space preparation for short-term rental.',
    'services.maintenance.title': '4. Maintenance & Tech Support',
    'services.maintenance.desc': 'Preventive maintenance scheduling, 24/7 emergency response, facility monitoring, asset condition tracking.',
    
    // Features & Workflow
    'features.title': 'Competitive Advantages',
    'features.1': 'End-to-end integrated hospitality management',
    'features.2': 'Operations within luxury residential compounds',
    'features.3': 'Cleaning team trained to global hotel standards',
    'features.4': 'Unified operational system linking bookings, cleaning, and maintenance',
    'workflow.title': 'Technical Workflow',
    'workflow.desc': 'Lead Generation → Booking Management System → Unit Allocation → Cleaning Scheduling → Guest Support → Check-out & Unit Re-preparation.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info': 'Contact Information:',
    'contact.person1': 'Ahmed Abdel Azim: +2 01023292001',
    'contact.person2': 'Abdelrahman Eliwa: +20 114 444 0304',
    
    // Floating CTA
    'floating.cta': 'Book Consultation'
  },
  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.tagline': 'إدارة احترافية للشقق الفندقية في مصر',
    'hero.cta': 'احجز استشارة الآن',
    
    // About
    'about.title': 'عن إيليت للضيافة',
    'about.description': 'إيليت للضيافة هي شركة متخصصة في إدارة وتشغيل الشقق الفندقية (Serviced Apartments) بمعايير احترافية عالية. نقدم حلولاً متكاملة تشمل إدارة الإيجارات قصيرة وطويلة الأجل، خدمات التنظيف الفندقي (Housekeeping)، الصيانة التشغيلية، وتجهيز الوحدات السكنية للتشغيل الفندقي.',
    'about.model': 'Integrated Hospitality Management Model',
    'about.model_desc': 'نعتمد هذا النموذج حيث ندير دورة حياة الوحدة بالكامل من التجهيز والتأثيث مروراً بالتشغيل اليومي واستقبال النزلاء وإدارة تجربة الإقامة.',
    'about.scope': 'نطاق التشغيل الرئيسي:',
    'about.scope.1': 'تشغيل وإدارة وحدات داخل كمبوند بريفادو - مدينتي',
    'about.scope.2': 'خدمات تنظيف احترافي وصيانة داخل مدينتي والمناطق المجاورة',
    
    // Vision & Mission
    'vision.title': 'الرؤية',
    'vision.desc': 'أن نكون من الشركات الرائدة في مصر في إدارة الشقق الفندقية، وتقديم تجربة إقامة فندقية داخل المجتمعات السكنية مع تعظيم العائد الاستثماري للملاك.',
    'mission.title': 'الرسالة',
    'mission.desc': 'تحويل الشقق السكنية إلى وحدات فندقية مُدارة باحترافية، مع تقديم إقامة مريحة ومتميزة للنزلاء وأعلى عائد للملاك من خلال إدارة إيجارات احترافية، خدمات تنظيف وصيانة فندقية، تجهيز حديث، ونظام تشغيلي فعال.',
    
    // Services
    'services.title': 'الخدمات الأساسية',
    'services.rental.title': '1. إدارة الإيجارات',
    'services.rental.desc': 'إدارة الإيجار الفندقي (قصير/طويل الأجل): تكامل منصات الحجز، إدارة نسب الإشغال، التسعير الديناميكي، إجراءات الوصول/المغادرة، إدارة تجربة النزيل.',
    'services.housekeeping.title': '2. عمليات الهاوسكيبينج',
    'services.housekeeping.desc': 'خدمات تنظيف بمعايير فندقية: دورات تنظيف مجدولة، تنظيف عميق، إدارة البياضات والمستلزمات، فحص الجودة، نظام جدولة المهام.',
    'services.preparation.title': '3. تجهيز وتأثيث الوحدات',
    'services.preparation.desc': 'تجهيز كامل للوحدات: تشطيبات داخلية، أثاث فندقي عالي الجودة، تركيب أجهزة كهربائية، تهيئة المساحات للإيجار قصير الأجل.',
    'services.maintenance.title': '4. الصيانة والدعم الفني',
    'services.maintenance.desc': 'جدولة الصيانة الوقائية، الاستجابة الطارئة 24/7، مراقبة المنشآت، تتبع حالة الأصول.',
    
    // Features & Workflow
    'features.title': 'المميزات التنافسية',
    'features.1': 'إدارة ضيافة متكاملة من البداية إلى النهاية',
    'features.2': 'تشغيل داخل الكمبوندات السكنية الفاخرة',
    'features.3': 'فريق تنظيف مدرب بمعايير فندقية عالمية',
    'features.4': 'نظام تشغيلي موحد يربط الحجوزات والتنظيف والصيانة',
    'workflow.title': 'سير العمل التقني',
    'workflow.desc': 'توليد العملاء المحتملين ← نظام إدارة الحجوزات ← تخصيص الوحدة ← جدولة التنظيف ← دعم النزلاء ← عملية المغادرة وإعادة تهيئة الوحدة.',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info': 'معلومات الاتصال:',
    'contact.person1': 'أحمد عبد العظيم: +2 01023292001',
    'contact.person2': 'عبد الرحمن عليوة: +20 114 444 0304',
    
    // Floating CTA
    'floating.cta': 'احجز استشارتك'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check local storage for saved language, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('elite_language');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  // Toggle language and save to local storage
  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('elite_language', newLang);
      return newLang;
    });
  };

  // Switch document direction based on language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Optionally add a class to the body for font-family targeting
    if (language === 'ar') {
      document.body.classList.add('lang-ar');
      document.body.classList.remove('lang-en');
    } else {
      document.body.classList.add('lang-en');
      document.body.classList.remove('lang-ar');
    }
  }, [language]);

  // Translation helper function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
