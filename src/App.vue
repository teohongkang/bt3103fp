<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//Registering components Locally
//import Header from "./components/Header.vue";
//import Footer from "./components/Footer.vue";
//import GrpFinder from "c:/Users/Foo Hee Yuan/Desktop/BT3103/vueprojects/bt3103fp/src/components/GrpFinder.vue";
//import PageContent from './components/PageContent.vue'

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    //Registering with a name
    //"app-header": Header,
    //"app-footer": Footer
    //GrpFinder
    //Registering without a name
    //PageContent
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
