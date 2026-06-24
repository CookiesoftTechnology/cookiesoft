import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane, HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2'
import { useInView } from '../hooks/useInView'
import emailjs from '@emailjs/browser'
import { bookingUrl, serviceOptions } from '../data/siteContent'

export default function Contact() {
  const { ref, isVisible } = useInView(0.1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState('')

  let buttonLabel = 'Send Message'
  if (isSending) {
    buttonLabel = 'Sending...'
  } else if (submitted) {
    buttonLabel = 'Message Sent!'
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!formData.service) {
      setSendError('Please select the service you want help with.')
      return
    }

    setIsSending(true)
    setSendError('')

    try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    setSubmitted(true)
    setIsSending(false)

    setTimeout(() => setSubmitted(false), 4000)

    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    })
  } catch (error) {
    console.error('Email error:', error)
    setSendError('Failed to send your message. Please try again in a few minutes.')
  } finally {
    setIsSending(false)
  }
}

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary-50/30 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
            Free AI Consultation
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
            Book a Free 30-Min AI Strategy Session
          </h2>
          <p className="mt-4 text-dark-400 text-lg leading-relaxed">
            Tell us about your project and receive a free consultation on AI, automation, SaaS, or software architecture.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700"
            >
              Book a free session on the calendar
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <HiEnvelope className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900">Email</h3>
                <p className="text-dark-400 text-sm mt-1">myindialogin@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <HiMapPin className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900">Location</h3>
                <p className="text-dark-400 text-sm mt-1">India &mdash; Serving clients globally</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <HiPhone className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900">Response Time</h3>
                <p className="text-dark-400 text-sm mt-1">Within 24 hours on business days</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 space-y-5"
          >
            {sendError && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {sendError}
              </div>
            )}
            {submitted && !sendError && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Thanks! Your message is on its way. We will contact you soon.
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-dark-700 mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm text-dark-900 placeholder:text-dark-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-dark-700 mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm text-dark-900 placeholder:text-dark-300"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-company" className="block text-sm font-medium text-dark-700 mb-1.5">
                  Company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm text-dark-900 placeholder:text-dark-300"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="block text-sm font-medium text-dark-700 mb-1.5">
                  Service
                </label>
                <select
                  id="contact-service"
                  required
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value })
                    if (sendError) setSendError('')
                  }}
                  className="w-full px-4 py-2.5 rounded-lg border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm text-dark-900 bg-white"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service.value} value={service.value}>{service.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-dark-700 mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm text-dark-900 placeholder:text-dark-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25 disabled:opacity-50"
              disabled={isSending || submitted}
            >
              {buttonLabel}
              {!isSending && !submitted && <HiPaperAirplane className="w-4 h-4" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
