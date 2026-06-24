export interface PageContent {
  slug: string
  title: string
  tagline: string
  description: string
  features: string[]
  highlights: string[]
  seoDescription: string
  callToAction: string
}

export const servicePages: PageContent[] = [
  {
    slug: 'ai-development-services',
    title: 'AI Development Services',
    tagline: 'Custom AI applications, automation, and intelligent software solutions.',
    description:
      'CookieSoft builds AI software that transforms business operations, customer experiences, and product workflows with modern machine learning and automation.',
    features: [
      'Custom machine learning systems',
      'Natural language applications',
      'RAG-enabled knowledge tools',
      'AI strategy and architecture',
      'Data pipelines and model integration',
    ],
    highlights: [
      'Build scalable AI products from concept to launch',
      'Integrate AI into legacy systems and enterprise workflows',
      'Optimize user experiences with intelligent automation',
    ],
    seoDescription:
      'AI Development Services by CookieSoft — custom AI apps, ML pipelines, intelligent automation, and enterprise AI solutions for startups and growing businesses.',
    callToAction: 'Book a free AI strategy session and explore your automation roadmap.',
  },
  {
    slug: 'ai-agent-development',
    title: 'AI Agent Development',
    tagline:
      'Intelligent AI agents that automate support, sales, operations, and business workflows.',
    description:
      'We build AI agents that act, respond, and optimize business actions using conversational AI, task automation, and deep workflow integration.',
    features: [
      'Customer support assistants',
      'Sales and lead automation',
      'Workflow orchestration bots',
      'Context-aware decision agents',
      'Custom API integrations',
    ],
    highlights: [
      'Reduce manual workload with intelligent automation',
      'Deploy conversational agents across web, mobile, and business apps',
      'Connect agents to CRM, ERP, and backend systems',
    ],
    seoDescription:
      'AI Agent Development from CookieSoft — intelligent assistants and automation agents for customer support, operations, sales, and business workflows.',
    callToAction: 'Discover how an AI agent can streamline your business operations.',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Product Development',
    tagline:
      'Build multi-tenant SaaS platforms with subscriptions, billing, and growth-ready architecture.',
    description:
      'CookieSoft develops SaaS products with secure onboarding, subscription management, analytics, and modular architecture for rapid growth.',
    features: [
      'Multi-tenant SaaS architecture',
      'Subscription and billing systems',
      'User management and permissions',
      'Scalable cloud infrastructure',
      'Performance and reliability engineering',
    ],
    highlights: [
      'Launch SaaS MVPs faster with production-ready architecture',
      'Support ongoing product growth and customer success',
      'Increase conversion and retention with intuitive workflows',
    ],
    seoDescription:
      'SaaS Product Development by CookieSoft — custom subscription software, multi-tenant platforms, and scalable SaaS engineering.',
    callToAction: 'Start your SaaS product journey with a free architecture review.',
  },
  {
    slug: 'e-commerce-development',
    title: 'E-Commerce Development',
    tagline: 'Custom commerce platforms, marketplaces, and online storefronts that convert.',
    description:
      'CookieSoft builds scalable e-commerce applications with personalized shopping, secure payments, inventory automation, and growth-ready operational workflows.',
    features: [
      'Custom storefront and marketplace platforms',
      'Payment gateway and subscription integrations',
      'Inventory and order management',
      'Personalization and product recommendations',
      'Performance optimization for high traffic',
    ],
    highlights: [
      'Launch e-commerce experiences that drive conversions',
      'Automate commerce operations from catalog to fulfillment',
      'Support both B2B and B2C commerce growth.',
    ],
    seoDescription:
      'E-Commerce Development by CookieSoft — custom online stores, marketplaces, and commerce systems for digital growth.',
    callToAction: 'Build your next e-commerce platform with a free product review.',
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    tagline: 'Responsive, scalable web applications built for modern businesses.',
    description:
      'From dashboards and marketplaces to internal portals and customer platforms, we create web applications designed for performance and usability.',
    features: [
      'React and Next.js frontends',
      'Progressive web apps',
      'REST and GraphQL APIs',
      'Secure authentication and authorization',
      'Performance optimization and SEO readiness',
    ],
    highlights: [
      'Build web products that scale as usage grows',
      'Deliver polished experiences across desktop and mobile',
      'Launch fast with maintainable architecture and modern tooling',
    ],
    seoDescription:
      'Web Application Development at CookieSoft — modern responsive web apps, dashboards, portals, and digital products for startups and enterprises.',
    callToAction: 'Talk to an expert about your next web application.',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Cross-platform and native mobile apps for iOS and Android.',
    description:
      'We deliver mobile experiences with Flutter, React Native, Kotlin, and Swift so your product feels polished and performs well on every device.',
    features: [
      'Cross-platform React Native apps',
      'Native Android and iOS development',
      'App store release support',
      'Offline-first and sync workflows',
      'Mobile analytics and performance tuning',
    ],
    highlights: [
      'Create mobile apps that engage users and support growth',
      'Connect mobile experiences with backend systems and APIs',
      'Launch apps optimized for performance and user retention',
    ],
    seoDescription:
      'Mobile App Development by CookieSoft — cross-platform and native mobile applications for iOS, Android, and enterprise mobility.',
    callToAction: 'Plan your mobile app with a free consultation.',
  },
  {
    slug: 'erp-development',
    title: 'ERP Development',
    tagline: 'Custom ERP systems tailored to your operational workflows.',
    description:
      'CookieSoft builds ERP platforms that centralize finance, inventory, sales, HR, and operations with automation and real-time reporting.',
    features: [
      'Inventory and supply chain management',
      'Finance and billing automation',
      'Human resource workflows',
      'Reporting dashboards',
      'Role-based access controls',
    ],
    highlights: [
      'Replace disconnected systems with a unified ERP platform',
      'Improve visibility, forecasting, and business efficiency',
      'Deliver secure, enterprise-ready applications',
    ],
    seoDescription:
      'ERP Development from CookieSoft — custom enterprise resource planning systems for manufacturing, logistics, finance, and operations.',
    callToAction: 'Explore how an ERP system can streamline your business.',
  },
  {
    slug: 'crm-development',
    title: 'CRM Development',
    tagline: 'CRM solutions built around your sales and customer processes.',
    description:
      'We create CRM applications that improve lead management, customer journeys, sales automation, and retention for business growth.',
    features: [
      'Sales pipeline management',
      'Lead capture and nurturing',
      'Customer lifecycle tracking',
      'Automation and notifications',
      'Analytics and reporting',
    ],
    highlights: [
      'Build a CRM that matches your sales motion',
      'Enhance customer relationships with automation and intelligence',
      'Track performance with real-time insight dashboards',
    ],
    seoDescription:
      'CRM Development services by CookieSoft — custom customer relationship management systems for sales, service, and retention.',
    callToAction: 'Start your CRM transformation with a free software review.',
  },
  {
    slug: 'business-automation-solutions',
    title: 'Business Automation Solutions',
    tagline: 'Automate workflows, document processing, and repetitive tasks with AI and integrations.',
    description:
      'CookieSoft builds automation solutions that reduce manual work, speed up decision making, and connect business systems for higher productivity.',
    features: [
      'Process automation and workflow orchestration',
      'OCR and document intelligence',
      'Chatbots and intake automation',
      'ERP/CRM integrations',
      'Task triggers and notifications',
    ],
    highlights: [
      'Eliminate repetitive work with intelligent workflows',
      'Connect systems and data to automate end-to-end processes',
      'Create business automation that scales with your team',
    ],
    seoDescription:
      'Business Automation Solutions by CookieSoft — automation, OCR, document workflows, and AI-powered process optimization for businesses.',
    callToAction: 'See how automation can free your team from manual tasks.',
  },
]

