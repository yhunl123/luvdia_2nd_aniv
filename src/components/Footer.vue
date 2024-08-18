<template>
  <div class="footer" :class="{hidden: !hasFooter}">
    <div class="nav-bar">
      <router-link :class="{active: page===1}" to="/storage">도감</router-link>
      <router-link :class="{active: page===2}" to="/">메인</router-link>
      <router-link :class="{active: page===3}" to="/draw">뽑기</router-link>
    </div>
  </div>
</template>

<script>
import {router} from "@/router";
import {ref} from "vue";
import {useRoute} from "vue-router";

export default {
  name: 'Footer',
  components: {},
  props: {
    page: Number,
    hasFooter: Boolean
  },
  setup() {
    const hasFooter = ref(true)

    const hasFooterList = [
      '/',
      '/storage',
      '/draw',
    ]

    hasFooter.value = hasFooterList.includes(useRoute().fullPath);

    return {
      //변수
      router,
      hasFooter

      //함수

    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  z-index: 10000;
  margin:0;
  left: 50%;
  display: flex;
  justify-content: center;
}
.nav-bar {
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  bottom: 2.7%;
  position: fixed;
}
.nav-bar a {
  width: 80px;
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: black;
  font-size: 32px;
  text-decoration-line: none;
}

.active {background-color: #04AA6D;}
</style>