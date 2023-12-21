<!-- GenericChart.vue -->
<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-moment';
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    data: 'updateChart',
    type: 'updateChart',
    options: 'updateChart',
  },
  methods: {
    renderChart() {
      this.chart = new Chart(this.$refs.chartCanvas, {
        type: this.type,
        data: this.data,
        options: this.options,
      });
    },
    updateChart() {
      if (this.chart) {
        this.chart.destroy();
        this.renderChart();
      }
    },
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
