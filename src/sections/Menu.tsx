import { motion } from 'framer-motion'
<<<<<<< HEAD
import { Minus, Plus, ShoppingBag } from 'lucide-react'
import { menuData, categories, formatPrice } from '../data/menuData'
import { useCart } from '../context/CartContext'

const Menu = () => {
  const { qtyOf, setQty } = useCart()

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
=======
import { Phone } from 'lucide-react'
import { menuData } from '../data/menuData'

const Menu = () => {
  const categories = [
    { key: 'pané', label: 'Poulet Pané', color: 'from-yellow-400 to-orange-500' },
    { key: 'rôti', label: 'Poulet Rôti', color: 'from-red-500 to-orange-600' },
    { key: 'brochettes', label: 'Brochettes', color: 'from-green-400 to-emerald-600' },
    { key: 'grillades', label: 'Grillades', color: 'from-purple-400 to-pink-600' },
  ] as const;

  return (
    <section>
      {/* Header */}
>>>>>>> ce6144df89c9115f1d10b4029d0ed9b61b96887b
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
<<<<<<< HEAD
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Notre Menu</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full" />
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Choisissez vos plats et la quantité, puis envoyez votre commande directement sur WhatsApp.
          Chaque plat est servi avec un accompagnement au choix : salade grillée, harissa arabi, riz ou frites.
        </p>
      </motion.div>

      <div className="space-y-12">
        {categories.map((cat, index) => (
          <div key={cat.key}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                <span className="font-bold text-background">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{cat.labelFr}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuData
                .filter(item => item.category === cat.key)
                .map(item => {
                  const qty = qtyOf(item.id)
                  return (
                    <div
                      key={item.id}
                      className="bg-surface/50 rounded-xl p-4 border border-white/5 hover:border-yellow-400/30 transition-colors flex flex-col overflow-hidden group/item"
                    >
                      <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.titleFr}
                          className="w-full h-full object-cover transform group-hover/item:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="font-bold text-white leading-tight">{item.titleFr}</h4>
                      <p dir="rtl" className="text-sm text-gray-400 mt-1">{item.titleAr}</p>
                      {item.note && <p className="text-xs text-gray-500 mt-1">{item.note}</p>}

                      <p className="text-yellow-400 font-bold text-lg mt-3 mb-4">
                        {item.price !== undefined ? formatPrice(item.price) : 'Prix sur demande'}
                      </p>

                      <div className="mt-auto">
                        {qty === 0 ? (
                          <button
                            onClick={() => setQty(item.id, 1)}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-background font-bold py-2.5 rounded-full hover:shadow-lg hover:shadow-yellow-400/25 transition-all"
                          >
                            <ShoppingBag size={16} />
                            Commander
                          </button>
                        ) : (
                          <div className="flex items-center justify-between bg-background/60 rounded-full p-1">
                            <button onClick={() => setQty(item.id, qty - 1)} className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center" aria-label="Moins">
                              <Minus size={16} />
                            </button>
                            <span className="text-white font-bold text-lg">{qty}</span>
                            <button onClick={() => setQty(item.id, qty + 1)} className="w-10 h-10 rounded-full bg-yellow-400 text-background flex items-center justify-center" aria-label="Plus">
                              <Plus size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        ))}
      </div>
=======
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Notre Menu
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full" />
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Nos plats sont préparés avec amour et des ingrédients de qualité. Contactez-nous pour connaître nos prix actuels.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="space-y-8">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                <span className="font-bold text-background">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">{cat.label}</h3>
            </div>

            {/* Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuData
                .filter(item => item.category === cat.key)
                .map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-surface/50 rounded-xl p-4 border border-white/5 hover:border-yellow-400/30 transition-colors group/item overflow-hidden"
                >
                  {item.image && (
                    <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.titleFr}
                        className="w-full h-full object-cover transform group-hover/item:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/menu/brochettes.webp'
                        }}
                      />
                    </div>
                  )}
                  <h4 className="font-bold text-white mb-2 group-hover/item:text-yellow-400 transition-colors">
                    {item.titleFr}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {item.descriptionFr}
                  </p>
                  {item.price && (
                    <p className="text-yellow-400 font-medium">{item.price}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Order CTA per category */}
            <div className="flex justify-center mt-6">
              <a
                href={`https://wa.me/21627211145?text=Bonjour, je suis intéressé par ${cat.label}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4"
              >
                <Phone size={14} />
                Commander ce plat
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="https://wa.me/21627211145"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-background font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1 transition-all"
        >
          <Phone size={20} />
          Commander sur WhatsApp
        </a>
      </motion.div>
>>>>>>> ce6144df89c9115f1d10b4029d0ed9b61b96887b
    </section>
  )
}

export default Menu
