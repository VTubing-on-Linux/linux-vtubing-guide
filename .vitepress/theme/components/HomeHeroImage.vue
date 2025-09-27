<script setup>
import { VPImage } from "vitepress/theme";
import { useData } from "vitepress";
import { onMounted, onUnmounted, ref } from "vue";

const { frontmatter } = useData();

const props = frontmatter.value.hero.carousel;

const currentIndex = ref(props?.cycle?.random ? randomIndex() : 0);
let slideInterval = -1;

function randomIndex(length = props.images?.length) {
  return ~~(Math.random() * length);
}

function randomUnrepeatedIndex(previousIndex, length = props.images?.length) {
  if (length == 0) {
    return 0;
  }

  const index = randomIndex(length - 1);
  return index >= previousIndex ? index + 1 : index;
}

function clampIndex(index) {
  return index % (props.images?.length ?? 1);
}

function startInterval() {
  if (!props.cycle) return;

  slideInterval = window.setInterval(() => {
    currentIndex.value = props.cycle.random
      ? randomUnrepeatedIndex(currentIndex.value)
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
