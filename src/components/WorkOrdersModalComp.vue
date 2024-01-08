
<template>
    <div class="modal" v-if="isModalOpen">
      <div class="modal-content">
        <h2>Work Orders</h2>
        <ul>
          <li v-for="(order, index) in workOrders" :key="index">{{ order }}</li>
        </ul>
        <div>
          <label for="newWorkOrder">New Work Order:</label>
          <input type="text" v-model="newWorkOrder" id="newWorkOrder" />
          <button @click="addWorkOrder">Add Work Order</button>
        </div>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalOpen: false,
        workOrders: [],
        newWorkOrder: '',
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      addWorkOrder() {
        if (this.newWorkOrder.trim() !== '') {
          this.workOrders.push(this.newWorkOrder);
          this.newWorkOrder = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your modal styles here */

  
  .modal-content {
    /* Your modal content styling */
  }
  </style>
  