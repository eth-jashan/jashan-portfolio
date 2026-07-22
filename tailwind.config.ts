import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired system palette
        primary: '#ffffff',      // canvas
        secondary: '#f5f5f7',    // subtle surface
        surface: '#fbfbfd',
        accent: '#0071e3',       // Apple blue
        'accent-light': '#0077ed',
        line: '#d2d2d7',         // hairline
        'text-primary': '#1d1d1f',
        'text-secondary': '#6e6e73',
        'text-tertiary': '#86868b',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Inter',
          'Segoe UI',
          'system-ui',
          'sans-serif',
        ],
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        mono: ['SF Mono', 'ui-monospace', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.022em',
      },
      maxWidth: {
        content: '1120px',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
