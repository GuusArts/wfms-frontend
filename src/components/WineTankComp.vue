<!-- WineTank.vue -->

<template>
    <div class="wine-tank" :style="{ backgroundColor: color }">
      <!-- Additional details for wine tank -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      color: String,
      // Add more props as needed for additional details
    },
  };
  </script>
  
  <style>
  .wine-tank {
    width: 100%;
    height: 100%;
  }
  </style>
  