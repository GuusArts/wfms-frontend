<template>
  <div>
    <div v-if="WineRoomList.length > 0">
      <WineRoomCompVue
        v-for="room in WineRoomList"
        :key="room.id"
        :name="room.name"
      >
        <!-- Display wine tanks for each wineroom -->
        <div v-if="room.wineTanks && room.wineTanks.length > 0">
          <h2>Wine Tanks for {{ room.name }}</h2>
          <ul>
            <li v-for="tank in room.wineTanks" :key="tank.id">{{ tank.name }}</li>
          </ul>
        </div>
        <div v-else>
          <p>No wine tanks available for {{ room.name }}</p>
        </div>
      </WineRoomCompVue>
    </div>

    <div v-else>
      <h1>No winerooms created. Make one below</h1>
      <br />
      <CreateWineRoomCompVue></CreateWineRoomCompVue>
    </div>

    <!-- Other buttons or components -->
  </div>
</template>

<script>
import { reactive } from 'vue';
import VinAIDataService from "@/service/VinAIDataService";
import WineRoomCompVue from "../components/WineRoomComp.vue";

export default {
  components: {
    WineRoomCompVue,
  },

  data() {
    return {
      WineRoomList: [],
    };
  },

  methods: {
    async retrieveWineTanksForWineroom(wineroom) {
      try {
        const wineTanks = await VinAIDataService.RetrieveWineTanksByWineRoomId(wineroom.id);
        console.log(wineTanks)
        wineroom.wineTanks = reactive(wineTanks);
      } catch (error) {
        console.error("Error retrieving wine tanks:", error);
        // Handle error as needed
      }
    },

    async retrieveWineroomsWithWineTanks() {
      try {
        const response = await VinAIDataService.RetrieveRoomData();
        const winerooms = response.data
        console.log(winerooms)
        for (const room of winerooms) {
          await this.retrieveWineTanksForWineroom(room);
        }
        this.WineRoomList = winerooms;
      } catch (error) {
        console.error("Error retrieving winerooms with wine tanks:", error);
        // Handle error as needed
      }
    },
  },

  created() {
   
    this.retrieveWineroomsWithWineTanks();
  },
};
</script>
