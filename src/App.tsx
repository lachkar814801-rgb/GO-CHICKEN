import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './sections/Menu'
import Gallery from './sections/Gallery'
import Location from './sections/Location'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text font-sans" dir="ltr">
        <Navbar />
        <main className="flex-1">
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
    </BrowserRouter>
  )
}

export default App
