/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        running: ["15px", "15px"],
        breads: ["25px", "25px"],
        headers: ["70px", "70px"],
        hover_scene: ["65px", "65px"],
        hover_grafik: ["120px", "120px"],
        hover_speak: ["135px", "130px"],
        footer: ["130px", "130px"],
        nav: ["230px", "230px"],
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "program-2": "scroll 7s linear infinite",
      },

      rotate: {
        270: "270deg",
      },
    },

    colors: {
      blue: "#E1F7FF",
      black: "#000",
      red: "#FF4125",
      purple: "#62236C",
      pink: "#FF6BBB",
      textWhite: "#ffffff",
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".word-spacing-custom": {
          "word-spacing": "3.0em",
        },
      });
    },
  ],
};
