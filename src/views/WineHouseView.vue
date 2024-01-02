<template>
  <div v-if="WineRoomList && WineRoomList.length > 0">
    <WineRoomCompVue @WineRoomCreated="RetrieveWinerooms"
      class="wine-room"
      v-for="room in WineRoomList"
      :key="room.id"
      :name="room.name"
    ></WineRoomCompVue>
  </div>

  <div v-else>
    <h1>No winerooms created. Make one below</h1>
    <br>
    <CreateWineRoomCompVue></CreateWineRoomCompVue>
  </div>

  <Button>Create WineTank</Button>
  <Button @click="GoToCreateWineRoom">Create WineRoom</Button>
</template>

<script>
import VinAIDataService from '@/service/VinAIDataService';
import WineRoomCompVue from '../components/WineRoomComp.vue';
import CreateWineRoomCompVue from '@/components/CreateWineRoomComp.vue';

export default {
  components: {
    WineRoomCompVue,
    CreateWineRoomCompVue
  },
  data() {
    return {
      WineRoomList: [],
      WineTankList: [],
    };
  },

  methods: {
    RetrieveWinerooms() {
      try {
        VinAIDataService.RetrieveRoomData().then((response) => {
          this.WineRoomList = response.data; 
          console.log(this.WineRoomList);
        });
      } catch (err) {
        document.getElementById("errorview").innerHTML = err.name;
      }
    },
    RetrieveWineTanks() {
      try {
        VinAIDataService.RetrieveTankData().then((response) => {
          this.WineTankList = response.data; // Update to response.data
          console.log(response.data);
        });
      } catch (err) {
        document.getElementById("errorview").innerHTML = err.name;
      }
    },
  
  GoToCreateWineRoom(){
        this.$router.push('/CreateWineRoom')
    },

  created() {
    this.RetrieveWinerooms();
    this.RetrieveWineTanks();
   } },
};
</script>

<style>
.wine-room-container {
  margin: 100px;
  height: auto;
  background-color: rgb(255, 0, 0);
  display: flex;
  flex-wrap: wrap;
}
</style>
