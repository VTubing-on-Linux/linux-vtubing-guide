import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  title: "Linux VTubing Guide",
  description: "Community maintained guide to VTubing on Linux",
  themeConfig: {
    nav: [
      { text: "Introduction", link: "/docs/docs" },
      { text: "Installation", link: "/docs/installation" },
      { text: "Audio", link: "/docs/audio" },
      { text: "OBS", link: "/docs/obs" },
      { text: "3D VTubing", link: "/docs/3d_vtubing" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/docs/docs" },
          { text: "Prerequisites", link: "/docs/prerequisites" },
          { text: "Installation", link: "/docs/installation" },
          { text: "Audio", link: "/docs/audio" },
          { text: "OBS", link: "/docs/obs" },
          { text: "Wayland/Xorg", link: "/docs/wayland_xorg" },
          { text: "3D VTubing", link: "/docs/3d_vtubing" },
          { text: "Apps", link: "/docs/apps" },
          { text: "Other Software", link: "/docs/other_software" },
          { text: "Nix", link: "/docs/nix" },
          { text: "Contributors", link: "/docs/contributors" },
        ],
      },
    ],
  },
});
