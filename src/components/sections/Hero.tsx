'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Whisper-quiet ambient wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% -10%, rgba(0,113,227,0.06), transparent 55%), radial-gradient(90% 70% at 85% 110%, rgba(0,113,227,0.04), transparent 60%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-content px-5 md:px-8">
        <div className="max-w-4xl">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.h1
            className="display-hero mt-5 text-[clamp(2.75rem,8vw,6.5rem)] text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
          >
            Building where
            <br />
            money moves.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-[clamp(1.125rem,2.2vw,1.5rem)] font-normal leading-relaxed text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
          >
            Five years shipping production web, mobile, and on-chain systems
            end-to-end — AI agents, DeFi rails, and mobile-native fintech.
            Co-founder of Xybit.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.32 }}
          >
            <button
              onClick={() => scrollTo('work')}
              className="rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-all duration-300 ease-apple hover:bg-accent-light hover:scale-[1.02] active:scale-[0.98]"
            >
              View selected work
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow text-[15px] font-medium"
            >
              Read the résumé
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Quiet scroll cue */}
      <motion.button
        onClick={() => scrollTo('metrics')}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-tertiary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
    </section>
  )
}
