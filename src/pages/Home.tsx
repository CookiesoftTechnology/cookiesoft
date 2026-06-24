import About from '../components/About'
import AIDivision from '../components/AIDivision'
import Contact from '../components/Contact'
import DevTools from '../components/DevTools'
import Hero from '../components/Hero'
import DevelopmentJourney from '../components/DevelopmentJourney'
import SaaSProducts from '../components/SaaSProducts'
import Services from '../components/Services'
import SocialProof from '../components/SocialProof'
import TechStack from '../components/TechStack'
import TrustSignals from '../components/TrustSignals'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import Faq from '../components/FAQ'

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Hero />
      <Services />
      <DevelopmentJourney />
      <SocialProof />
      <BlogSection />
      <TrustSignals />
      <TechStack />
      <AIDivision />
      <SaaSProducts />
      <DevTools />
      <CaseStudies />
      <Testimonials />
      <Faq />
      <About />
      <Contact />
    </main>
  )
}
