import { Link } from 'react-router-dom'
import { industryPages } from '../data/content'
import { useInView } from '../hooks/useInView'
import PageHeader from '../components/PageHeader'
import PageSection from '../components/PageSection'

export default function IndustryIndex() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <PageSection ref={ref} background="gray">
      <PageHeader
        eyebrow="Industry Solutions"
        title="AI Solutions for Key Industries"
        description="Dedicated enterprise AI solutions for healthcare, education, real estate, e-commerce, and logistics."
      />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryPages.map((industry, index) => (
            <div
              key={industry.slug}
              className={`rounded-3xl border border-dark-100 bg-white p-8 shadow-sm transition hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h2 className="text-xl font-semibold text-dark-900">{industry.title}</h2>
              <p className="mt-3 text-dark-500 text-sm leading-relaxed">{industry.tagline}</p>
              <p className="mt-5 text-dark-600 text-sm">{industry.description}</p>
              <Link
                to={`/solutions/${industry.slug}`}
                className="inline-flex mt-8 items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Explore solutions
              </Link>
            </div>
          ))}
        </div>
    </PageSection>
  )
}
