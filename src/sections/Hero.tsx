import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className || 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.586l.707.707L22.646 10.914a1 1 0 00.706.293h2a2 2 0 012 2v2a2 2 0 01-2 2h-.707l-.707-.707L9.293 4.586A2 2 0 019 4H5a2 2 0 01-2-2v-2" />
  </svg>
)

const Hero = () => {
  return (
    <div className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/grillades.jpg"
          alt="Restaurant grillades"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2">
            <UtensilsIcon size={16} className="text-yellow-400" />
            <span className="text-yellow-400 font-medium text-sm">
              Le meilleur poulet grillé en Tunisie
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4"
        >
          GO CHICKEN
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 mb-8 max-w-2xl"
        >
          GRILLADES & POULET RÔTI
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-300 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
        >
          Le goût qui donne envie d'y revenir !
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-background font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1 transition-all group"
          >
            Découvrir notre menu
            <span className="group-hover:rotate-12 transition-transform">→</span>
          </Link>

          <Link
            to="/location"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-1 transition-all group"
          >
            Commander maintenant
            <PhoneIcon className="group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Découvrir plus</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const UtensilsIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3v19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V7h10v5.414l4.293-4.293c.39-.39 1.02-.39 1.41 0l2.828 2.828c.39.39.39 1.02 0 1.41l-7.95 7.95L12 21v6" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
)

export default Hero
