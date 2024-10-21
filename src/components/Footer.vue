<template>
  <div class="footer" :class="{hidden: !hasFooter}">
    <div class="nav-bar">
      <img
          class="nav-img draw-img"
          id="draw"
          :src="drawImg"
          @mouseenter="hoverIn"
          @mouseleave="hoverOut"
          @click="goRoute('/draw')">
      <img
          class="nav-img notice-img"
          id="notice"
          :src="noticeImg"
          @mouseenter="hoverIn"
          @mouseleave="hoverOut"
          @click="">
      <img
          class="nav-img cafe-img"
          id="cafe"
          :src="cafeImg"
          @mouseenter="hoverIn"
          @mouseleave="hoverOut"
          @click="openCafe">
      <img
          class="nav-img collection-img"
          id="collection"
          :src="collectionImg"
          @mouseenter="hoverIn"
          @mouseleave="hoverOut"
          @click="goRoute('/collection')">
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
    const cafeImg = ref(require('../assets/img/button/cafe1.png'))
    const drawImg = ref(require('../assets/img/button/gacha1.png'))
    const noticeImg = ref(require('../assets/img/button/notice1.png'))
    const collectionImg = ref(require('../assets/img/button/collection1.png'))

    const hasFooterList = [
      '/',
      '/storage',
      '/draw',
    ]

    hasFooter.value = hasFooterList.includes(useRoute().fullPath);

    const hoverIn = (event) => {
      switch (event.target.id) {
        case 'draw':
          drawImg.value = require('../assets/img/button/gacha2.png')
          break;
        case 'notice':
          noticeImg.value = require('../assets/img/button/notice2.png')
          break;
        case 'cafe':
          cafeImg.value = require('../assets/img/button/cafe2.png')
          break;
        case 'collection':
          collectionImg.value = require('../assets/img/button/collection2.png')
          break;
      }
    }
    const hoverOut = (event) => {
      switch (event.target.id) {
        case 'draw':
          drawImg.value = require('../assets/img/button/gacha1.png')
          break;
        case 'notice':
          noticeImg.value = require('../assets/img/button/notice1.png')
          break;
        case 'cafe':
          cafeImg.value = require('../assets/img/button/cafe1.png')
          break;
        case 'collection':
          collectionImg.value = require('../assets/img/button/collection1.png')
          break;
      }
    }

    const goRoute = (path) => {
      router.push(path)
    }

    const openCafe = () => {
      window.open('https://cafe.naver.com/s2dia', '_blank')
    }

    return {
      //변수
      router,
      hasFooter,
      cafeImg,
      drawImg,
      noticeImg,
      collectionImg,

      //함수
      hoverIn,
      hoverOut,
      goRoute,
      openCafe,

    }
  }
}
</script>

<style scoped>
.nav-img {
  position: absolute;
}

.draw-img {
  top: 54.96%;
  left: 16.971%;
  width: calc(26.51vw);
}
.notice-img {
  top: 44.565%;
  left: 41.64%;
  width: calc(18.70vw);
}
.cafe-img {
  top: 53.8%;
  left: 58.78%;
  width: calc(18.54vw);
}
.collection-img {
  top: 63.31%;
  left: 79.13%;
  width: calc(14.38vw);
}
</style>