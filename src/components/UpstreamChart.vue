<template>
  <v-chart class="chart" :option="option" :theme="theme" autoresize />
</template>

<script setup lang="ts">
import { reactive, inject } from "vue";
import type { EChartsOption } from "echarts";
import * as R from "remeda";
const props = defineProps(["docsisData"]);
const theme = inject("theme");

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
    formatter: (args: any[]) => {
      const channelData = combinedUpstream[args[0].dataIndex];
      let tooltip = `<p>Channel ${args[0].axisValue} <br /> ${channelData.channelType} @ ${channelData.modulation}</p> `;
      args.forEach(
        ({
          marker,
          seriesName,
          value,
        }: {
          marker: string;
          seriesName: string;
          value: number;
        }) => {
          value = value || 0;
          tooltip += `<p>${marker} ${seriesName} ${value} dBmV</p>`;
        }
      );

      return tooltip;
    },
  },
  xAxis: [
    {
      type: "category",
      axisLabel: {
        formatter: "ch{value}",
      },
      axisTick: {
        alignWithLabel: true,
      },
      data: combinedUpstream.map((docsis) => docsis.channelId),
    },
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      data: combinedUpstream.map((docsis) => docsis.modulation),
    },
  ],
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
