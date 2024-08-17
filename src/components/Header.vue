<template>
  <div class="header" :class="{hidden: getIsHeader==='N'}">
    <div class="topnav">
      <div class="goods-wrap">
        <img src="../assets/logo.png"/>
        <span>221113</span>
      </div>
      <div class="goods-wrap">
        <img src="../assets/logo.png" height="20" width="auto"/>
        <span>{{ mileage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import store from "@/store/index";

export default {
  name: "Header",
  props: {
  },
  setup() {
    const mileage = ref(localStorage.getItem('mileage') ? localStorage.getItem('mileage') : 0)

    const getIsHeader = computed(() => {
      return store.state.isHeader
    })

    return {
      //변수
      mileage,

      //함수
      getIsHeader,

    }
  },
}
</script>

<style>
.header {
  z-index: 10000;
  top: 3%;
  width: 100%;
  position: absolute;
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