/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/__tests__/**/*.test.{js,jsx}"], // 👈 ensures Vitest finds your tests
  },
});
