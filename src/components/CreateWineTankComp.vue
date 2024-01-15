<template>
  <div class="wine-tank-form">
    <h2>Create Wine Tank</h2>
    <form @submit.prevent="createWineTank" class="form-container">
      <!-- Name -->
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="wineTank.name" required />
      </div>

      <!-- Volume -->
      <div class="form-group">
        <label for="volume">capacity:</label>
        <input type="number" v-model="wineTank.volume" required />
      </div>
      <input type="hidden" v-model="wineTank.id" />
      <!-- Wine Category -->
      <div class="form-group">
        <label for="wineCategory">Wine Category:</label>
        <input type="text" v-model="wineTank.wineCategory" required />
      </div>

 
      <div class="form-group">
        <label for="variety">Variety:</label>
        <input type="text" v-model="wineTank.variety" required />
      </div>


      <div class="form-group">
        <label for="sparkID">Select Spark:</label>
        <select v-model="wineTank.sparkID" required>
          <option v-for="spark in availableSparks" :key="spark.sparkID" :value="spark.sparkID">
            {{ spark.sparkName }}
          </option>
        </select>
      </div>

      <div class="form-group">
  <label for="wineroomID">Select the wineroom where this tank will be placed:</label>
  <select v-model="wineTank.wineroomID" required>
    <option v-for="WineRoom in availableWineRooms" :key="WineRoom.id" :value="WineRoom.id">
      {{ WineRoom.name }}
    </option>
  </select>
</div>


      <button type="submit" class="submit-button">Create Wine Tank</button>
    </form>
  </div>
</template>

<script>
import VinAIDataService from '@/service/VinAIDataService';
export default {
  data() {
    return {
      wineTank: {
        name: "",
        id: this.generateRandomId(),
        volume: null,
        wineCategory: "",
        variety: "",
        sparkID: null,
        wineroomID: null
      },
      availableSparks: [],
      availableWineRooms: []
    };
  },
  mounted() {
    this.retrieveAvailableSparks();
    this.retrieveAvailableWineRooms();
  },
  methods: {
    createWineTank() {
      console.log("Wine Tank Created:", this.wineTank);
      VinAIDataService.CreateWinetank(this.wineTank )
      this.resetForm();
    },
    resetForm() {
      this.wineTank = {
        name: "",
        id: this.generateRandomId(),
        volume: null,
        WineCategory: "",
        variety: "",
        sparkID: null,
        wineroomID: null
      };
    },
    async retrieveAvailableSparks() {
      try {
        VinAIDataService.RetrieveAvaibleSpark().then((response) => {
          this.availableSparks = response.data; 
          
        });
      } catch (err) {
        document.getElementById("errorview").innerHTML = err.name;
      }
  },

  async retrieveAvailableWineRooms() {
      try {
        VinAIDataService.RetrieveRoomData().then((response) => {
          this.availableWineRooms = response.data; 
          
        });
      } catch (err) {
        document.getElementById("errorview").innerHTML = err.name;
      }
  },
  generateRandomId() {
      return Math.floor(Math.random() * 1000000);
    },}}

</script>

<style scoped>
.wine-tank-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
