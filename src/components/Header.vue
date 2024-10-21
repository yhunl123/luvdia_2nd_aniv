<template>
  <img class="home-btn" src="../assets/img/icon/free-icon-home-5946261.png" v-if="hasHomeBtn" @click="router.push('/')">
  <div class="header" v-if="hasHeader">
    <div class="topnav">
      <div class="goods-wrap">
        <img src="../assets/logo.png"/>
      </div>
      <div class="goods-wrap-txt">
        <span>221113</span>
      </div>

      <div class="goods-wrap">
        <img src="../assets/logo.png"/>
      </div>
      <div class="goods-wrap-txt">
        <span>{{ mPoint }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {router} from "@/router";
import {ref} from "vue";
import {useRoute} from "vue-router";
import store from "@/store";


export default {
  name: "Header",
  components: {
  },
  props: {

  },
  setup() {
    const hasHeader = ref(true)
    const hasHomeBtn = ref(true)

    const hasHeaderList = [
      '/',
      '/collection',
      '/draw',
    ]

    const hasHomeList = [
      '/collection',
      '/draw',
    ]

    const mPoint = ref(localStorage.getItem('mPoint') ? localStorage.getItem('mPoint') : 0)

    hasHeader.value = hasHeaderList.includes(useRoute().fullPath);
    hasHomeBtn.value = hasHomeList.includes(useRoute().fullPath);
    store.commit('setMPoint', mPoint)

    return {
      //변수
      mPoint,
      hasHeader,
      hasHomeBtn,
      router

      //함수

    }
  },
}
</script>