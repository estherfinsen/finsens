/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        mini: ["10px", "10px"],
        running: ["60px", "60px"],
        headers: ["70px", "70px"],
        breads: ["25px", "25px"],
        nav: ["230px", "230px"],
        footer: ["130px", "130px"],
      },
      extend: {
        animation: {
          "program-2": "scroll 10s linear infinite",
        },

        keyframes: {
          scroll: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
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
  },
  plugins: [],
};
