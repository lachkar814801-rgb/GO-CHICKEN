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
    titleAr: 'دجاج pane كلاسيكي',
    descriptionFr: 'Semi-poulet pané croustillant servi avec frites maison et salade',
    descriptionAr: 'نصف دجاج مقلى مقرمش مع بطاطس وسalat محلية الصنع',
    image: '/menu/Poulet Pané Classique.webp',
  },
  {
    id: 'pané-famille',
    category: 'pané',
    titleFr: 'Poulet Pané Famille',
    titleAr: 'دجاج pane للعائلة',
    descriptionFr: 'Poulet entier pané avec accompagnement généreux',
    descriptionAr: 'دجاج كامل مقلى مع طبق جانبي وفير',
    image: '/menu/Poulet Pané Famille.webp',
  },

  // Poulet rôti items
  {
    id: 'rôti-classique',
    category: 'rôti',
    titleFr: 'Poulet Rôti Traditionnel',
    titleAr: 'دجاج مشوي تقليدي',
    descriptionFr: 'Poulet rôti au four servi avec légumes de saison',
    descriptionAr: 'دجاج مشوي في الفرن مع الخضار الموسمية',
    image: '/menu/Poulet Rôti Traditionnel.webp',
  },

  // Brochettes items
  {
    id: 'brochette-végétale',
    category: 'brochettes',
    titleFr: 'Brochette Végétale',
    titleAr: 'برشاوت خضروات',
    descriptionFr: 'Assortiment de brochettes de légumes grillés (piments, courgettes, poivrons)',
    descriptionAr: 'مزيج من برشاوت الخضار المشوية (فلفل، قزينة، ببطيخ حلو)',
    image: '/images/menu/Brochettes.webp',
  },
  {
    id: 'brochette-mixte',
    category: 'brochettes',
    titleFr: 'Brochette Mixte',
    titleAr: 'برشاوت مختلطة',
    descriptionFr: 'Brochettes mixtes légumes et viandes selon votre choix',
    descriptionAr: 'برشاوت مختلطة من الخضار واللحوم حسب اختيارك',
    image: '/menu/Brochettes.webp',  // Même image que les autres brochettes
  },

  // Grillades items
  {
    id: 'grillade-soleil',
    category: 'grillades',
    titleFr: 'Grillades du Soleil',
    titleAr: 'شرائح الشمس المشوية',
    descriptionFr: 'Variété de grillades selon les disponibilités (brochettes, escalopes)',
    descriptionAr: 'تشكيلة من الشرائح المشوية حسب التوفر (برشاوت، فخذ)',
    image: '/menu/Grillades du Soleil.webp',
  },
]

export const categories = [
  { key: 'pané', labelFr: 'Poulet Pané', image: '/menu/Poulet Pané Classique.webp' },
  { key: 'rôti', labelFr: 'Poulet Rôti', image: '/menu/Poulet Rôti Traditionnel.webp' },
  { key: 'brochettes', labelFr: 'Brochettes', image: '/menu/Brochettes.webp' },
  { key: 'grillades', labelFr: 'Grillades', image: '/menu/Grillades du Soleil.webp' },
]
