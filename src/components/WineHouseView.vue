
<template>
    <WineRoomCompVue></WineRoomCompVue>
  </template>
  
  <script>
import WineRoomCompVue from './WineRoomComp.vue';

  
  export default {
    components: {
      WineRoomCompVue
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
  