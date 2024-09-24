/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "system-ui"],
      poppins: ["Poppins", "system-ui"],
      montserrat: ["Montserrat", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
