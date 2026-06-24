import { motion } from 'framer-motion'
import { HiRocketLaunch, HiLightBulb, HiUsers, HiGlobeAlt } from 'react-icons/hi2'
import { useInView } from '../hooks/useInView'

const values = [
  {
    icon: HiRocketLaunch,
    title: 'Ship Fast',
    description: 'We prioritize speed without sacrificing quality. MVP to production in weeks, not months.',
  },
  {
    icon: HiLightBulb,
    title: 'AI-First Thinking',
    description: 'Every product and solution we build considers how AI can make it smarter and more efficient.',
  },
  {
    icon: HiUsers,
    title: 'Client Partnership',
    description: 'We work alongside your team as true partners, not just vendors. Your success is our metric.',
  },
  {
    icon: HiGlobeAlt,
    title: 'Global Scale',
    description: 'Built for businesses serving local markets or going global. Our architecture scales with you.',
  },
]

export default function About() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
              About CookieSoft
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
              Intelligent Software,{' '}
              <span className="text-primary-600">Built to Scale</span>
            </h2>
            <p className="mt-4 text-dark-400 text-lg leading-relaxed">
              CookieSoft is an AI-powered software development company that
              builds custom software, SaaS products, developer tools, and
              digital platforms for businesses worldwide.
            </p>
            <p className="mt-4 text-dark-400 leading-relaxed">
              From startups launching their first product to enterprises
              modernizing legacy systems, we bring deep technical expertise and
              an AI-first approach to every engagement. Our name reflects our
              philosophy: software should be smart, approachable, and deliver
              real value from day one.
            </p>

            <div className="mt-8 flex gap-6">
              {[
                { value: '3+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '15+', label: 'Team' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center px-4 py-3 bg-primary-50 rounded-lg"
                >
                  <div className="text-2xl font-bold text-primary-700">
                    {stat.value}
                  </div>
                  <div className="text-xs text-dark-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-xl border border-dark-100 hover:border-primary-200 bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-dark-900">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-dark-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
