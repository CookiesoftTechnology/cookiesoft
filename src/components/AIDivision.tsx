import { motion } from 'framer-motion'
import { Bot, Brain, MessageSquare, Eye, Mic, FileText } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const aiServices = [
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Autonomous AI agents that execute complex tasks, make decisions, and learn from interactions.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Conversational AI with natural language understanding for customer support and engagement.',
  },
  {
    icon: Brain,
    title: 'RAG Systems',
    description: 'Retrieval-Augmented Generation pipelines that ground AI responses in your business data.',
  },
  {
    icon: FileText,
    title: 'LLM Applications',
    description: 'Custom large language model integrations for content generation, analysis, and reasoning.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and visual inspection powered by deep learning.',
  },
  {
    icon: Mic,
    title: 'Voice AI',
    description: 'Speech-to-text, text-to-speech, and voice assistant solutions for hands-free interaction.',
  },
]

export default function AIDivision() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section id="ai" className="py-24 bg-dark-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
            CookieSoft AI
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight">
            AI Division
          </h2>
          <p className="mt-4 text-dark-300 text-lg leading-relaxed">
            Intelligent systems that transform how businesses operate. From chatbots to autonomous agents, we build AI that works.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-dark-600/50 hover:border-primary-500/50 bg-dark-800/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-600/15 flex items-center justify-center group-hover:bg-primary-600/25 transition-colors">
                <service.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-dark-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600/15 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium">
            <Brain className="w-4 h-4" />
            Powered by GPT-4, Claude, Llama &amp; custom models
          </div>
        </motion.div>
      </div>
    </section>
  )
}
