module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/public/home-bg.png')",
        "subtitle-bg": "url('/public/subtitle-bg.png')",
        "city-bg": "url('/public/city-bg.png')",
        "minimalsitic-icon": "url('/public/minimalsitic-icon.png')",
      },

      animation: {
        flow: "flow 3s ease infinite",
      },

      keyframes: {
        flow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
    
  },
  plugins: [],
};
