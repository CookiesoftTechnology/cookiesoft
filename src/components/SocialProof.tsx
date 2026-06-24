import { motion } from 'framer-motion'
import { socialStats, trustedLogos, testimonials } from '../data/siteContent'

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white" id="social-proof">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Trusted Results</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Proof That CookieSoft Delivers</h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            A combination of strong metrics, happy clients, and trusted partners that makes the difference for growth-minded businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialStats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-[2rem] border border-dark-600/50 bg-dark-900/70 p-8 text-center shadow-[0_25px_80px_-55px_rgba(0,0,0,0.55)] backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-slate-100">{stat.value}</div>
              <div className="mt-2 text-sm text-primary-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {trustedLogos.map((logo) => (
            <div key={logo} className="w-20 h-12 rounded-2xl bg-white/10 text-white/90 flex items-center justify-center text-sm font-semibold">
              {logo}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-3xl border border-dark-600/50 bg-dark-900/70 p-8 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.55)] backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed text-slate-100">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm text-slate-300">
                <div className="font-semibold text-slate-100">{testimonial.name}</div>
                <div>{testimonial.role}, {testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