export const productPages: PageContent[] = [
  {
    slug: 'analytics-platform',
    title: 'Analytics Platform',
    tagline: 'Turn data into actionable business intelligence and growth signals.',
    description:
      'CookieSoft builds analytics platforms that unify data, dashboards, and reporting for faster decisions and better operational visibility.',
    features: [
      'Custom dashboards and KPI tracking',
      'Automated reporting and alerts',
      'Data integrations from CRM, ERP, and marketing systems',
      'Interactive charts and operational views',
      'Secure multi-user access',
    ],
    highlights: [
      'Make better decisions with real-time business data',
      'Surface the metrics that matter across teams',
      'Create a single source of truth for performance insight',
    ],
    seoDescription: 'Analytics Platform by CookieSoft — data dashboards and business intelligence for growth-focused companies.',
    callToAction: 'See how analytics can unlock new revenue and efficiency.',
  },
  {
    slug: 'crm-pro',
    title: 'CRM Pro',
    tagline: 'A modern CRM built to streamline sales, service, and customer retention.',
    description:
      'CRM Pro is designed for fast-moving teams that need predictable pipeline management, automation, and customer lifecycle visibility.',
    features: [
      'Lead capture and pipeline management',
      'Automated follow-up workflows',
      'Customer history and activity tracking',
      'Centralized sales and support tools',
      'Reporting for sales performance and retention',
    ],
    highlights: [
      'Improve follow-up speed and deal visibility',
      'Automate routine sales tasks and reminders',
      'Turn customer data into actionable insights',
    ],
    seoDescription: 'CRM Pro by CookieSoft — CRM software for sales, support, and customer success teams.',
    callToAction: 'Transform customer relationships with a free CRM review.',
  },
  {
    slug: 'smart-billing',
    title: 'Smart Billing',
    tagline: 'Automated billing, invoices, and subscription management for modern businesses.',
    description:
      'Smart Billing helps teams reduce manual finance work, improve invoicing accuracy, and keep recurring revenue flowing smoothly.',
    features: [
      'Invoice generation and tracking',
      'Subscription and payment automation',
      'Tax and compliance-ready billing workflows',
      'Payment gateway integrations',
      'Financial reporting and reconciliation',
    ],
    highlights: [
      'Reduce billing errors and collection time',
      'Simplify subscription renewals and upgrades',
      'Keep finance workflows aligned with growth.',
    ],
    seoDescription: 'Smart Billing by CookieSoft — automated invoicing and subscription billing systems for growing businesses.',
    callToAction: 'Automate your billing with a free finance workflow review.',
  },
  {
    slug: 'commerce-suite',
    title: 'Commerce Suite',
    tagline: 'A complete commerce platform for catalog, checkout, and order orchestration.',
    description:
      'Commerce Suite delivers a unified commerce experience with storefront, backend operations, payment workflows, and order management.',
    features: [
      'Flexible product catalog and pricing',
      'Checkout and payment orchestration',
      'Order and fulfillment tracking',
      'Customer accounts and loyalty workflows',
      'Sales analytics and inventory insights',
    ],
    highlights: [
      'Launch a complete commerce system faster',
      'Support both direct-to-consumer and wholesale workflows',
      'Improve checkout conversion with modern UX.',
    ],
    seoDescription: 'Commerce Suite by CookieSoft — full commerce software for sales, checkout, and order management.',
    callToAction: 'Build commerce that scales with your business.',
  },
]

