import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { mdiYoutube, mdiTwitch, mdiTwitter, mdiLink } from "@mdi/js";

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
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    app.use(vuetify);
  },
} satisfies Theme;
