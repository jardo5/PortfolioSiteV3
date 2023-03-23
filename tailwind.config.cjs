/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts,svg}'],
  theme: {
    extend: {
      backgroundImage: {
        'customPattern': "url('/background.png')",
      },
      fontFamily: {
        FiraCode: ['Fira Code', 'monospace'],
      },
      backgroundColor: {
        'secondary': "#546a7b",
        'navHover': "#4c606f",
      },
      borderColor: {
        'navBorder': "#4c606f"
      },
      from: {
        'underlineStart': "#4c606f"
      },
      to: {
        'underlineEnd': "#4c606f"
      }
    },
  },
  plugins: [],
}
