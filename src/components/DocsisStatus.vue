<script setup lang="ts">
import { reactive } from "vue";
import brotliDecompress from "brotli/decompress";
import { decode } from "@borderless/base64";

import queryString from "query-string";
import DownloadChart from "./DownloadChart.vue";
// inferred type: { title: string }
const state = reactive({ docsisJson: "" });

const parsedHash = queryString.parse(location.hash) as any;
try {
  const decompressedData = brotliDecompress(decode(parsedHash.docsis));
  const docsisJson = new TextDecoder().decode(decompressedData);
  console.log("json:", docsisJson);
  state.docsisJson = JSON.parse(docsisJson);
} catch (error) {
  console.warn("No hash given", error);
}
</script>

<template>
  <div class="greetings">
    <span class="green" v-if="state.docsisJson">
      <DownloadChart :docsisData="state.docsisJson" />
    </span>
  </div>
</template>

<style scoped></style>
