
<template>
    <div class="wine-room-container">
      <WineTank
        v-for="(room, roomIndex) in wineRooms"
        :key="roomIndex"
        :color="room.color"
      />
    </div>
  </template>
  
  <script>
  import WineTank from '../components/WineTankComp.vue';
  
  export default {
    components: {
      WineTank,
    },
    data() {
      return {
        wineRooms: [
          { color: 'lightblue' },
          { color: 'lightgreen' },
          // Add more rooms as needed
        ],
      };
    },
  };
  </script>
  
  <style>
  .wine-room-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start; /* Adjust as needed */
    height: 100vh; /* 100% of the viewport height */
  }
  </style>
  