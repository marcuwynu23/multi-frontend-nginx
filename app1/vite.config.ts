import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/app1",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
