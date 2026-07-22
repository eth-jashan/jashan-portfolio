import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/ui/SmoothScroll'

export const metadata: Metadata = {
  metadataBase: new URL('https://jashanshetty.com'),
  title: 'Jashan Shetty — Senior Full-Stack Engineer',
  description:
    'Senior Full-Stack Engineer with 5+ years shipping production web, mobile, and on-chain systems end-to-end. AI agents, Web3 / DeFi rails, and mobile-native fintech. Co-founder of Xybit.',
  keywords: [
    'Senior Full-Stack Engineer',
    'AI Agents',
    'Web3',
    'DeFi',
    'Account Abstraction',
    'React Native',
    'Fintech',
    'Jashan Shetty',
    'Claude SDK',
    'TypeScript',
    'Solidity',
  ],
  authors: [{ name: 'Jashan Shetty' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Jashan Shetty — Senior Full-Stack Engineer',
    description:
      'Five years shipping production web, mobile, and on-chain systems end-to-end — AI agents, DeFi rails, and mobile-native fintech.',
    type: 'website',
    locale: 'en_US',
    images: ['/avatar.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jashan Shetty — Senior Full-Stack Engineer',
    description:
      'Five years shipping production web, mobile, and on-chain systems end-to-end — AI agents, DeFi rails, and mobile-native fintech.',
    images: ['/avatar.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter as a graceful fallback where SF Pro / system fonts are unavailable */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-primary text-text-primary">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
