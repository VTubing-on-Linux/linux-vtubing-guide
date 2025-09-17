import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  title: "Linux VTubing Guide",
  description: "Community maintained guide to VTubing on Linux",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        items: [{ text: "Introduction", link: "/introduction" }],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/examples/markdown-examples" },
          { text: "Runtime API Examples", link: "/examples/api-examples" },
        ],
      },
    ],
  },
});
