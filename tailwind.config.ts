import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#d4d4d4',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-lead': '#d4d4d4',
            '--tw-prose-links': '#22c55e',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#737373',
            '--tw-prose-bullets': '#737373',
            '--tw-prose-hr': '#404040',
            '--tw-prose-quotes': '#f5f5f5',
            '--tw-prose-quote-borders': '#22c55e',
            '--tw-prose-captions': '#737373',
            '--tw-prose-code': '#f5f5f5',
            '--tw-prose-pre-code': '#f5f5f5',
            '--tw-prose-pre-bg': '#262626',
            '--tw-prose-th-borders': '#404040',
            '--tw-prose-td-borders': '#404040',
            
            // Dark mode colors
            '--tw-prose-invert-body': '#d4d4d4',
            '--tw-prose-invert-headings': '#ffffff',
            '--tw-prose-invert-lead': '#d4d4d4',
            '--tw-prose-invert-links': '#22c55e',
            '--tw-prose-invert-bold': '#ffffff',
            '--tw-prose-invert-counters': '#737373',
            '--tw-prose-invert-bullets': '#737373',
            '--tw-prose-invert-hr': '#404040',
            '--tw-prose-invert-quotes': '#f5f5f5',
            '--tw-prose-invert-quote-borders': '#22c55e',
            '--tw-prose-invert-captions': '#737373',
            '--tw-prose-invert-code': '#f5f5f5',
            '--tw-prose-invert-pre-code': '#f5f5f5',
            '--tw-prose-invert-pre-bg': '#262626',
            '--tw-prose-invert-th-borders': '#404040',
            '--tw-prose-invert-td-borders': '#404040',

            // Base styles
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
            },
            hr: {
              borderColor: 'var(--tw-prose-hr)',
              borderTopWidth: 1,
              marginTop: '2em',
              marginBottom: '2em',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
            },
            thead: {
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--tw-prose-th-borders)',
            },
            'thead th': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
              verticalAlign: 'bottom',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--tw-prose-td-borders)',
            },
            'tbody td': {
              verticalAlign: 'baseline',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody p': {
              marginTop: '0.5714286em',
              marginBottom: '0.5714286em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;