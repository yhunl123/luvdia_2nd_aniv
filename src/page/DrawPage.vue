<template>
  <div class="wrap bg-img">
    <div class="draw-container">
      <h1 class="sub-title">가챠 페이지</h1>

      <div class="gacha-buttons">
        <button class="confirm-btn-blue" id="single-pull" @click="getDraw(1)">1회 뽑기</button>
        <button class="confirm-btn-blue" id="multi-pull" @click="getDraw(10)">10회 뽑기</button>
        <button class="confirm-btn-blue" id="select-item" :style="{'inline-block': pullCount > 100}">아이템 선택</button>
      </div>

      <div id="counter" class="count-text">
        현재 뽑기 횟수: <span id="pull-count">{{ pullCount }}</span>회
      </div>
    </div>

  </div>
</template>

<script>
import {router} from "@/router";
import {Swiper, SwiperSlide} from "swiper/vue";
import common from '@/js/common'

import 'swiper/css/bundle';
import {ref} from "vue";
import store from "@/store";

export default {
  name: "MainPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let isLoading = false
    let pullCount = ref(localStorage.getItem('tCount') === undefined || localStorage.getItem('tCount') === null ? 0 : localStorage.getItem('tCount'))

    // 스와이퍼
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    // 스와이퍼

    const getDraw = (num) => {
      if(isLoading) {
        return;
      }

      isLoading = true

      localStorage.setItem('gCount', num)
      localStorage.setItem('tCount', Number(pullCount.value) + num)

      let mPoint = Number(store.state.mPoint) + Number(num)
      localStorage.setItem('mPoint', mPoint)
      store.commit('setMPoint', mPoint)

      const result = common.draw(num)

      localStorage.setItem('result', JSON.stringify(result))

      result.forEach((item, index) => {
        common.unlockItem(item)
      })

      router.push('effect')

      isLoading = false
    }

    return {
      // 변수
      pullCount,

      // 메서드
      getDraw,
      onSwiper,
      onSlideChange,

    }
  }
}
</script>

<style scoped>
.bg-img {
  width: 100%;
  height: 100vh;
  background: url(../assets/img/background/drawBkImg.png) no-repeat center;
  background-size: cover;
  position: absolute;
}
</style>