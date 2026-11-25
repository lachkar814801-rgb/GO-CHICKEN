const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-yellow-400 to-red-500 text-background font-bold p-2 rounded-xl">
                <span className="text-xl">GC</span>
              </div>
              <div>
                <h3 className="font-extrabold text-white leading-none">GO CHICKEN</h3>
                <p className="text-xs text-yellow-400 mt-1">GRILLADES & POULET RÔTI</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm max-w-xs">
              Route Gremda, Km 9.5, Tunisie
            </p>

            <a
              href="tel:+21627211145"
              className="flex items-center gap-2 text-white font-medium hover:text-yellow-400 transition-colors"
            >
              <svg width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.586l.707.707L22.646 10.914a1 1 0 00.706.293h2a2 2 0 012 2v2a2 2 0 01-2 2h-.707l-.707-.707L9.293 4.586A2 2 0 019 4H5a2 2 0 01-2-2v-2" />
              </svg>
              +216 27 211 145
            </a>

            <div className="flex items-center gap-2 text-sm">
              <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a
                href="https://wa.me/21627211145"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors flex items-center gap-1"
              >
                WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a
                href="https://maps.app.goo.gl/TKqpkgCxomSXuzED7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors flex items-center gap-1"
              >
                Google Maps
              </a>
            </div>

            <p className="text-xs text-gray-500">
              © 2024 GO CHICKEN. Tous droits réservés.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Accueil</h4>
            <nav className="space-y-2">
              <a href="/" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                Accueil
              </a>
              <a href="/menu" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                Notre menu
              </a>
              <a href="/gallery" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                Galerie
              </a>
              <a href="/location" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                Contact
              </a>
            </nav>
          </div>

          {/* Quick Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Nous trouver</h4>
            
            <div className="bg-black/30 rounded-lg p-4 space-y-2">
              <p className="text-sm text-gray-400 leading-relaxed">
                Route Gremda, Km 9.5 | +216 27 211 145
              </p>
            </div>

            <a
              href="https://wa.me/21627211145"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 20l.168-3.028c.154-.288.553-.288.707 0l1.843 3.228h4.558l-3.267-3.968c-.314-.376-.344-.742.095-.957l.191-.109c.113-.063.198-.159.247-.281l.698-2.149a.431.431 0 0 0-.211-.52l-1.78-.99a.726.726 0 0 0-.876.268l-.262.468c-.15.27-.436.387-.713.28l-3.033-1.263a.719.719 0 0 0-.874.437L.156 16.66a.716.716 0 0 0 .575.787l3.582.49c.265.037.484.197.598.428L6.5 18H.057z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm">
            © 2024 GO CHICKEN. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
