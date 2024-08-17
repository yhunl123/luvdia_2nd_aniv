<template>
  <div class="wrap">
    <div class="bg-img"></div>
    <div class="contents">
      <button class="b1" @click="pass1++"><img src="../assets/img/button/캐시상점.png"></button>
      <button class="b2" @click="pass2++"><img src="../assets/img/button/상점.png"></button>
      <button class="b3" id="naverCafeBtn" onclick="window.open('https://cafe.naver.com/s2dia', '_blank')"><img src="../assets/img/button/공식카페.png"></button>
      <button class="b4" @click="passProc"><img src="../assets/img/button/팬심박스.png"></button>

      <button class="b5" @click="pass3++"><img src="../assets/img/button/3Y.png"></button>
      <button class="b6" @click="pass4++"><img src="../assets/img/button/오버더월.png"></button>
    </div>
  </div>
</template>

<script>
  import {ref} from "vue";
  import store from "@/store";

  export default {
    name: "MainPage",
    components: {
    },
    setup() {
      const pass1 = ref(0)
      const pass2 = ref(0)
      const pass3 = ref(0)
      const pass4 = ref(0)

      const passProc = () => {
        console.log(pass1.value, pass2.value, pass3.value, pass4.value)
      }

      const initLayout = () => {
        store.commit('setIsHeader', 'Y')
        store.commit('setIsFooter', 'Y')
      }


      initLayout();

      return {
        // 변수
        pass1,
        pass2,
        pass3,
        pass4,

        // 메서드
        passProc,

      }
    }
  }
</script>

<style scoped>
.bg-img {
  width: 100%;
  height: 100vh;
  background: url(../assets/img/background/124.png) no-repeat center;
  background-size: cover;
  position: absolute;
}

.contents {
  position: absolute;
}

.contents button {
  border: none;
  background: none;
}

.contents button.b1 {
  z-index: 2;
  position: fixed;
  left: 29%;
  top: 50%
}
.contents button.b1 img{
}

.contents button.b2 {
  position: fixed;
  left: 28%;
  top: 54%
}
.contents button.b2 img{
}

.contents button.b3 {
  position: fixed;
  left: 27.3%;
  top: 65%
}
.contents button.b3 img{
}

.contents button.b4 {
  position: fixed;
  left: 27.3%;
  top: 73%
}
.contents button.b4 img{
}

.contents button.b5 {
  position: fixed;
  right: 28%;
  top: 54%
}
.contents button.b5 img{
}

.contents button.b6 {
  position: fixed;
  right: 27.3%;
  top: 65%
}
.contents button.b6 img{
}


</style>