/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A11E",
        textColor: "#4E545F",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 40px 100px 0px;",
      },
    },
  },
  plugins: [],
};
