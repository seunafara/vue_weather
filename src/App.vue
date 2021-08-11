<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import filters from "./filters/";
export default {
  name: "App",
  filters: {
    filters,
  },
};
</script>

<style></style>
