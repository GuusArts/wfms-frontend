<template>
  <div class="dashboard">
    <GenericChart title="Temperature" :data-key="temperatureKey" />
    <GenericChart title="Side Kettle Temperature" :data-key="sideKettleKey" />
    <!-- Add more ChartComponent instances as needed -->
  </div>
</template>

<script>
import VinAIDataService from "../service/VinAIDataService";
import GenericChart from '../components/GenericChart.vue';
import {ref, onMounted, onBeforeUnmount, shallowRef, triggerRef, provide} from 'vue';

export default {
  components: {
    GenericChart,
  },
  setup() {
    const refreshInterval = ref();

    const temperatureKey = 'temp';
    const temperatureChartData = shallowRef({
        labels: [],
        datasets: [
          {
            label: 'Temperature',
            data: [],
            borderColor: 'blue',
            fill: false,
          },
        ],
    });
    
    const sideKettleKey = 'sideKettle';
    const sideKettleChartData = shallowRef({
      labels: [],
        datasets: [
          {
            label: 'Side Kettle Temperature',
            data: [],
            borderColor: 'green',
            fill: false,
          },
        ],
      });


    provide(temperatureKey, temperatureChartData);
    provide(sideKettleKey, sideKettleChartData);

    async function retrieveData() {
      try {
        
        const temperatureData = await VinAIDataService.retrieveTemperatureData();
        const temperatureTimestamp = new Date(temperatureData.timestamp);

        const sideKettleTempData = await VinAIDataService.retrieveSideKettleTempData();
        const sideKettleTempTimestamp = new Date(sideKettleTempData.timestamp);

        temperatureChartData.value.labels.push(temperatureTimestamp.toLocaleString());
        temperatureChartData.value.datasets[0].data.push(temperatureData.temp);

        sideKettleChartData.value.labels.push(sideKettleTempTimestamp.toLocaleString());
        sideKettleChartData.value.datasets[0].data.push(sideKettleTempData.temp);

        triggerRef(temperatureChartData);
        triggerRef(sideKettleChartData);
        
        // Add more data sets as needed

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    function setupAutoRefresh() {
      // Check if the interval is already set up
      if (refreshInterval.value == null) {
        // Refresh data every 5 seconds (adjust as needed)
        refreshInterval.value = setInterval(() => retrieveData(), 5000);
      } 
    }

    onMounted(async () => {
      await retrieveData();
      setupAutoRefresh();
    });

    onBeforeUnmount(() => {
      clearInterval(refreshInterval.value);
    });

    return {
      temperatureKey,
      sideKettleKey,
    }
  },
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

/* Add any additional styles as needed */
</style>
