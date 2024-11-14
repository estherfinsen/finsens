/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        mini: ["10px", "12px"],
        headers: ["50px", "60px"],
        breads: ["16px", "20px"],
        links: ["25px", "30px"],
      },

      colors: {
        bg_blue: "#EAF9FF",
        box_green: "#B6CA3F",
        box_red: "#FF4125",
        box_purple: "#62236C",
        textWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
