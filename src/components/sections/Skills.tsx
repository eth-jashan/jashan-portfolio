'use client'

import Reveal from '@/components/ui/Reveal'

const groups: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Solidity'] },
  { label: 'Frameworks', items: ['React', 'React Native', 'Node.js', 'Remotion', 'Redux'] },
  {
    label: 'Web3 / DeFi',
    items: ['Account Abstraction', 'ethers.js', 'Cross-chain', 'Stablecoin rails', 'Smart Contracts', 'NFTs'],
  },
  {
    label: 'AI / Agents',
    items: ['Claude SDK', 'Claude Code', 'Agent orchestration', 'Agentic workflows', 'LangChain'],
  },
  {
    label: 'Fintech',
    items: ['Ledgering', 'Money movement', 'Billing / metering', 'SIP investing', 'Payments UX'],
  },
  { label: 'Platform', items: ['AWS', 'GraphQL', 'WebSockets', 'CI/CD', 'Sentry', 'Git'] },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-content px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-section mt-5 max-w-3xl text-[clamp(1.75rem,4.5vw,3.25rem)] text-text-primary">
            The stack behind the rails.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 border-t border-line pt-12 md:mt-20 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={Math.min(i * 0.06, 0.24)}>
              <h3 className="text-[13px] uppercase tracking-wide text-text-tertiary">
                {g.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-[17px] font-medium text-text-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
