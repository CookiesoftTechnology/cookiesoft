import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { serviceItems } from '../data/siteContent'

export default function Services() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
            What We Build
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
            Custom Software Development
          </h2>
          <p className="mt-4 text-dark-400 text-lg leading-relaxed">
            End-to-end software solutions engineered for performance, security, and scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-dark-100 hover:border-primary-200 bg-white hover:bg-primary-50/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-dark-900">
                {service.title}
              </h3>
              <p className="mt-2 text-dark-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
