'use client'

import Reveal from '@/components/ui/Reveal'
import { personalInfo, education } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-5 py-28 md:px-8 md:py-40">
      <Reveal>
        <p className="eyebrow">About</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="display-section mt-5 max-w-4xl text-[clamp(1.75rem,4.5vw,3.25rem)] text-text-primary">
          I take products from zero to one — owning architecture through
          deployment, and sweating the details most people never notice.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
        <Reveal delay={0.1} className="md:col-span-7">
          <div className="space-y-6 text-[17px] leading-relaxed text-text-secondary md:text-[19px]">
            <p>
              I co-founded <span className="text-text-primary">Xybit</span>, a
              white-labelled derivatives and prop-firm platform, and drove a
              gas-less, account-abstracted cross-chain trading app to launch
              readiness on iOS and Android. I build the money-movement layers
              underneath — stablecoin and DeFi rails, ledgering, billing, and
              payments UX.
            </p>
            <p>
              I work AI-native: architecting agent orchestration, verification
              guardrails, and dynamic agentic workflows in daily production —
              while still reasoning about systems from first principles. AWS
              and GraphQL certified.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="md:col-span-5">
          <dl className="divide-y divide-line border-t border-line">
            {[
              { k: 'Based', v: personalInfo.location },
              { k: 'Focus', v: 'AI Agents · Web3 / DeFi · Mobile Fintech' },
              { k: 'Experience', v: '5+ years, end-to-end' },
              {
                k: 'Education',
                v: `${education.degree.replace('B.E., ', '')} · ${education.institution.split(' ')[0]}`,
              },
              { k: 'Availability', v: 'Open to senior roles' },
            ].map((row) => (
              <div key={row.k} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-[13px] uppercase tracking-wide text-text-tertiary">
                  {row.k}
                </dt>
                <dd className="text-right text-[15px] font-medium text-text-primary">
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
