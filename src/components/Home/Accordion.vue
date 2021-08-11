<template>
  <div class="faq-accordion-combo">
    <div
      class="faq-accordion-combo__trigger"
      :class="active ? '!bg-white' : ''"
    >
      <div class="faq-accordion-combo__trigger-inner">
        <button type="button" @click.prevent="toggle" class="flex items-center">
          <div class=" mr-3">
            <i v-if="!active" class="las la-angle-down"></i
            ><i v-else class="las la-angle-up"></i>
          </div>
          <h4
            class="text-[#374151] faq-accordion-combo__trigger-label"
            :class="active ? '!text-lg' : ''"
          >
            {{ label }}
          </h4>
        </button>

        <p v-if="!active" class=" self-end">
          {{ data.current.temp | toWhole }}º
        </p>
        <div v-else class="flex">
          <p class="mr-2">5-day view</p>
          <div class="toggleWrapper toggleWrapper2">
            <input
              type="checkbox"
              name="darkmode"
              class="mobileToggle"
              id="darkmode"
              v-model="show_graph"
            />
            <label for="darkmode"></label>
          </div>
        </div>
      </div>
    </div>
    <VueAccordion :expanded="active" :duration="duration">
      <div class="faq-accordion-combo__content">
        <Graph
          v-if="show_graph"
          :chart_label="data.daily_days"
          :chart_data="data.daily"
        />
        <Single v-else :data="data" />
      </div>
    </VueAccordion>
  </div>
</template>

<script>
import VueAccordion from "@ztrehagem/vue-accordion";
import "@ztrehagem/vue-accordion/dist/vue-accordion.css";
import Single from "./City/Single.vue";
import Graph from "./Graph.vue";
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: undefined,
    },
    data: {
      type: Object,
    },
  },
  components: {
    VueAccordion,
    Single,
    Graph,
  },
  data: () => ({
    active: false,
    show_graph: false,
  }),
  methods: {
    toggle() {
      this.active = !this.active;
      if (!this.active) return;
    },
  },
};
</script>

<style scoped></style>
