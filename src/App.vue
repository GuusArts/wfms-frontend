<template>
  <div id="app">
     <HeaderComp></HeaderComp>
     <SideBarComp></SideBarComp>
     <router-view></router-view>
  </div>
</template>

<script>


import HeaderComp from './components/HeaderComp.vue';
import SideBarComp from './components/SideBarComp.vue';
export default {
  components: {
    SideBarComp,
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
