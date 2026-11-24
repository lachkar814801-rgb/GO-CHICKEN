import { motion } from 'framer-motion'
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
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
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/menu/Brochettes.webp'
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
    </section>
  )
}

export default Menu
