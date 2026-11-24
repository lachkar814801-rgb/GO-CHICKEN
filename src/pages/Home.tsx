import Hero from '../sections/Hero'
import Specialties from '../sections/Specialties'
import MenuPreview from '../sections/MenuPreview'
import Gallery from '../sections/Gallery'
import Location from '../sections/Location'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero />
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Specialties />
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu-preview" className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuPreview />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-surface/30 border-t border-white/10">
        <Location />
      </section>
    </div>
  )
}

export default Home
