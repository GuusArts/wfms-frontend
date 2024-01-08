<template>
    <div>
      <h2>Create Wine Tank</h2>
      <form @submit.prevent="createWineTank">
        <label for="name">Name:</label>
        <input type="text" v-model="wineTank.name" required />
  
        <label for="volume">Volume:</label>
        <input type="number" v-model="wineTank.volume" required />
  
        <label for="wineCategory">Wine Category:</label>
        <input type="text" v-model="wineTank.wineCategory" required />
  
        <label for="variety">Variety:</label>
        <input type="text" v-model="wineTank.variety" required />
  
        <label for="temperature">Temperature:</label>
        <input type="number" v-model="wineTank.temperature" required />
  
        <label for="tempActuatorON">Temperature Actuator ON:</label>
        <input type="checkbox" v-model="wineTank.tempActuatorON" />
  
        <button type="submit">Create Wine Tank</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        wineTank: {
          name: "",
          volume: null,
          wineCategory: "",
          variety: "",
          temperature: null,
          tempActuatorON: false,
        },
      };
    },
    methods: {
      createWineTank() {
        // Send the wineTank object to your backend for storage
        console.log("Wine Tank Created:", this.wineTank);
        // Reset form or perform any other necessary actions
        this.resetForm();
      },
      resetForm() {
        // Reset the form fields
        this.wineTank = {
          name: "",
          volume: null,
          wineCategory: "",
          variety: "",
          temperature: null,
          tempActuatorON: false,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  