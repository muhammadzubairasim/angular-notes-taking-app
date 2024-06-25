/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes:{
        hamburgerClose: {
          '0%': {
            position:'absolute',
            top: '70%',
            right: '0',
            transform: 'scale(1)',
            height: 'fit-content',
            width: '100vw',
            display:'flex',
            flexDirection:'column',
            alignItems:"start",
            justifyContent:'center',
            backdropFilter: 'blur(20px)',
            border: '1px solid lightgrey',
            boxShadow: '1px 1px 1px 1px darkgray'
          },
          '100%': {
            position:'absolute',
            top: '0',
            right: '0',
            transform: 'scale(0)',
            height: '0',
            width: '0',
          },
        },
        navbarLinks:{
          '0%':{
            position:'relative',
            transform:'scale(1)',
            height: '50vh',
            width: 'fit-content',
          },
        },
      },
      animation:{
        hamburgerClose: 'hamburgerClose 500ms forwards 1 ease-in-out',
        navbarLinks:'navbarLinks 500ms forwards 1 ease-in-out',
      },
    },
  },
  plugins: [],
}

