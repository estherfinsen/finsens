/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        running: ["15px", "15px"],
        breads: ["25px", "25px"],
        headers: ["65px", "65px"],
        footer_head: ["130px", "130px"],
        footer: ["40px", "40px"],
        nav: ["230px", "230px"],
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(200)" },
        },
      },
      animation: {
        "program-1": "scroll 10s linear infinite",
        "program-2": "scroll 5s linear infinite",
      },

      cursor: {
        cursor1: "url(/cursor.cur), auto",
        cursor2: "url(/cursor2.cur), auto",
      },
    },

    colors: {
      blue: "#E1F7FF",
      red: "#FF4125",
      mocca: "#A57865",
      grey: "#D3D3D3",
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
