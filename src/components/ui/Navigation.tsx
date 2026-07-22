'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems, personalInfo } from '@/data/portfolio'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-apple ${
          isScrolled ? 'frosted border-b border-line/60' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-content px-5 md:px-8">
          <div className="flex h-12 md:h-[52px] items-center justify-between">
            {/* Wordmark */}
            <button
              onClick={() => handleNavClick('#home')}
              className="text-[15px] font-semibold tracking-tight text-text-primary transition-opacity hover:opacity-60"
            >
              Jashan Shetty
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
                >
                  {item.name}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-accent transition-opacity hover:opacity-70"
              >
                Résumé
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden -mr-2 p-2"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <motion.span
                  className="h-px w-full bg-text-primary"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="h-px w-full bg-text-primary"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="h-px w-full bg-text-primary"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden frosted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full flex-col items-start justify-center gap-2 px-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="py-2 text-4xl font-semibold tracking-tight text-text-primary"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-4xl font-semibold tracking-tight text-accent"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navItems.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                Résumé
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
