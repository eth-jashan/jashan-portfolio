'use client'

import { personalInfo, navItems } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) =>
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-content px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[15px] font-semibold tracking-tight text-text-primary">
              Jashan Shetty
            </div>
            <p className="mt-1 max-w-xs text-[13px] text-text-secondary">
              Senior Full-Stack Engineer — AI agents, DeFi rails, and
              mobile-native fintech.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-text-tertiary">
            © {year} Jashan Shetty. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-text-tertiary transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-text-tertiary transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[12px] text-text-tertiary transition-colors hover:text-text-primary"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
