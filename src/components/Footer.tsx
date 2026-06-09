import { Mail, ExternalLink, Rss } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'Enterprise Software', href: '#services' },
  ],
  Products: [
    { label: 'Analytics Platform', href: '#saas' },
    { label: 'CRM Pro', href: '#saas' },
    { label: 'Smart Billing', href: '#saas' },
    { label: 'EduManage', href: '#saas' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'AI Division', href: '#ai' },
    { label: 'Developer Tools', href: '#devtools' },
    { label: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { icon: ExternalLink, href: '#', label: 'GitHub' },
  { icon: Rss, href: '#', label: 'Twitter' },
  { icon: ExternalLink, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@cookiesoft.in', label: 'Email' },
]

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
              <span className="text-xl font-bold text-white">
                Cookie<span className="text-primary-400">Soft</span>{' '}
                <span className="text-md font-medium text-dark-500">Technologies</span>
              </span>
            </div>
            <p className="mt-4 text-dark-300 text-sm leading-relaxed max-w-xs">
              AI-Powered Software for the Modern World. Building custom
              software, SaaS products, and developer tools for businesses
              worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-dark-700 hover:bg-primary-600/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-dark-300 group-hover:text-primary-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-400">
            &copy; {new Date().getFullYear()} CookieSoft. All rights reserved.
          </p>
          <p className="text-sm text-dark-500">
            cookiesoft.in
          </p>
        </div>
      </div>
    </footer>
  )
}
