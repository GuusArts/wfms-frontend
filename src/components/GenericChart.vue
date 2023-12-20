
<template>
  <div>
    <canvas  ref="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js/auto';
import 'chartjs-adapter-moment';

export default {
  props: {
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
      shouldUpdateChart: false,
    };
  },
  mounted() {
    this.createChart();
  },
  beforeUnmount() {
    this.destroyChart();
  },
  watch: {
    chartData: {
      handler() {
        // Set the flag to true to indicate that the chart should be updated
        this.shouldUpdateChart = true;
      },
      deep: true,
    },
  },
  methods: {
    createChart() {
      const ctx = this.$refs.myChart;
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.chartData,
          options: this.chartOptions,
          plugins: [registerables],
        });
      }
    },

    updateChart() {
      if (this.chart && this.shouldUpdateChart) {
        // Destroy the existing chart to avoid memory leaks
        this.chart.destroy();

        // Create a new chart with updated data
        this.createChart();

        // Optionally, you can directly update the existing chart data without destroying and recreating
        // this.chart.data.labels = this.chartData.labels;
        // this.chart.data.datasets[0].data = this.chartData.datasets[0].data;

        // Update the chart to reflect the changes
        this.chart.update();

        // Reset the flag after updating the chart
        this.shouldUpdateChart = false;
      }
    },

    destroyChart() {
      if (this.chart) {
        this.chart.destroy();
      }
    },
  },
};
</script>

