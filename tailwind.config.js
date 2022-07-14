/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Splash, sans-serif'
      },
      animation:{
        ping: 'ping 3s infinite',
        pull: 'pull 5s infinite',
        pulse: 'pulse 7s infinite'
      },
      keyframes:{
        ping:{
          '75%, 100%': {
            transform: 'scale(1)',
            opacity: '0'
          }
        },
        pull:{
          '50%': {
            opacity: 'none',
            backgroundColor: 'green',
            color: 'black'
          }
        },
        pulse:{
          '50%': {
            opacity: '5',
            backgroundColor: 'indigo',
            color: 'yellow'
          }
        }
        
      }
    },
  },
  plugins: [],
}
