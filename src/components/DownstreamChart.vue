<template>
  <v-chart class="chart" :option="option" :theme="theme" autoresize />
</template>

<script setup lang="ts">
import { reactive, inject } from "vue";
import type { EChartsOption } from "echarts";
import * as R from "remeda";

const props = defineProps(["docsisData"]);
const theme = inject("theme");
const units = {
  "Power level": "dBmV",
  SNR: "dB",
};
const combinedDownstream = R.sortBy(
  [
    ...(props.docsisData?.downstream ?? []),
    ...(props.docsisData?.downstreamOfdm ?? []),
  ],
  R.prop("frequency")
);

const chartOption: EChartsOption = {
  title: {
    text: "Downstream values",
  },
  tooltip: {
    trigger: "axis",
    formatter: (args: any[]) => {
      const channelData = combinedDownstream[args[0].dataIndex];
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
          tooltip += `<p>${marker} ${seriesName} ${value} ${units[seriesName as keyof typeof units] ?? ""
            }</p>`;
        }
      );

      return tooltip;
    },
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        formatter: "ch{value}",
      },
      data: combinedDownstream.map((docsis) => docsis.channelId),
    },
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      data: combinedDownstream.map((docsis) => docsis.modulation),
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        formatter: "{value} dBmV",
      },
      axisPointer: {
        snap: true,
      },
      position: "left",
    },
    {
      type: "value",
      axisLabel: {
        formatter: "{value} dB",
      },
      axisPointer: {
        snap: true,
      },
      position: "right",
    },
  ],
  series: [
    {
      data: combinedDownstream.map((docsis) => docsis.powerLevel),
      type: "line",
      name: "Power level",
      yAxisIndex: 0,
    },
    {
      data: combinedDownstream.map((docsis) => docsis.snr),
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
