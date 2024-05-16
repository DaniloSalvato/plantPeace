/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        garamondSerif: ["EB Garamond", "serif"],
        cursive: ["Pacifico", "cursive"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        customWhite: "#FCFCFC",
        customAthenaGrey: "#F8F9FB",
        customGray: "#AFB2AA",
        customWisper: "#f0f1ee",
        customIBBNB: "#1E1E24",
        customTeak: "#B99274",
        customSecondary: "#808276",
        customAccent: "#DDDEA0",
        customAvocado: "#8A9B6E",
        customLunarGreen: "#354733",
        customDarkGreen: "#158212",
        customGreen: "#83E281",
        customLightGreen: "#F6FFF6",
      },
      backgroundImage: {
        footerBg: "url('/src/assets/footer-background.svg')",
      },
    },
  },
  plugins: [],
}
