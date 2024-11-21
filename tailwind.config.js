/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        mini: ["10px", "10px"],
        running: ["20px", "20px"],
        headers: ["70px", "70px"],
        breads: ["25px", "25px"],
        nav: ["230px", "230px"],
        footer: ["130px", "130px"],
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
    },

    colors: {
      blue: "#e1f7ff",
      box_green: "#B6CA3F",
      box_red: "#FF4125",
      box_purple: "#62236C",
      textWhite: "#ffffff",
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".word-spacing-custom": {
          "word-spacing": "0.1em",
        },
      });
    },
  ],
};
