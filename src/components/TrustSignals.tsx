export default function TrustSignals() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Trust & Security</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight">Certifications, security, and business trust built in</h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            We provide transparency, compliance, and enterprise-grade security for every project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-dark-600/50 bg-dark-900/70 p-8 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <h3 className="font-semibold text-slate-100">Certifications</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• AWS Certified</li>
              <li>• Google Cloud Partner-ready</li>
              <li>• Microsoft Azure aligned</li>
              <li>• Meta Developer-ready solutions</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-dark-600/50 bg-dark-900/70 p-8 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <h3 className="font-semibold text-slate-100">Security</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• GDPR compliance and privacy-first design</li>
              <li>• NDA available for every engagement</li>
              <li>• Secure development lifecycle</li>
              <li>• Data protection and access controls</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-dark-600/50 bg-dark-900/70 p-8 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <h3 className="font-semibold text-slate-100">Business Information</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Registered company details on request</li>
              <li>• GST / tax compliance support</li>
              <li>• Global client delivery model</li>
              <li>• Office address and business verification</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
