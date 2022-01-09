import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  return {
    plugins: [
      vue(),
      copy({
        targets: [
          mode === "production"
            ? {
                src: resolve(__dirname, "./src/styles/fonts"),
                dest: resolve(__dirname, "./dist/assets/"),
              }
            : {
                src: resolve(__dirname, "./src/styles/fonts"),
                dest: resolve(__dirname, "public/"),
              },
        ],
        hook: "writeBundle", // notice here
      }),
    ],
    css: { preprocessorOptions: { scss: { charset: false } } },
  };
});
