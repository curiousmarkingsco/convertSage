const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    // Extend (add to) the default theme in the `extend` key
    extend: {
      // Create your own at: https://javisperez.github.io/tailwindcolorshades
      colors: {
        "fuscous-gray": {
          "50": "#F7F7F5", 
          "100": "#EDECE8", 
          "200": "#D4D2C9", 
          "300": "#BAB6A9", 
          "400": "#857F71", 
          "500": "#514b3f", 
          "600": "#4A4234", 
          "700": "#3D3223", 
          "800": "#302417", 
          "900": "#24180C", 
          "950": "#170D05"
        },"tapa": {
          "50": "#F7F7F7", 
          "100": "#F2F1F0", 
          "200": "#DEDCD9", 
          "300": "#CCC9C6", 
          "400": "#A39F9B", 
          "500": "#7e7875", 
          "600": "#70645E", 
          "700": "#5E4B42", 
          "800": "#4A3229", 
          "900": "#382018", 
          "950": "#240F0A"
        },"russett": {
          "50": "#F7F5F6", 
          "100": "#F2EBEE", 
          "200": "#DED1D6", 
          "300": "#C9B5BC", 
          "400": "#A1848A", 
          "500": "#78595b", 
          "600": "#6B484A", 
          "700": "#593133", 
          "800": "#471F21", 
          "900": "#361213", 
          "950": "#240709"
        },"clam-shell": {
          "50": "#FCFBFA", 
          "100": "#FAF8F5", 
          "200": "#F0EBE6", 
          "300": "#E8E0D8", 
          "400": "#D6C5BA", 
          "500": "#c5aaa1", 
          "600": "#B08D82", 
          "700": "#94675A", 
          "800": "#754539", 
          "900": "#592B21", 
          "950": "#38150D"
        },"romantic": {
          "50": "#FFFEFC", 
          "100": "#FFFDF7", 
          "200": "#FFF8ED", 
          "300": "#FFF3E0", 
          "400": "#FFE6CC", 
          "500": "#fed3b5", 
          "600": "#E6B493", 
          "700": "#BF8665", 
          "800": "#995F42", 
          "900": "#733C25", 
          "950": "#4A1F10"
        },"pearl-bush": {
          "50": "#FFFFFF", 
          "100": "#FCFCFA", 
          "200": "#FAF9F5", 
          "300": "#F7F5F0", 
          "400": "#F0EBE1", 
          "500": "#ebe3d8", 
          "600": "#D4C3B0", 
          "700": "#B09679", 
          "800": "#8C6B4D", 
          "900": "#69452B", 
          "950": "#452613"
        },"shadow": {
          "50": "#FAF9F5", 
          "100": "#F2F0E9", 
          "200": "#E0DACA", 
          "300": "#CFC4AE", 
          "400": "#AB997B", 
          "500": "#887052", 
          "600": "#7A5F42", 
          "700": "#66492E", 
          "800": "#52341D", 
          "900": "#3D2211", 
          "950": "#261207"
        },"fruit-salad": {
          "50": "#F8FAF5", 
          "100": "#F0F5EB", 
          "200": "#DBE8D1", 
          "300": "#C3D9B4", 
          "400": "#93BA84", 
          "500": "#669f5d", 
          "600": "#538F4A", 
          "700": "#3A7532", 
          "800": "#275E21", 
          "900": "#184713", 
          "950": "#0B2E08"
        },"gray-asparagus": {
          "50": "#F6F7F5", 
          "100": "#EDF0EB", 
          "200": "#CFD6C9", 
          "300": "#B3BDAC", 
          "400": "#7C8C76", 
          "500": "#4b5d48", 
          "600": "#3C5238", 
          "700": "#2C4528", 
          "800": "#1D381A", 
          "900": "#11290E", 
          "950": "#081A06"
        },"mine-shaft": {
          "50": "#F5F5F5", 
          "100": "#EBE9E8", 
          "200": "#CCC9C8", 
          "300": "#ABA7A6", 
          "400": "#6E6968", 
          "500": "#2d2a2a", 
          "600": "#292222", 
          "700": "#211717", 
          "800": "#1C1010", 
          "900": "#140909", 
          "950": "#0D0303"
        }
      },
      fontFamily: {
        sans: ['Raleway'],
        serif: ['Grenze Gotisch']
      }
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
