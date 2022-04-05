<template>
  <div>
    <h2>JSON representation</h2>
    <HideShow>{{ docsisData }}</HideShow>
  </div>
</template>

<script setup lang="ts">
import HideShow from "./HideShow.vue";

defineProps(["docsisData"]);
</script>
