// Menu data - easily updateable from here
export interface MenuItem {
  id: string;
  category: 'pané' | 'rôti' | 'brochettes' | 'grillades';
  titleFr: string;
  titleAr?: string;
  descriptionFr: string;
  descriptionAr?: string;
  price?: string; // Keep as "sur demande" if unknown
  image?: string;
}

export const menuData: MenuItem[] = [
  // Poulet pané items
  {
    id: 'pané-classique',
    category: 'pané',
    titleFr: 'Poulet Pané Classique',
    titleAr: 'دجاج بانيه كلاسيكي',
    descriptionFr: 'Semi-poulet pané croustillant servi avec frites maison et salade',
    descriptionAr: 'نصف دجاج مقلي مقرمش مع بطاطس وسلطة محلية الصنع',
    image: '/images/menu/poulet-pane-classique.webp',
  },
  {
    id: 'pané-famille',
    category: 'pané',
    titleFr: 'Poulet Pané Famille',
    titleAr: 'دجاج بانيه للعائلة',
    descriptionFr: 'Poulet entier pané avec accompagnement généreux',
    descriptionAr: 'دجاج كامل مقلي مع طبق جانبي وفير',
    image: '/images/menu/poulet-pane-famille.webp',
  },

  // Poulet rôti items
  {
    id: 'rôti-classique',
    category: 'rôti',
    titleFr: 'Poulet Rôti Traditionnel',
    titleAr: 'دجاج مشوي تقليدي',
    descriptionFr: 'Poulet rôti au four servi avec légumes de saison',
    descriptionAr: 'دجاج مشوي في الفرن مع الخضار الموسمية',
    image: '/images/menu/poulet-roti-traditionnel.webp',
  },

  // Brochettes items
  {
    id: 'brochette-végétale',
    category: 'brochettes',
    titleFr: 'Brochette Végétale',
    titleAr: 'برشاوت خضروات',
    descriptionFr: 'Assortiment de brochettes de légumes grillés (piments, courgettes, poivrons)',
    descriptionAr: 'مزيج من برشاوت الخضار المشوية (فلفل، قزينة، ببطيخ حلو)',
    image: '/images/menu/brochettes.webp',
  },
  {
    id: 'brochette-mixte',
    category: 'brochettes',
    titleFr: 'Brochette Mixte',
    titleAr: 'برشاوت مختلطة',
    descriptionFr: 'Brochettes mixtes légumes et viandes selon votre choix',
    descriptionAr: 'برشاوت مختلطة من الخضار واللحوم حسب اختيارك',
    image: '/images/menu/brochette-mixte.webp',
  },

  // Grillades items
  {
    id: 'grillade-soleil',
    category: 'grillades',
    titleFr: 'Grillades du Soleil',
    titleAr: 'شرائح الشمس المشوية',
    descriptionFr: 'Variété de grillades selon les disponibilités (brochettes, escalopes)',
    descriptionAr: 'تشكيلة من الشرائح المشوية حسب التوفر (برشاوت، فخذ)',
    image: '/images/menu/grillades-du-soleil.webp',
  },
]

export const categories = [
  { key: 'pané', labelFr: 'Poulet Pané', image: '/images/menu/poulet-pane-classique.webp' },
  { key: 'rôti', labelFr: 'Poulet Rôti', image: '/images/menu/poulet-roti-traditionnel.webp' },
  { key: 'brochettes', labelFr: 'Brochettes', image: '/images/menu/brochettes.webp' },
  { key: 'grillades', labelFr: 'Grillades', image: '/images/menu/grillades-du-soleil.webp' },
]
