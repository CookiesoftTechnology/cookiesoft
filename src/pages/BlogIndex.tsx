import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/content'
import { useInView } from '../hooks/useInView'
import PageHeader from '../components/PageHeader'
import PageSection from '../components/PageSection'

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { ref, isVisible } = useInView(0.1)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(blogPosts.map((post) => post.category))).sort((a, b) => a.localeCompare(b))],
    [],
  )

  const filteredPosts = useMemo(
    () =>
      selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory),
    [selectedCategory],
  )

  return (
    <PageSection ref={ref} background="white">
      <PageHeader
        eyebrow="Blog"
        title="AI, Automation and SaaS Insights"
        description="Explore actionable content for product leaders, founders, and teams building modern software."
      />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'border-primary-600 bg-primary-50 text-primary-700'
                  : 'border-dark-100 bg-white text-dark-600 hover:border-primary-200 hover:text-dark-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`rounded-3xl border border-dark-100 bg-white p-8 shadow-sm transition duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="text-sm text-primary-600 uppercase tracking-[0.2em] font-semibold">
                {post.category}
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-dark-900 leading-tight">
                {post.title}
              </h2>
              <p className="mt-4 text-dark-500 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-dark-400">
                <span>{post.published}</span>
                <span>{post.readTime}</span>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex mt-6 items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="mt-12 rounded-3xl border border-primary-200 bg-primary-50 p-8 text-center text-dark-700">
            <p className="text-lg font-semibold">No posts match this category yet.</p>
            <p className="mt-2 text-sm text-dark-500">Try another topic or return to the full blog list.</p>
          </div>
        )}

        <div className="mt-20 rounded-[2rem] border border-dark-100 bg-primary-600 px-8 py-10 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-100 font-semibold">
              Free strategy session
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Get a free 30-minute AI strategy session
            </h2>
            <p className="mt-4 text-sm leading-6 text-primary-100">
              Book personalized guidance on AI agents, RAG systems, automation audits, and SaaS growth strategy.
            </p>
            <Link
              to="/#contact"
              className="inline-flex mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-100"
            >
              Schedule your session
            </Link>
          </div>
        </div>
    </PageSection>
  )
}
