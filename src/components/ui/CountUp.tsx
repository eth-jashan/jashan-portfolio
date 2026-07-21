'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
  className?: string
}

export default function CountUp({
  end,
  prefix = '',
  suffix = '',
  duration = 1600,
  decimals = 0,
  className = '',
}: CountUpProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.4, triggerOnce: true })
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    let raf = 0
    let startTime: number | null = null

    const tick = (now: number) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      // easeOutExpo for a satisfying "settling" feel
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(end * eased)
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setValue(end)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  const display = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
