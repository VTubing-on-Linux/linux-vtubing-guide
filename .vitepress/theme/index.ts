import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import {
  mdiYoutube,
  mdiTwitch,
  mdiTwitter,
  mdiMastodon,
  mdiGit,
  mdiLink,
} from "@mdi/js";
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
      mastodon: mdiMastodon,
      git: mdiGit,
      bluesky: [
        "M5.202 1.422C7.954 3.488 10.913 7.677 12 9.924c1.087-2.248 4.046-6.436 6.798-8.502C20.783-.068 24-1.221 24 2.448c0 .733-.42 6.157-.667 7.038-.857 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.298-5.065 5.197-7.279-1.304-7.847-2.97-.104-.305-.153-.448-.153-.327-.001-.121-.049.021-.153.327C11.28 17.85 9.065 24.35 4 19.154c-2.667-2.736-1.432-5.473 3.422-6.299-2.777.473-5.899-.308-6.755-3.37C.42 8.605 0 3.181 0 2.448 0-1.221 3.217-.068 5.202 1.422",
      ],
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
