import { motion } from 'framer-motion'
import { caseStudies } from '../data/siteContent'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">Real Projects, Measurable Outcomes</h2>
          <p className="mt-4 text-dark-400 text-lg leading-relaxed">
            Case studies that show how we solve real business problems with AI, automation, SaaS, and custom software.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-3xl border border-dark-100 p-6 hover:shadow-xl transition-all"
            >
              <div className="text-sm font-medium uppercase tracking-wide text-primary-600">{caseStudy.category}</div>
              <h3 className="mt-3 text-2xl font-semibold text-dark-900">{caseStudy.title}</h3>
              <div className="mt-5 space-y-4 text-sm text-dark-500">
                <p><span className="font-semibold text-dark-900">Problem:</span> {caseStudy.problem}</p>
                <p><span className="font-semibold text-dark-900">Solution:</span> {caseStudy.solution}</p>
                <p><span className="font-semibold text-dark-900">Results:</span> {caseStudy.results}</p>
              </div>
              <div className="mt-6 text-xs uppercase tracking-wide text-dark-400">Tech: {caseStudy.tech}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
