import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "src",
  base: "/linux-vtubing-guide/",

  rewrites: {
    "en/:rest*": ":rest*",
  },

  locales: {
    root: { label: "English", lang: "en-US", dir: "ltr" },
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      provider: "local",
    },
  },
});
