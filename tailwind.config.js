/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        mini: ["10px", "10px"],
        first_letter: ["150px", "150px"],
        headers: ["60px", "60px"],
        breads: ["16px", "16px"],
        links: ["25px", "25px"],
        nav: ["230px", "230px"],
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