export const industryPages: PageContent[] = [
  {
    slug: 'ai-solutions-healthcare',
    title: 'AI Solutions for Healthcare',
    tagline: 'AI systems that improve patient care, scheduling, and operational efficiency.',
    description:
      'CookieSoft delivers healthcare AI solutions for clinical workflows, telehealth, patient engagement, and operational automation.',
    features: [
      'Clinical decision support tools',
      'Patient communication automation',
      'Medical reporting and analytics',
      'Appointment and resource scheduling',
      'Secure data handling and compliance',
    ],
    highlights: [
      'Improve care coordination and patient outcomes',
      'Reduce administrative overhead in healthcare operations',
      'Build secure, compliant healthcare software',
    ],
    seoDescription:
      'AI Solutions for Healthcare by CookieSoft — intelligent software for patient care, telehealth, analytics, and healthcare workflows.',
    callToAction:
      'Start your healthcare AI project with a free consultation.',
  },
  {
    slug: 'ai-solutions-education',
    title: 'AI Solutions for Education',
    tagline: 'Adaptive learning platforms and education automation systems.',
    description:
      'We develop AI-driven education software that improves learning outcomes, automates administration, and personalizes course delivery.',
    features: [
      'Adaptive tutoring systems',
      'Student progress analytics',
      'Content generation and recommendations',
      'Learning management integrations',
      'Automated student support',
    ],
    highlights: [
      'Deliver personalized learning experiences at scale',
      'Reduce administrative burden for schools and training teams',
      'Build education platforms that engage learners',
    ],
    seoDescription:
      'AI Solutions for Education from CookieSoft — intelligent learning platforms, analytics, and automation for modern education.',
    callToAction: 'Book a free strategy session for education technology.',
  },
  {
    slug: 'ai-solutions-real-estate',
    title: 'AI Solutions for Real Estate',
    tagline: 'Property intelligence, automated lead follow-up, and portfolio analytics.',
    description:
      'CookieSoft builds AI systems for real estate teams, including property management, lead automation, pricing insights, and customer engagement.',
    features: [
      'Lead qualification and follow-up automation',
      'Property matching and recommendations',
      'Portfolio performance dashboards',
      'Tenant and lease management workflows',
      'Market analytics and pricing tools',
    ],
    highlights: [
      'Streamline property operations with intelligent automation',
      'Deliver faster responses and better customer engagement',
      'Make data-driven property decisions with analytics',
    ],
    seoDescription:
      'AI Solutions for Real Estate by CookieSoft — property intelligence, lead automation, analytics, and smart real estate software.',
    callToAction: 'Explore real estate AI solutions with a free consultation.',
  },
  {
    slug: 'ai-solutions-ecommerce',
    title: 'AI Solutions for E-commerce',
    tagline: 'AI-driven commerce, personalization, and operations automation.',
    description:
      'We deliver AI solutions that improve product discovery, customer experiences, inventory forecasting, and backend automation for e-commerce brands.',
    features: [
      'Personalized shopping experiences',
      'Search and recommendation engines',
      'Inventory demand forecasting',
      'Order automation and fulfillment workflows',
      'Customer service chatbots',
    ],
    highlights: [
      'Increase conversions with AI-driven personalization',
      'Reduce stockouts and fulfillment issues',
      'Automate repeat e-commerce processes',
    ],
    seoDescription:
      'AI Solutions for E-commerce from CookieSoft — personalization, search, automation, and analytics for online retail.',
    callToAction: 'Start your e-commerce AI project with a free strategy call.',
  },
  {
    slug: 'ai-solutions-logistics',
    title: 'AI Solutions for Logistics',
    tagline: 'Optimize logistics, fleet operations, and supply chains with AI.',
    description:
      'CookieSoft builds logistics intelligence software for route planning, inventory tracking, warehouse automation, and supply chain visibility.',
    features: [
      'Route optimization and dispatch systems',
      'Fleet tracking dashboards',
      'Inventory and warehouse automation',
      'Predictive delivery analytics',
      'Supply chain visibility tools',
    ],
    highlights: [
      'Reduce logistics costs with optimized operations',
      'Improve delivery reliability and visibility',
      'Integrate logistics systems across your network',
    ],
    seoDescription:
      'AI Solutions for Logistics by CookieSoft — intelligent freight, routing, fleet and supply chain software.',
    callToAction: 'Book a logistics automation consultation.',
  },
]

