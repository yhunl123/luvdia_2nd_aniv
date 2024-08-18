<template>
  <div class="header" :class="{hidden: !hasHeader}">
    <div class="topnav">
      <div class="goods-wrap">
        <img src="../assets/logo.png"/>
        <span>221113</span>
      </div>
      <div class="goods-wrap">
        <img src="../assets/logo.png" height="20" width="auto"/>
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

<style>
.header {
  z-index: 10000;
  top: 3%;
  width: 100%;
  position: fixed;
  margin: 0;
  display: flex;
  justify-content: center;
}

.topnav {
  display: flex;
  width: 400px;
  height: 30px;
  overflow: hidden;
  justify-content: space-evenly;
  background-color: #444;
  border-radius: 10px;
  align-items: center;
  opacity : 0.5;
}

.goods-wrap {
  display: flex;
  align-items: center;
}

.goods-wrap img {
  height: 20px;
  width: auto;
}

.goods-wrap span {
  color: white;
  margin-left: 20px;
  margin-right: 20px;
}
</style>