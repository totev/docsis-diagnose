<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { EChartsOption } from "echarts";
const props = defineProps(['docsisData'])

const chartOption: EChartsOption = {
  title: {
    text: "Downstream values",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    axisLabel: {
      formatter: "ch{value}",
    },
    data: props.docsisData?.downstream.map((docsis) => docsis.channelId),
  },
  yAxis: [
    {
      type: "value",
      axisLabel: {
        formatter: "{value} db",
      },
      axisPointer: {
        snap: true,
      },
      position: "left",
    },
    {
      type: "value",
      axisLabel: {
        formatter: "{value} db",
      },
      axisPointer: {
        snap: true,
      },
      position: "right",
    },
  ],
  series: [
    {
      data: props.docsisData?.downstream.map((docsis) => docsis.powerLevel),
      type: "line",
      name: "Power level",
      yAxisIndex: 0,
    },
    {
      data: props.docsisData?.downstream.map((docsis) => docsis.snr),
      type: "line",
      name: "SNR",
      yAxisIndex: 1,
    },
  ],
};

const option = reactive(chartOption);
</script>
<style scoped>
.chart {
  height: 400px;
}
</style>
