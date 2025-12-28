import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#242424',
        blue: '#2069E4',
        light: '#D9D9D9',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          md: '3rem',
          lg: '4rem',
        },
        screens: {
          '2xl': '1000px',
        },
      },
    },
  },
  plugins: [],
}
export default config

