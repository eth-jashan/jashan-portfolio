export const personalInfo = {
  name: 'Jashan Shetty',
  ticker: 'JSHN',
  title: 'Senior Full-Stack Engineer',
  tagline: 'AI Agents · Web3 / DeFi Rails · Mobile-Native Fintech',
  email: 'jashanshetty1709@gmail.com',
  phone: '+91 98207 69479',
  location: 'Remote — Bangalore, India',
  github: 'https://github.com/eth-jashan',
  githubHandle: '@eth-jashan',
  linkedin: 'https://www.linkedin.com/in/jashan-shetty-aa1501141/',
  resumeUrl: '/JashanShetty.pdf',
  bio: 'Full-stack engineer with 5+ years shipping production web, mobile, and on-chain systems end-to-end across fast-moving startups — where AI agents, crypto/DeFi rails, and mobile-native consumer products converge.',
  summary: [
    'Co-founded and shipped Xybit — a white-labelled derivatives / prop-firm platform under Xade, owned architecture-to-deployment',
    'Drove a gas-less, account-abstracted cross-chain trading app to an estimated $500K launch readiness on Android & iOS',
    'Build AI-native every day — architecting agent orchestration, verification guardrails, and dynamic agentic workflows in production',
    'Engineer money-movement layers end-to-end: stablecoin & DeFi rails, ledgering, billing/metering, and payments UX',
  ],
}

// Scrolling ticker-tape entries — the "market" of what Jashan ships
export const tickerItems = [
  { symbol: 'AI-AGENTS', change: '+∞%' },
  { symbol: 'DEFI-RAILS', change: '+42%' },
  { symbol: 'ACCOUNT-ABSTRACTION', change: 'GAS-LESS' },
  { symbol: 'REACT-NATIVE', change: '+18%' },
  { symbol: 'CROSS-CHAIN', change: 'LIVE' },
  { symbol: 'STABLECOINS', change: '+7.4%' },
  { symbol: 'CLAUDE-SDK', change: 'SHIPPING' },
  { symbol: 'REMOTION', change: '+31%' },
  { symbol: 'TYPESCRIPT', change: '+22%' },
  { symbol: 'SMART-CONTRACTS', change: 'ON-CHAIN' },
  { symbol: 'PROP-FIRM', change: '0→1' },
  { symbol: 'FINTECH-UX', change: '+95%' },
]

// Headline metrics — presented like a market dashboard
export const metrics = [
  {
    value: 500,
    prefix: '$',
    suffix: 'K',
    label: 'Launch Readiness',
    sublabel: 'Xybit cross-chain trading MVP',
    trend: 'up',
  },
  {
    value: 250,
    prefix: '',
    suffix: 'K+',
    label: 'Gas-less Badges',
    sublabel: 'Minted on-chain via Rep3',
    trend: 'up',
  },
  {
    value: 8,
    prefix: '',
    suffix: 'K+',
    label: 'Daily Active Users',
    sublabel: 'Fintech app scaled at LXME',
    trend: 'up',
  },
  {
    value: 5,
    prefix: '',
    suffix: '+',
    label: 'Years Compounding',
    sublabel: 'Web · Mobile · On-chain',
    trend: 'up',
  },
]

// Secondary stat cards for the About "P&L" grid
export const achievements = [
  {
    title: 'Launch Readiness',
    value: '$500K',
    description: 'Cross-chain trading MVP driven to launch on Android & iOS',
    icon: 'performance',
  },
  {
    title: 'Gas-less Badges',
    value: '250K+',
    description: 'On-chain badges minted for crypto community engagement',
    icon: 'badge',
  },
  {
    title: 'Crash Rate Cut',
    value: '6% → 1.25%',
    description: 'Profiling + Sentry observability on an 8K DAU fintech app',
    icon: 'bug',
  },
  {
    title: 'New SIP Investments',
    value: '30%',
    description: 'Driven by the Savings Challenge money-movement feature',
    icon: 'satisfaction',
  },
  {
    title: 'Creators Tracked',
    value: '~100',
    description: 'BrandMax analytics dashboard, CPM/view metrics hourly',
    icon: 'users',
  },
  {
    title: 'Product Offerings',
    value: '5+',
    description: 'Shipped 0-to-1 as a core engineer across the suite',
    icon: 'projects',
  },
]

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'HTML', 'CSS'],
  frameworks: ['React', 'React Native', 'Node.js', 'Remotion', 'Redux'],
  tools: ['ethers.js', 'GraphQL', 'WebSockets', 'AWS', 'Sentry', 'Git', 'CI/CD'],
  methodologies: ['Account Abstraction', 'Agentic Workflows', 'CI/CD'],
  others: ['Claude SDK', 'LangChain', 'Cross-chain', 'DeFi Rails'],
}

