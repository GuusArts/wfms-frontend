<!-- WineTank.vue -->

<template>
  <div class="image-container" @mouseenter="showOverlay = true" @mouseleave="showOverlay= false" @click="showModal= true">
  <p>{{tankname }}</p>
  <img v-bind:src=getImagePath() class="card-image"  alt="card image" @click="handleButtonClick()">
  <p class="text">{{ capacity }}</p>
  <div v-if="showOverlay" class="overlay">
  <p class="overlay-text">More info</p>
  </div>
  </div>

  <div class="modal" tabindex="-1" role="dialog" :class="{ 'show': showModal }">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ tankname }}</h5>
      
            <button type="button" class="close" @click="showModal = false" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img v-bind:src=getImagePath() class="card-image"  alt="card image" @click="handleButtonClick()">
            <p>Colour of the wine: {{KindofWine }}</p>
            <p>Kind of grape: {{ KindofGrape }} </p>
            <button class="btn btn-primary" @click="GoToWineConf(id)">Go to wine tank config</button>
            <!-- Your overlay content goes here -->
          </div>
        </div>
      </div>
    </div>





  </template>
  
  <script>
  export default {
    data(){
      return{
        showOverlay: false,
        showModal: false
      };
    },
    props: ['tankname', 'capacity', 'KindofWine', 'KindofGrape', 'id'],
    methods:{
    getImagePath() {
      return require('@/assets/0c48ce4592f03dcb5bdea9d68aa0835f.png');
    },

    handleButtonClick(){
      console.log('Button is clicked')
    },
    GoToWineConf(id){
      this.$router.push(`/Winetank/${id}`)
    }
  }}
  </script>
  
  <style>

.card-image {
  width: 150px;
  height: 150px;
}

.image-container {
  position: relative;
  width: 200px; /* Adjust according to your image size */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Adjust the overlay color and opacity */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  opacity: 0; /* Initial opacity set to 0 */
  transition: opacity 0.3s ease-in-out; /* Add transition property for opacity */
  border-radius: 15px;
}

.overlay-text {
  color: black;
}

.image-container:hover .overlay {
  opacity: 1; /* Set opacity to 1 on hover */
  
  
}

.text {
  color: rgb(0, 0, 0);
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  margin-bottom: 0rem !important;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  background: rgba(0, 0, 0, 0.5); /* Overlay background color with some transparency */
}

.modal.show {
  display: block;
}

</style>

