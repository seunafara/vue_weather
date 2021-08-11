<template>
  <div class="">
    <div
      v-show="!showSettings"
      class="flex justify-between items-center w-full pad pb-12"
    >
      <button
        @click="showSettings = !showSettings"
        type="button"
        class="settings-btn"
      >
        <i class="las la-cog"></i>
      </button>
      <button type="button" class="settings-btn">
        <i class="las la-plus"></i>
      </button>
    </div>

    <Main v-show="showSettings" :dark="true" :is_child="true" />
  </div>
</template>

<script>
import Main from "./Main.vue";
export default {
  components: { Main },

  data: () => ({
    showSettings: false,
    settings: {
      time_format: "1",
      geolocation: true,
      dark_mode: false,
    },
  }),
  methods: {
    hideSettings() {
      this.showSettings = !this.showSettings;
    },
  },
};
</script>

<style></style>
