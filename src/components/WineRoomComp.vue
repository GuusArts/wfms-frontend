<template>
  <div class="wineroom">
    <p>Room{{ roomid }}</p>
    <wine-tank-comp class="winetanks" v-for="tank in getRoomWineTanks(roomid)" :key="tank.id"></wine-tank-comp>
  </div>
</template>

<script>
import WineTankComp from './WineTankComp.vue';

export default {
  props: ['roomid'],
  components: {
    WineTankComp
  },
  data() {
    return {
      wineTanks: [
        { id: 1, name: 'Tank A', capacity: 1000, status: 'Active', roomid: 1 },
        { id: 2, name: 'Tank B', capacity: 2000, status: 'Inactive', roomid: 2 },
        { id: 3, name: 'Tank C', capacity: 1500, status: 'Active', roomid: 3 },
        { id: 4, name: 'Tank D', capacity: 1000, status: 'Active', roomid: 1 },
        { id: 5, name: 'Tank E', capacity: 2000, status: 'Inactive', roomid: 2 },
        { id: 6, name: 'Tank F', capacity: 1500, status: 'Active', roomid: 3 },
        { id: 7, name: 'Tank D', capacity: 1000, status: 'Active', roomid: 1 },
        { id: 8, name: 'Tank E', capacity: 2000, status: 'Inactive', roomid: 2 },
        { id: 9, name: 'Tank F', capacity: 1500, status: 'Active', roomid: 3 },
        { id: 10, name: 'Tank D', capacity: 1000, status: 'Active', roomid: 1 },
        { id: 11, name: 'Tank E', capacity: 2000, status: 'Inactive', roomid: 2 },
        { id: 12, name: 'Tank F', capacity: 1500, status: 'Active', roomid: 3 },
      ],
    };
  },
  methods: {
    getRoomWineTanks(roomId) {
      return this.wineTanks.filter((tank) => tank.roomid === roomId);
    },
  },
};
</script>

<style scoped>
.wineroom {
  display: flex;
  margin: 20px; /* Adjust the value according to your needs */
  background-color: #AEE3FF;
  height: 200px;
  margin:50px;


}

.wineroom-text{

}

.winetanks{
  margin: 10px;
}
</style>
