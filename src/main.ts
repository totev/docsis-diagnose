import { LineChart, GaugeChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  MarkAreaComponent,
} from "echarts/components";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { createApp } from "vue";
import ECharts from "vue-echarts";
import App from "./App.vue";

use([
  CanvasRenderer,
  LineChart,
  GaugeChart,
  MarkAreaComponent,
  GridComponent,
  TooltipComponent,
  TitleComponent,
]);

const app = createApp(App);

// register ECharts globally
app.component("v-chart", ECharts);
app.mount("#app");
