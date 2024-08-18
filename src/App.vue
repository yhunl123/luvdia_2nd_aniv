<template>
  <Header :key="$route.fullPath"></Header>
  <router-view :key="$route.fullPath"/>
  <Footer :key="$route.fullPath"></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: 'App',
  components: {
    Modal,
    Header,
    Footer
  },
  setup() {


    return {
      // 변수


      // 함수


    }
  }
}
</script>

<style>
body {margin:0;}

.hidden {
  visibility: hidden;
  display: none;
}
</style>
