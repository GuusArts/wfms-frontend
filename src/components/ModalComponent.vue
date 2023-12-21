<template>
    <div v-if="visible">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal">
        <CreateWineRoomComp></CreateWineRoomComp>
        <button @click="createWineRoom">Create Wine Room</button>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  import CreateWineRoomComp from './CreateWineRoomComp.vue';
  export default {
   components:{
    CreateWineRoomComp
   },
    
    props: {
      visible: Boolean,
    },
    methods: {
      createWineRoom() {
        // Implement the logic to create a Wine Room
        // After successful creation, you might emit an event or perform other actions
        console.log("Wine Room Created!");
        // Close the modal
        this.closeModal();
      },
      closeModal() {
        // Emit an event to the parent component to close the modal
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your modal styles here */
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    z-index: 1000;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  </style>
  