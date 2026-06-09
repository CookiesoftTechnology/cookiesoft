import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AIDivision from './components/AIDivision'
import SaaSProducts from './components/SaaSProducts'
import DevTools from './components/DevTools'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <AIDivision />
      <SaaSProducts />
      <DevTools />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
