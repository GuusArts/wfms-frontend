<!-- WineTank.vue -->

<template>
  <img  v-bind:src=getImagePath() class="card"  alt="card image"/>
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
    height: 100%;
 
    
  }
  </style>
  