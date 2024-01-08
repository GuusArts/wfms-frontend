<!-- GenericChart.vue -->
<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';
import {ref, onMounted, onBeforeUnmount, watch, inject} from 'vue';
export default {
  props: {
    type: {
      type: String,
      default: 'line',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    dataKey: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    let chart = null;
    const canvasRef = ref();

    const chartData = inject(props.dataKey); // shallowRef
    const chartOptions = {};

    onMounted(() => {
      chart = new Chart(canvasRef.value, {
        data: chartData.value,
        type: 'line',
        options: chartOptions,
      });
    });

    onBeforeUnmount(() => chart?.destroy());

    watch(chartData, () => chart?.update());

    return {
      canvasRef,
    }
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
