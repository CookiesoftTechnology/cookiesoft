import { useEffect, useState } from 'react'
import { HiChevronUp } from 'react-icons/hi2'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-6 bottom-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-slate-900/95 text-white shadow-lg shadow-slate-950/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 hover:bg-slate-800/95 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <HiChevronUp className="h-6 w-6" />
    </button>
  )
}
