import Vue from "vue";
import moment from "moment";
const filters = [
  Vue.filter("toWhole", (val) => {
    if (val) {
      return Math.round(val);
    }
  }),
  Vue.filter("military_time", (val) => {
    if (val) {
      return moment(val, "HH").format("hh A");
    }
  }),
];

export default filters;
