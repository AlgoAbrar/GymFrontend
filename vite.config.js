import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import daisyui from "daisyui"; // ✅ ESM import instead of require()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [daisyui], // ✅ use imported plugin
    },
  },
  daisyui: {
    themes: [
      {
        algofit: {
          primary: "#ef4444", // red-500
          secondary: "#1f1f1f", // deep black
          accent: "#7f1d1d", // dark red
          neutral: "#0a0a0a", // black background
          "base-100": "#121212", // dark surface
          info: "#2563eb",
          success: "#16a34a",
          warning: "#f59e0b",
          error: "#dc2626",
        },
      },
    ],
  },
});
