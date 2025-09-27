<script setup>
import { VPImage } from "vitepress/theme";
import { useData } from "vitepress";

const { frontmatter } = useData();

const props = frontmatter.value.hero.carousel;
</script>

<template>
  <div v-if="props">
    <v-carousel
      class="image-src"
      height="100%"
      hide-delimiters
      :show-arrows="props['show-arrows']"
      cycle
      :interval="props.cycle.duration"
      :crossfade="props.cycle.transition.type == 'crossfade'"
      :transition-duration="props.cycle.transition.duration"
    >
      <v-carousel-item v-for="image in props.images">
        <VPImage class="image-src" :image></VPImage>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
