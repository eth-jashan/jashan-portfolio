'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import AnimatedText from '@/components/ui/AnimatedText'
import { personalInfo } from '@/data/portfolio'

// GitHub contribution data type
interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

// Featured repositories
const featuredRepos = [
  {
    name: 'hypersign-auth-js-sdk',
    description: 'JavaScript SDK for Hypersign authentication protocol - enabling decentralized identity and passwordless auth',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 12,
    forks: 4,
    topics: ['authentication', 'sdk', 'web3'],
  },
  {
    name: 'rep3-sdk',
    description: 'NPM package for integrating Rep3 protocol into JavaScript frameworks - community engagement tooling',
    language: 'JavaScript',
    languageColor: '#f7df1e',
    stars: 8,
    forks: 2,
    topics: ['web3', 'dao', 'npm'],
  },
  {
    name: 'xade-mobile-app',
    description: 'Cross-platform crypto trading app with gas-less transactions and multi-chain support',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 15,
    forks: 3,
    topics: ['react-native', 'crypto', 'mobile'],
  },
  {
    name: 'dao-payroll-contracts',
    description: 'Smart contracts for DAO contributor compensation using cryptocurrency and NFTs',
    language: 'Solidity',
    languageColor: '#AA6746',
    stars: 23,
    forks: 7,
    topics: ['solidity', 'dao', 'defi'],
  },
]

// Generate realistic contribution data
function generateContributionData(): ContributionDay[] {
  const data: ContributionDay[] = []
  const today = new Date()
  const startDate = new Date(today)
  startDate.setDate(startDate.getDate() - 364)

  // Adjust to start from Sunday
  const dayOfWeek = startDate.getDay()
  startDate.setDate(startDate.getDate() - dayOfWeek)

  for (let i = 0; i < 371; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)

    // Generate realistic contribution patterns
    const dayNum = date.getDay()
    const weekNum = Math.floor(i / 7)

    // Higher activity on weekdays, some weekend activity
    let baseProbability = dayNum === 0 || dayNum === 6 ? 0.3 : 0.7

    // Add some variation by week
    baseProbability *= 0.5 + Math.sin(weekNum * 0.3) * 0.5 + Math.random() * 0.3

    const hasContribution = Math.random() < baseProbability
    let count = 0
    let level: 0 | 1 | 2 | 3 | 4 = 0

    if (hasContribution) {
      // Weight towards lower counts, occasional high activity
      const rand = Math.random()
      if (rand < 0.4) {
        count = Math.floor(Math.random() * 3) + 1
        level = 1
      } else if (rand < 0.7) {
        count = Math.floor(Math.random() * 4) + 3
        level = 2
      } else if (rand < 0.9) {
        count = Math.floor(Math.random() * 5) + 6
        level = 3
      } else {
        count = Math.floor(Math.random() * 10) + 10
        level = 4
      }
    }

    data.push({
      date: date.toISOString().split('T')[0],
      count,
      level,
    })
  }

  return data
}

