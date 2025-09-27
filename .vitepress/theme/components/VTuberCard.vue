<script setup lang="ts">
import { useData } from "vitepress";

const { isDark } = useData();
const hostname = import.meta.env.DEV
  ? "localhost"
  : "vtubing-on-linux.github.io";

interface Fanart {
  artist: string;
  url: string;
}

interface Distro {
  name: string;
  url: string;
}

interface Embed {
  platform: string;
  url: string;
}

interface SocialMedia {
  icon?: string;
  handle: string;
  url: string;
}

defineProps<{
  title: string;
  avatar?: string;
  fanarts?: [Fanart];
  about?: string;
  distros?: [Distro];
  embeds?: [Embed];
  socials?: [SocialMedia];
}>();
</script>

<template>
  <ClientOnly>
    <v-theme-provider :theme="isDark ? 'dark' : 'light'">
      <v-card
        :title="title"
        variant="outlined"
        class="rounded-lg"
        color="surface-variant"
      >
        <template v-slot:prepend v-if="avatar">
          <v-avatar>
            <v-img :src="avatar"></v-img>
          </v-avatar>
        </template>
        <template v-slot:append v-if="distros">
          <v-chip
            target="_blank"
            class="text-none pa-4"
            :href="distro.url"
            :key="distro.name"
            v-for="distro in distros"
          >
            {{ distro.name }}
          </v-chip>
        </template>
        <template v-slot:text v-if="about || embeds">
          <div v-if="about" class="pb-3">
            {{ about }}
          </div>
          <v-expansion-panels
            rounded="lg"
            variant="accordion"
            class="pt-3"
            v-if="embeds"
          >
            <v-expansion-panel
              :title="`Watch on ${embed.platform}`"
              :key="embed.url"
              v-for="embed in embeds"
            >
              <v-expansion-panel-text>
                <iframe
                  class="rounded-lg"
                  :src="`${embed.url}&parent=${hostname}`"
                  width="100%"
                  allowfullscreen
                  style="aspect-ratio: 16/9"
                  frameborder="0"
                >
                </iframe>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel title="Fanarts" v-if="fanarts">
              <v-expansion-panel-text>
                <v-carousel
                  hide-delimiters
                  show-arrows="hover"
                  cycle
                  height="100%"
                >
                  <v-carousel-item
                    :src="fanart.url"
                    :key="fanart.url"
                    v-for="fanart in fanarts"
                  ></v-carousel-item>
                </v-carousel>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
        <template v-slot:actions v-if="socials">
          <div class="flex-wrap">
            <v-btn
              class="text-none"
              v-for="social in socials"
              :key="social.url"
              :href="social.url"
              target="_blank"
            >
              <template v-slot:prepend>
                <v-icon>{{ "$" + `${social.icon ?? "link"}` }}</v-icon>
              </template>
              {{ social.handle }}
            </v-btn>
          </div>
        </template>
      </v-card>
    </v-theme-provider>
  </ClientOnly>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
