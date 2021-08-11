<template>
  <div :class="dark ? 'dark' : ''" class="w-full">
    <div class="settings-mobile">
      <button
        @click="is_child ? showSettings() : {}"
        type="button"
        class="settings-mobile-btn"
      >
        <i class="las la-times"></i>
      </button>

      <div class="settings-group">
        <h4>Time Format</h4>
        <div class="flex time-select">
          <label for="format1"
            ><input
              type="radio"
              name="time-format"
              v-model="settings.time_format"
              value="1"
              id="format1"
              @change="saveSettings"
            /><span>1PM</span></label
          >
          <label for="format2"
            ><input
              type="radio"
              name="time-format"
              v-model="settings.time_format"
              value="2"
              id="format2"
              @change="saveSettings"
            /><span>13:00</span></label
          >
        </div>
      </div>
      <div class="settings-group">
        <h4>Geolocation</h4>
        <div class="toggleWrapper">
          <input
            type="checkbox"
            name="geolocation"
            class="mobileToggle"
            id="geolocation"
            @change="saveSettings"
            v-model="settings.geolocation"
          />
          <label for="geolocation"></label>
        </div>
      </div>
      <div class="settings-group">
        <h4>Dark mode</h4>
        <div class="toggleWrapper">
          <input
            type="checkbox"
            name="darkmode"
            class="mobileToggle"
            id="darkmode"
            @change="saveSettings"
            v-model="settings.dark_mode"
          />
          <label for="darkmode"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
    },
    is_child: {
      type: Boolean,
    },
  },
  data: () => ({
    settings: {
      time_format: "1",
      geolocation: true,
      dark_mode: false,
    },
  }),
  methods: {
    showSettings() {
      this.$parent.hideSettings();
    },
    saveSettings() {
      localStorage.setItem("settings", JSON.stringify(this.settings));
    },
    getSettings() {
      let settings = localStorage.getItem("settings");
      if (!settings)
        return localStorage.setItem("settings", JSON.stringify(this.settings));

      this.settings = JSON.parse(settings);
    },
  },
  mounted() {
    this.getSettings();
  },
};
</script>

<style></style>
