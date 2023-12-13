<!-- WineTank.vue -->

<template>
  <card class="card" @click="handleButtonClick">
  <img v-bind:src=getImagePath() class="card-image"  alt="card image"/>
  </card>
  </template>
  
  <script>
  export default {
    props: {
      color: String,
      // Add more props as needed for additional details
    },
  
  methods:{
    getImagePath() {
      return require('@/assets/0c48ce4592f03dcb5bdea9d68aa0835f.png');
    },

    handleButtonClick(){
      console.log('Button is clicked')
    }
  }}
  </script>
  
  <style>
  .card {
    width: 10%;
    height: 10%;
    justify-content: center;
    
  }
  </style>
  