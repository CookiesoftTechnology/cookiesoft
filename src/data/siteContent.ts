import type { IconType } from 'react-icons'
import { HiGlobeAlt, HiDevicePhoneMobile, HiCloud, HiServer, HiShieldCheck, HiArrowPath, HiCodeBracketSquare, HiCpuChip, HiSparkles, HiServerStack, HiEnvelope } from 'react-icons/hi2'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export type NavLink =
  | { label: string; href: string }
  | { label: string; to: string }
export type ServiceItem = { icon: IconType; title: string; description: string }
export type CaseStudy = { title: string; category: string; problem: string; solution: string; results: string; tech: string }
export type Testimonial = { quote: string; name: string; role: string; company: string }
export type FAQItem = { question: string; answer: string }
export type TechGroup = { title: string; subtitle: string; items: string[] }
export type Stat = { value: string; label: string }
export type FooterLinkGroup = { title: string; links: ({ label: string; href: string } | { label: string; to: string })[] }

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const serviceItems: ServiceItem[] = [
  { icon: HiCodeBracketSquare, title: 'Custom Software Development', description: 'End-to-end software solutions engineered for performance, security, and scale.' },
  { icon: HiGlobeAlt, title: 'Web Applications', description: 'Modern, responsive web apps built with React, Next.js, and cutting-edge frameworks.' },
  { icon: HiDevicePhoneMobile, title: 'Mobile Development', description: 'Cross-platform mobile apps with React Native and Flutter for iOS and Android.' },
  { icon: HiCloud, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure on AWS, GCP, and Azure with DevOps automation.' },
  { icon: HiServer, title: 'Enterprise Software', description: 'Custom CRM, ERP, and business systems tailored to your operational needs.' },
  { icon: HiShieldCheck, title: 'Cybersecurity', description: 'Security audits, compliance tools, and privacy management platforms.' },
  { icon: HiArrowPath, title: 'Process Automation', description: 'Intelligent workflow automation that eliminates repetitive tasks and boosts efficiency.' },
  { icon: HiCpuChip, title: 'AI Agent Development', description: 'Build intelligent agents to automate support, sales, and operations.' },
  { icon: HiSparkles, title: 'Generative AI Solutions', description: 'Custom AI assistants, content generation tools, and generative platforms.' },
  { icon: HiCodeBracketSquare, title: 'SaaS Product Development', description: 'End-to-end SaaS platforms with multi-tenancy, subscriptions, and billing.' },
  { icon: HiCodeBracketSquare, title: 'API Development & Integration', description: 'Secure APIs and integrations connecting CRM, ERP, payments, and third-party systems.' },
  { icon: HiServerStack, title: 'Data Analytics & BI', description: 'Custom dashboards, reporting systems, KPI tracking, and real-time business intelligence.' },
  { icon: HiGlobeAlt, title: 'E-Commerce Development', description: 'Scalable online stores, marketplaces, and custom commerce platforms.' },
  { icon: HiServer, title: 'ERP & CRM Development', description: 'Tailored ERP and CRM systems built around your business processes.' },
  { icon: HiDevicePhoneMobile, title: 'IoT Application Development', description: 'Connected device platforms, sensor monitoring, and smart automation.' },
  { icon: HiCloud, title: 'DevOps & Infrastructure Engineering', description: 'CI/CD, containerization, orchestration, monitoring, and infrastructure automation.' },
  { icon: HiCpuChip, title: 'AI-Powered Business Automation', description: 'AI-driven OCR, document processing, chatbots, and workflow optimization.' },
]

export const serviceOptions = serviceItems.map((service) => ({ value: service.title, label: service.title }))

export const bookingUrl = 'https://calendly.com/cookiesoft/30min-ai-strategy-session'

export const socialStats: Stat[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '20+', label: 'Happy Clients' },
  { value: '5+', label: 'Countries Served' },
  { value: '99%', label: 'Client Satisfaction' },
]

export const trustedLogos = ['AC', 'BL', 'CM', 'DX']

