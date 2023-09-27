/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontSize: {
      title: `2.6rem;`,
      paragraph: `1.2rem;`,
    },
    extend: {
      colors: {
        white: "#ffffff",
        secondary: "#8D8BA1",
        "custom-dark": "#101010",
        "custom-blue": "#00adef",
        "waitlist-dark": "rgba(20, 20, 21, 0.70)"
      },
      width: {
        '63': '63%',
      },
    },
    fontFamily: {
      satoshi: ["Satoshi"],
    },
  },
  plugins: [],
};
