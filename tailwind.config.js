/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./scr/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "weather-primary": "#00668A",
      "weather-secondary": "004E71",
    },
    fontFamily:{
      Roboto: ["Roboto, sansserif"],
    },
    container: {
      padding: "2rem",
      center:true,
    },
    screens:{
      sm:"640px",
      md:"768px"
    }
  },
  plugins: [],
}

