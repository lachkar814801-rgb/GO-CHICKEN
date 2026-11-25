import { motion } from 'framer-motion'
import { Minus, Plus, ShoppingBag } from 'lucide-react'
import { menuData, categories, formatPrice } from '../data/menuData'
import { useCart } from '../context/CartContext'

const Menu = () => {
  const { qtyOf, setQty } = useCart()

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
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
    </section>
  )
}

export default Menu
