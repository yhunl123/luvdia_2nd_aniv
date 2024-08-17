<template>
  <div class="wrap">
    <div class="bg-img">
    </div>
    <div class="container">

      <h1>가챠 페이지</h1>

      <div class="gacha-buttons">
        <button id="single-pull" @click="gachaPage(1)">1회 뽑기</button>
        <button id="multi-pull" @click="gachaPage(10)">10회 뽑기</button>
        <button id="select-item" :style="{'inline-block': pullCount > 100}">아이템 선택</button>
      </div>

      <div id="counter" class="count-text">
        현재 뽑기 횟수: <span id="pull-count">{{ pullCount }}</span>회
      </div>
    </div>
    <div class="comp">
      <swiper
          class="swiper"
          :slides-per-view="1"
          :slides-per-group="1"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          loop
          autoplay
          direction="horizontal"
      >
        <swiper-slide>
          <img class="swipe-img" src="@/assets/img/메이드%20메이%20투명.png" alt="" style="">
        </swiper-slide>
        <swiper-slide>
          <img class="swipe-img" src="@/assets/img/힘든%20양메이.png" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import {router} from "@/router";
import {Swiper, SwiperSlide} from "swiper/vue";

import 'swiper/css/bundle';
import {ref} from "vue";

export default {
  name: "MainPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let pullCount = ref(localStorage.getItem('tCount') === undefined || localStorage.getItem('tCount') === null ? 0 : localStorage.getItem('tCount'))

    const gachaPage = (num) => {
      localStorage.setItem('gCount', num)
      localStorage.setItem('tCount', Number(pullCount.value) + num)

      router.push('effect')
    }

    // 스와이퍼
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    // 스와이퍼

    return {
      // 변수
      pullCount,

      // 메서드
      gachaPage,
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
  background: url(../assets/img/background/1.png) no-repeat center;
  background-size: cover;
  position: absolute;
}

.container {
  padding: 30px;
  width: 100%;
  max-width: 500px;
  position: absolute;
  z-index: 5;
  left: 35.7%;
  top: 60%;
}

.comp {
  position: relative;
  width: 2000px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.count-text {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.gacha-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

button {
  padding: 15px 25px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
  background-image: linear-gradient(to right, #0099ff, #33ccff);
  color: white;
  box-shadow: 0px 5px 10px rgba(0, 153, 255, 0.5);
}

button:hover {
  background-image: linear-gradient(to right, #0066cc, #0099ff);
}

#select-item {
  background-image: linear-gradient(to right, #ff9933, #ffcc66);
  display: none;
}

#counter {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.swipe-img {
  width: 500px;
}

.big-banner {
  position: absolute;
  top: 0;
  left: 0;
}
</style>