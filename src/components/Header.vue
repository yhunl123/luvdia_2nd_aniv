<template>
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
import {ref} from "vue";
import {useRoute} from "vue-router";
import store from "@/store";

export default {
  name: "Header",
  props: {

  },
  setup() {
    const hasHeader = ref(true)


    const hasHeaderList = [
      '/',
      '/storage',
      '/draw',
    ]

    const mPoint = ref(localStorage.getItem('mPoint') ? localStorage.getItem('mPoint') : 0)

    hasHeader.value = hasHeaderList.includes(useRoute().fullPath);
    store.commit('setMPoint', mPoint)

    return {
      //변수
      mPoint,
      hasHeader

      //함수

    }
  },
}
</script>