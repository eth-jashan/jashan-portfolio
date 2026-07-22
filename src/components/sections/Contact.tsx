'use client'

import Reveal from '@/components/ui/Reveal'
import { personalInfo } from '@/data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-5 py-28 md:px-8 md:py-44">
      <Reveal>
        <p className="eyebrow">Contact</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="display-hero mt-6 text-[clamp(2.25rem,6.5vw,5rem)] text-text-primary">
          Let&rsquo;s build
          <br />
          something considered.
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-8 max-w-xl text-[clamp(1.125rem,2.2vw,1.375rem)] leading-relaxed text-text-secondary">
          Building at the edge of AI, crypto, or fintech? I ship 0-to-1 and
          close loops fast. Open to senior engineering roles.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 ease-apple hover:bg-accent-light hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in touch
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow text-[15px] font-medium"
          >
            Download résumé
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3v8m0 0l3-3m-3 3L5 8M3.5 13h9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {[
            { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
            { label: 'GitHub', value: personalInfo.githubHandle, href: personalInfo.github },
            { label: 'LinkedIn', value: 'Jashan Shetty', href: personalInfo.linkedin },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group bg-primary p-6 transition-colors hover:bg-surface"
            >
              <div className="text-[12px] uppercase tracking-wide text-text-tertiary">
                {c.label}
              </div>
              <div className="mt-1 truncate text-[15px] font-medium text-text-primary transition-colors group-hover:text-accent">
                {c.value}
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
