'use client'

import Reveal from '@/components/ui/Reveal'
import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-content px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">Experience</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-section mt-5 text-[clamp(1.75rem,4.5vw,3.25rem)] text-text-primary">
            A decade of shipping, compounding.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-line md:mt-20">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={Math.min(i * 0.04, 0.2)}>
              <article className="group grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-4">
                  <div className="text-[13px] font-mono text-text-tertiary">{job.period}</div>
                  <h3 className="mt-1 text-[19px] font-semibold tracking-tight text-text-primary">
                    {job.company}
                  </h3>
                  <div className="text-[15px] text-text-secondary">{job.title}</div>
                  <div className="mt-0.5 text-[13px] text-text-tertiary">{job.location}</div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-[16px] leading-relaxed text-text-secondary md:text-[17px]">
                    {job.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.slice(0, 3).map((h, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-[15px] leading-relaxed text-text-secondary"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-text-tertiary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-[12px] text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow mt-5 text-[14px] font-medium"
                    >
                      Visit
                      <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none">
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