export const experience = [
  {
    title: 'Co-Founder & Senior Full-Stack Engineer',
    company: 'Xade Finance / Xybit',
    location: 'Remote',
    period: 'Jan 2024 - Present',
    description: 'White-labelled derivatives / prop-firm platform on gas-less, cross-chain rails.',
    highlights: [
      'Co-founded Xybit, a white-labelled derivatives / prop-firm platform under Xade — owning architecture-to-deployment of the trading engine, funded-account challenge logic, and payout rails as a 0-to-1 product area',
      'Drove MVP of an Orderly-based cross-chain crypto trading app to an estimated $500K launch readiness, shipped on Android and iOS with market charts, US tokenized stocks, and WebSocket-driven real-time data',
      'Implemented Account Abstraction so users transact with no private-key or gas management — a fully gas-less model across every interaction, unifying on-chain settlement with a consumer-grade UX',
      'Engineered cross-chain deposit and trading across multiple networks, integrating stablecoin and DeFi rails with off-chain services into a single money-movement layer',
      'Use AI-native, dynamic agentic workflows day-to-day — Claude Code / Claude SDK driven PRD-to-implementation loops — to design, build, and debug complex trading and settlement systems at high velocity',
    ],
    technologies: ['Account Abstraction', 'ethers.js', 'React Native', 'WebSockets', 'Claude SDK', 'Cross-chain'],
    link: null,
  },
  {
    title: 'Full-Stack Engineer',
    company: 'ViewMax.io',
    location: 'Remote',
    period: '2025 - Present',
    description: 'AI video generation platform — editor, agentic pipelines, and the credit/metering layer.',
    highlights: [
      "Architected the company's video editor from scratch with Remotion — a timeline-based composition engine for programmatic, code-driven generation",
      'Built an AI Ad Cloner agentic workflow combining the Seedance video model and the Claude SDK to autonomously regenerate branded ad variations from a single reference input',
      'Designed and built the credit-system infrastructure powering usage metering, consumption tracking, and billing across all AI generation workflows — the money/metering layer behind agent actions',
      'Engineered an AI auto-captioning pipeline producing timed, styled captions, plus the BrandMax creator-analytics dashboard (~100 creators) with a background worker refreshing CPM/view metrics hourly',
    ],
    technologies: ['Remotion', 'Seedance', 'Claude SDK', 'Node.js', 'TypeScript', 'Billing'],
    link: null,
  },
  {
    title: 'Software Development Engineer',
    company: 'DeepReel',
    location: 'Remote',
    period: 'Feb 2025 - Mar 2026',
    description: 'AI-native development of the Remotion Genie Editor and product analytics.',
    highlights: [
      'Pioneered AI-native development with Claude Code — built the Remotion Genie Editor (SVG masking, dynamic captions, timeline composition), using dynamic agentic workflows to accelerate delivery of complex features',
      'Established a PRD-driven, CLAUDE.md-documented engineering workflow that enforced architectural consistency and sped onboarding — a repeatable agentic build process',
      'Rebuilt the DeepReel frontend in responsive React / TypeScript, and instrumented granular product analytics — event tracking for video interactions, session flows, and conversion triggers',
      'Shipped stakeholder-facing behavior dashboards (heatmaps, funnel charts, session flows) and partnered cross-functionally against the AI-video roadmap',
    ],
    technologies: ['Claude Code', 'Remotion', 'React', 'TypeScript', 'Analytics'],
    link: 'https://www.deepreel.com/',
  },
  {
    title: 'Senior Front End Engineer',
    company: 'LXME',
    location: 'Mumbai, India',
    period: 'Jun 2024 - Jan 2025',
    description: 'Mobile-native fintech — savings & SIP investing for 8,000+ daily active users.',
    highlights: [
      'Led a critical React Native upgrade (0.69 → 0.74), modernizing the architecture of an 8,000+ daily-active-user fintech app (savings & Systematic Investment Plan investing)',
      'Cut user-perceived crash rate from 5–6% to 1.25% via profiling and optimization, and implemented end-to-end error/crash management with Sentry for real-time observability',
      'Spearheaded the Savings Challenge feature — now driving 30% of new SIP investments — building money-movement UX on top of core banking / ledgering flows',
    ],
    technologies: ['React Native', 'Sentry', 'TypeScript', 'Payments UX'],
    link: 'https://lxme.in',
  },
  {
    title: 'Core Software Engineer',
    company: 'Rep3',
    location: 'Bangalore, India (Hybrid)',
    period: 'Jan 2022 - Jun 2024',
    description: 'Web3 SaaS for compensating DAO contributors via crypto and NFTs.',
    highlights: [
      'Core developer expanding the product suite by 5 offerings; built a SaaS platform for compensating DAO contributors via cryptocurrency and NFTs — on-chain payout and settlement primitives',
      "Shipped a reusable NPM package for integrating the company's protocol into JavaScript frameworks, and launched a community-engagement product that minted 250,000+ gas-less badges to date",
      'Implemented robust CI/CD deployment workflows for seamless, reliable releases',
    ],
    technologies: ['Solidity', 'Node.js', 'NFTs', 'CI/CD', 'JavaScript'],
    link: 'https://app.rep3.gg/',
  },
  {
    title: 'React Native Engineer',
    company: 'CryptoXpress',
    location: 'Bangalore, India',
    period: 'Sep 2021 - Jan 2022',
    description: 'Crypto wallet, NFT marketplace, and real-time asset tracking.',
    highlights: [
      'Designed secure in-app lock screens for a leading crypto wallet, strengthening privacy and asset protection, and built an NFT marketplace with real-time tracking and seamless minting',
      'Migrated the platform to WebSockets for real-time data and delivered crypto-paid travel bookings, expanding digital-asset utility',
    ],
    technologies: ['React Native', 'WebSockets', 'NFTs'],
    link: null,
  },
  {
    title: 'Full-Stack Developer (Freelance)',
    company: 'Lokal Kitchen',
    location: 'Mumbai, India',
    period: 'Mar 2021 - Sep 2021',
    description: 'End-to-end revamp of a food-delivery platform with admin + customer apps.',
    highlights: [
      'Revamped a legacy web application end-to-end and built an admin dashboard plus a customer app with chef profiles and distance-based discovery',
      'Integrated Dunzo for delivery and live order tracking',
    ],
    technologies: ['React Native', 'Node.js', 'Dunzo API'],
    link: null,
  },
]

