import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getServiceBySlug } from '../data/content'
import PageHeader from '../components/PageHeader'
import PageSection from '../components/PageSection'

export default function ServicePage() {
  const { slug } = useParams()
  const service = slug ? getServiceBySlug(slug) : undefined

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | CookieSoft`
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', service.seoDescription)
    }
  }, [service])

  if (!service) {
    return (
      <PageSection background="white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-dark-900">Service Not Found</h1>
          <p className="mt-4 text-dark-500">The page you requested could not be found.</p>
          <Link to="/services" className="mt-6 inline-flex px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition">
            View Service Listings
          </Link>
        </div>
      </PageSection>
    )
  }

  return (
    <PageSection background="white">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          eyebrow="Service Page"
          title={service.title}
          description={service.tagline}
        />

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-dark-100 bg-primary-50/60 p-8">
              <h2 className="text-2xl font-semibold text-dark-900">What we deliver</h2>
              <p className="mt-4 text-dark-500 leading-relaxed">{service.description}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-dark-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-900">Key Capabilities</h3>
                <ul className="mt-4 space-y-3 text-dark-500">
                  {service.features.map((feature) => (
                    <li key={feature} className="leading-relaxed">• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-dark-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-900">Why this matters</h3>
                <ul className="mt-4 space-y-3 text-dark-500">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">• {highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-dark-100 bg-white p-8 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-dark-900">Ready for a free review?</h3>
              <p className="mt-3 text-dark-500 leading-relaxed">{service.callToAction}</p>
            </div>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-white font-medium hover:bg-primary-700"
            >
              Get Free Consultation
            </Link>
            <div className="rounded-2xl bg-primary-50 p-4 text-sm text-dark-500">
              Trusted on AI initiatives, SaaS launches, and automation programs for startups and growth-stage teams.
            </div>
          </aside>
        </div>
      </div>
    </PageSection>
  )
}
