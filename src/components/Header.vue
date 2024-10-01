<template>
  <div class="header" :class="{hidden: !hasHeader}">
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
  background-color: #444;
  border-radius: 10px;
  align-items: center;
  opacity : 0.8;
}

.goods-wrap {
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: center;
}

.goods-wrap-txt {
  display: flex;
  color: white;
  width: 25%;
}

.goods-wrap img {
  height: 20px;
  width: auto;
}
</style>