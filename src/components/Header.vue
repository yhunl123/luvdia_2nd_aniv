<template>
  <img class="home-btn" src="../assets/img/icon/free-icon-home-5946261.png" v-if="hasHomeBtn" @click="router.push('/')">
  <div class="header" v-if="hasHeader">
    <div class="topnav">
      <div class="goods-wrap">
        <img src="../assets/logo.png"/>
      </div>
      <div class="goods-wrap-txt">
        <span>221113</span>
      </div>

      <div class="goods-wrap">
        <img src="@/assets/img/icon/마일리지2.png"/>
      </div>
      <div class="goods-wrap-txt">
        <span>{{ mPoint }}</span>
      </div>
    </div>
  </div>

  <div class="audio-control-wrap" v-if="hasHeader">
    <img src="../assets/img/icon/free-icon-speaker-189650.png" alt="음소거버튼" v-if="!muted && !modalMuted" @click="toggleMute(true)">
    <img src="../assets/img/icon/free-icon-mute-189653.png" alt="음소거해제버튼" v-if="muted || modalMuted" @click="toggleMute(false)">
  </div>

  <Modal></Modal>
</template>

<script>
import {router} from "@/router";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import store from "@/store";
import Modal from "@/components/Modal.vue";

export default {
  name: "Header",
  components: {
    Modal
  },
  props: {

  },
  setup() {
    const hasHeader = ref(true)
    const hasHomeBtn = ref(true)

    const hasHeaderList = [
      '/',
      '/collection',
      '/draw',
    ]

    const hasHomeList = [
      '/collection',
      '/draw',
    ]

    const muted = computed(() => {
      return store.state.muted;
    })

    const modalMuted = computed(() => {
      return store.state.modalMuted;
    })

    const mPoint = ref(localStorage.getItem('mPoint') ? localStorage.getItem('mPoint') : 0)

    const toggleMute = (flag) => {
      store.commit('setMuted', flag)
    }

    hasHeader.value = hasHeaderList.includes(useRoute().fullPath);
    hasHomeBtn.value = hasHomeList.includes(useRoute().fullPath);
    store.commit('setMPoint', mPoint)

    return {
      //변수
      mPoint,
      hasHeader,
      hasHomeBtn,
      router,
      muted,
      modalMuted,

      //함수
      toggleMute,

    }
  },
}
</script>