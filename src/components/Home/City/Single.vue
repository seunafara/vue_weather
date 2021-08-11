<template>
  <div class="flex items-center">
    <div class="flex flex-col">
      <img src="@/assets/images/icon-sunny.png" class="w-32 mb-5" alt="" />
      <div class="flex flex-col items-center lg:hidden">
        <h4 class="text-[#374151] mb-2 text-sm">NOW</h4>
        <h2 class="text-[#374151] text-4xl flex mb-6">
          {{ data.current.temp | toWhole }} <span class="text-sm">º</span>
        </h2>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class=" ml-10 flex-col  ">
        <h4 class="text-[#374151] mb-2 text-sm hidden lg:flex ">NOW</h4>
        <h2 class="text-[#374151] text-4xl hidden mb-6 lg:flex ">
          {{ data.current.temp | toWhole }} <span class="text-sm">º</span>
        </h2>
        <List :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  components: {
    List,
  },
  props: {
    data: {
      type: Object,
    },
  },
  mounted() {},
};
</script>

<style></style>
