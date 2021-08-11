<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chart_label: {
      type: Array,
    },
    chart_data: {
      type: Array,
    },
  },
  data: (instance) => ({
    chartdata: {
      labels: instance.chart_label,
      datasets: [
        {
          label: "",
          backgroundColor: "transparent",
          data: instance.chart_data,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style></style>
