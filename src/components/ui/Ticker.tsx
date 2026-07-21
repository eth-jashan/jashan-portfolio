'use client'

import { tickerItems } from '@/data/portfolio'

interface TickerProps {
  className?: string
  speed?: 'normal' | 'fast'
}

export default function Ticker({ className = '', speed = 'normal' }: TickerProps) {
  const items = [...tickerItems, ...tickerItems]

  return (
    <div
      className={`relative overflow-hidden border-y border-accent/15 bg-secondary/60 backdrop-blur-sm ${className}`}
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-primary to-transparent z-10" />

      <div className={`flex w-max ${speed === 'fast' ? 'animate-ticker-fast' : 'animate-ticker'}`}>
        {items.map((item, i) => {
          const negative = item.change.startsWith('-')
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-5 md:px-7 py-2.5 whitespace-nowrap font-mono text-xs md:text-sm"
            >
              <span className="text-text-secondary tracking-wider">{item.symbol}</span>
              <span
                className={`flex items-center gap-1 font-semibold ${
                  negative ? 'text-danger' : 'text-accent'
                }`}
              >
                <span className="text-[9px]">{negative ? '▼' : '▲'}</span>
                {item.change}
              </span>
              <span className="text-accent/20 pl-3 md:pl-5">|</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
