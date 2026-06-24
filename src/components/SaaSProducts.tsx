import { motion } from 'framer-motion'
import { HiChartBar, HiUsers, HiShoppingCart, HiAcademicCap, HiReceiptPercent, HiArrowTrendingUp } from 'react-icons/hi2'
import { useInView } from '../hooks/useInView'

const products = [
  {
    icon: HiChartBar,
    title: 'Analytics Platform',
    description: 'Real-time business intelligence dashboards with AI-powered insights and predictions.',
    tag: 'Available Now',
  },
  {
    icon: HiUsers,
    title: 'CRM Pro',
    description: 'AI-enhanced customer relationship management with smart segmentation and outreach.',
    tag: 'Beta',
  },
  {
    icon: HiReceiptPercent,
    title: 'Smart Billing',
    description: 'Automated invoicing, subscription management, and financial reporting in one platform.',
    tag: 'Coming Soon',
  },
  {
    icon: HiAcademicCap,
    title: 'EduManage',
    description: 'Complete school and college ERP with student tracking, grading, and parent portals.',
    tag: 'Coming Soon',
  },
  {
    icon: HiShoppingCart,
    title: 'Commerce Suite',
    description: 'Full-stack e-commerce platform with inventory, payments, and AI-driven recommendations.',
    tag: 'Beta',
  },
  {
    icon: HiArrowTrendingUp,
    title: 'Marketing AI',
    description: 'Automated campaign management, A/B testing, and ROI optimization with machine learning.',
    tag: 'Coming Soon',
  },
]

const tagColors: Record<string, string> = {
  'Available Now': 'bg-accent-600/15 text-accent-400 border-accent-500/30',
  Beta: 'bg-primary-600/15 text-primary-400 border-primary-500/30',
  'Coming Soon': 'bg-dark-500/15 text-dark-300 border-dark-400/30',
}

export default function SaaSProducts() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section id="saas" className="py-24 bg-gradient-to-b from-white to-primary-50/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
            CookieSoft SaaS
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
            SaaS Products
          </h2>
          <p className="mt-4 text-dark-400 text-lg leading-relaxed">
            Ready-to-deploy software products built for scale, powered by AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl border border-dark-100 hover:border-primary-200 bg-white hover:shadow-lg hover:shadow-primary-600/5 transition-all duration-300"
            >
              <span
                className={`inline-flex px-2.5 py-1 text-xs font-medium border rounded-full ${tagColors[product.tag]}`}
              >
                {product.tag}
              </span>
              <div className="mt-4 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                <product.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-dark-900">
                {product.title}
              </h3>
              <p className="mt-2 text-dark-400 text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
