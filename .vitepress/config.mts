import { defineConfig } from "vitepress";
import vuetify from "vite-plugin-vuetify";

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
    logo: "/logo.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/VTubing-on-Linux/linux-vtubing-guide" },
    ],
    search: {
      provider: "local",
    },
  },

  ignoreDeadLinks: true,

  vite: {
    plugins: [vuetify()],
    ssr: {
      noExternal: [/\.css$/, /^vuetify/],
    },
  },
});
