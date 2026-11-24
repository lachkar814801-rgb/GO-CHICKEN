import { motion } from 'framer-motion'

const Specialties = () => {
  const categories = [
    {
      title: 'Le Poulet Pané',
      desc: 'Nos recettes emblématiques au poulet pané croustillant, mijoté dans notre sauce secrète maison.',
      image: '/images/poulet-pane.jpg',
      alt: 'Poulet pané croustillant',
    },
    {
      title: 'Le Poulet Rôti',
      desc: 'Succulent poulet rôti au four, servi avec légumes de saison et pommes de terre.',
      image: '/images/restaurant-enseigne.jpg',
      alt: 'Poulet rôti',
    },
    {
      title: 'Les Brochettes',
      desc: 'Brochettes grillées traditionnelles et brochettes de légumes - un vrai festin tunisien !',
      image: '/images/brochettes.jpg',
      alt: 'Brochettes et grillades',
    },
  ] as const;

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Nos Spécialités
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-surface border border-white/10 hover:border-yellow-400/50 transition-colors">
              {/* Image */}
              <div className="relative h-64 md:h-80 w-full">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8 -mt-12">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{category.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Specialties
