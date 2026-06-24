import { forwardRef } from 'react'
import type { ReactNode } from 'react'

type PageSectionProps = {
  children: ReactNode
  background?: 'white' | 'gray' | 'primary'
  className?: string
}

const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  ({ children, background = 'white', className = '' }, ref) => {
    const bgClasses = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      primary: 'bg-primary-50',
    }

    return (
      <section ref={ref} className={`py-24 ${bgClasses[background]} ${className}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {children}
        </div>
      </section>
    )
  },
)

PageSection.displayName = 'PageSection'

export default PageSection
