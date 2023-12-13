<template>
  <div id="app">
     <HeaderComp></HeaderComp>
     <router-view></router-view>
  </div>
</template>

<script>


import HeaderComp from './components/HeaderComp.vue';
export default {
  components: {

    HeaderComp,
},
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;

}
</style>
