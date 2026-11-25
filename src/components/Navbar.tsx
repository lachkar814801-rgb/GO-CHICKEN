import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/menu', label: 'Notre menu' },
    { href: '/location', label: 'Contact' }
  ] as const

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-yellow-400 to-red-500 text-background font-bold p-2 rounded-xl transform transition-transform group-hover:rotate-3">
              <span className="text-xl">GC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white leading-none tracking-tight">
                GO CHICKEN
              </span>
              <span className="text-xs text-yellow-400 font-medium hidden sm:block">
                GRILLADES & POULET RÔTI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-3 py-2 text-white text-sm font-medium hover:bg-white/10 rounded-lg transition-colors relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-white/20 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Language & Command Button */}
          <div className="flex items-center gap-3">
            {/* Language Selector (placeholder) */}
            <button
              disabled
              className="px-3 py-1.5 bg-surface border border-white/20 rounded-lg text-sm font-medium cursor-not-allowed"
            >
              FR / AR
            </button>

            {/* Command Button */}
            <Link
<<<<<<< HEAD
              to="/menu"
=======
              to="/location"
>>>>>>> ce6144df89c9115f1d10b4029d0ed9b61b96887b
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-background font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-yellow-400/25 transform hover:-translate-y-0.5 transition-all"
            >
              <Phone size={16} />
              Commander maintenant
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
<<<<<<< HEAD
                to="/menu"
=======
                to="/location"
>>>>>>> ce6144df89c9115f1d10b4029d0ed9b61b96887b
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-background font-bold rounded-lg hover:shadow-lg transition-all"
              >
                <Phone size={16} />
                Commander maintenant
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
