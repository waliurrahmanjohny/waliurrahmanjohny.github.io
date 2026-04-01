/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          950: '#0c0a09',
          900: '#1c1917',
          800: '#292524',
        },
        accent: {
          DEFAULT: '#d97706',
          light: '#fbbf24',
        },
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(12,10,9,0.92), rgba(12,10,9,0.98)), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(217,119,6,0.15), transparent)',
      },
    },
  },
  plugins: [],
};
