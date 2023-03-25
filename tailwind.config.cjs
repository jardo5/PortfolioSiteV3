/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts,svg}', './src/components/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        FiraCode: ['Fira Code', 'monospace'],
      },
      backgroundColor: {
        'secondary': "#192c43",
        'navHover': "#4c606f",
      },
      borderColor: {
        'navBorder': "#2f4155"
      },
      from: {
        'underlineStart': "#4c606f"
      },
      to: {
        'underlineEnd': "#4c606f"
      },
      keyframes: {
        pulseFade: {
          '15%': { opacity: .15 },
        },
      },
      animation: {
        pulseFade: 'pulseFade 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      listStyleType: {
        'square': 'square',
      },
      boxShadow: {
        'contactForm': '0 0.3px 0.7px rgba(0, 0, 0, 0.126)',
      },
      backgroundImage:{
        'contactWave': "url('contactWave.svg')",
      }

    },
  },
  plugins: [],
}
