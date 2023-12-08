<!-- Widget.vue -->
<template>
    <div class="widget">
      <div class="widget-header">
        <h2>{{ "Live temp data" }}</h2>
      </div>
      <div class="widget-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
    },
  };
  </script>
  
  <style scoped>
  .widget {
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding-top: 20px;
  }
  
  .widget-header {
    padding: 15px;
    background-color: #f0f0f0;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 15px 15px 0 0;
  }
  
  .widget-content {
    padding: 15px;
  }
  </style>
  