<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { EChartsOption } from "echarts";
const props = defineProps(['docsisData'])

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
    data: props.docsisData?.upstream.map((docsis) => docsis.channelId),
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} db",
    },
    axisPointer: {
      snap: true,
    },
    position: "left",
  },
  series: [
    {
      data: props.docsisData?.upstream.map((docsis) => docsis.powerLevel),
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
