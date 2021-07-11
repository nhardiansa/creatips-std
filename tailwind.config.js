module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat' : ['Montserrat', 'sans-serif'],
        'poppins' : ["Poppins", 'sans-serif']
      }
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
