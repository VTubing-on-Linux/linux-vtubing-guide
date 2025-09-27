# VTubers on Linux

Want to support VTubers who use Linux? Here is a list of VTubers who use Linux
for their streaming setup, along with links to their social media and streaming
platforms.

<hr>

<v-container>
  <VTuberCard :="vtuber" v-for="vtuber in vtubers"></VTuberCard>
</v-container>

::: info Missing something? Please let us know!
Open an [issue](https://github.com/VTubing-on-Linux/linux-vtubing-guide/issues)
or start a new [discussion](https://github.com/VTubing-on-Linux/linux-vtubing-guide/discussions)
:::

<script setup>
import vtubers from "./data.json";
</script>
