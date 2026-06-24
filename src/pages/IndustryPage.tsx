import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getIndustryBySlug } from '../data/content'
import PageHeader from '../components/PageHeader'
import PageSection from '../components/PageSection'

export default function IndustryPage() {
  const { slug } = useParams()
  const industry = slug ? getIndustryBySlug(slug) : undefined

  useEffect(() => {
    if (industry) {
      document.title = `${industry.title} | CookieSoft`
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', industry.seoDescription)
    }
  }, [industry])

  if (!industry) {
    return (
      <PageSection background="gray">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-dark-900">Industry Page Not Found</h1>
          <p className="mt-4 text-dark-500">The industry page you requested does not exist.</p>
          <Link to="/solutions" className="mt-6 inline-flex px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition">
            View Industry Solutions
          </Link>
        </div>
      </PageSection>
    )
  }

  return (
    <PageSection background="gray">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          eyebrow="Industry Focus"
          title={industry.title}
          description={industry.tagline}
        />

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-dark-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-dark-900">How AI helps this industry</h2>
              <p className="mt-4 text-dark-500 leading-relaxed">{industry.description}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-dark-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-900">Key outcomes</h3>
                <ul className="mt-4 space-y-3 text-dark-500">
                  {industry.highlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">• {highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-dark-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-dark-900">What we build</h3>
                <ul className="mt-4 space-y-3 text-dark-500">
                  {industry.features.map((feature) => (
                    <li key={feature} className="leading-relaxed">• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-dark-100 bg-white p-8 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-dark-900">Interested in a free review?</h3>
              <p className="mt-3 text-dark-500 leading-relaxed">{industry.callToAction}</p>
            </div>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-white font-medium hover:bg-primary-700"
            >
              Schedule a free consultation
            </Link>
            <div className="rounded-2xl bg-primary-50 p-4 text-sm text-dark-500">
              Secure, compliant industry AI solutions with NDA and data privacy best practices.
            </div>
          </aside>
        </div>
      </div>
    </PageSection>
  )
}
