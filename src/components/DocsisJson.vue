<template>
  <h2>JSON representation</h2>
  <HideShow>{{ docsisData }}</HideShow>
</template>

<script setup lang="ts">
import HideShow from "./HideShow.vue";

defineProps(["docsisData"]);
</script>
