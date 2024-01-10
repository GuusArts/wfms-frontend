<!-- Modal.vue -->
<template>
    <div class="modal" v-if="show">
      <div class="modal-content">
        <button @click="closeModal">Close Modal</button>
        <component :is="currentComponent" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
        currentComponent: null,
      };
    },
    methods: {
      openModal(componentName) {
        this.currentComponent = componentName;
        this.show = true;
      },
      closeModal() {
        this.show = false;
        this.currentComponent = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your modal styles here */
  </style>
  