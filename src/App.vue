<template>
  <Header></Header>
  <router-view :key="$route.fullPath" />
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {ref} from "vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const isHeader = ref('Y')
    const isFooter = ref('Y')



    return {
      // 변수
      isHeader,
      isFooter,

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
