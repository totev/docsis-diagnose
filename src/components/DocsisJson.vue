<template>
  <h2>JSON representation</h2>
  <a class="pure-button button-xsmall" @click="hide = !hide">
    <i class="fa fa-shopping-cart fa-lg"></i>
    {{ hide ? "Show" : "Hide" }}
  </a>
  <pre :hidden="hide">
    {{ docsisData }}
  </pre>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps(["docsisData"]);
const hide = ref(true)
</script>
<style scoped>
.button-xsmall {
  font-size: 70%;
}
</style>
