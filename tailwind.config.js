module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Tailwind Tutorial - CAN BE REMOVED
      colors: {
        'bookmark-purple': '#5267DF',
        'bookmark-red': '#FA5959',
        'bookmark-blue': '#242A45',
        'bookmark-grey': '#9194A2',
        'bookmark-white': '#f7f7f7',
      }
    },
    fontFamily: {
      'poppins': ["Poppins, sans-serif"]
    },
    // Tailwind Tutorial - CAN BE REMOVED
    // Custom container for Desktop and above screens - center content in stretch column
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
