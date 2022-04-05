<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import brotliDecompress from "brotli/decompress";
import { decode } from "@borderless/base64";

import queryString from "query-string";
import DownloadChart from "./DownstreamChart.vue";
import UploadChart from "./UpstreamChart.vue";
import DocsisTable from "./DocsisTable.vue";
import DocsisJson from "./DocsisJson.vue";
import Overview from "./Overview.vue";
const state = reactive({ docsisJson: "" });

function parseHash(locationHash: string): void {
  const parsedHash = queryString.parse(locationHash) as any;
  try {
    const decompressedData = brotliDecompress(decode(parsedHash.docsis));
    const docsisJson = new TextDecoder().decode(decompressedData);
    state.docsisJson = JSON.parse(docsisJson);
  } catch (error) {
    console.warn("No hash given", error);
  }
}

const onHashChange = () => {
  parseHash(location.hash);
};

onMounted(() => {
  window.addEventListener("hashchange", onHashChange);
  onHashChange();
});
onUnmounted(() => {
  window.removeEventListener("hashchange", onHashChange);
});
</script>

<template>
  <div class="charts">
    <div v-if="state.docsisJson">
      <Overview :docsisData="state.docsisJson" class="block" />
      <DownloadChart :docsisData="state.docsisJson" />
      <UploadChart :docsisData="state.docsisJson" />
      <DocsisTable :docsisData="state.docsisJson" class="block" />
      <DocsisJson :docsisData="state.docsisJson" class="block" />
      <pre v-show="false">
        {{ state.docsisJson }}
      </pre>
    </div>
    <div v-else>
      No docsis data given :( Try the
      <a
        href="/#docsis=G3cTABwHjttchShw99mopQjZnlljpnx0e5Pd4L1jUoQSSLZ1WLr6-t_fayEIyn8z_97MSSvkfbxz4h1bqRQOUFtfUH62O4xd9ACDi33tkBQ3q0HZ_isCCXsng5_I5ebyfP1YkucKeAebu4iWkd4Gek800uQsY3Ahfdx3r6G4kCP3y1uS_H78CIuF9LFnBOCr2oEvRjCmbJuplCUBRK_DlC5Kh2fLkf1_UFs2OlEjBI7N2eC6HA2ZZuSkKwidXI2B5-MIDpmT5PRP59B0koYJTdgbYyLC0FM9wYJ0E09n65ESKsNmKzldRQoSem6O0Q_axmxWNd90goPKaTNDNwdtiXYycU8SWIULGmb-F3IKWFAxBTIaGXDlBumIznEpG1wXw6HnJNvSATv57HwYzXGzc6tA7WO4bJNgL6ArXD5Jbwk6w1MnGKvgKqpfKHHL0tB2kZLoIniA9QHGoisI_7tILIhHzdXaF3Dg9L39AfPN6P7TnS12EMrWGsXWSXVdvbdvv4ZAgbztj4TRW3eZ_6-dFpOyXrd8gPUqmWs12OTwxgshBQH0kAIgFhj4_rG0_xMdPGH_dbggH-A8L-b_TeYB2gje5RwNE-mjqWffmndO9opcKpe0K3hFn2rNYmjPazk"
      >sample data</a>
    </div>
  </div>
</template>

<style scoped>
.charts {
  min-width: 600px;
}
.block {
  padding-bottom: 1vh;
}
</style>
