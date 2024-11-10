<template>
  <div class="wrap bg-img">
    <audio ref="bgMusic" :src="require('@/assets/audio/draw_bk_music.mp3')" :muted="muted || modalMuted" @play="common.setVolume" loop autoplay></audio>
    <div class="draw-container">

      <img class="draw-banner" src="@/assets/img/배너무지개2.png" alt="가챠배너">
      <img class="rate-info" src="@/assets/img/button/확률정보.png" alt="확률정보" @click="common.openModal('확률정보', rateInfo)">
      <div style="display: flex; width: calc(27.111574556830032vw)">
        <div class="draw-btn-wrap">
          <img class="draw-btn" src="@/assets/img/button/1회%20뽑기.png" alt="단차" @click="getDraw(1)">
          <span class="material-wrap">
            <img src="@/assets/logo.png" alt="럽다 로고" style="width: calc(2.607vw)">
            <span class="draw-text">x 300</span>
          </span>
        </div>

        <div class="draw-btn-wrap">
          <img class="draw-btn" src="@/assets/img/button/10회%20뽑기.png" alt="10연차" @click="getDraw(10)">
          <span class="material-wrap">
            <img src="@/assets/logo.png" alt="럽다 로고" style="width: calc(2.607vw)">
            <span class="draw-text">x 3000</span>
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {router} from "@/router";
import {Swiper, SwiperSlide} from "swiper/vue";
import common from '@/js/common'

import 'swiper/css/bundle';
import {computed, onMounted, onUnmounted, ref} from "vue";
import store from "@/store";

export default {
  name: "MainPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const muted = computed(() => {
      return store.state.muted;
    })
    const modalMuted = computed(() => {
      return store.state.modalMuted;
    })
    const bgMusic = ref(null);

    let isLoading = false
    let pullCount = ref(localStorage.getItem('tCount') === undefined || localStorage.getItem('tCount') === null ? 0 : localStorage.getItem('tCount'))
    const rateInfo = '확률 정보에 대한 안내문입니다.<br>' +
        '<span style="color: #03f0fe">R</span> : 88%<br>' +
        '<span style="color: #fe0388">SR</span> : 10%<br>' +
        '<span style="color: #fedf03">SSR</span> : 2%<br>' +
        '<br>' +
        '본 컨텐츠의 편지들은 등급별로 중요도의 차이는 없으며<br>' +
        '컨텐츠로써의 연출임을 안내드립니다.<br>' +
        '여러분들 편지 모두 소중하며 도움에 감사드립니다.';

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

      result.forEach((item, index) => {
        common.checkNewItem(item)
        common.unlockItem(item)
      })

      localStorage.setItem('result', JSON.stringify(result))

      store.commit('setCurrentPlayTime', bgMusic.value.currentTime)

      router.push('effect')

      isLoading = false
    }

    onMounted(() => {
      if(store.state.currentPlayTime !== 0) {
        bgMusic.value.currentTime = store.state.currentPlayTime
        store.commit('setCurrentPlayTime', 0)
      }
    })

    return {
      // 변수
      pullCount,
      rateInfo,
      muted,
      modalMuted,
      bgMusic,

      // 메서드
      getDraw,
      common,
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