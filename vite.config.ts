import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
  server: {
    https: true,
    hmr: {
      protocol: "wss",
    },
  },
  plugins: [react(), basicSsl()],
});
