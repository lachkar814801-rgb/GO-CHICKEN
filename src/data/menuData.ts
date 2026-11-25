// Données du menu — modifiez ici les plats, prix (en millimes) et images.
// Prix en millimes : 3000 = 3,000 DT. Sans `price` => "Prix sur demande".
export type CategoryKey = 'rôti' | 'pané' | 'brochettes' | 'grillades'

export interface MenuItem {
  id: string
  category: CategoryKey
  titleFr: string
  titleAr: string
  price?: number
  note?: string // ex : "10 pièces"
  image: string
}

export interface Side {
  id: string
  labelFr: string
  labelAr: string
}

const IMG = {
  roti: '/images/menu/poulet-roti-traditionnel.webp',
  pane: '/images/menu/poulet-pane-classique.webp',
  panePlat: '/images/menu/poulet-pane-famille.webp',
  brochettes: '/images/menu/brochettes.webp',
  mixte: '/images/menu/brochette-mixte.webp',
  grill: '/images/menu/grillades-du-soleil.webp',
}

export const menuData: MenuItem[] = [
  // Rôti
  { id: 'poulet-roti', category: 'rôti', titleFr: 'Poulet rôti', titleAr: 'دجاج روتي', price: 14000, image: IMG.roti },

  // Pané & frit
  { id: 'escalope-panee', category: 'pané', titleFr: 'Escalope panée', titleAr: 'سكالوب باني', price: 3000, image: IMG.pane },
  { id: 'chicken-crispy', category: 'pané', titleFr: 'Chicken crispy', titleAr: 'كرنشي', price: 3000, image: IMG.panePlat },
  { id: 'cordon-bleu', category: 'pané', titleFr: 'Cordon bleu', titleAr: 'كوردون بلو', price: 3000, image: IMG.pane },
  { id: 'brochettes-fromage', category: 'pané', titleFr: 'Brochettes fromage', titleAr: 'بروشات فرماج', price: 3000, image: IMG.panePlat },
  { id: 'kaabbar-fromage', category: 'pané', titleFr: 'Kaabbar fromage', titleAr: 'كعابر فرماج', price: 2500, image: IMG.panePlat },
  { id: 'calamars-frits', category: 'pané', titleFr: 'Calamars frits', titleAr: 'قلادية', price: 12000, image: IMG.pane },

  // Brochettes
  { id: 'chich-taouk', category: 'brochettes', titleFr: 'Chich taouk', titleAr: 'شيش طاووق', price: 3000, image: IMG.mixte },
  { id: 'brochette-petite', category: 'brochettes', titleFr: 'Brochette poulet (petite)', titleAr: 'سفود صغير مشوي', price: 3000, image: IMG.brochettes },
  { id: 'brochette-grande', category: 'brochettes', titleFr: 'Brochette poulet (grande)', titleAr: 'سفود كبير مشوي', price: 6000, image: IMG.brochettes },

  // Grillades
  { id: 'poulet-grille', category: 'grillades', titleFr: 'Poulet grillé', titleAr: 'دجاج مشوي', price: 10000, image: IMG.roti },
  { id: 'ailes-grillees', category: 'grillades', titleFr: 'Ailes de poulet grillées', titleAr: 'جوانح مشوية', price: 4000, note: '10 pièces', image: IMG.grill },
  { id: 'gesiers-grilles', category: 'grillades', titleFr: 'Gésiers grillés', titleAr: 'كوبس مشوي', price: 4000, image: IMG.grill },
  { id: 'kefta-slice', category: 'grillades', titleFr: 'Kefta slice grillée', titleAr: 'كفتة ساليس مشوية', price: 3000, image: IMG.grill },
  { id: 'kefta-classique', category: 'grillades', titleFr: 'Kefta classique', titleAr: 'كفتة عادية', price: 3000, image: IMG.grill },
  { id: 'kebab', category: 'grillades', titleFr: 'Kebab', titleAr: 'كباب', price: 3000, image: IMG.grill },
  { id: 'caille-grillee', category: 'grillades', titleFr: 'Caille grillée', titleAr: 'سمان', image: IMG.grill },
]

export const sides: Side[] = [
  { id: 'salade-grillee', labelFr: 'Salade grillée', labelAr: 'سلطة مشوية' },
  { id: 'harissa-arabi', labelFr: 'Harissa arabi', labelAr: 'هريسة عربي' },
  { id: 'riz', labelFr: 'Riz', labelAr: 'رز' },
  { id: 'frites', labelFr: 'Frites', labelAr: 'بطاطا فريت' },
]

export const categories: { key: CategoryKey; labelFr: string; color: string }[] = [
  { key: 'rôti', labelFr: 'Poulet Rôti', color: 'from-red-500 to-orange-600' },
  { key: 'pané', labelFr: 'Pané & Frit', color: 'from-yellow-400 to-orange-500' },
  { key: 'brochettes', labelFr: 'Brochettes', color: 'from-green-400 to-emerald-600' },
  { key: 'grillades', labelFr: 'Grillades', color: 'from-purple-400 to-pink-600' },
]

export const WHATSAPP_NUMBER = '21627211145'

export const formatPrice = (millimes: number) =>
  `${(millimes / 1000).toFixed(3).replace('.', ',')} DT`
