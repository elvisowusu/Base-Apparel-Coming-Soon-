/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //adding customised colors to the tailwind 
      colors:{
        'desaturatedRed' : 'hsl(0, 36%, 70%)',
        'softRed' : 'hsl(0, 93%, 68%)',
        'darkGrayishRed' :'hsl(0, 6%, 24%)', 
        'startGradient' :'hsl(0, 80%, 86%)',
        'endGradient': 'hsl(0, 74%, 74%)',
      },
    },
  },
  plugins: [],
}
