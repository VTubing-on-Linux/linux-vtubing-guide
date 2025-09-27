<script setup>
import { VPImage } from "vitepress/theme";
import { useData } from "vitepress";
import { onMounted, onUnmounted, ref } from "vue";

const { frontmatter } = useData();

const props = frontmatter.value.hero.carousel;

function randomIndex() {
  return ~~(Math.random() * (props.images?.length ?? 1));
}

function clampIndex(index) {
  return index % (props.images?.length ?? 1);
}

const currentIndex = ref(props?.cycle?.random ? randomIndex() : 0);
let slideInterval = -1;

function startInterval() {
  if (!props.cycle) return;

  slideInterval = window.setInterval(() => {
    currentIndex.value = props.cycle.random
      ? randomIndex()
      : clampIndex(currentIndex.value + 1);
  }, Number(props.cycle.duration));
}

function clearInterval() {
  window.clearInterval(slideInterval);
}

onMounted(startInterval);
onUnmounted(clearInterval);
</script>

<template>
  <div v-if="props">
    <v-carousel
      v-model="currentIndex"
      class="image-src"
      height="100%"
      hide-delimiters
      :show-arrows="props?.['show-arrows']"
      :crossfade="props?.cycle?.transition?.type == 'crossfade'"
      :transition-duration="props?.cycle?.transition?.duration"
    >
      <v-carousel-item v-for="image in props.images">
        <VPImage class="image-src" :image></VPImage>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
