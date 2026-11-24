import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null)

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
          Galerie Photo
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full" />
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { src: '/images/grillades.jpeg', alt: 'Grillades et brochettes' },
          { src: '/images/poulet-pane.jpeg', alt: 'Poulet pané croustillant' },
          { src: '/images/restaurant-enseigne.jpeg', alt: 'Restaurant exterieur' },
          { src: '/images/brochettes.jpeg', alt: 'Brochettes grillées' },
          { src: '/images/poulet-pane-promo.jpeg', alt: 'Promotion poulet pané' },
        ].map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] md:aspect-auto"
            onClick={() => setSelected(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-medium text-sm">{img.alt}</p>
            </div>

            {/* Hover icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10 p-2"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              src={selected}
              alt="Gallery full view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
