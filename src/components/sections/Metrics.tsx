'use client'

import CountUp from '@/components/ui/CountUp'
import Reveal from '@/components/ui/Reveal'
import { metrics } from '@/data/portfolio'

export default function Metrics() {
  return (
    <section id="metrics" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid grid-cols-2 divide-x divide-line md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.08}
              className={`px-4 py-12 md:py-16 ${i >= 2 ? 'border-t border-line md:border-t-0' : ''}`}
            >
              <div className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tightest text-text-primary">
                <CountUp end={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-[13px] font-medium text-text-primary">{m.label}</div>
              <div className="mt-0.5 text-[13px] text-text-tertiary">{m.sublabel}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