export const projects = [
  {
    title: 'Xybit',
    description: 'White-labelled derivatives / prop-firm platform on gas-less, cross-chain rails',
    highlights: [
      'Funded-account challenge logic and payout rails built 0-to-1',
      'Account Abstraction — no private keys, fully gas-less UX',
      'Cross-chain deposits + trading unified into one money layer',
    ],
    period: 'Jan 2024 - Present',
    technologies: ['Account Abstraction', 'ethers.js', 'React Native', 'WebSockets'],
    image: '/projects/xybit.png',
    link: null,
  },
  {
    title: 'Sabkuch2Home',
    description: 'Hyperlocal grocery e-commerce platform shipped during COVID-19 lockdown',
    highlights: [
      'Real-time inventory tracking and seamless checkout',
      'Founder-owned 0-to-1 build, end-to-end',
      'Scaled to ~INR 3–4L peak business',
    ],
    period: '2020, Mumbai',
    technologies: ['React', 'E-commerce', 'Real-time'],
    image: '/projects/sabkuch2home.png',
    link: null,
  },
]

export const education = {
  degree: 'B.E., Computer Science Engineering',
  institution: 'Pillai College of Engineering',
  location: 'Mumbai, India',
  year: '2017 - 2021',
  certifications: ['AWS', 'GraphQL'],
}

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Track Record', href: '#experience' },
  { name: 'Ventures', href: '#projects' },
  { name: 'Stack', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]
