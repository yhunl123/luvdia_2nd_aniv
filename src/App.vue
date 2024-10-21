<template>
  <Header :key="$route.fullPath"></Header>
  <router-view :key="$route.fullPath"/>
</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: 'App',
  components: {
    Modal,
    Header,
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
