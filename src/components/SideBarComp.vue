<!-- WaveSidebar.vue -->

<template>
  <div class="wave-sidebar">
    <div>
        <img v-bind:src=getWinehouseImagePath() class="icon"  alt="card image" @click="GoToWinehouse()">
        <img v-bind:src=getWorkOrdersImagePath() class="icon"  alt="card image" @click="GoToWorkOrders()">
    </div>
    
  </div>
</template>

<style scoped>
.wave-sidebar {
  width: 100px; /* Adjust the width as needed */
  height: 40vh;
  margin-top: 300px;
  background-color: #AEE3FF; /* Adjust the background color as needed */
  position: fixed;
  left: -1%;
  top: 0;
  overflow: hidden;
  z-index: 1000;
  border-radius: 30px;
}


.wave {
  width: 50%;
  height: 50%;
  position: absolute;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#555" d="M0,96L48,90.7C96,85,192,75,288,64C384,53,480,43,576,58.7C672,75,768,117,864,117.3C960,117,1056,75,1152,90.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  bottom: 0;
}
</style>

<script>

export default ({
methods:{
    getWinehouseImagePath() {
      return require('@/assets/image22.png');
    },
    getWorkOrdersImagePath(){
        return require('@/assets/image24.png');
    },
    getTanksImagePath(){
        return require('@/assets/4698164.png');
    },
    GoToWinehouse(){
        this.$router.push('/Winehouse')
    },

    GoToWorkOrders(){
      this.$router.push('/Workorders')
    }
}
})
</script>
