<template>
  <div class="dashboard">
    <ChartComponent title="Temperature" :chartData="temperatureChartData" :chartOptions="temperatureChartOptions" />
    <ChartComponent title="Side Kettle Temperature" :chartData="sideKettleChartData" :chartOptions="sideKettleChartOptions" />
    <!-- Add more ChartComponent instances as needed -->
  </div>
</template>

<script>
import VinAIDataService from "../service/VinAIDataService";
import ChartComponent from '../components/GenericChart.vue';

export default {
  components: {
    ChartComponent,
  },
  data() {
    return {
      temperatureChartData: {
        labels: [],
        datasets: [
          {
            label: 'Temperature',
            data: [],
            borderColor: 'blue',
            fill: false,
          },
        ],
      },
      sideKettleChartData: {
        labels: [],
        datasets: [
          {
            label: 'Side Kettle Temperature',
            data: [],
            borderColor: 'green',
            fill: false,
          },
        ],
      },

    };
  },
  methods: {
    async retrieveData() {
      try {
        
      
        const temperatureData = await VinAIDataService.retrieveTemperatureData();
        const sideKettleTempData = await VinAIDataService.retrieveSideKettleTempData();

        // Update chart data
        this.temperatureChartData.labels.push(new Date(temperatureData.timestamp));
        this.temperatureChartData.datasets[0].data.push(temperatureData.temp);

        this.sideKettleChartData.labels.push(new Date(sideKettleTempData.timestamp));
        this.sideKettleChartData.datasets[0].data.push(sideKettleTempData.temp);
        
        // Add more data sets as needed

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    setupAutoRefresh() {
      // Check if the interval is already set up
      if (!this.refreshInterval) {
        // Refresh data every 5 seconds (adjust as needed)
        this.refreshInterval = setInterval(() => {
          this.retrieveData();
        }, 5000);
      } 
    },
  },
  mounted() {
    this.retrieveData();
    this.setupAutoRefresh();
  },
  beforeUnmount() {
    clearInterval(this.refreshInterval);
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
