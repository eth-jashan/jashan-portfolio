'use client'

import Reveal from '@/components/ui/Reveal'

interface Project {
  title: string
  role: string
  description: string
  highlights: string[]
  technologies: string[]
  link: string | null
}

const featuredProjects: Project[] = [
  {
    title: 'Xybit',
    role: 'Co-Founder',
    description:
      'A white-labelled derivatives and prop-firm platform on gas-less, cross-chain rails.',
    highlights: [
      'Funded-account challenge logic and payout rails, built 0-to-1',
      'Account Abstraction — no private keys, fully gas-less UX',
      'Cross-chain deposits and trading unified into one money layer',
    ],
    technologies: ['Account Abstraction', 'ethers.js', 'React Native', 'WebSockets'],
    link: null,
  },
  {
    title: 'ViewMax — AI Ad Cloner',
    role: 'Full-Stack',
    description:
      'An agentic pipeline that regenerates branded ad variations from a single reference input.',
    highlights: [
      'Seedance video model + Claude SDK, agent-orchestrated',
      'Credit-system infrastructure metering every AI generation',
      'Remotion editor with an AI auto-captioning pipeline',
    ],
    technologies: ['Remotion', 'Seedance', 'Claude SDK', 'Billing'],
    link: null,
  },
  {
    title: 'DeepReel — Genie Editor',
    role: 'SDE',
    description:
      'An AI-native Remotion editor with SVG masking, dynamic captions, and timeline composition.',
    highlights: [
      'Pioneered a Claude Code PRD-to-implementation workflow',
      'Rebuilt the frontend in responsive React / TypeScript',
      'Shipped heatmap, funnel, and session-flow dashboards',
    ],
    technologies: ['Claude Code', 'Remotion', 'React', 'Analytics'],
    link: 'https://www.deepreel.com/',
  },
  {
    title: 'Rep3',
    role: 'Core Engineer',
    description:
      'Web3 SaaS compensating DAO contributors via crypto and NFTs — 250K+ gas-less badges minted.',
    highlights: [
      'Built on-chain payout and settlement primitives',
      'Reusable NPM package for protocol integration',
      'Robust CI/CD for seamless, reliable releases',
    ],
    technologies: ['Solidity', 'Node.js', 'NFTs', 'CI/CD'],
    link: 'https://app.rep3.gg/',
  },
  {
    title: 'LXME',
    role: 'Sr. Frontend',
    description:
      'Mobile-native fintech — savings and SIP investing for 8,000+ daily active users.',
    highlights: [
      'React Native upgrade 0.69 → 0.74',
      'Crash rate cut 6% → 1.25% via Sentry and profiling',
      'Savings Challenge drove 30% of new SIP investments',
    ],
    technologies: ['React Native', 'Sentry', 'Payments UX'],
    link: 'https://lxme.in',
  },
  {
    title: 'Sabkuch2Home',
    role: 'Co-Founder',
    description:
      'A hyperlocal grocery platform shipped 0-to-1 during the COVID-19 lockdown.',
    highlights: [
      'Real-time inventory tracking and seamless checkout',
      'Founder-owned build, end-to-end',
      'Scaled to ~INR 3–4L peak business',
    ],
    technologies: ['React', 'E-commerce', 'Real-time'],
    link: null,
  },
]

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-5 py-28 md:px-8 md:py-40">
      <Reveal>
        <p className="eyebrow">Selected Work</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display-section mt-5 max-w-3xl text-[clamp(1.75rem,4.5vw,3.25rem)] text-text-primary">
          Products taken from zero to launch.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.title} delay={Math.min(i * 0.05, 0.2)}>
            <article className="group flex h-full flex-col rounded-[22px] border border-line bg-surface p-8 transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)] md:p-10">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium uppercase tracking-wide text-text-tertiary">
                  {p.role}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary transition-colors hover:text-accent"
                    aria-label={`Visit ${p.title}`}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>

              <h3 className="mt-4 text-[24px] font-semibold tracking-tight text-text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-[16px] leading-relaxed text-text-secondary">
                {p.description}
              </p>

              <ul className="mt-6 space-y-2">
                {p.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-[14px] leading-relaxed text-text-secondary"
                  >
                    <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-text-tertiary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-primary px-3 py-1 text-[12px] text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
