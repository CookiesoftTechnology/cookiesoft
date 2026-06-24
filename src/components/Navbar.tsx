import { useState, useEffect } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data/siteContent'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-dark-100'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center group-hover:bg-primary-700 transition-colors">
              <span className="text-white font-bold text-sm">CST</span>
            </div>
            {/* <span
              className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-dark-900' : 'text-dark-100'
              }`}
            >
              Cookie<span className="text-primary-600">Soft</span>
            </span> */}
            <div className="flex flex-col items-center text-center leading-tight">
              {/* Make logo/tagline dark when scrolled OR on any non-home page */}
              {(() => {
                const makeDark = scrolled || location.pathname !== '/'
                return (
                  <>
                    <span className={`logo-text ${makeDark ? 'scrolled' : ''}`}>
                      Cookiesoft
                    </span>
                    <span className={`tagline-text ${makeDark ? 'scrolled' : ''}`}>
                      Building the Future with AI
                    </span>
                  </>
                )
              })()}
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              'href' in link ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${scrolled ? 'text-dark-500' : 'text-dark-400'}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${scrolled ? 'text-dark-500' : 'text-dark-400'}`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
          >
            {mobileOpen ? (
              <HiXMark className="w-5 h-5 text-dark-700" />
            ) : (
              <HiBars3 className="w-5 h-5 text-dark-700" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-dark-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) =>
              'href' in link ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-dark-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-dark-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg text-center mt-3 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
