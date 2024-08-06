import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
        hostApp: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: "^18.3.1",
        },
        "react-dom": {
          requiredVersion: "^18.3.1",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
