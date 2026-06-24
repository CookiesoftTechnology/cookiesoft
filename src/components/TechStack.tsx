import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { techGroups } from '../data/siteContent'

export default function TechStack() {
  const { ref, isVisible } = useInView(0.12)

  return (
    <section id="technologies" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Expertise</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">Technologies We Work With</h2>
          <p className="mt-4 text-dark-400 text-lg leading-relaxed">
            Building future-ready digital solutions with modern technologies. We leverage industry-leading tools to build scalable, secure, and high-performance software.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group p-6 rounded-xl border border-dark-100 bg-white hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-dark-900">{group.title}</h3>
              <p className="mt-2 text-sm text-dark-400 leading-relaxed">{group.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-100 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-800">Our Development Approach</h4>
          <ul className="mt-3 text-gray-600 grid sm:grid-cols-2 gap-2">
            <li>✓ Scalable Architecture</li>
            <li>✓ Security-First Development</li>
            <li>✓ Cloud-Native Solutions</li>
            <li>✓ Agile Methodology</li>
            <li>✓ Quality Assurance & Testing</li>
            <li>✓ Ongoing Support & Maintenance</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
