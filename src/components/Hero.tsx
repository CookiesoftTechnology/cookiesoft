import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Cpu } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/80 via-dark-900 to-accent-900/40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/30 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/15 border border-primary-500/25 rounded-full text-primary-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Software Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Software with AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-dark-300 leading-relaxed max-w-xl"
            >
              CookieSoft builds AI-powered software, SaaS products, developer
              tools, and digital platforms for businesses worldwide. From idea to
              scalable software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25 group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-dark-500 text-white font-medium rounded-lg hover:border-dark-300 hover:bg-white/5 transition-all"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex gap-8 text-sm"
            >
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '30+', label: 'Happy Clients' },
                { value: '99%', label: 'Uptime SLA' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-dark-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-dark-800/80 backdrop-blur border border-dark-600/50 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3 text-dark-300 text-sm">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 font-mono">cookiesoft-ai.config</span>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <div className="text-dark-400">
                    <span className="text-primary-400">const</span>{' '}
                    <span className="text-accent-400">cookiesoft</span> = {'{'}
                  </div>
                  <div className="pl-4 text-dark-300">
                    <span className="text-primary-300">ai</span>:{' '}
                    <span className="text-accent-300">"intelligent"</span>,
                  </div>
                  <div className="pl-4 text-dark-300">
                    <span className="text-primary-300">software</span>:{' '}
                    <span className="text-accent-300">"scalable"</span>,
                  </div>
                  <div className="pl-4 text-dark-300">
                    <span className="text-primary-300">technologies</span>:{' '}
                    <span className="text-accent-300">true</span>,
                  </div>
                  <div className="pl-4 text-dark-300">
                    <span className="text-primary-300">products</span>:{' '}
                    <span className="text-accent-300">["SaaS", "Tools", "APIs"]</span>,
                  </div>
                  <div className="pl-4 text-dark-300">
                    <span className="text-primary-300">mission</span>:{' '}
                    <span className="text-accent-300">"Build the future"</span>,
                  </div>
                  <div className="text-dark-400">{'}'}</div>
                </div>
                <div className="flex gap-3 pt-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-primary-600/15 border border-primary-500/25 rounded-lg text-primary-300 text-xs font-medium">
                    <Cpu className="w-3.5 h-3.5" /> AI Powered
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-accent-600/15 border border-accent-500/25 rounded-lg text-accent-300 text-xs font-medium">
                    <Code2 className="w-3.5 h-3.5" /> Dev Tools
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
