<template>
  <div class="wineroom">
    <p class=" wineroom-text">Room {{ roomid }}</p>
    <wine-tank-comp :class="winetanks" 
    ></wine-tank-comp>
  </div>
</template>

<script>
import WineTankComp from './WineTankComp.vue';

export default {
  props: ['name'],
  components: {
    WineTankComp
  },
  data() {
    return {
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
  margin:150px;
  border-radius: 15px;
  


}

.wineroom-text{
color: white;
margin: 10px;
}

.winetanks{
  margin: 10px;
}
</style>
