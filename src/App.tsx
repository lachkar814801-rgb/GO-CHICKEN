import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Menu from './sections/Menu'
import Gallery from './sections/Gallery'
import Location from './sections/Location'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
<<<<<<< HEAD
import CartDrawer from './components/CartDrawer'
import { CartProvider } from './context/CartContext'
=======
>>>>>>> ce6144df89c9115f1d10b4029d0ed9b61b96887b

const ScrollToTop = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])
  return null
}

const App = () => {
  return (
<<<<<<< HEAD
    <CartProvider>
=======
>>>>>>> ce6144df89c9115f1d10b4029d0ed9b61b96887b
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text font-sans" dir="ltr">
        <Navbar />
        <main className="flex-1 pt-24">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Location />} />
          </Routes>
        </main>
        <Footer />
      </div>
<<<<<<< HEAD
      <CartDrawer />
    </BrowserRouter>
    </CartProvider>
=======
    </BrowserRouter>
>>>>>>> ce6144df89c9115f1d10b4029d0ed9b61b96887b
  )
}

export default App
