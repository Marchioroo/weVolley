/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // ✅ ADICIONE ESTA LINHA
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")], // pode ficar antes ou depois, sem problema
  theme: {
    extend: {
      fontFamily: {
        circular: ["CircularStd", "sans-serif"], // 👉 use com className="font-circular"
        sans: ["CircularStd", "sans-serif"], // 👉 torna a Circular a fonte padrão
      },
    },
  },
  plugins: [],
};
