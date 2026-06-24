import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { blogPosts } from '../data/content'

export default function BlogSection() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section id="blog" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
            Insights
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
            Content for AI, automation, and modern software leaders
          </h2>
          <p className="mt-4 text-dark-500 text-lg leading-relaxed">
            Read practical guides and trends for AI agents, RAG systems, SaaS products, and business automation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className={`rounded-3xl border border-dark-100 bg-white p-8 shadow-sm transition duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="text-sm text-primary-600 uppercase tracking-[0.2em] font-semibold">
                {post.category}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-dark-900 leading-tight">
                {post.title}
              </h3>
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
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-dark-100 bg-white p-10 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-primary-600 font-semibold uppercase tracking-[0.3em] text-sm">
                Free AI strategy session
              </span>
              <h3 className="mt-4 text-3xl font-bold text-dark-900">
                Turn your next AI idea into a launch plan
              </h3>
              <p className="mt-4 text-dark-500 leading-relaxed">
                Book a free 30-minute AI strategy session and discover where automation, RAG, and AI agents can deliver the fastest impact for your business.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
              >
                Schedule your session
              </Link>
              <p className="text-sm text-dark-500">
                No commitment, just expert insight into your next AI product or automation workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
