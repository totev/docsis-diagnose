<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { EChartsOption } from "echarts";
import * as R from "remeda";
const props = defineProps(["docsisData"]);

const combinedUpstream = R.sortBy(
  [
    ...(props.docsisData?.upstream ?? []),
    ...(props.docsisData?.upstreamOfdma ?? []),
  ],
  R.prop("channelId")
);

const chartOption: EChartsOption = {
  title: {
    text: "Upstream values",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    axisLabel: {
      formatter: "ch{value}",
    },
    data: combinedUpstream.map((docsis) => docsis.channelId),
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} dBmV",
    },
    axisPointer: {
      snap: true,
    },
    position: "left",
  },
  series: [
    {
      data: combinedUpstream.map((docsis) => docsis.powerLevel),
      type: "line",
      name: "Power level",
    },
  ],
};

const option = reactive(chartOption);
</script>
<style scoped>
.chart {
  min-height: 400px;
}
</style>
