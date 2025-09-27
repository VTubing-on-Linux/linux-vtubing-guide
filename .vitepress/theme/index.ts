import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { mdiYoutube, mdiTwitch, mdiTwitter, mdiLink } from "@mdi/js";
import HomeHeroImage from "./components/HomeHeroImage.vue";
import VTuberCard from "./components/VTuberCard.vue";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "system",
  },
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      youtube: mdiYoutube,
      twitch: mdiTwitch,
      twitter: mdiTwitter,
      link: mdiLink,
    },
    sets: {
      mdi,
    },
  },
});

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "home-hero-image": () => h(HomeHeroImage),
    });
  },
  enhanceApp({ app }) {
    app.use(vuetify);
    app.component("VTuberCard", VTuberCard);
  },
} satisfies Theme;
