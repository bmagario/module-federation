import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
        "./Button": "./src/Button",
        "./useCount": "./src/useCount",
      },
      shared: {
        react: {
          requiredVersion: "^18.3.1",
        },
        "react-dom": {
          requiredVersion: "^18.3.1",
        },
        jotai: {
          requiredVersion: "^2.9.1",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 5001,
  },
});
