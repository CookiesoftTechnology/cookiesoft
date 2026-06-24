import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PageSection from '../components/PageSection'

export default function NotFound() {
  return (
    <PageSection background="white">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Page Not Found"
          description="The page you are looking for does not exist."
        />
        <div className="text-center">
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700 transition"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </PageSection>
  )
}
