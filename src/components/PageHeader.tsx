type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: PageHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} max-w-3xl mx-auto mb-16 ${className}`}>
      {eyebrow ? (
        <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
          {eyebrow}
        </span>
      ) : null}
      <h1 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-900 tracking-tight">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-dark-400 text-lg leading-relaxed">{description}</p>
      ) : null}
    </div>
  )
}
