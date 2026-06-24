import { motion } from 'framer-motion'
import { HiCodeBracketSquare, HiArchiveBox, HiArrowPath, HiBeaker, HiChartBar, HiCommandLine } from 'react-icons/hi2'
import { useInView } from '../hooks/useInView'

const tools = [
  {
    icon: HiCodeBracketSquare,
    title: 'APIs & SDKs',
    description: 'RESTful and GraphQL APIs with client SDKs in JavaScript, Python, and Go.',
  },
  {
    icon: HiArchiveBox,
    title: 'Open Source',
    description: 'Community-driven libraries and frameworks on GitHub with active maintenance.',
  },
  {
    icon: HiArrowPath,
    title: 'CI/CD Utilities',
    description: 'Automated build, test, and deployment pipelines for rapid iteration.',
  },
  {
    icon: HiBeaker,
    title: 'Testing Tools',
    description: 'Automated testing frameworks for unit, integration, and E2E coverage.',
  },
  {
    icon: HiChartBar,
    title: 'Monitoring',
    description: 'Real-time observability, logging, and alerting for production systems.',
  },
  {
    icon: HiCommandLine,
    title: 'Developer Platform',
    description: 'CLI tools, documentation generators, and developer experience utilities.',
  },
]

export default function DevTools() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section id="devtools" className="py-24 bg-dark-800 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-400 font-medium text-sm uppercase tracking-wider">
            CookieSoft Dev
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Developer Tools
          </h2>
          <p className="mt-4 text-dark-300 text-lg leading-relaxed">
            Tools built by developers, for developers. APIs, SDKs, and platforms that accelerate your workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-dark-600/50 hover:border-accent-500/40 bg-dark-700/50 backdrop-blur transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-600/15 flex items-center justify-center group-hover:bg-accent-600/25 transition-colors">
                <tool.icon className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {tool.title}
              </h3>
              <p className="mt-2 text-dark-300 text-sm leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="font-mono text-sm text-dark-400 bg-dark-700/50 px-5 py-3 rounded-lg border border-dark-600/50 flex items-center gap-2">
            <HiCommandLine className="w-4 h-4 text-accent-400" />
            npx create-cookiesoft-app my-project
          </div>
        </motion.div>
      </div>
    </section>
  )
}
