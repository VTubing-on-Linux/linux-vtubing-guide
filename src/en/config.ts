import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  title: "Linux VTubing Guide",
  description: "Community maintained guide to VTubing on Linux",
  themeConfig: {
    nav: [
      { text: "Introduction", link: "/docs/docs" },
      { text: "Installation", link: "/docs/getting_started/installation" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/docs/docs" },
          { text: "Getting Started", link: "/docs/getting_started/getting_started"},
          { text: "Installation", link: "/docs/getting_started/installation" },
        ],
      },
      {
        text: "Linux",
        items: [
          { text: "Running windows software", link: "/docs/linux/running_win_software" },
          { text: "Wayland vs. X11", link: "/docs/linux/wayland_vs_xorg" },
          { text: "NixOS", link: "/docs/linux/nixos" },
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
        text: "Audio",
        items: [{ text: "MIDI keyboards", link: "/docs/audio/midi" }],
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
