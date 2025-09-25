import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  title: "Linux VTubing Guide",
  description: "Community maintained guide to VTubing on Linux",
  themeConfig: {
    nav: [
      { text: "Introduction", link: "/docs/docs" },
      { text: "Installation", link: "/docs/installation" },
      { text: "OBS", link: "/docs/obs" },
      { text: "3D VTubing", link: "/docs/3d_vtubing" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/docs/docs" },
          { text: "Getting Started", link: "/docs/getting_started/getting_started"},
          { text: "Hardware", link: "/docs/getting_started/hardware" }
        ],
      },
      {
        text: "Linux",
        items: [
          { text: "Installation", link: "/docs/linux/installation" },
          { text: "Running windows software", link: "/docs/linux/running_windows_software" },
          { text: "Wayland vs. X11", link: "/docs/linux/wayland_vs_xorg" },
          { text: "NixOS", link: "/docs/linux/nix" },
          { text: "VTubers on Linux", link: "/docs/linux/vtubers" }
        ],
      },
      {
        text: "Streaming",
        items: [
          { text: "OBS", link: "/docs/streaming/obs" },
          { text: "Window Capture on Linux", link: "/docs/streaming/capture" },
          { text: "Audio setup + tools", link: "/docs/streaming/audio" }
        ],
      },
      {
        text: "VTubing Software",
        items: [
          { text: "2D VTubing", link: "/docs/vt/2d" },
          { text: "3D VTubing", link: "/docs/vt/3d" }
        ],
      },
      {
        text: "Miscellaneous",
        items: [
          { text: "Other useful software", link: "/docs/misc/other_software" },
          { text: "Contributors", link: "/docs/misc/contributors" },
          { text: "VTubers on Linux", link: "/docs/linux/vtubers" }
        ],
      },
    ],
  },
});
