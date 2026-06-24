import { Link } from 'react-router-dom'
import { servicePages } from '../data/content'
import { useInView } from '../hooks/useInView'
import PageHeader from '../components/PageHeader'
import PageSection from '../components/PageSection'

export default function ServiceIndex() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <PageSection ref={ref} background="white">
      <PageHeader
        eyebrow="Services"
        title="AI, SaaS & Web Development Services"
        description="Dedicated service pages for AI development, SaaS platforms, enterprise software, and business automation."
      />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service, index) => (
            <div
              key={service.slug}
              className={`rounded-3xl border border-dark-100 bg-white p-8 shadow-sm transition hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h2 className="text-xl font-semibold text-dark-900">{service.title}</h2>
              <p className="mt-3 text-dark-500 text-sm leading-relaxed">{service.tagline}</p>
              <p className="mt-5 text-dark-600 text-sm">{service.description}</p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex mt-8 items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
    </PageSection>
  )
}
