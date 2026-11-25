export const fr = {
  // Navbar
  nav: {
    home: 'Accueil',
    menu: 'Notre menu',
    specialties: 'Nos spécialités',
    gallery: 'Galerie',
    contact: 'Contact',
    command: 'Commander maintenant',
    logo: 'GO CHICKEN'
  },

  // Hero
  hero: {
    title: 'GO CHICKEN',
    subtitle: 'GRILLADES & POULET RÔTI',
    tagline: 'Le goût qui donne envie d\'y revenir !',
    btnMenu: 'Découvrir notre menu',
    btnOrder: 'Commander maintenant'
  },

  // Specialties
  specialties: {
    title: 'Nos Spécialités',
    pané: {
      title: 'Poulet pané croustillant',
      desc: 'Un poulet doré et croustillant à l\'intérieur juteux'
    },
    rôti: {
      title: 'Poulet rôti',
      desc: 'Cuisson lente pour une viande tendre et savoureuse'
    },
    brochettes: {
      title: 'Brochettes & grillades',
      desc: 'Des brochettes de légumes et viandes grillées'
    }
  },

  // Menu categories
  menuCategories: {
    pané: 'Poulet pané',
    rôti: 'Poulet rôti',
    brochettes: 'Brochettes',
    grillades: 'Grillades'
  },

  // Order button text
  orderBtn: {
    fr: 'Commander via WhatsApp',
    ar: 'اطلب عبر واتساب'
  },

  // Gallery
  gallery: {
    title: 'Galerie Photo'
  },

  // Location
  location: {
    address: 'Route Gremda, Km 9.5',
    phone: '27 211 145',
    callBtn: 'Appeler',
    whatsappBtn: 'WhatsApp',
    mapsBtn: 'Google Maps'
  },

  // Footer
  footer: {
    title: 'GO CHICKEN',
    slogan: 'GRILLADES & POULET RÔTI',
    address: 'Route Gremda, Km 9.5, Tunisie',
    phone: '+216 27 211 145',
    copyright: '© 2024 GO CHICKEN. Tous droits réservés.'
  },

  // Common
  pricesAsk: 'Prix sur demande'
} as const;

export const ar = {
  dir: 'rtl',

  // Navbar
  nav: {
    home: 'الرئيسية',
    menu: 'قائمتنا',
    specialties: 'أشهارنا',
    gallery: 'المعرض',
    contact: 'اتصل بنا',
    command: 'اطلب الآن',
    logo: 'GO CHICKEN'
  },

  // Hero
  hero: {
    title: 'GO CHICKEN',
    subtitle: 'GRILLADES & POULET RÔTI',
    tagline: 'نكهة لا تقاوم! ',
    btnMenu: 'استكشف قائمتنا',
    btnOrder: 'اطلب الآن'
  },

  // Specialties
  specialties: {
    title: 'أشهارنا المميزة',
    pané: {
      title: 'الدجاج المقلي المقرمش',
      desc: 'دجاج ذهبي مقرمش ومليء بالعصارة'
    },
    rôti: {
      title: 'الدجاج المشوي',
      desc: 'طهي بطيء لحم لذيذ ولين'
    },
    brochettes: {
      title: 'برشاوت وشرائح مشوية',
      desc: 'برشاوت من الخضار واللحوم المشوية'
    }
  },

  // Menu categories
  menuCategories: {
    pané: 'الدجاج المقلي',
    rôti: 'الدجاج المشوي',
    brochettes: 'البرشاوت',
    grillades: 'شرائح مشوية'
  },

  // Order button text
  orderBtn: {
    fr: 'اطلب عبر واتساب',
    ar: 'اطلب عبر واتساب'
  },

  // Gallery
  gallery: {
    title: 'معرض الصور'
  },

  // Location
  location: {
    address: 'طريق ڨرمدة كم 9.5',
    phone: '27 211 145',
    callBtn: 'اتصل',
    whatsappBtn: 'واتساب',
    mapsBtn: 'خرائط جوجل'
  },

  // Footer
  footer: {
    title: 'GO CHICKEN',
    slogan: 'GRILLADES & POULET RÔTI',
    address: 'طريق ڨرمدة، كم 9.5، تونس',
    phone: '+216 27 211 145',
    copyright: '© 2024 GO CHICKEN. جميع الحقوق محفوظة.'
  },

  // Common
  pricesAsk: 'أسعار بناء على الطلب'
} as const;

export type Lang = typeof fr | typeof ar;
