---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Linux VTubing Guide"
  tagline: "Community maintained guide to VTubing on Linux"
  image:
    src: transparent.svg
    alt: "Linux VTubing Guide"
  actions:
    - theme: brand
      text: Introduction
      link: /docs/docs
    - theme: alt
      text: VTubers on Linux
      link: /docs/linux/vtubers

features:
  - title: Learn how to VTube on Linux
    details: We will cover the basics of setting up a VTubing environment on Linux, including software recommendations and configuration tips.
  - title: Make the switch to Linux
    details: Learn about the benefits of using Linux for VTubing and how to transition your existing setup.
  - title: Discover open-source tools
    details: Explore a variety of open-source software options for VTubing, from 2D to 3D applications.
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // TODO: I'm not a JS dev anymore, so please rewrite this in a better way
    function waitForHeroImage() {
      const heroImage = document.querySelector('.VPImage.image-src');
      if (heroImage) {
        const randomNum = Math.floor(Math.random() * 3) + 1; 
        heroImage.src = `/linux-vtubing-guide/logo-${randomNum}.svg`;
        console.log(`Hero image set to logo-${randomNum}.svg`);
      } else {
        setTimeout(waitForHeroImage, 100);
      }
    }
    waitForHeroImage();
})
</script>



::: warning
🚧 This guide is currently under active development. Content may be incomplete or change frequently. 🚧 :::