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
    screens: {
      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
  
      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px) and (max-width: 1535px) { ... }
  
      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px) and (max-width: 1279px) { ... }
  
      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px) and (max-width: 1023px) { ... }
  
      'sm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
