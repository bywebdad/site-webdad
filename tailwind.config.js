/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#FF7317',
        brand: {
          // Синхронизировано с палитрой pumpkin
          50: '#fff7ed',
          100: '#ffecd4',
          200: '#ffd6a8',
          300: '#ffb870',
          400: '#ff8e37',
          500: '#ff7317',
          600: '#f05306',
          700: '#c73c07',
          800: '#9e300e',
          900: '#7f2b0f',
          950: '#451205',
          DEFAULT: '#ff7317',
          primary: '#ff7317'
        },
        jungle: {
          50: '#effaf5',
          100: '#d9f2e6',
          200: '#b7e3d0',
          300: '#87ceb4',
          400: '#54b393',
          500: '#37a483',
          600: '#237860',
          700: '#1c604f',
          800: '#184d40',
          900: '#153f35',
          950: '#0b231f',
          DEFAULT: '#37a483'
        },
        shark: {
          50: '#f4f6f7',
          100: '#e2e7eb',
          200: '#c8d3d9',
          300: '#a1b2bf',
          400: '#738a9d',
          500: '#586f82',
          600: '#4c5e6e',
          700: '#424f5c',
          800: '#3b444f',
          900: '#2f353d',
          950: '#20252c',
          DEFAULT: '#586f82'
        }
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      }
    }
  },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};