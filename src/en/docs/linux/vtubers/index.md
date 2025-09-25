# VTubers on Linux

Want to support VTubers who use Linux? Here is a list of VTubers who use Linux
for their streaming setup, along with links to their social media and streaming
platforms.

<hr>

<v-theme-provider :theme="isDark ? 'dark' : 'light'">
<v-container v-for="vtuber in vtubers">
  <v-card
    :title="vtuber.title"
    variant="outlined"
    class="rounded-lg"
    color="surface-variant"
  >
    <template v-slot:prepend v-if="vtuber.avatar">
      <v-avatar>
        <v-img :src="vtuber.avatar"></v-img>
      </v-avatar>
    </template>
    <template v-slot:append v-if="vtuber.distros">
      <v-chip
        target="_blank"
        class="text-none pa-4"
        :href="distro.url"
        v-for="distro in vtuber.distros"
      >
        {{distro.name }}
      </v-chip>
    </template>
    <template v-slot:text v-if="vtuber.about || vtuber.embeds">
      <div v-if="vtuber.about" class="pb-3">
        {{vtuber.about}}
      </div>
      <v-expansion-panels rounded="lg" variant="accordion" class="pt-3" v-if="vtuber.embeds">
        <v-expansion-panel :title="`Watch on ${embed.platform}`" v-for="embed in vtuber.embeds">
          <v-expansion-panel-text>
            <iframe
              class="rounded-lg"
              :src="`${embed.url}&parent=${hostname}`"
              width="100%"
              allowfullscreen
              style="aspect-ratio: 16/9;"
              frameborder="0"
            >
            </iframe>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="Fanarts" v-if="vtuber.fanarts">
          <v-expansion-panel-text>
            <v-carousel hide-delimiters show-arrows="hover" cycle height="100%">
              <v-carousel-item :src="fanart.url" v-for="fanart in vtuber.fanarts"></v-carousel-item>
            </v-carousel>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
    <template v-slot:actions v-if="vtuber.socials">
      <div class="flex-wrap">
        <v-btn
          class="text-none"
          v-for="social in vtuber.socials"
          :href="social.url"
          target="_blank"
        >
          <template v-slot:prepend>
            <v-icon>{{ "$" + `${social.icon ?? 'link'}` }}</v-icon>
          </template>
          {{social.handle}}
        </v-btn>
      </div>
    </template>
  </v-card>
</v-container>
</v-theme-provider>

<script setup>
import vtubers from "./data.json";
import { useData } from 'vitepress';

const { isDark } = useData();
const hostname = import.meta.env.DEV ? "localhost" : "vtubing-on-linux.github.io"
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

::: info Missing something? Please let us know!
Open an [issue](https://github.com/VTubing-on-Linux/linux-vtubing-guide/issues)
or start a new [discussion](https://github.com/VTubing-on-Linux/linux-vtubing-guide/discussions)
:::
