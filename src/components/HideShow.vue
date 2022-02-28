<template>
  <a class="pure-button button-xsmall" @click="hide = !hide">
    <i class="fa fa-shopping-cart fa-lg"></i>
    {{ hide ? "Show" : "Hide" }}
  </a>
  <pre :hidden="hide">
    <slot></slot>
  </pre>
</template>

<script setup lang="ts">
import { ref } from "vue";
const hide = ref(true);
</script>
<style scoped>
.button-xsmall {
  font-size: 70%;
}
</style>
