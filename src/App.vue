<template>
  <v-app class="app-container">
    <navbar/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/navbar";

export default {
  name: "App",
  components: {
    HelloWorld,
    Navbar
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
.app-container {
  background-image: url("./assets/bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
}
</style>
