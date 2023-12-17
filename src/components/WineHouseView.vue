<template>
    <WineRoomCompVue
      class="wine-room"
      v-for="room in WineRooms"
      :key="room.id"
      :roomid="room.id"
    ></WineRoomCompVue>
</template>

<script>
import WineRoomCompVue from './WineRoomComp.vue';

export default {
  components: {
    WineRoomCompVue,
  },
  data() {
    return {
      WineRooms: [
        { roomid: 1, name: 'Room A', id: 1 },
        { roomid: 2, name: 'Room B', id: 2 },
        { roomid: 3, name: 'Room C', id: 3 },
      ],
    };
  },
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
