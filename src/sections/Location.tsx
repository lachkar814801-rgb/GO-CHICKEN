import { Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Location = () => {
  const mapsUrl = 'https://maps.app.goo.gl/TKqpkgCxomSXuzED7'
  const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3275.870713179794!2d10.6983889!3d34.809194399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ4JzMzLjEiTiAxMMKwNDEnNTQuMiJF!5e0!3m2!1sfr!2stn!4v1795550424932!5m2!1sfr!2stn'
  const whatsappMsg = encodeURIComponent('Bonjour, je souhaite commander du poulet grillé !')
  
  return (
    <div className="bg-surface/30">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Contact
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full" />
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start overflow-visible">
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-surface/50 rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-colors group">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-background rounded-xl p-3 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Adresse</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Route Gremda, Km 9.5, Sfax, Tunisie
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-surface/50 rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-colors group">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-red-500 to-orange-600 text-background rounded-xl p-3 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Téléphone</h3>
                  <p className="text-gray-400 leading-relaxed">
                    +216 27 211 145
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={`tel:+21627211145`}
                  className="flex items-center gap-2 bg-white/10 hover:bg-yellow-400/20 text-white px-4 py-2.5 rounded-lg transition-colors font-medium"
                >
                  <Phone size={16} />
                  Appeler
                </a>

                <a
                  href={`https://wa.me/21627211145?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20b958] text-white px-4 py-2.5 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  WhatsApp
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-yellow-400/20 text-white px-4 py-2.5 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Google Maps
                </a>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-surface/50 rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-colors group text-center">
              <h3 className="font-bold text-white mb-4">QR Code Google Maps</h3>
              <div className="mx-auto w-fit bg-white p-4 rounded-2xl shadow-2xl overflow-visible">
                <img
                  src="/qr-maps-large.png"
                  alt="QR Code Google Maps"
                  className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] style={{ imageRendering: 'pixelated' }}"
                />
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Scannez pour nous trouver sur Google Maps
              </p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-white/10 relative min-h-[400px]">
            <iframe
              src={mapsEmbedUrl}
              title="Localisation Google Maps"
              className="w-full h-[400px] lg:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Prêt à commander ?
          </h3>
          <p className="text-white/90 max-w-xl mx-auto mb-6 leading-relaxed">
            Contactez-nous directement via WhatsApp pour passer votre commande de GO CHICKEN !
          </p>
          <a
            href={`https://wa.me/21627211145?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-background font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Commander sur WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Location
