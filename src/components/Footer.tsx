import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { footerLinks, footerSocialLinks, footerCopyright } from '../data/siteContent'

const iconColorClass = (label: string) => {
  switch (label) {
    case 'Facebook':
      return 'text-[#1877F2]'
    case 'X':
      return 'text-[#1DA1F2]'
    case 'Instagram':
      return 'text-[#E4405F]'
    case 'LinkedIn':
      return 'text-[#0A66C2]'
    case 'YouTube':
      return 'text-[#FF0000]'
    default:
      return 'text-dark-300'
  }
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CST</span>
              </div>
              {/* <span className="text-xl font-bold text-white">
                Cookie<span className="text-primary-400">Soft</span>{' '}
                <span className="text-md font-medium text-dark-500">Technologies</span>
              </span> */}
              <div className="flex flex-col items-center text-center leading-tight">
              <span className={`footerLogo-text`}>
                Cookiesoft
              </span>
              <span className={`tagline-text`}>
                Building the Future with AI
              </span>
            </div>
            </div>
            <p className="mt-4 text-dark-300 text-sm leading-relaxed max-w-xs">
              AI-Powered Software for the Modern World. Building custom
              software, SaaS products, and developer tools for businesses
              worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-dark-700 hover:bg-primary-600/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className={`w-4 h-4 ${iconColorClass(social.label)} transition-colors`} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => {
                  const isTo = 'to' in link
                  const isHash = isTo && typeof link.to === 'string' && link.to.includes('#')
                  let element: ReactNode

                  if (isTo) {
                    if (isHash) {
                      element = (
                        <a href={link.to} className="text-sm text-dark-400 hover:text-primary-400 transition-colors">
                          {link.label}
                        </a>
                      )
                    } else {
                      element = (
                        <Link to={link.to} className="text-sm text-dark-400 hover:text-primary-400 transition-colors">
                          {link.label}
                        </Link>
                      )
                    }
                  } else {
                    element = (
                      <a href={link.href} className="text-sm text-dark-400 hover:text-primary-400 transition-colors">
                        {link.label}
                      </a>
                    )
                  }

                  return <li key={link.label}>{element}</li>
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-400">
            &copy; {footerCopyright.startYear} - {new Date().getFullYear()} {footerCopyright.company}. All rights reserved.
          </p>
          <p className="text-sm text-dark-500">
            <a
              href={footerCopyright.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-400 underline-offset-2 hover:underline transition"
            >
              {new URL(footerCopyright.website).hostname}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
