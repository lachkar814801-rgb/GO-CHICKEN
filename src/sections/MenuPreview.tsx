import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MenuPreview = () => {
  const previewItems = [
    { titleFr: 'Poulet Pané Classique', category: 'Poulet Pané', image: '/images/menu/poulet-pane-classique.webp' },
    { titleFr: 'Grillades du Soleil', category: 'Grillades', image: '/images/menu/grillades-du-soleil.webp' },
    { titleFr: 'Brochettes de Légumes', category: 'Brochettes', image: '/images/menu/brochettes.webp' },
  ] as const;

  return (
    <section>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Notre Menu
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full" />
      </motion.div>

      {/* Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {previewItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-surface/50 border border-white/10 hover:border-yellow-400/50 transition-all cursor-pointer"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-400 text-xs font-bold mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {item.titleFr}
                </h3>
              </div>
            </div>

            {/* Clickable overlay */}
            <Link to="/menu" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-background text-white font-bold px-6 py-3 rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-red-500">
                Voir tout le menu
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-background font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1 transition-all"
        >
          Notre Menu →
        </Link>
      </motion.div>
    </section>
  )
}

export default MenuPreview
