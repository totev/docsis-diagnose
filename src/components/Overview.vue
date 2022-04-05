<template>
  <div>
    <h2>Docsis data analysis from {{ docsisTime }}</h2>
    <span>
      The given data contains
      <b>{{ upstreamChannelsCount }}</b> upstream channels, including
      <b>{{ upstreamOfdmaChannelsCount }}</b> OFDMA channels and
      <b>{{ downstreamChannelsCount }}</b>
      downstream channels including
      <b>{{ downstreamOfdmChannelsCount }}</b> OFDM channels.
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps(["docsisData"]);
const docsisTime = computed(() => {
  return new Date(props.docsisData.time).toLocaleString();
});

const upstreamChannelsCount = computed(() => props.docsisData.upstream?.length);
const upstreamOfdmaChannelsCount = computed(
  () => props.docsisData.upstreamOfdma?.length ?? 0
);
const downstreamChannelsCount = computed(
  () => props.docsisData.downstream?.length
);
const downstreamOfdmChannelsCount = computed(
  () => props.docsisData.downstreamOfdm?.length ?? 0
);
</script>
