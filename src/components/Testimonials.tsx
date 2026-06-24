import { motion } from 'framer-motion'
import { testimonials } from '../data/siteContent'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Client Feedback</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">Stories from Clients Who Trust CookieSoft</h2>
          <p className="mt-4 text-dark-400 text-lg leading-relaxed">
            Results-focused testimonials from teams that scaled faster with our AI-powered software solutions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-3xl border border-dark-100 bg-white p-8 shadow-sm"
            >
              <p className="text-lg leading-relaxed text-dark-700">“{item.quote}”</p>
              <div className="mt-6">
                <div className="text-base font-semibold text-dark-900">{item.name}</div>
                <div className="text-sm text-dark-400">{item.role}, {item.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