export interface BlogPost {
  slug: string
  title: string
  category: string
  excerpt: string
  published: string
  readTime: string
  content: string
  seoDescription: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-agent-development-trends-2026',
    title: 'AI Agent Development Trends for 2026',
    category: 'AI Agents',
    excerpt: 'Discover the latest AI agent capabilities that are reshaping customer support, sales automation, and business workflows.',
    published: 'June 2026',
    readTime: '5 min read',
    content:
      'AI agents are evolving into intelligent business tools that can handle support requests, automate sales outreach, streamline operations, and connect with enterprise systems. In 2026, businesses are looking for agents that are context-aware, can act on behalf of humans, and integrate seamlessly with CRM and ERP platforms. CookieSoft helps companies build agents that reduce manual work, improve response quality, and deliver measurable ROI by combining OpenAI, LangChain, and custom automation workflows.',
    seoDescription:
      'Learn about AI agent development trends for 2026, including support automation, sales workflows, and enterprise AI agents.',
  },
  {
    slug: 'rag-systems-and-enterprise-search',
    title: 'RAG Systems and Enterprise Search',
    category: 'RAG',
    excerpt: 'How Retrieval-Augmented Generation improves knowledge work, customer support, and reporting with smarter search.',
    published: 'May 2026',
    readTime: '6 min read',
    content:
      'Retrieval-Augmented Generation (RAG) combines vector search with generative AI to create highly accurate and context-rich responses. For businesses, this means better knowledge bases, smarter customer support bots, and faster decision-making. CookieSoft builds RAG systems that connect your internal documents, CRM data, and product knowledge into a secure, searchable AI layer.',
    seoDescription:
      'Explore RAG systems, enterprise search, and how AI can improve knowledge workflows and customer experiences.',
  },
  {
    slug: 'automation-audits-for-scalable-growth',
    title: 'Automation Audits for Scalable Growth',
    category: 'Automation',
    excerpt: 'Why every growing business should perform an automation audit before building AI workflows and process software.',
    published: 'April 2026',
    readTime: '4 min read',
    content:
      'An automation audit identifies the highest-value workflows, data bottlenecks, and integration points in your business. CookieSoft helps companies prioritize automation opportunities, design secure workflows, and build scalable systems that support both AI-driven processes and traditional software automation. The result is faster implementation, lower risk, and more reliable business outcomes.',
    seoDescription:
      'Learn how automation audits can help businesses scale by identifying high-value AI and workflow opportunities.',
  },
]

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}

export function getIndustryBySlug(slug: string) {
  return industryPages.find((industry) => industry.slug === slug)
}

export function getProductBySlug(slug: string) {
  return productPages.find((product) => product.slug === slug)
}

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
