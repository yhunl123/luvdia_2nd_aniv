<template>
  <div class="wrap bg-img">
    <div class="contents">

    </div>
  </div>
  <audio id="bgMusic" :src="require('@/assets/audio/main_bk_music.mp3')" loop autoplay @play="common.setVolume" :muted="muted || modalMuted"></audio>
  <Footer></Footer>
</template>

<script>
  import store from "@/store";
  import {computed} from "vue";
  import Modal from "@/components/Modal.vue";
  import Footer from "@/components/Footer.vue";
  import common from "@/js/common";

  export default {
    name: "MainPage",
    components: {
      Modal,
      Footer
    },
    setup() {

      const muted = computed(() => {
        return store.state.muted;
      })
      const modalMuted = computed(() => {
        return store.state.modalMuted;
      })

      const popClose = () => {
        store.commit('setModalIsOpen', false)
      }

      return {
        // 변수
        muted,
        modalMuted,

        // 메서드
        popClose,
        common,

      }
    }
  }
</script>

<style scoped>
.bg-img {
  width: 100%;
  height: 100vh;
  background: url(../assets/img/background/mainBkImg.png) no-repeat center;
  background-size: cover;
  position: absolute;
}
</style>
