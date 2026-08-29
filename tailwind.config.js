/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F7F8FA',
          white: '#FFFFFF',
          soft: '#F1F3F6',
          muted: '#EAECF0'
        },
        text: {
          primary: '#111827',
          secondary: '#667085',
          muted: '#98A2B3'
        },
        border: {
          DEFAULT: '#E5E7EB',
          subtle: '#EAECF0',
          dark: '#D0D5DD'
        },
        brand: {
          DEFAULT: '#6C3CF0',
          hover: '#5925DC',
          light: '#F4F0FF',
          border: '#D9D6FE',
          coral: '#FF6B4A',
          coralLight: '#FFF4ED'
        },
        risk: {
          success: '#12B76A',
          successBg: '#ECFDF3',
          successBorder: '#ABEFC6',
          warning: '#F79009',
          warningBg: '#FFFAEB',
          warningBorder: '#FEDF89',
          danger: '#F04438',
          dangerBg: '#FEF3F2',
          dangerBorder: '#FECDCA'
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Courier New', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
        'card': '0 1px 3px 0 rgba(16, 24, 40, 0.1), 0 1px 2px -1px rgba(16, 24, 40, 0.1)',
        'elevated': '0 4px 12px -2px rgba(16, 24, 40, 0.08), 0 2px 6px -2px rgba(16, 24, 40, 0.03)',
        'panel': '0 12px 32px -4px rgba(16, 24, 40, 0.08), 0 4px 12px -2px rgba(16, 24, 40, 0.03)',
        'dropdown': '0 10px 24px -4px rgba(16, 24, 40, 0.12)'
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px'
      }
    },
  },
  plugins: [],
}