export const caseStudies: CaseStudy[] = [
  {
    title: 'Inventory Automation System',
    category: 'Retail Operations',
    problem: 'Manual order processing and inventory tracking caused delays and stockouts.',
    solution: 'Implemented an automated inventory dashboard, order pipeline, and reporting engine with AI forecasting.',
    results: 'Reduced processing time by 60% and improved stock accuracy by 45%.',
    tech: 'React, Node.js, Postgres, OpenAI, AWS',
  },
  {
    title: 'AI Sales Assistant',
    category: 'Sales Automation',
    problem: 'Sales teams wasted time on repetitive customer research and follow-ups.',
    solution: 'Built an AI assistant that qualified leads, generated outreach messaging, and integrated with CRM workflows.',
    results: 'Boosted lead response velocity by 70% and increased qualified pipeline by 35%.',
    tech: 'Next.js, Python, LangChain, HubSpot API',
  },
  {
    title: 'Marketplace SaaS Launch',
    category: 'E-Commerce',
    problem: 'A startup needed a launch-ready marketplace with subscriptions and vendor portals.',
    solution: 'Delivered a multi-tenant SaaS platform, payment orchestration, and admin tools for vendors.',
    results: 'Enabled launch in 12 weeks with a scalable platform and recurring revenue model.',
    tech: 'React, Node.js, Stripe, MongoDB, Kubernetes',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'CookieSoft reduced our manual workload by 70% through AI automation.',
    name: 'Priya Sharma',
    role: 'Operations Lead',
    company: 'Mithilakart',
  },
  {
    quote: 'Their SaaS architecture helped us scale quickly and keep costs predictable.',
    name: 'Amit Joshi',
    role: 'Founder',
    company: 'Mithilakart',
  },
  {
    quote: 'The custom AI assistant made our customer support team 50% more efficient.',
    name: 'Sara Khan',
    role: 'Head of Support',
    company: 'Mithilakart',
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'How long does software development take?',
    answer: 'Project timelines vary by scope, but most MVPs take 8–16 weeks. We provide a tailored plan after the first consultation.',
  },
  {
    question: 'How much does AI development cost?',
    answer: 'Pricing depends on complexity, data needs, and integrations. We offer budget guidance and phased delivery to reduce risk.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes. We sign NDAs and protect your intellectual property from day one.',
  },
  {
    question: 'Do you offer support after launch?',
    answer: 'Yes. We offer ongoing maintenance, enhancements, and monitoring services to keep systems secure and performant.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We work with React, Next.js, Node, Python, cloud platforms, AI frameworks, and modern DevOps tooling to build scalable software.',
  },
]

export const techGroups: TechGroup[] = [
  {
    title: 'Frontend Development',
    subtitle: 'Responsive, interactive, and user-friendly interfaces.',
    items: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    subtitle: 'Robust and scalable server-side solutions.',
    items: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Django', 'FastAPI', 'PHP', 'Laravel', 'ASP.NET Core', 'Java Spring Boot'],
  },
  {
    title: 'Mobile App Development',
    subtitle: 'Cross-platform and native mobile applications.',
    items: ['Flutter', 'React Native', 'Android (Kotlin)', 'iOS (Swift)'],
  },
  {
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent applications powered by modern AI technologies.',
    items: ['OpenAI GPT', 'Claude AI', 'Gemini AI', 'LangChain', 'LlamaIndex', 'Vector DBs', 'AI Agents', 'RAG Systems'],
  },
  {
    title: 'Database Technologies',
    subtitle: 'Secure and optimized data management solutions.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Firebase', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Reliable infrastructure and seamless deployment pipelines.',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'GitHub Actions', 'Jenkins'],
  },
  {
    title: 'ERP & Business Automation',
    subtitle: 'Custom business solutions that streamline operations.',
    items: ['ERP Development', 'CRM Development', 'HRMS Solutions', 'Inventory Management', 'Workflow Automation', 'Business Process Management'],
  },
  {
    title: 'E-Commerce Solutions',
    subtitle: 'Scalable online stores and marketplace platforms.',
    items: ['Shopify', 'WooCommerce', 'Magento', 'Custom E-Commerce Development'],
  },
  {
    title: 'APIs & Integrations',
    subtitle: 'Connecting systems for seamless business operations.',
    items: ['REST APIs', 'GraphQL', 'Payment Gateways', 'WhatsApp Business API', 'Google APIs', 'Third-Party Integrations'],
  },
]

export const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Applications', to: '/services/web-application-development' },
      { label: 'AI Agent Development', to: '/services/ai-agent-development' },
      { label: 'SaaS Product Development', to: '/services/saas-development' },
      { label: 'E-Commerce Development', to: '/services/e-commerce-development' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Analytics Platform', to: '/products/analytics-platform' },
      { label: 'CRM Pro', to: '/products/crm-pro' },
      { label: 'Smart Billing', to: '/products/smart-billing' },
      { label: 'Commerce Suite', to: '/products/commerce-suite' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'AI Division', to: '/#ai' },
      { label: 'Developer Tools', to: '/#devtools' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export const footerSocialLinks = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=100064764678576', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/cookiesofttech', label: 'X' },
  { icon: FaInstagram, href: 'https://www.instagram.com/cookiesoft_technology', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/cookiesoft', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@cookiesoftinfo', label: 'YouTube' },
  { icon: HiEnvelope, href: 'mailto:myindialogin@gmail.com', label: 'Email' },
]

export const footerCopyright = {
  startYear: 2018,
  company: 'CookieSoft',
  website: 'https://www.cookiesoft.in',
}
