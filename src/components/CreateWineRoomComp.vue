<template>
    <div class="wineroom-form-container">
      <h2>Create a Wineroom</h2>
      <form @submit.prevent="createWineroom" class="wineroom-form">
        <div class="form-group">
          <label for="wineroomName">Wineroom Name:</label>
          <input
            type="text"
            id="wineroomName"
            v-model="wineroomName"
            required
          />
        </div>
        <div class="form-group">
          <label for="wineroomColor">Wineroom Color:</label>
          <input
            type="color"
            id="wineroomColor"
            v-model="wineroomColor"
            required
          />
        </div>
        <button type="submit">Create Wineroom</button>
      </form>
    </div>
  </template>
  
  <script>
import VinAIDataService from '@/service/VinAIDataService';

  export default {
    data() {
      return {
        wineroomName: '',
        wineroomColor: '#ff5733', // Default color
        
      };
    },
    props: {
    visible: Boolean,},
    
    methods: {
      createWineroom() {
        // You can perform additional validation or API calls here
        const newWineroom = {
          name: this.wineroomName,
          color: this.wineroomColor,
          amountOfTanks: 0,
            isClean: true
        };
        
        VinAIDataService.CreateWineRoom(newWineroom)
        console.log('New Wineroom:', newWineroom);
        this.$emit("WineRoomCreated")

  
        this.wineroomName = '';
        this.wineroomColor = '#ff5733'; // Reset color to default
      },
    },
  };

  </script>
  
  <style scoped>
  .wineroom-form-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .wineroom-form {
    display: grid;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  