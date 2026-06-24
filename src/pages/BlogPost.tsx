import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBlogBySlug } from '../data/content'
import PageHeader from '../components/PageHeader'
import PageSection from '../components/PageSection'

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getBlogBySlug(slug) : undefined

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | CookieSoft`
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', post.seoDescription)
    }
  }, [post])

  if (!post) {
    return (
      <PageSection background="white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-dark-900">Article Not Found</h1>
          <p className="mt-4 text-dark-500">The blog post you're looking for does not exist.</p>
          <Link to="/blog" className="mt-6 inline-flex px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition">
            Browse blog articles
          </Link>
        </div>
      </PageSection>
    )
  }

  return (
    <PageSection background="white">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          eyebrow={post.category}
          title={post.title}
          description={`${post.published} • ${post.readTime}`}
        />

        <div className="prose prose-invert max-w-none text-dark-600">
          <p>{post.content}</p>
        </div>

        <div className="mt-10 rounded-3xl border border-dark-100 bg-primary-50/60 p-8">
          <h2 className="text-2xl font-semibold text-dark-900">Ready for your next AI or automation project?</h2>
          <p className="mt-4 text-dark-500 leading-relaxed">Schedule a free 30-minute AI strategy session and learn how CookieSoft can help you build smarter software.</p>
          <Link to="/" className="inline-flex mt-6 items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-white font-medium hover:bg-primary-700">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </PageSection>
  )
}
