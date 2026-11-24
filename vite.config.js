// vite.config.js
// Tells Vite's bundler (Rollup) that each of these HTML files is a page of its own.
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                login: resolve(__dirname, "login.html"),
                main: resolve(__dirname, "main.html"),
                addHike: resolve(__dirname, "addHike.html"),
                eachHike: resolve(__dirname, "eachHike.html"),
                profile: resolve(__dirname, "profile.html")
            }
        }
    }
});