// Contribution Calendar Component
function ContributionCalendar() {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    setContributions(generateContributionData())
  }, [])

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Calculate total contributions
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)
  const currentStreak = calculateStreak(contributions)

  // Get month labels with positions
  const getMonthLabels = () => {
    const labels: { month: string; position: number }[] = []
    let currentMonth = -1

    contributions.forEach((day, index) => {
      const date = new Date(day.date)
      const month = date.getMonth()
      if (month !== currentMonth) {
        currentMonth = month
        labels.push({ month: months[month], position: Math.floor(index / 7) })
      }
    })

    return labels
  }

  const monthLabels = getMonthLabels()

  // Group by weeks
  const weeks: ContributionDay[][] = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-white/5'
      case 1: return 'bg-accent/30'
      case 2: return 'bg-accent/50'
      case 3: return 'bg-accent/75'
      case 4: return 'bg-accent'
      default: return 'bg-white/5'
    }
  }

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      onMouseMove={handleMouseMove}
    >
      {/* Stats Row */}
      <div className="flex flex-wrap gap-4 md:gap-8 mb-6">
        <StatBadge label="Contributions" value={totalContributions.toLocaleString()} icon="commit" />
        <StatBadge label="Current Streak" value={`${currentStreak} days`} icon="fire" />
        <StatBadge label="Repositories" value="40+" icon="repo" />
      </div>

      {/* Calendar Container */}
      <div className="glass rounded-2xl p-4 md:p-6 overflow-x-auto">
        {/* Month Labels */}
        <div className="flex mb-2 ml-8 text-xs text-text-secondary">
          {monthLabels.map((label, index) => (
            <div
              key={index}
              className="absolute"
              style={{ marginLeft: `${label.position * 14 + 32}px` }}
            >
              {label.month}
            </div>
          ))}
        </div>

        <div className="flex gap-1 mt-6">
          {/* Day Labels */}
          <div className="flex flex-col gap-1 mr-2 text-xs text-text-secondary">
            {days.map((day, index) => (
              <div key={day} className={`h-[13px] flex items-center ${index % 2 === 0 ? 'opacity-0' : ''}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-[13px] h-[13px] rounded-sm ${getLevelColor(day.level)} cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-accent hover:ring-offset-1 hover:ring-offset-primary`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.2,
                      delay: weekIndex * 0.01 + dayIndex * 0.01,
                    }}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    whileHover={{ scale: 1.3 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-4 text-xs text-text-secondary">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-[13px] h-[13px] rounded-sm ${getLevelColor(level)}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredDay && (
        <motion.div
          className="fixed z-50 px-3 py-2 text-sm glass rounded-lg pointer-events-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 40,
          }}
        >
          <span className="font-semibold text-white">{hoveredDay.count} contributions</span>
          <span className="text-text-secondary ml-1">on {formatDate(hoveredDay.date)}</span>
        </motion.div>
      )}
    </motion.div>
  )
}

// Stat Badge Component
function StatBadge({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 glass rounded-full">
      <div className="text-accent">
        {icon === 'commit' && (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {icon === 'fire' && (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
        )}
        {icon === 'repo' && (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        )}
      </div>
      <div>
        <div className="text-white font-semibold">{value}</div>
        <div className="text-text-secondary text-xs">{label}</div>
      </div>
    </div>
  )
}

// Repository Card Component
function RepoCard({ repo, index, inView }: { repo: typeof featuredRepos[0]; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    x.set(mouseX / rect.width - 0.5)
    y.set(mouseY / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={cardRef}
      href={`https://github.com/eth-jashan/${repo.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent to-purple-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />

      <div className="relative glass rounded-2xl p-6 h-full border border-white/10 group-hover:border-accent/50 transition-colors overflow-hidden">
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="font-mono text-accent text-sm group-hover:text-accent-light transition-colors">
              {repo.name}
            </span>
          </div>
          <svg className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {repo.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          {/* Language */}
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: repo.languageColor }}
            />
            <span>{repo.language}</span>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span>{repo.stars}</span>
          </div>

          {/* Forks */}
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>{repo.forks}</span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

// Helper functions
function calculateStreak(contributions: ContributionDay[]): number {
  let streak = 0
  const today = new Date().toISOString().split('T')[0]

  // Start from today and go backwards
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].date > today) continue
    if (contributions[i].count > 0) {
      streak++
    } else if (contributions[i].date < today) {
      break
    }
  }

  return streak
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

// Main GitHub Section Component
export default function GitHub() {
  const [titleRef, titleInView] = useInView<HTMLDivElement>({ threshold: 0.2, triggerOnce: true })
  const [reposRef, reposInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="github" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <motion.span
            className="inline-block text-accent font-mono text-xs md:text-sm tracking-wider uppercase mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Open Source
          </motion.span>

          <AnimatedText
            text="GitHub Activity"
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6"
          />

          <motion.p
            className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Building in public, one commit at a time. Check out my contributions and open source projects.
          </motion.p>

          {/* GitHub Profile Link */}
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 glass rounded-full text-white hover:text-accent transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="font-medium">@eth-jashan</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Contribution Calendar */}
        <ContributionCalendar />

        {/* Featured Repositories */}
        <div ref={reposRef} className="mt-12 md:mt-16">
          <motion.h3
            className="text-xl md:text-2xl font-display font-bold text-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={reposInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Featured Repositories
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {featuredRepos.map((repo, index) => (
              <RepoCard key={repo.name} repo={repo} index={index} inView={reposInView} />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0 }}
          animate={reposInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            <span>View all repositories on GitHub</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  )
}
