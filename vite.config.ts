import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig as defineTestConfig } from "vitest/config"; // ✅ Импортируем vitest/config

// https://vite.dev/config/
export default defineTestConfig(
  defineConfig({
    plugins: [react(), tailwindcss()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
    },
  })
);
