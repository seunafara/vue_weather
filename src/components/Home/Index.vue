<template>
  <div
    class=" lg:px-16 pt-24 pb-0 lg:py-24 w-full flex flex-col "
    v-if="loaded.length > 0"
  >
    <Logo class="mb-16 self-center block lg:hidden" />
    <div class="pad flex flex-col rounded-3xl">
      <Accordion
        v-for="(city, i) in loaded"
        :key="i"
        :label="city.label"
        :data="city.data"
      >
      </Accordion>
    </div>
    <Settings :dark="true" class="flex lg:hidden mt-10" />
  </div>
</template>

<script>
import Accordion from "./Accordion.vue";
import { cities } from "@/assets/data/cities.json";
import saveData from "../../assets/api.js";

import Logo from "../Logo.vue";
import Settings from "../Settings/Index.vue";

export default {
  components: { Accordion, Logo, Settings },
  data: () => ({
    loaded: [],
  }),
  mounted() {
    try {
      cities.forEach(async (city) => {
        let city_data = await saveData(city);
        this.loaded = [...this.loaded, city_data];
      });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
