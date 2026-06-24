import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ServiceIndex from './pages/ServiceIndex'
import ServicePage from './pages/ServicePage'
import IndustryIndex from './pages/IndustryIndex'
import IndustryPage from './pages/IndustryPage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import ProductPage from './pages/ProductPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceIndex />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<IndustryIndex />} />
          <Route path="/solutions/:slug" element={<IndustryPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
