<template>
    <b-card-group  v-for="room in WineRooms " v-bind:key="room.id">
    <wine-tank-comp v-for="tank in getRoomWineTanks(room.roomid)" v-bind:key="tank.id"></wine-tank-comp>
    </b-card-group>
</template>

<script>
import WineTankComp from './WineTankComp.vue';
export default{
components:{
WineTankComp
},
data(){
return {

    WineRooms:[{roomid: 1, name: 'Room A', id: 1},
    {roomid: 2, name: 'Room B', id: 2},
    {roomid: 3, name: 'Room C', id: 3}],


    wineTanks: [
        { id: 1, name: 'Tank A', capacity: 1000, status: 'Active', roomid: 1 },
        { id: 2, name: 'Tank B', capacity: 2000, status: 'Inactive', roomid: 2 },
        { id: 3, name: 'Tank C', capacity: 1500, status: 'Active', roomid: 3 },
        { id: 4, name: 'Tank D', capacity: 1000, status: 'Active', roomid: 1 },
        { id: 5, name: 'Tank E', capacity: 2000, status: 'Inactive', roomid: 2 },
        { id: 6, name: 'Tank F', capacity: 1500, status: 'Active', roomid: 3 },
      ],
}
},
methods:{
getRoomWineTanks(roomId) {
      return this.wineTanks.filter((tank) => tank.roomid === roomId).slice(0, 3);
    },

}}
  
</script>

<style scoped>


.card-container {
  margin:10px;
  display: flex;
  justify-content: center; /* Adjust as needed: space-around, space-between, space-evenly */
  align-items: center; /* Align items vertically in the center */
  flex-wrap: wrap; /* Allow items to wrap to the next row if there's not enough space */
}
</style>