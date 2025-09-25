# VTubers on Linux

<hr>

<v-container v-for="vtuber in vtubers">
  <v-card
    title="MikanTheMink"
    variant="outlined"
    class="rounded-lg"
    color="surface-variant"
  >
    <template v-slot:prepend>
      <v-avatar>
        <v-img :src="vtuber.avatar"></v-img>
      </v-avatar>
    </template>
    <template v-slot:append v-if="!!vtuber.distros">
      <v-chip
        target="_blank"
        class="text-none pa-4"
        :href="distro.url"
        v-for="distro in vtuber.distros"
      >
        {{distro.name }}
      </v-chip>
    </template>
    <template v-slot:text>
      <div v-if="!!vtuber.about" class="pb-3">
        {{vtuber.about}}
      </div>
      <v-expansion-panels rounded="lg" variant="accordion" class="pt-3">
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
    <template v-slot:actions>
      <div class="flex-wrap">
        <v-btn class="text-none" v-for="social in vtuber.socials">
          <template v-slot:prepend>
            <v-icon>{{ "$" + `${social.icon ?? 'link'}` }}</v-icon>
          </template>
          {{social.handle}}
        </v-btn>
      </div>
    </template>
  </v-card>
</v-container>

<script setup>
import vtubers from "./data.json";
const hostname = import.meta.env.DEV ? "localhost" : "vtubing-on-linux.github.io"
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
