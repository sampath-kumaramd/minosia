import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'custom-bg-gradient':
          'linear-gradient(89.1deg, rgba(141, 129, 216, 0.2) 32.88%, rgba(186, 130, 204, 0.2) 63.84%, rgba(115, 161, 230, 0.2) 82.33%, rgba(236, 88, 152, 0.2) 95.23%)',
        'custom-text-gradient':
          'linear-gradient(89.1deg, #73A1E6 11.81%, #8D81D8 38.47%, #BA82CC 67.71%, #EC5898 89.64%)',
        'custom-hover-gradient':
          'linear-gradient(89.1deg, rgba(115, 161, 230, 0.1) 11.81%, rgba(141, 129, 216, 0.1) 38.47%, rgba(186, 130, 204, 0.1) 67.71%, rgba(236, 88, 152, 0.1) 89.64%)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          color: 'transparent',
        },
      });
    }),
  ],
} satisfies Config;

export default config;
