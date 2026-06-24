import { useInView } from '../hooks/useInView'
import { faqItems } from '../data/siteContent'

export default function FAQ() {
  const { ref } = useInView(0.1)

  return (
    <section id="faq" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Need Answers</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-4 text-dark-400 text-lg leading-relaxed">
            Common questions about timelines, pricing, technology, and how we work with clients.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {faqItems.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-dark-100 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-dark-900">{faq.question}</h3>
              <p className="mt-3 text-dark-500 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
