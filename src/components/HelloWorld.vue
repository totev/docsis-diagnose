<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    json: {{ json }}
  </div>
</template>

<script>
import { decode } from "@borderless/base64";
import brotliDecompress from "brotli/decompress";
import queryString from "query-string";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      parsedHash: ""
    };
  },
  setup: () => {
    const parsedHash = queryString.parse(location.hash);
    let json = "";
    try {
      const decompressedData = brotliDecompress(decode(parsedHash.docsis));
      json = new TextDecoder().decode(decompressedData);
      console.log("json:", json);
    } catch (error) {
      console.warn("No hash given", error);
    }
    return { json };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
