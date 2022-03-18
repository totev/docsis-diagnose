<template>
  <h2>Table representation</h2>
  <HideShow>
    <table class="pure-table-striped">
      <thead>
        <tr>
          <th>Channel ID</th>
          <th>Channel type</th>
          <th>Modulation</th>
          <th>Power level in dBmV</th>
          <th>Frequency</th>
          <th>Signal to noise ratio (SNR) in dBµV</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="7">Downstream</td>
        </tr>
        <tr v-for="downstreamChannel of downstream" :key="downstreamChannel.channelId">
          <td>{{ downstreamChannel.channelId }}</td>
          <td>{{ downstreamChannel.channelType }}</td>
          <td>{{ downstreamChannel.modulation }}</td>
          <td>{{ downstreamChannel.powerLevel }}</td>
          <td>{{ getFrequency(downstreamChannel) }}</td>
          <td>{{ downstreamChannel.snr }}</td>
        </tr>
        <tr>
          <td colspan="7">Upstream</td>
        </tr>
        <tr v-for="upstreamChannel of upstream" :key="upstreamChannel.channelId">
          <td>{{ upstreamChannel.channelId }}</td>
          <td>{{ upstreamChannel.channelType }}</td>
          <td>{{ upstreamChannel.modulation }}</td>
          <td>{{ upstreamChannel.powerLevel }}</td>
          <td>{{ getFrequency(upstreamChannel) }}</td>
          <td>{{ upstreamChannel.snr }}</td>
        </tr>
      </tbody>
    </table>
  </HideShow>
</template>

<script setup lang="ts">
import * as R from "remeda";
import { reactive } from "vue";
import HideShow from "./HideShow.vue";
const props = defineProps(["docsisData"]);

const combinedUpstream = R.sortBy(
  [
    ...(props.docsisData?.upstream ?? []),
    ...(props.docsisData?.upstreamOfdma ?? []),
  ],
  R.prop("channelId")
);
const upstream = reactive(combinedUpstream);

const combinedDownstream = R.sortBy(
  [
    ...(props.docsisData?.downstream ?? []),
    ...(props.docsisData?.downstreamOfdm ?? []),
  ],
  R.prop("frequency")
);
const downstream = reactive(combinedDownstream);

function getFrequency(
  docsisChannel: { frequency: number } & {
    frequencyStart: number;
    frequencyEnd: number;
  }
): string {
  if (docsisChannel.frequency) {
    return `${docsisChannel.frequency}`;
  }
  return `${docsisChannel.frequencyStart}-${docsisChannel.frequencyEnd}`;
}
</script>
<style scoped></style>
