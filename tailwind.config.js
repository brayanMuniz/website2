/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // colors based on the anime pfp!
        white: '#FFFFFF',
        melon: '#F3B3B3',
        'orchid-pink': '#F4BBD0',
        'dutch-white': '#EFE5C3',
        'misty-rose': '#F3E1E1',
      },
    },
  },
  plugins: [],
}

