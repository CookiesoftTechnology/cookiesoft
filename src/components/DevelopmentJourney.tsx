import { Link } from 'react-router-dom'
import { bookingUrl } from '../data/siteContent'
import { HiLightBulb, HiChartBar, HiCodeBracketSquare, HiCommandLine, HiBeaker, HiArrowPath, HiChartPie, HiArrowTrendingUp } from 'react-icons/hi2'
import { motion } from 'framer-motion'

const steps = [
  { icon: HiLightBulb, title: 'Discovery', subtitle: 'Understand goals & constraints', desc: 'Stakeholder interviews, requirements gathering, compliance needs, and initial threat modelling.' },
  { icon: HiChartBar, title: 'Planning', subtitle: 'Roadmap & risk plan', desc: 'Define milestones, success metrics, risk register, and data classification.' },
  { icon: HiCodeBracketSquare, title: 'Architecture', subtitle: 'Design secure systems', desc: 'High-level architecture, secure defaults, identity and access model, and infra choices.' },
  { icon: HiCommandLine, title: 'Implementation', subtitle: 'Build with quality', desc: 'Feature development, secure coding, linters, automated tests, and code reviews.' },
  { icon: HiBeaker, title: 'Testing', subtitle: 'Verify & validate', desc: 'Unit/e2e tests, fuzzing, dependency scanning, and penetration testing.' },
  { icon: HiArrowPath, title: 'Release', subtitle: 'Hardened deployment', desc: 'CI/CD, canary releases, secrets management, infrastructure-as-code and backups.' },
  { icon: HiChartPie, title: 'Operate', subtitle: 'Observability & response', desc: 'Logging, monitoring, SLOs, alerting, incident response, and continuous improvement.' },
  { icon: HiArrowTrendingUp, title: 'Maintain', subtitle: 'Sustain & improve', desc: 'Scheduled reviews, dependency updates, security patches, and user training.' },
]

export default function DevelopmentJourney() {
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900">Secure Development Journey</h2>
          <p className="mt-3 text-dark-700 max-w-3xl mx-auto">A repeatable, auditable process to deliver secure, production-ready projects — from discovery through continuous operations.</p>
        </div>

        <div className="mt-12 relative">
          {/* Center vertical line for timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 to-primary-400/40" />

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const side = idx % 2 === 0 ? 'left' : 'right'
              const delay = idx * 0.06

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className={`relative md:px-8 md:py-6 ${side === 'left' ? 'md:text-right' : 'md:text-left'}`}
                >
                  <div className={`mt-6 md:mt-0 ${side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-primary-400 text-white flex items-center justify-center shadow-md">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div className="text-sm font-semibold text-primary-700">Step {idx + 1}</div>
                            <h3 className="text-lg font-bold text-dark-900">{step.title}</h3>
                          </div>
                          <p className="mt-1 text-xs font-mono text-primary-600">{step.subtitle}</p>
                          <p className="mt-3 text-sm text-dark-700">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-dark-900">Security & Compliance — Built In</h4>
            <p className="mt-2 text-dark-700">From day one we bake in security: threat modeling, secure defaults, CI checks, dependency scanning, pen tests, and runtime monitoring. This reduces risk and simplifies audits.</p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-dark-700">
              <li className="flex items-start gap-3"><span className="text-primary-600 font-bold">●</span> Threat modeling</li>
              <li className="flex items-start gap-3"><span className="text-primary-600 font-bold">●</span> Secure CI/CD</li>
              <li className="flex items-start gap-3"><span className="text-primary-600 font-bold">●</span> Dependency & secrets scanning</li>
              <li className="flex items-start gap-3"><span className="text-primary-600 font-bold">●</span> Penetration testing</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium shadow">Book a Free Strategy Session</a>
              <Link to="/contact" className="inline-block px-5 py-2 rounded-md border border-neutral-200 text-dark-900 hover:text-primary-600">Contact Us</Link>
            </div>
          </div>

          <aside className="w-full md:w-72 bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-5">
            <h5 className="text-sm font-semibold text-dark-900">Audit checklist</h5>
            <ol className="mt-3 space-y-2 text-dark-700 text-sm list-decimal list-inside">
              <li>Data classification & retention policy</li>
              <li>Access reviews & least privilege</li>
              <li>Automated test coverage & SLOs</li>
              <li>Backup, restore & disaster recovery</li>
            </ol>
          </aside>
        </div>
      </div>
    </section>
  )
}
