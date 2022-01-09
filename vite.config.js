import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  return {
    plugins: [vue()],
    css: { preprocessorOptions: { scss: { charset: false } } },
  };
});
